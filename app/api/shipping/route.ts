import { NextResponse } from "next/server";
import { getProductBySlug } from "@/lib/products";
import { getShippingRates } from "@/lib/shipping";

export const runtime = "nodejs";

type Body = {
  destinationZip?: string;
  productSlug?: string;
  quantity?: number;
};

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { destinationZip, productSlug, quantity } = body;

  if (!destinationZip || !/^\d{5}(-\d{4})?$/.test(destinationZip)) {
    return NextResponse.json({ error: "Invalid destination ZIP code." }, { status: 400 });
  }
  if (!productSlug) {
    return NextResponse.json({ error: "Product is required." }, { status: 400 });
  }

  const product = getProductBySlug(productSlug);
  if (!product) {
    return NextResponse.json({ error: "Product not found." }, { status: 404 });
  }

  const qty = Number.isInteger(quantity) && quantity! > 0 ? quantity! : 1;

  try {
    const rates = await getShippingRates(product, qty, destinationZip);
    return NextResponse.json({ rates });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Unable to retrieve shipping rates.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
