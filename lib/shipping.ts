import type { Product } from "@/lib/products";

export type ShippingRate = {
  carrier: string;
  service: string;
  amount: number;
  estimatedDays: number | null;
};

const ORIGIN_ZIP = process.env.SHIPPING_ORIGIN_ZIP ?? "85225";

type ShippoRate = {
  provider: string;
  servicelevel: { name: string };
  amount: string;
  estimated_days: number | null;
};

type EasyPostRate = {
  carrier: string;
  service: string;
  rate: string;
  delivery_days: number | null;
};

export async function getShippingRates(
  product: Product,
  quantity: number,
  destinationZip: string
): Promise<ShippingRate[]> {
  const provider = (process.env.SHIPPING_PROVIDER ?? "auto").toLowerCase();

  if (provider === "shippo" || (provider === "auto" && process.env.SHIPPO_API_KEY)) {
    return await getShippoRates(product, quantity, destinationZip);
  }
  if (provider === "easypost" || (provider === "auto" && process.env.EASYPOST_API_KEY)) {
    return await getEasyPostRates(product, quantity, destinationZip);
  }

  return mockRates(product, quantity, destinationZip);
}

async function getShippoRates(
  product: Product,
  quantity: number,
  destinationZip: string
): Promise<ShippingRate[]> {
  const apiKey = process.env.SHIPPO_API_KEY;
  if (!apiKey) throw new Error("SHIPPO_API_KEY is not configured.");

  const shipment = {
    address_from: {
      name: "A&E Resaw",
      street1: "Workshop",
      city: "Chandler",
      state: "AZ",
      zip: ORIGIN_ZIP,
      country: "US"
    },
    address_to: {
      name: "Customer",
      street1: "Delivery",
      city: "",
      state: "",
      zip: destinationZip,
      country: "US"
    },
    parcels: [
      {
        length: String(product.dimensions.length),
        width: String(product.dimensions.width),
        height: String(product.dimensions.height),
        distance_unit: "in",
        weight: String(product.weightLb * quantity),
        mass_unit: "lb"
      }
    ],
    async: false
  };

  const res = await fetch("https://api.goshippo.com/shipments/", {
    method: "POST",
    headers: {
      Authorization: `ShippoToken ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(shipment)
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Shippo error: ${res.status} ${text.slice(0, 200)}`);
  }

  const data = (await res.json()) as { rates: ShippoRate[] };
  return data.rates
    .map((r) => ({
      carrier: r.provider,
      service: r.servicelevel.name,
      amount: Number(r.amount),
      estimatedDays: r.estimated_days
    }))
    .sort((a, b) => a.amount - b.amount)
    .slice(0, 3);
}

async function getEasyPostRates(
  product: Product,
  quantity: number,
  destinationZip: string
): Promise<ShippingRate[]> {
  const apiKey = process.env.EASYPOST_API_KEY;
  if (!apiKey) throw new Error("EASYPOST_API_KEY is not configured.");

  const auth = "Basic " + Buffer.from(`${apiKey}:`).toString("base64");
  const params = new URLSearchParams();
  params.append("shipment[to_address][zip]", destinationZip);
  params.append("shipment[to_address][country]", "US");
  params.append("shipment[from_address][zip]", ORIGIN_ZIP);
  params.append("shipment[from_address][country]", "US");
  params.append("shipment[parcel][length]", String(product.dimensions.length));
  params.append("shipment[parcel][width]", String(product.dimensions.width));
  params.append("shipment[parcel][height]", String(product.dimensions.height));
  params.append("shipment[parcel][weight]", String(product.weightLb * quantity * 16)); // ounces

  const res = await fetch("https://api.easypost.com/v2/shipments", {
    method: "POST",
    headers: {
      Authorization: auth,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: params.toString()
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`EasyPost error: ${res.status} ${text.slice(0, 200)}`);
  }

  const data = (await res.json()) as { rates: EasyPostRate[] };
  return data.rates
    .map((r) => ({
      carrier: r.carrier,
      service: r.service,
      amount: Number(r.rate),
      estimatedDays: r.delivery_days
    }))
    .sort((a, b) => a.amount - b.amount)
    .slice(0, 3);
}

function mockRates(product: Product, quantity: number, destinationZip: string): ShippingRate[] {
  const totalWeight = product.weightLb * quantity;
  const distanceFactor = Math.abs(parseInt(destinationZip.slice(0, 3), 10) - 852) / 50 + 1;
  const base = totalWeight * 1.4 * distanceFactor;
  return [
    {
      carrier: "USPS",
      service: "Ground",
      amount: Math.round((base + 8) * 100) / 100,
      estimatedDays: 5
    },
    {
      carrier: "UPS",
      service: "Priority",
      amount: Math.round((base + 22) * 100) / 100,
      estimatedDays: 3
    },
    {
      carrier: "FedEx",
      service: "Express",
      amount: Math.round((base + 48) * 100) / 100,
      estimatedDays: 1
    }
  ];
}
