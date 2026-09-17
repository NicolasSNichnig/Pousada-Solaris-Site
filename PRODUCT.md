# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: guests/bookers evaluating a stay at Pousada Solaris. They browse from phones or laptops, scan apartment photos, check location, and reach out for bookings or questions.

## Product Purpose

A marketing/booking page for Pousada Solaris, a small coastal pousada in Praia da Pinheira, SC, run by Cláudio and Letícia. Success means guests feel the warmth and charm of the place and are moved to inquire or book.

## Positioning

A personal, human-scale pousada — not a hotel chain. The entire site is an atmosphere piece: the hosts' warmth, the apartment variety, and the sea views sell the stay.

## Operating Context

Single-page site with sections for apartments (carousel gallery), location (Google Maps embed), about the hosts, and contact links (Instagram, WhatsApp, Airbnb). Hosted as a static site (Next.js).

## Capabilities and Constraints

- Apartments presented via image carousels (8 photos each), with name and description.
- Three apartments currently listed: Apartamento, Loft 1, Loft 2.
- Contact links point to real external profiles (Instagram, WhatsApp, Airbnb).
- Location uses a Google Maps embed iframe.
- Photos live at `/public/photos/` (ap301–ap308, ap101–ap108, ap201–ap208, fotoAnfitrioes.jpg).
- Brand name "Pousada Solaris" and hosts Cláudio and Letícia are fixed.
- New apartments or photos must be added in `src/components/DataTable.tsx` and `/public/photos/`.

## Brand Commitments

- Warm, human hospitality ("calor humano").
- Coastal, relaxed, authentic — not corporate.
- Personal touch of the hosts is central.

## Evidence on Hand

- Apartment photos: `/public/photos/ap*.jpg` (24 images, 3 apartments × 8).
- Host photo: `/public/photos/fotoAnhosteiros.jpg`.
- Site icon: `/public/iconSite.png` (also `src/app/favicon.ico`).

## Product Principles

1. Atmosphere over sales pressure — let the photos and story sell the stay.
2. Personal, warm voice throughout.
3. Mobile-first: most guests browse on phones.
4. Real external links only — no placeholder URLs.
5. Keep the hosts' identities and the pousada's coastal character at the center.

## Accessibility & Inclusion

No explicit requirements established. Site should remain navigable via keyboard and screen-reader-friendly as a baseline (links have text labels, images have alt text).
