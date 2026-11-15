# CLEANING

A from-scratch design study of the Oboosho home cleaning site, the 2019 Awwwards Honorable Mention. This is an unofficial remake and is not affiliated with the original business or its agency.

## Run it

```bash
npm install
npm run dev
```

`npm run build` writes a static site to `dist/`. `npm run preview` serves that build.

## What is here

| Page | File | Notes |
| --- | --- | --- |
| Home | `index.html` | Hero with booking bar and mascot, three story sections, features, draggable reviews, discount band |
| Services | `services.html` | Four cleaning types, checklist, add-ons |
| About | `about.html` | Stats, values, mission |
| Team | `team.html` | Cleaner cards with ratings |
| FAQ | `faq.html` | Animated accordion |
| Contacts | `contacts.html` | Contact form, hours, service area |
| Careers | `careers.html` | Perks, requirements, application form |
| Booking | `booking.html` | Four-step flow with a live price summary |
| Sign in | `signin.html` | Sign in and sign up panel |

## Stack

Vite multi-page build, vanilla JavaScript, GSAP with ScrollTrigger, Draggable and Inertia, and Lenis for smooth scrolling. No framework and no backend.

## Where to change things

- `src/data.js` holds the brand name, contact details, prices, services, reviews, team and FAQ.
- `src/styles/main.css` holds the design tokens at the top of the file.
- `src/illustrations.js` holds every SVG illustration.

## Before going live

- Contact details are placeholders. Set real ones in `src/data.js`.
- Forms, booking and sign-in are front-end demos. Nothing is sent or stored.
- Reviews, team members and statistics are sample content.
- The promo code `CLEAN10` exists only to demonstrate the summary.

See `REMAKE_REPORT.md` for how this compares with the original.
