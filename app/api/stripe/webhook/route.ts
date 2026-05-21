import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "Webhook secret not configured." }, { status: 500 });
  }

  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing Stripe signature." }, { status: 400 });
  }

  const payload = await req.text();

  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(payload, signature, secret);
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Invalid signature.";
    return NextResponse.json({ error: `Webhook verification failed: ${msg}` }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const meta = session.metadata ?? {};
      console.log("[stripe] checkout.session.completed", {
        sessionId: session.id,
        productSlug: meta.productSlug,
        variant: meta.variant,
        quantity: meta.quantity,
        customerEmail: session.customer_details?.email
      });
      break;
    }
    case "checkout.session.expired":
    case "payment_intent.payment_failed":
      console.log(`[stripe] ${event.type}`, event.data.object);
      break;
    default:
      // Ignore unhandled event types.
      break;
  }

  return NextResponse.json({ received: true });
}
