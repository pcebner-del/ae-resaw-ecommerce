import { NextResponse } from "next/server";
import { getProductBySlug, priceFor, type Variant } from "@/lib/products";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";

type Body = {
  slug?: string;
  variant?: Variant;
  quantity?: number;
};

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { slug, variant, quantity } = body;
  if (!slug || (variant !== "guitar" && variant !== "bass")) {
    return NextResponse.json({ error: "Missing or invalid product selection." }, { status: 400 });
  }

  const qty = Number.isInteger(quantity) && quantity! > 0 ? quantity! : 1;
  if (qty > 10) {
    return NextResponse.json({ error: "Quantity exceeds maximum (10)." }, { status: 400 });
  }

  const product = getProductBySlug(slug);
  if (!product) {
    return NextResponse.json({ error: "Product not found." }, { status: 404 });
  }
  if (!product.inStock) {
    return NextResponse.json({ error: "This piece is currently reserved." }, { status: 409 });
  }

  const unitPrice = priceFor(product, variant);
  const variantLabel = variant === "guitar" ? "Guitar Body" : "Bass Body";

  const origin =
    req.headers.get("origin") ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    "http://localhost:3000";

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: qty,
          price_data: {
            currency: "usd",
            unit_amount: Math.round(unitPrice * 100),
            product_data: {
              name: `${product.name} — ${variantLabel}`,
              description: product.woodSpecies,
              metadata: {
                productSlug: product.slug,
                variant
              }
            }
          }
        }
      ],
      shipping_address_collection: { allowed_countries: ["US", "CA"] },
      metadata: {
        productSlug: product.slug,
        variant,
        quantity: String(qty)
      },
      success_url: `${origin}/order-confirmed?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/products/${product.slug}`
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Unable to create checkout session.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
