# Remake report

**Status: REMAKE COMPLETE**

Reference: https://www.awwwards.com/sites/oboosho, Honorable Mention, 1 May 2019.
Target repository: https://github.com/Holydjo/CLEANING

## How the reference was studied

The live domain no longer serves the original site, so the remake was built from three sources:

- The Awwwards entry and its hero screenshot.
- The Wayback Machine capture of the home page from 14 June 2019, rendered in a browser.
- The archived stylesheet, read for colors, type scale, spacing, blob shapes and easing curves.

The inner pages were never archived. Their structure here is reconstructed from the navigation and the section names found in the archived bundle.

## What matches the original

| Area | Original | Remake |
| --- | --- | --- |
| Palette | Indigo `#3f44c9` on lavender grey `#f5f4fa`, rose and lilac blobs | Same values, as CSS tokens |
| Hero | Headline, three dropdowns, live "Book from" price, mascot on the right | Same layout and behaviour |
| Header | Wordmark with tagline, black login pill, three-dot menu | Same, dots morph to a cross |
| Menu | Full-screen overlay, contacts and hours left, large links right | Same, with staggered reveal |
| Preloader | Blue circle, waving glove, percent counter | Same idea, shown once per session |
| Home sections | Meet, Services, Cleaners, Features, Client feedback, 20% band, footer | Same order |
| Motion | GSAP reveals, parallax blobs, clip reveals, button ripple, smooth scroll | Rebuilt with GSAP 3 and Lenis |
| Reviews | Draggable slider with Yelp and Google rating bars | Draggable with inertia and snap |
| Responsive | Fluid desktop, stacked mobile | Checked at 1440 and 375 wide |

## What differs, on purpose

- **Mascot and artwork.** The original used a rendered 3D character on a canvas and photographs. Those are copyrighted, so every illustration here is a new flat SVG.
- **Typefaces.** TT Norms and Graphik are commercial. Manrope and Inter stand in for them.
- **Body copy.** Paragraphs are newly written. Short headlines follow the original's tone.
- **Contact details.** The original phone number and email are replaced with placeholders, because the old domain has changed hands.
- **Stack.** The original was Vue with a PHP backend, Stripe and Google Maps. This is a static front end with no backend.
- **Booking and accounts.** The four-step booking flow and the sign-in page are working demos. They compute prices and validate input but send nothing.
- **Sample content.** Reviews, team members, prices beyond the hero and the statistics are invented for the remake.

## Verification

| Check | Result |
| --- | --- |
| Production build | Passes, 9 pages |
| All 9 pages load on the dev server | Yes |
| Hero dropdowns update price and booking link | Yes |
| Menu opens and closes | Yes |
| Reviews slider arrows and drag bounds | Yes |
| FAQ accordion | Yes |
| Booking flow from step 1 to confirmation, with validation, weekly discount and promo code | Yes |
| Sign in and sign up toggle | Yes |
| Mobile layout at 375 wide, no horizontal overflow | Yes |
| Preloader runs once per session | Yes |

## Not verified

- Safari and Firefox. Testing was done in a Chromium browser only.
- The reduced-motion path is implemented but was not exercised.
- Tablet widths between 768 and 1100 were not screenshotted.
- Lighthouse and accessibility audits were not run.
