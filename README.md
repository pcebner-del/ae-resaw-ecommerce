# A&E Resaw

E-commerce site for A&E Resaw — a small Phoenix, Arizona workshop producing
hand-resawn guitar and bass body blanks from selected tonewoods.

Built with Next.js 14 (App Router), Tailwind CSS, Stripe Checkout, and a
pluggable Shippo / EasyPost shipping rate calculator. The design is editorial
and restrained — near-black background, warm off-white text, an oxidized
copper accent, paired serif and refined sans typography, asymmetric grids.

## Stack

- **Framework:** Next.js 14 (App Router, TypeScript, React 18)
- **Styling:** Tailwind CSS with custom design tokens (no UI libraries)
- **Payments:** Stripe Checkout Sessions + webhook for `checkout.session.completed`
- **Shipping:** Shippo or EasyPost (auto-detected) with a built-in mock estimator
- **Contact:** Resend transactional email (falls back to log if unconfigured)
- **Type fonts:** Cormorant Garamond + DM Sans via `next/font/google`

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env.local
# Then fill in keys (see `.env.example` for descriptions)

# 3. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Local Stripe webhook

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

Copy the printed `whsec_…` value into `STRIPE_WEBHOOK_SECRET` in `.env.local`.

### Shipping

Set `SHIPPING_PROVIDER` to one of:

- `shippo` — uses `SHIPPO_API_KEY`
- `easypost` — uses `EASYPOST_API_KEY`
- `auto` — picks whichever key is present
- (empty / neither key set) — uses the built-in mock rate estimator so the UI
  remains functional in development.

Origin ZIP defaults to `85225` (Chandler, AZ) and can be overridden with
`SHIPPING_ORIGIN_ZIP`.

## Project Structure

```
app/                    Next.js App Router pages and API routes
  page.tsx              Homepage
  products/             Collection grid + dynamic product detail
  about/                Atelier page
  contact/              Inquiry form
  order-confirmed/      Stripe success page
  not-found.tsx         404
  api/
    stripe/checkout/    Creates a Stripe Checkout Session
    stripe/webhook/     Verifies & handles checkout.session.completed
    shipping/           Returns 2–3 shipping rate options
    contact/            Sends contact-form submissions via Resend

components/             Hand-built UI primitives (no third-party UI libs)
lib/                    Domain helpers (products, stripe, shipping)
data/products.json      Product catalogue
public/images/          Editorial and product imagery (SVG placeholders)
scripts/                One-off scripts (placeholder image generation)
```

## Adding a New Product

Edit `data/products.json` and add an entry of the form:

```json
{
  "id": "07",
  "slug": "padauk",
  "name": "African Padauk",
  "woodSpecies": "Pterocarpus soyauxii",
  "description": "Short paragraph (1–3 sentences).",
  "images": {
    "top": "/images/products/padauk-top.jpg",
    "bottom": "/images/products/padauk-bottom.jpg",
    "sideProfile": "/images/products/padauk-side.jpg"
  },
  "guitarBodyPrice": 325,
  "bassBodyPrice": 425,
  "weightLb": 10,
  "dimensions": { "length": 21, "width": 15, "height": 2.25 },
  "inStock": true
}
```

Drop the three product images into `public/images/products/`. Recommended
dimensions: 2400 × 1800 px, sRGB JPG or WebP. The placeholder SVGs can be
regenerated with `node scripts/generate-placeholders.mjs`.

The `[slug]` route is statically generated at build time via
`generateStaticParams`, so a rebuild (`npm run build`) is required to publish.

## Environment Variables

See `.env.example` for the complete list. Required for full functionality:

| Variable | Required for | Notes |
| --- | --- | --- |
| `STRIPE_SECRET_KEY` | Checkout | Test or live key |
| `STRIPE_WEBHOOK_SECRET` | Webhook verification | From `stripe listen` or Dashboard |
| `SHIPPO_API_KEY` *or* `EASYPOST_API_KEY` | Real shipping rates | Either works; mock used if neither |
| `RESEND_API_KEY` + `CONTACT_TO_EMAIL` | Contact form delivery | Falls back to log if missing |
| `NEXT_PUBLIC_SITE_URL` | Webhook redirects | Set to your deployed origin |

Sensitive keys must never be committed.

## Design Notes

- **Palette:** `ink` `#0a0a08` · `bone` `#f5f2ec` · `ash` `#8a857a` ·
  `copper` `#a86b3c` (accent, used for hover and active states only).
- **Type:** Display serif for headings (Cormorant Garamond), refined sans
  for UI and body (DM Sans). All caps + 0.22em letter-spacing for labels.
- **Motion:** `IntersectionObserver`-driven fade-up on scroll. Slow
  (700–1000ms) editorial easing (`cubic-bezier(0.22, 1, 0.36, 1)`). No
  bouncy or spring motion.
- **No icons, no emoji, no gradients that suggest SaaS.** Hairlines and
  whitespace do the structural work.

## Scripts

```bash
npm run dev         # next dev
npm run build       # next build
npm run start       # next start (production)
npm run lint        # next lint
npm run typecheck   # tsc --noEmit
```

## License

MIT — see `LICENSE`.
