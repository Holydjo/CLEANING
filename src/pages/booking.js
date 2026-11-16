import { boot } from '../main.js';
import { region, provinces, bedrooms, bathrooms, cleaningTypes, addons, frequencies, quote, money, pct, isPostalCode, formatPostalCode, provinceFromPostalCode } from '../data.js';

const params = new URLSearchParams(location.search);

const state = {
  step: 0,
  bedroomId: Number(params.get('bed')) || 1,
  bathroomId: Number(params.get('bath')) || 7,
  typeId: Number(params.get('type')) || 17,
  addonIds: [],
  frequencyId: 'once',
  date: null,
  time: null,
  access: 'concierge',
  pets: 'none',
  promo: '',
  provinceId: region.defaultProvince,
};

const accessOptions = [
  { id: 'home', label: 'I’ll be home' },
  { id: 'concierge', label: 'Concierge' },
  { id: 'key', label: 'Hidden key' },
  { id: 'code', label: 'Entry code' },
];
const petOptions = [
  { id: 'none', label: 'No pets' },
  { id: 'dog', label: 'Dog' },
  { id: 'cat', label: 'Cat' },
  { id: 'other', label: 'Other' },
];
const times = ['8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

function nextDays(n) {
  const out = [];
  const d = new Date();
  for (let i = 1; i <= n; i += 1) {
    const x = new Date(d.getFullYear(), d.getMonth(), d.getDate() + i);
    out.push(x);
  }
  return out;
}

const fmtDay = new Intl.DateTimeFormat(region.locale, { weekday: 'short' });
const fmtMonth = new Intl.DateTimeFormat(region.locale, { month: 'short' });
const fmtFull = new Intl.DateTimeFormat(region.locale, { weekday: 'long', month: 'long', day: 'numeric' });

function chips(el, options, key) {
  el.innerHTML = options.map((o) => `<button type="button" class="chip ${String(state[key]) === String(o.id) ? 'active' : ''}" data-id="${o.id}">${o.label}${o.discount ? ` · −${o.discount * 100}%` : ''}</button>`).join('');
  el.addEventListener('click', (e) => {
    const b = e.target.closest('.chip');
    if (!b) return;
    const raw = b.dataset.id;
    state[key] = Number.isNaN(Number(raw)) ? raw : Number(raw);
    $$('.chip', el).forEach((c) => c.classList.toggle('active', c === b));
    render();
  });
}

function renderControls() {
  chips($('[data-chips="bedroomId"]'), bedrooms, 'bedroomId');
  chips($('[data-chips="bathroomId"]'), bathrooms, 'bathroomId');
  chips($('[data-chips="frequencyId"]'), frequencies, 'frequencyId');
  chips($('[data-chips="access"]'), accessOptions, 'access');
  chips($('[data-chips="pets"]'), petOptions, 'pets');

  const choices = $('[data-choices="typeId"]');
  choices.innerHTML = cleaningTypes
    .map((t) => `<button type="button" class="choice ${state.typeId === t.id ? 'active' : ''}" data-id="${t.id}"><b>${t.label}</b><small>${t.hours}</small><span class="p">from ${money(t.base)}</span></button>`)
    .join('');
  choices.addEventListener('click', (e) => {
    const b = e.target.closest('.choice');
    if (!b) return;
    state.typeId = Number(b.dataset.id);
    $$('.choice', choices).forEach((c) => c.classList.toggle('active', c === b));
    render();
  });

  const ad = $('[data-addons]');
  ad.innerHTML = addons.map((a) => `<button type="button" class="chip" data-id="${a.id}">${a.label} · +$${a.price}</button>`).join('');
  ad.addEventListener('click', (e) => {
    const b = e.target.closest('.chip');
    if (!b) return;
    const id = b.dataset.id;
    state.addonIds = state.addonIds.includes(id) ? state.addonIds.filter((x) => x !== id) : [...state.addonIds, id];
    b.classList.toggle('active');
    render();
  });

  const prov = $('#b-province');
  prov.innerHTML = provinces.map((p) => `<option value="${p.id}" ${p.id === state.provinceId ? 'selected' : ''}>${p.name}</option>`).join('');

  const postal = $('#b-postal');
  postal.addEventListener('input', () => {
    postal.value = formatPostalCode(postal.value);
    const guess = provinceFromPostalCode(postal.value);
    /* "X" is shared by the Northwest Territories and Nunavut, so keep Nunavut if it is already chosen. */
    if (guess && !(guess === 'NT' && prov.value === 'NU')) prov.value = guess;
    postal.setCustomValidity(!postal.value || isPostalCode(postal.value) ? '' : 'Enter a Canadian postal code, for example M5V 2T6.');
  });

  const days = nextDays(14);
  state.date = days[0];
  const dates = $('[data-dates]');
  dates.innerHTML = days.map((d, i) => `<button type="button" class="date ${i === 0 ? 'active' : ''}" data-i="${i}"><small>${fmtDay.format(d)}</small><b>${d.getDate()}</b><small>${fmtMonth.format(d)}</small></button>`).join('');
  dates.addEventListener('click', (e) => {
    const b = e.target.closest('.date');
    if (!b) return;
    state.date = days[Number(b.dataset.i)];
    $$('.date', dates).forEach((c) => c.classList.toggle('active', c === b));
    render();
  });

  state.time = times[2];
  const t = $('[data-times]');
  t.innerHTML = times.map((x) => `<button type="button" class="chip ${x === state.time ? 'active' : ''}" data-id="${x}">${x}</button>`).join('');
  t.addEventListener('click', (e) => {
    const b = e.target.closest('.chip');
    if (!b) return;
    state.time = b.dataset.id;
    $$('.chip', t).forEach((c) => c.classList.toggle('active', c === b));
    render();
  });
}

function render() {
  state.provinceId = $('#b-province').value || state.provinceId;
  const q = quote(state);
  const included = q.type.id >= 19;
  $('.addons-note').hidden = !included;
  $('[data-addons]').style.opacity = included ? 0.4 : 1;
  $('[data-addons]').style.pointerEvents = included ? 'none' : '';

  const rows = [
    ['Type of cleaning', q.type.label],
    ['Home', `${q.bed.label}, ${q.bath.label}`],
    ['Date', state.date ? fmtFull.format(state.date) : '—'],
    ['Time', state.time || '—'],
    ['Frequency', q.freq.label],
  ];
  if (!included && q.chosen.length) rows.push(['Add-ons', q.chosen.map((a) => a.label).join(', ')]);

  $('[data-summary]').innerHTML = `
    ${rows.map(([k, v]) => `<div class="row"><span>${k}</span><span>${v}</span></div>`).join('')}
    <div class="row"><span>Subtotal</span><span>${money(q.subtotal)}</span></div>
    ${q.discount ? `<div class="row discount"><span>Discount (${Math.round(q.discountRate * 100)}%)</span><span>−${money(q.discount)}</span></div>` : ''}
    ${q.taxes.map((t) => `<div class="row"><span>${t.label} (${pct(t.rate)}) · ${q.province.id}</span><span>${money(t.amount)}</span></div>`).join('')}
    <div class="row total"><span>Total (${region.currency})</span><span>${money(q.total)}</span></div>`;

  const data = Object.fromEntries(new FormData($('#details')));
  $('[data-review]').innerHTML = `
    <div class="ttl">Total information on order</div>
    ${rows.map(([k, v]) => `<div class="row"><span>${k}</span><b>${v}</b></div>`).join('')}
    <div class="row"><span>Name</span><b>${escapeHtml(`${data.first || ''} ${data.last || ''}`.trim() || '—')}</b></div>
    <div class="row"><span>Address</span><b>${escapeHtml([data.apt && `Unit ${data.apt}`, data.address, data.city, data.address && q.province.id, data.postal].filter(Boolean).join(', ') || '—')}</b></div>
    <div class="row"><span>How will we get in?</span><b>${accessOptions.find((a) => a.id === state.access).label}</b></div>
    <div class="row"><span>Tax</span><b>${q.taxes.map((t) => `${t.label} ${money(t.amount)}`).join(' + ')}</b></div>
    <div class="row"><span>Total (${region.currency})</span><b>${money(q.total)}</b></div>`;

  $$('.steps-nav span').forEach((s, i) => {
    s.classList.toggle('done', i < state.step);
    s.classList.toggle('current', i === state.step);
  });
  $$('.step').forEach((s) => s.classList.toggle('active', Number(s.dataset.step) === state.step));
  const back = $('[data-back]');
  const next = $('[data-next]');
  back.style.visibility = state.step === 0 ? 'hidden' : 'visible';
  $('.step-actions').style.display = state.step === 4 ? 'none' : '';
  next.querySelector('span:not(.circle)').textContent = state.step === 3 ? 'Submit' : 'Next';
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}

renderControls();

boot(({ gsap, lenis }) => {
  const go = (dir) => {
    if (dir > 0 && state.step === 2 && !$('#details').reportValidity()) return;
    state.step = Math.max(0, Math.min(4, state.step + dir));
    if (state.step === 4) {
      const first = new FormData($('#details')).get('first');
      $('[data-done-text]').textContent = `Thanks${first ? `, ${first}` : ''}. Your ${quote(state).type.label} clean is set for ${fmtFull.format(state.date)} at ${state.time}. This is a demo booking, so no cleaner was dispatched and nothing was charged.`;
    }
    render();
    const active = $('.step.active');
    gsap.fromTo(active.children, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.04, ease: 'expo.out' });
    const top = $('.booking-steps').getBoundingClientRect().top + window.scrollY - 100;
    if (lenis) lenis.scrollTo(top);
    else window.scrollTo({ top });
  };
  $('[data-next]').addEventListener('click', () => go(1));
  $('[data-back]').addEventListener('click', () => go(-1));
  $('#details').addEventListener('input', render);
  $('#details').addEventListener('change', render);
  $('[data-promo-apply]').addEventListener('click', () => {
    state.promo = $('[data-promo]').value;
    render();
    const ok = state.promo.trim().toUpperCase() === 'CLEAN10';
    gsap.fromTo('[data-promo]', { x: ok ? 0 : -6 }, { x: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
    $('[data-promo]').style.borderColor = ok ? 'var(--green)' : state.promo ? 'var(--red)' : '';
  });
  render();
});
