# A&E Resaw - Site Overview

## Design Philosophy

**Luxury Fashion Aesthetic** - Inspired by high-end brands like Hermès, Bottega Veneta, and Saint Laurent

### Visual Elements
- **Color Palette:** Predominantly white/off-white with deep charcoal/matte black
- **Typography:** Cormorant Garamond (thin serif headings) + Inter (clean sans-serif body)
- **Layout:** Generous whitespace, minimal color, high contrast
- **Vibe:** Editorial, refined, boutique brand experience

## Page-by-Page Breakdown

### 1. Homepage (`/`)
**Purpose:** First impression, brand introduction

**Sections:**
- Full-screen hero with "A&E RESAW" title
- Tagline: "Quality blanks made in Phoenix, Arizona."
- Brand statement section with centered text
- Two featured categories (Guitar Bodies / Bass Bodies) in grid layout
- Each category has placeholder + description + link to products

**CTA:** "View Collection" button → Products page

---

### 2. Products Page (`/products`)
**Purpose:** Browse all available products

**Layout:**
- Page header: "Collection" with subtitle
- 3-column grid on desktop, 1-column on mobile
- 6 products total:
  - Premium Mahogany Body ($125.00)
  - Figured Maple Body ($150.00)
  - Ash Body Blank ($110.00)
  - Alder Bass Body ($135.00)
  - Walnut Bass Body ($165.00)
  - Mahogany Bass Body ($140.00)

**Product Cards:**
- Square placeholder image (shows wood type on hover)
- Product name
- Category (Guitar Body / Bass Body)
- Price

---

### 3. Product Detail Page (`/products/[id]`)
**Purpose:** Detailed view with purchase options

**Left Column - Image Gallery:**
- Main image display area
- Shows current view: Top / Bottom / Side Profile
- 3 thumbnail navigation buttons below
- Placeholders currently (ready for real photos)

**Right Column - Product Info:**
1. **Header Section**
   - Category badge
   - Product name (large serif)
   - Price

2. **Description**
   - Detailed product copy
   - Highlighted wood characteristics

3. **Specifications Table**
   - Wood Type
   - Finish
   - Category

4. **Size Selection**
   - Two category buttons: Guitar Body / Bass Body
   - Dropdown for size options (currently "Size options TBD")

5. **Add to Cart Button**
   - Full-width charcoal button
   - Currently shows placeholder alert

6. **Shipping Calculator**
   - Package type selector (Standard / Oversized)
   - ZIP code input field
   - "Calculate" button
   - Shows mock shipping rates when calculated

---

### 4. About Page (`/about`)
**Purpose:** Brand story and craftsmanship

**Sections:**
1. **Page Header**
   - Large "About" title
   - "Crafted in Phoenix, Arizona" subtitle

2. **Our Story**
   - Company founding principles
   - Phoenix location benefits
   - Quality commitment

3. **Our Process**
   - Material sourcing
   - Cutting process (CNC + hand-finishing)
   - Hybrid approach explanation

4. **Phoenix Workshop**
   - Climate advantages
   - Storage conditions
   - Community contribution

5. **Quality Commitment**
   - Inspection process
   - Satisfaction guarantee
   - Partnership promise

**Tone:** Professional, confident, craftsmanship-focused

---

### 5. Contact Page (`/contact`)
**Purpose:** Customer communication

**Layout:** Two-column grid

**Left Column - Contact Info:**
- "Get in Touch" header
- Email: info@aeresaw.com
- Location: Phoenix, Arizona
- Hours: Mon-Fri 9AM-5PM MST
- Custom orders information

**Right Column - Contact Form:**
- Name field
- Email field
- Subject field
- Message textarea
- "Send Message" button
- Form validation included
- Shows confirmation on submit

---

## Global Components

### Header (All Pages)
- Fixed position at top
- "A&E RESAW" logo/wordmark (links to home)
- Navigation: Products | About | Contact
- Mobile hamburger menu
- White background with subtle backdrop blur

### Footer (All Pages)
- Charcoal background, white text
- Three columns:
  1. Brand name + tagline
  2. Navigation links
  3. Contact info (Phoenix, Arizona + email)
- Copyright notice at bottom
- Responsive: stacks on mobile

---

## Interactive Features

### Product Gallery
- Click thumbnails to change main image
- Smooth transitions
- Clear labels for each view

### Size Category Toggle
- Switch between Guitar Body / Bass Body options
- Highlighted selection state
- Disabled button if category not available

### Shipping Calculator
- Package type selection
- ZIP code validation (5 digits only)
- Loading state during calculation
- Results display with service, price, and estimated days

### Contact Form
- Required field validation
- Success message on submit
- Auto-clear after 3 seconds

---

## Responsive Behavior

### Desktop (1024px+)
- Full multi-column layouts
- Generous whitespace
- Large typography

### Tablet (768px - 1023px)
- 2-column grids
- Adjusted spacing
- Readable type sizes

### Mobile (< 768px)
- Single column layout
- Hamburger navigation
- Touch-optimized buttons
- Stacked content

---

## Current Placeholders (To Be Replaced)

1. **Product Images**
   - Location: All product cards and detail pages
   - Currently: Colored backgrounds with text labels
   - Replace with: Actual photography (top/bottom/side views)

2. **Size Options**
   - Location: Product detail size dropdown
   - Currently: "Size options TBD"
   - Replace with: Actual measurements

3. **Shipping Rates**
   - Location: Product detail shipping calculator
   - Currently: Mock data
   - Replace with: Real API integration

4. **Stripe Checkout**
   - Location: Add to Cart functionality
   - Currently: Alert message
   - Activate with: Stripe test keys in environment variables

---

## Color Reference

```
Primary Background:  #FFFFFF (white)
Secondary Background: #F9F7F4 (cream)
Primary Text: #2B2B2B (charcoal)
Accent/Borders: rgba(43, 43, 43, 0.1-0.7) (charcoal opacity variants)
Hover States: Full charcoal (#2B2B2B)
```

## Typography Scale

```
Page Titles: 5xl-7xl (3rem-4.5rem) - Cormorant Garamond
Section Headings: 2xl-3xl (1.5rem-1.875rem) - Cormorant Garamond
Body Text: base-lg (1rem-1.125rem) - Inter
Labels/Buttons: sm (0.875rem) - Inter, uppercase, wide tracking
```

---

## Files Modified/Created

### Core Pages
- `app/page.tsx` - Homepage
- `app/products/page.tsx` - Product listing
- `app/products/[id]/page.tsx` - Product detail routing
- `app/about/page.tsx` - About page
- `app/contact/page.tsx` - Contact page

### Components
- `components/Header.tsx` - Site navigation
- `components/Footer.tsx` - Site footer
- `components/ProductDetail.tsx` - Product detail view
- `components/ImageGallery.tsx` - 3-image gallery
- `components/ShippingCalculator.tsx` - Shipping estimator

### Data & Utils
- `lib/products.ts` - Product data structure & mock products
- `lib/stripe.ts` - Stripe client configuration

### API Routes
- `app/api/checkout/route.ts` - Stripe checkout endpoint

### Config
- `app/globals.css` - Global styles & Tailwind directives
- `tailwind.config.ts` - Tailwind configuration
- `tsconfig.json` - TypeScript configuration
- `next.config.js` - Next.js configuration

---

**Ready for Review:** https://workspace-omega-pearl.vercel.app
