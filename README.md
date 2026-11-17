# CLEANING

The website of HOLYDJO-CLEAN, a home cleaning company in Canada. The layout and motion started as a from-scratch design study of the Oboosho site, the 2019 Awwwards Honorable Mention. The brand, colors, pictures and copy are HOLYDJO-CLEAN's own, and the site is not affiliated with the original business or its agency.

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
| Booking | `booking.html` | Four-step flow with a live price summary, province tax and postal code check |
| Sign in | `signin.html` | Sign in and sign up panel |

## Stack

Vite multi-page build, vanilla JavaScript, GSAP with ScrollTrigger, Draggable and Inertia, and Lenis for smooth scrolling. No framework and no backend.

## Brand: HOLYDJO-CLEAN

- **Name and logo.** The name and the logo wordmark are set in `brand` in `src/data.js`. The water-drop logo mark is `logoMark` in `src/illustrations.js`.
- **Colors.** Sky blue and white with a sunny accent. The tokens are at the top of `src/styles/main.css`.
- **Pictures.** Every picture is an original vector drawing in `src/illustrations.js`: the water-drop mascot, three scenes, four feature icons, the team portraits, the loader and the logo mark. The favicon is `public/favicon.svg`. No picture, person, text or logo comes from the original site.

| Token | Value | Use |
| --- | --- | --- |
| `--blue` | `#0877c8` | Buttons, links, logo |
| `--blue-dark` | `#075a9c` | Hover and deep accents |
| `--blue-light` | `#8fcdf5` | Outlines and soft accents |
| `--bg` | `#f1f8fd` | Page tint |
| `--pink` | `#ffe2ad` | Sunny accent blob |

To use real photos later, put them in `public/photos/` and swap the matching export in `src/illustrations.js` for an `<img>` tag. Each slot keeps its shape through CSS.

## Languages: English and French

The site runs in English and Canadian French.

- **Switch.** An EN / FR button sits in the header, in the menu and in the footer. The choice is remembered on the device.
- **First visit.** A browser set to French opens the site in French. Everyone else gets English.
- **Links.** Add `?lang=fr` or `?lang=en` to any page address to force a language.
- **How it works.** English text in the pages and scripts is the source. `src/locales/fr.js` holds the French for each English string, and `src/i18n.js` applies it.
- **Formats.** In French, prices read `97,99 $`, taxes are TPS / TVH / TVQ, times read `10 h`, and dates and province names are in French.

To change a French sentence, edit its line in `src/locales/fr.js`. When you add or change English text, add the matching line there too. To find anything left untranslated, open a page in French and type `__i18nMissing` in the browser console. Names, addresses and text that is already French show up in that list and can be ignored.

French is applied in the browser, on the same page addresses as English. Search engines mostly read the English text. Separate French addresses would need a later step.

## Region: Canada

The site is configured for Canada. The settings live at the top of `src/data.js`.

- **Currency.** Prices are in Canadian dollars and formatted with the `en-CA` locale.
- **Sales tax.** The `provinces` table sets the tax for each province and territory. The booking summary shows each tax on its own line.
- **Address.** The booking form asks for city, province and a Canadian postal code. The postal code is checked, formatted as `A1A 1A1`, and used to pick the province.
- **Copy.** Service areas, reviews, careers perks and contact placeholders are written for Canada. Edit `serviceAreas` to match the cities you serve.

| Province or territory | Tax applied |
| --- | --- |
| Ontario | HST 13% |
| Nova Scotia | HST 14% |
| New Brunswick, Newfoundland and Labrador, Prince Edward Island | HST 15% |
| Quebec | GST 5% + QST 9.975% |
| Alberta, British Columbia, Manitoba, Saskatchewan, the territories | GST 5% |

## Where to change things

- `src/data.js` starts with `region`, `provinces` and `serviceAreas`, the Canada settings.

- `src/data.js` holds the brand name, contact details, prices, services, reviews, team and FAQ.
- `src/styles/main.css` holds the design tokens at the top of the file.
- `src/illustrations.js` holds every picture, all drawn for HOLYDJO-CLEAN.
- `src/locales/fr.js` holds the French translations and `src/i18n.js` the language logic.

## Before going live

- Contact details are placeholders. Set real ones in `src/data.js`.
- Forms, booking and sign-in are front-end demos. Nothing is sent or stored.
- Reviews, team members, portraits, the two rating bars and the statistics are sample content. Replace them with real ones.
- The promo code `CLEAN10` exists only to demonstrate the summary.
- Tax rates are the 2026 rates. Have an accountant confirm them, especially the GST-only setting for British Columbia, Manitoba and Saskatchewan.
- You only charge GST / HST once you are registered. Add your registration number to invoices when you are.
- The French text was written without a native review. Have a French speaker read it before going live, especially the legal and careers wording.
- A live site needs a privacy policy and consent for marketing email under Canadian law (PIPEDA and CASL).
- Prices kept the same figures as before and are now read as Canadian dollars. Set your real prices.

See `REMAKE_REPORT.md` for how this compares with the original.
