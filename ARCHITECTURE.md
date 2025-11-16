# Galaxy CarHire Architecture

## Overview
- **Frontend** (`/frontend`): Next.js App Router, TypeScript (strict), TailwindCSS, shadcn-style primitives (Radix). Handles all pages, UI, booking forms, Storybook, Jest, and Playwright tests.
- **Common Types** (`/common/types`): Shared domain models (`Car`, `Service`, `Testimonial`, etc.) imported into the frontend via path alias.
- **Assets**: Vehicle imagery stored in `frontend/public/assets/cars`.

## Frontend Structure
```
frontend/
  src/
    app/                # App Router routes + API (e.g., /fleet, /services, /contact, /api/inquiry)
    components/         # UI primitives, layout, sections, forms, providers
    data/               # Fleet/services/testimonial copy and feature dictionaries
    lib/                # Utils (SEO, analytics, constants, notifications)
    theme/              # Tokens & design constants
  tests/                # Jest unit tests
  e2e/                  # Playwright specs
  .storybook/           # Storybook config & stories
```

## Key Flows
1. **Booking / Inquiry**
   - Forms (`BookingForm`, `ContactForm`) validate with Zod + React Hook Form.
   - Submits to `/api/inquiry` (Next.js route) which triggers `sendInquiryEmail` (Resend API) and returns 201.
   - WhatsApp CTAs generated via helper for instant chat escalation.
2. **Fleet Data**
   - `cars.ts` defines full catalog using common types; consumed by pages, filters, gallery, and schema markup.
   - Dynamic route `/fleet/[slug]` renders gallery, pricing, booking form, accordion terms, and JSON-LD.
3. **Services & Contact**
   - Service cards derive from `services.ts`.
   - Contact page surfaces `faqs.ts`, map embed, and WhatsApp/phone constants.

## Styling & Theming
- Tailwind config extends custom colors (black/white/silver palette), spacing, typography, and animation tokens.
- `theme/tokens.ts` centralizes design primitives for reference.
- Custom `ThemeProvider` toggles `data-theme` with localStorage; `ThemeToggle` component for UI switch.

## Tooling
- **Testing**: Jest + Testing Library (`npm test`) for unit tests; Playwright (`npm run e2e`) for smoke flows.
- **Storybook**: `npm run storybook` to preview reusable sections/cards.
- **CI**: `npm run ci` shortcut (lint, test, build); GitHub Action provided to run on pushes.

