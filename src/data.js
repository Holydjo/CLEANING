/* Content model for the remake. Section order and headline tone follow the original site; body copy is written fresh. */

/* Regional settings. The site is configured for Canada: Canadian dollars, en-CA dates,
   GST / HST / QST by province, and Canadian postal codes. */
export const region = {
  country: 'Canada',
  countryCode: 'CA',
  locale: 'en-CA',
  currency: 'CAD',
  timezone: 'ET',
  hq: 'Toronto, ON',
  defaultProvince: 'ON',
};

/* Sales tax charged on a residential cleaning, by province or territory.
   Rates are the ones in force in 2026. HST provinces charge one harmonized tax. Quebec charges GST plus QST.
   British Columbia, Saskatchewan and Manitoba are set to GST only, because their provincial sales taxes
   generally do not apply to residential cleaning. Confirm every line with an accountant before charging customers. */
const GST = { label: 'GST', rate: 0.05 };
export const provinces = [
  { id: 'AB', name: 'Alberta', taxes: [GST] },
  { id: 'BC', name: 'British Columbia', taxes: [GST] },
  { id: 'MB', name: 'Manitoba', taxes: [GST] },
  { id: 'NB', name: 'New Brunswick', taxes: [{ label: 'HST', rate: 0.15 }] },
  { id: 'NL', name: 'Newfoundland and Labrador', taxes: [{ label: 'HST', rate: 0.15 }] },
  { id: 'NS', name: 'Nova Scotia', taxes: [{ label: 'HST', rate: 0.14 }] },
  { id: 'NT', name: 'Northwest Territories', taxes: [GST] },
  { id: 'NU', name: 'Nunavut', taxes: [GST] },
  { id: 'ON', name: 'Ontario', taxes: [{ label: 'HST', rate: 0.13 }] },
  { id: 'PE', name: 'Prince Edward Island', taxes: [{ label: 'HST', rate: 0.15 }] },
  { id: 'QC', name: 'Quebec', taxes: [GST, { label: 'QST', rate: 0.09975 }] },
  { id: 'SK', name: 'Saskatchewan', taxes: [GST] },
  { id: 'YT', name: 'Yukon', taxes: [GST] },
];

/* Canadian postal codes look like "M5V 2T6". The first letter identifies the province or territory. */
const POSTAL_RE = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
const POSTAL_PROVINCE = { A: 'NL', B: 'NS', C: 'PE', E: 'NB', G: 'QC', H: 'QC', J: 'QC', K: 'ON', L: 'ON', M: 'ON', N: 'ON', P: 'ON', R: 'MB', S: 'SK', T: 'AB', V: 'BC', X: 'NT', Y: 'YT' };
export const isPostalCode = (v) => POSTAL_RE.test(String(v).trim());
export const formatPostalCode = (v) => {
  const c = String(v).toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
  return c.length > 3 ? `${c.slice(0, 3)} ${c.slice(3)}` : c;
};
export const provinceFromPostalCode = (v) => POSTAL_PROVINCE[String(v).trim().charAt(0).toUpperCase()] || null;

/* Sample service areas. Replace with the cities you actually serve. */
export const serviceAreas = [
  { city: 'Toronto', province: 'ON', note: 'City and GTA' },
  { city: 'Montréal', province: 'QC', note: 'Island and Laval' },
  { city: 'Vancouver', province: 'BC', note: 'Metro Vancouver' },
  { city: 'Calgary', province: 'AB', note: 'All quadrants' },
  { city: 'Ottawa', province: 'ON', note: 'Ottawa and Gatineau' },
  { city: 'Halifax', province: 'NS', note: 'Halifax and Dartmouth' },
];

export const brand = {
  name: 'oboosho',
  tagline: 'Home cleaning services',
  /* Placeholder contact details. Replace with your own before going live. */
  email: 'hello@example.com',
  phone: '(416) 555-0142',
  phoneHref: 'tel:+14165550142',
  hours: [
    { days: 'Monday — Friday', time: '8am — 9pm' },
    { days: 'Saturday — Sunday', time: '9am — 6pm' },
  ],
};

export const nav = [
  { href: 'services.html', label: 'Services' },
  { href: 'about.html', label: 'About us' },
  { href: 'team.html', label: 'Team' },
  { href: 'faq.html', label: 'FAQ' },
  { href: 'contacts.html', label: 'Contacts' },
];

export const bedrooms = [
  { id: 1, label: 'Studio', add: 0 },
  { id: 2, label: '1 Bedroom', add: 20 },
  { id: 3, label: '2 Bedroom', add: 40 },
  { id: 4, label: '3 Bedroom', add: 60 },
  { id: 5, label: '4 Bedroom', add: 85 },
  { id: 6, label: '5 Bedroom', add: 110 },
];

export const bathrooms = [
  { id: 7, label: '1 Bathroom', add: 0 },
  { id: 8, label: '2 Bathroom', add: 15 },
  { id: 9, label: '3 Bathroom', add: 30 },
  { id: 10, label: '4 Bathroom', add: 45 },
];

export const cleaningTypes = [
  {
    id: 17,
    label: 'Standard',
    hours: '2.5 — 3 hours',
    desc: 'Our basic clean. Dust, wipe down and scrub every room.',
    base: 97.99,
    includes: ['All rooms dusted and wiped', 'Floors vacuumed and mopped', 'Kitchen counters and appliance exteriors', 'Bathrooms scrubbed and sanitized', 'Trash removed'],
  },
  {
    id: 18,
    label: 'Special Mission',
    hours: '3.5 — 4 hours',
    desc: 'A deeper pass for homes that need extra attention.',
    base: 139.99,
    includes: ['Everything in Standard', 'Baseboards and door frames', 'Inside microwave', 'Light switches and handles', 'Ceiling corners and vents'],
    featured: true,
  },
  {
    id: 19,
    label: 'Super Clean',
    hours: '6.5 — 7 hours',
    desc: 'Top-to-bottom detail work, the once-a-season reset.',
    base: 219.99,
    includes: ['Everything in Special Mission', 'Inside fridge and oven', 'Inside cabinets', 'Window interiors and sills', 'Behind and under furniture'],
  },
  {
    id: 20,
    label: 'Move In / Out',
    hours: '7.5 — 8 hours',
    desc: 'An empty-apartment clean built for deposits and fresh starts.',
    base: 259.99,
    includes: ['Everything in Super Clean', 'Inside all closets and drawers', 'Wall spot cleaning', 'Appliance deep clean', 'Final walkthrough checklist'],
  },
];

export const addons = [
  { id: 'fridge', label: 'Inside Fridge', price: 35 },
  { id: 'oven', label: 'Inside Oven', price: 35 },
  { id: 'cabinets', label: 'Inside Cabinets', price: 35 },
  { id: 'laundry', label: 'Laundry & Fold', price: 25 },
  { id: 'windows', label: 'Interior Windows', price: 30 },
  { id: 'organizing', label: 'Light Organizing', price: 40 },
];

export const frequencies = [
  { id: 'once', label: 'One time', discount: 0 },
  { id: 'weekly', label: 'Weekly', discount: 0.2 },
  { id: 'biweekly', label: 'Bi-weekly', discount: 0.15 },
  { id: 'monthly', label: 'Monthly', discount: 0.1 },
];

export const checklist = {
  'Wipe Dust': ['Shelves and surfaces', 'Picture frames', 'Lamps and fixtures', 'Blinds', 'Ceiling fans'],
  'Wipe Down': ['Counters and tables', 'Appliance exteriors', 'Cabinet fronts', 'Mirrors', 'Door handles'],
  Scrub: ['Sinks and faucets', 'Showers and tubs', 'Toilets', 'Stovetop', 'Tile and grout'],
  'We also do': ['Vacuum and mop floors', 'Make beds', 'Take out trash and recycling', 'Load the dishwasher', 'Cobwebs in ceiling corners'],
};

export const notes = ['Leave clean sheets on the bed if you want it changed', 'Please sort recycling before we arrive', 'Add-ons are already part of Super Clean and Move In / Out', 'Prices are in Canadian dollars, before GST / HST'];

export const features = [
  { icon: 'book', title: 'Book and manage\nonline' },
  { icon: 'shield', title: 'Bonded and\ninsured' },
  { icon: 'lock', title: 'Your data stays\nprivate' },
  { icon: 'repeat', title: 'Save on repeat\nvisits' },
];

/* Sample testimonials written for the remake. */
export const reviews = [
  { name: 'Maya R.', where: 'The Annex, Toronto', stars: 5, text: 'Booked at 11pm, cleaner arrived the next morning on the dot. My apartment has never looked like this. The oven add-on was worth every cent.' },
  { name: 'Daniel K.', where: 'Plateau-Mont-Royal, Montréal', stars: 5, text: 'I have tried four services in Montréal. This is the only one where the same person comes back every two weeks and remembers how I like things.' },
  { name: 'Priya S.', where: 'Kitsilano, Vancouver', stars: 5, text: 'Move-out clean got my full deposit back. The landlord literally asked who did it.' },
  { name: 'Tom & Elise', where: 'Beltline, Calgary', stars: 4, text: 'Thorough and friendly. Rescheduling from the dashboard took ten seconds when our plans changed.' },
  { name: 'Jordan W.', where: 'The Glebe, Ottawa', stars: 5, text: 'Dependable is the right word. Two years, zero no-shows. The recurring discount makes it easy to keep.' },
  { name: 'Sofia M.', where: 'Leslieville, Toronto', stars: 5, text: 'Super Clean before my parents visited. They noticed the baseboards. Nobody notices baseboards.' },
];

export const team = [
  { name: 'Rosa M.', role: 'Senior cleaner · 4 yrs', rating: 4.9, jobs: 612, seed: 1 },
  { name: 'Kwame A.', role: 'Senior cleaner · 3 yrs', rating: 4.9, jobs: 540, seed: 2 },
  { name: 'Lena P.', role: 'Cleaner · 2 yrs', rating: 4.8, jobs: 318, seed: 3 },
  { name: 'Diego F.', role: 'Move-out specialist', rating: 5.0, jobs: 274, seed: 4 },
  { name: 'Anika B.', role: 'Cleaner · 2 yrs', rating: 4.8, jobs: 290, seed: 5 },
  { name: 'Marcus T.', role: 'Team lead · Toronto', rating: 4.9, jobs: 701, seed: 6 },
  { name: 'Hana O.', role: 'Cleaner · 1 yr', rating: 4.7, jobs: 142, seed: 7 },
  { name: 'Yusuf E.', role: 'Cleaner · 3 yrs', rating: 4.9, jobs: 455, seed: 8 },
];

export const faq = [
  { q: 'How do I book a cleaning?', a: 'Pick your apartment size and cleaning type on the home page, choose a date and time, and tell us how to get in. You can book in under two minutes and manage everything from your account.' },
  { q: 'Do I need to be home?', a: 'No. Most clients leave a key with the concierge or share an entry code. Tell us how we should get in when you book, and we will handle the rest.' },
  { q: 'What is included in a Standard clean?', a: 'Every room dusted and wiped down, floors vacuumed and mopped, kitchen counters and appliance exteriors cleaned, bathrooms scrubbed and sanitized, and trash removed. See the Services page for the full checklist.' },
  { q: 'Do you bring supplies?', a: 'Yes. Our cleaners arrive with professional, eco-friendly supplies and equipment. If you prefer we use your own products, leave them out and let us know in the booking notes.' },
  { q: 'Are your cleaners background checked?', a: 'Every member of the team is hand-selected, police record checked by an independent provider, interviewed in person and trained before their first job.' },
  { q: 'How does the recurring discount work?', a: 'Schedule weekly cleanings from your account and save 20%. Bi-weekly saves 15% and monthly saves 10%. The discount is applied automatically to every visit.' },
  { q: 'What if I need to reschedule?', a: 'Reschedule or cancel from your account up to 24 hours before the appointment at no charge.' },
  { q: 'Which areas do you cover?', a: `${serviceAreas.map((a) => a.city).join(', ').replace(/, ([^,]*)$/, ' and $1')}, with more Canadian cities on the way. Studios to five-bedroom homes.` },
  { q: 'Are prices in Canadian dollars?', a: 'Yes. Every price on the site is in Canadian dollars. GST, HST or QST for your province is added at checkout and shown before you confirm.' },
  { q: 'What if something is not right?', a: 'Tell us within 24 hours and we will come back and make it right, free of charge. That is our promise to you.' },
];

export const perks = [
  'Hourly pay from $22, paid every two weeks',
  'Employee status with a T4, CPP and EI handled',
  "Provincial workers' compensation coverage",
  'Vacation pay and paid sick days',
  'Travel time between jobs is paid',
  'Overtime under provincial employment standards',
  'Group RRSP with employer match',
  'Monthly and yearly bonuses',
  'Uniform and supplies provided',
];

export const requirements = ['Legally entitled to work in Canada', 'At least one year of professional cleaning experience', 'Pass a police record check', 'Reliable, detail-oriented and friendly', 'Comfortable using a smartphone app for scheduling'];

const cad = new Intl.NumberFormat(region.locale, { style: 'currency', currency: region.currency });
export const money = (n) => cad.format(n);
const round2 = (n) => Math.round(n * 100) / 100;
/* Rate as a percentage label, e.g. 0.09975 -> "9.975%". */
export const pct = (rate) => `${Number((rate * 100).toFixed(3))}%`;

export function quote({ bedroomId = 1, bathroomId = 7, typeId = 17, addonIds = [], frequencyId = 'once', promo = '', provinceId = region.defaultProvince } = {}) {
  const bed = bedrooms.find((b) => b.id === Number(bedroomId)) || bedrooms[0];
  const bath = bathrooms.find((b) => b.id === Number(bathroomId)) || bathrooms[0];
  const type = cleaningTypes.find((t) => t.id === Number(typeId)) || cleaningTypes[0];
  const freq = frequencies.find((f) => f.id === frequencyId) || frequencies[0];
  const chosen = addons.filter((a) => addonIds.includes(a.id));
  const addonTotal = type.id >= 19 ? 0 : chosen.reduce((s, a) => s + a.price, 0);
  const subtotal = type.base + bed.add + bath.add + addonTotal;
  const discountRate = freq.discount + (promo.trim().toUpperCase() === 'CLEAN10' ? 0.1 : 0);
  const discount = subtotal * discountRate;
  const taxed = subtotal - discount;
  const province = provinces.find((p) => p.id === provinceId) || provinces.find((p) => p.id === region.defaultProvince);
  const taxes = province.taxes.map((t) => ({ ...t, amount: round2(taxed * t.rate) }));
  const tax = taxes.reduce((s, t) => s + t.amount, 0);
  return { bed, bath, type, freq, chosen, addonTotal, subtotal, discountRate, discount, province, taxes, tax, total: round2(taxed + tax) };
}
