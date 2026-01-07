# Fleur BNB Stays

## Overview
A luxury vacation rental website built with Next.js 16, React 19, and Tailwind CSS 4. The application showcases premium vacation rentals with features like booking forms, property listings, and amenities display.

## Tech Stack
- **Framework**: Next.js 16.1.1 with Turbopack
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS 4.1.18 with PostCSS
- **Database**: Supabase (client configured in `lib/supabase.ts`)
- **Icons**: Lucide React, React Icons
- **Date Handling**: date-fns

## Project Structure
```
app/
  api/booking/    - API route for booking submissions
  booking/        - Booking page
  terms/          - Terms and conditions page
  test-colors/    - Color testing page
  units/          - Property units listing page
  globals.css     - Global styles and Tailwind utilities
  layout.tsx      - Root layout
  page.tsx        - Home page

components/       - Reusable UI components
  AmenitiesGrid.tsx
  BookingForm.tsx
  FloatingWhatsApp.tsx
  Footer.tsx
  Hero.tsx
  InteractiveMap.tsx
  ListingCard.tsx
  Navbar.tsx
  ParallaxSection.tsx
  PaymentMethods.tsx
  UnitCard.tsx
  UI.tsx

lib/              - Utility functions and configurations
  supabase.ts     - Supabase client setup
  utils.ts        - Utility functions

public/           - Static assets
```

## Running the Application
- Development: `npm run dev -- -p 5000 -H 0.0.0.0`
- Production build: `npm run build`
- Production start: `npm run start`

## Configuration
- Next.js configured to allow all dev origins for Replit proxy compatibility
- Server binds to 0.0.0.0:5000 for web preview

## Notes
- The application references images in `/public/images/` that need to be added
- Supabase integration requires environment variables for the URL and anon key
