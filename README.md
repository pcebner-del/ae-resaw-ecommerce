# A&E Resaw E-Commerce Site

Premium e-commerce website for A&E Resaw, a custom guitar body company based in Phoenix, Arizona.

## Design Philosophy

Luxury fashion brand aesthetic inspired by Hermès, Bottega Veneta, and Saint Laurent:
- Minimalist, editorial, high-end
- Predominantly white/off-white backgrounds with deep charcoal/matte black accents
- Typography-driven with generous whitespace
- No emojis, boutique brand experience

## Tech Stack

- **Framework**: Next.js 14 with React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Payment**: Stripe integration
- **Fonts**: Cormorant Garamond (serif headings) + Inter (sans-serif body)

## Features

- Responsive, mobile-first design
- Product catalog with category filtering
- Product detail pages with 3-image galleries (Top, Bottom, Side Profile)
- Dual size categories (Guitar Body / Bass Body)
- Shipping calculator with ZIP code input
- Stripe checkout integration
- Clean, modular component architecture

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Stripe account (test keys for development)

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file with your Stripe keys:

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key
STRIPE_SECRET_KEY=sk_test_your_key
STRIPE_WEBHOOK_SECRET=whsec_your_secret
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
ae-resaw/
├── app/
│   ├── products/
│   │   ├── [id]/
│   │   │   └── page.tsx       # Product detail page
│   │   └── page.tsx           # Products listing
│   ├── about/
│   │   └── page.tsx           # About page
│   ├── contact/
│   │   └── page.tsx           # Contact form
│   ├── api/
│   │   └── checkout/
│   │       └── route.ts       # Stripe checkout API
│   ├── layout.tsx             # Root layout with header/footer
│   ├── page.tsx               # Homepage
│   └── globals.css            # Global styles
├── components/
│   ├── Header.tsx             # Navigation header
│   ├── Footer.tsx             # Site footer
│   ├── ProductDetail.tsx      # Product detail component
│   ├── ImageGallery.tsx       # 3-image product gallery
│   └── ShippingCalculator.tsx # ZIP code shipping estimator
├── lib/
│   ├── products.ts            # Product data and utilities
│   └── stripe.ts              # Stripe client configuration
└── public/
    └── images/                # Product images
```

## Current Status

### Implemented
✅ Complete page structure (Home, Products, Product Detail, About, Contact)
✅ Luxury brand aesthetic with refined typography
✅ Responsive design (mobile-first)
✅ Product gallery with 3-view navigation
✅ Dual size category selection (Guitar/Bass)
✅ Shipping calculator UI
✅ Stripe checkout API route
✅ Mock product data structure

### Placeholder Content
⏳ Product photography (currently showing labeled placeholders)
⏳ Actual size measurements (showing "Size options TBD")
⏳ Real shipping rate API integration (using mock rates)
⏳ Stripe test keys (need to be added to .env.local)

## Next Steps

1. **Add Stripe Keys**: Update `.env.local` with real test keys from your Stripe dashboard
2. **Product Photography**: Replace placeholder images with actual top/bottom/side photos
3. **Size Specifications**: Define exact measurements for Guitar Body and Bass Body options
4. **Shipping Integration**: Connect to real shipping API (USPS, UPS, FedEx)
5. **Content Review**: Add real product descriptions, pricing, and specifications
6. **Testing**: Test checkout flow end-to-end with Stripe test cards

## Deployment

This project is ready to deploy to Vercel:

```bash
vercel
```

Make sure to add environment variables in the Vercel dashboard.

## Support

For questions about this codebase, contact the development team.
