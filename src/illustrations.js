/*
  Original SVG illustrations for the remake.
  The 2019 site used a rendered 3D mascot and photography; those assets are
  copyrighted, so everything here is drawn from scratch in the same spirit:
  a friendly indigo creature with a vacuum, soft blobs, flat shapes.
*/

export const mascot = `
<svg class="mascot" viewBox="0 0 560 620" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="m-body" x1="140" y1="120" x2="420" y2="600" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6b6fe8"/>
      <stop offset="1" stop-color="#3f44c9"/>
    </linearGradient>
    <linearGradient id="m-belly" x1="260" y1="300" x2="300" y2="600" gradientUnits="userSpaceOnUse">
      <stop stop-color="#c9cbff"/>
      <stop offset="1" stop-color="#a0a3ea"/>
    </linearGradient>
    <linearGradient id="m-pole" x1="0" y1="0" x2="1" y2="0">
      <stop stop-color="#9fb4ff"/>
      <stop offset=".5" stop-color="#e6ecff"/>
      <stop offset="1" stop-color="#7f93e6"/>
    </linearGradient>
    <linearGradient id="m-head" x1="120" y1="150" x2="200" y2="260" gradientUnits="userSpaceOnUse">
      <stop stop-color="#5b8dff"/>
      <stop offset="1" stop-color="#2f5fd6"/>
    </linearGradient>
    <linearGradient id="m-pack" x1="380" y1="280" x2="470" y2="470" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ff7aa8"/>
      <stop offset="1" stop-color="#e2456f"/>
    </linearGradient>
  </defs>

  <!-- backpack -->
  <g class="m-pack">
    <rect x="372" y="300" width="112" height="180" rx="40" fill="url(#m-pack)"/>
    <rect x="392" y="318" width="72" height="18" rx="9" fill="#ffd0df" opacity=".8"/>
    <path d="M398 480c14 10 44 10 58 0" stroke="#ff9fc0" stroke-width="6" stroke-linecap="round"/>
  </g>

  <!-- tail -->
  <path class="m-tail" d="M420 520c60 10 110-10 120-60-20 44-60 54-110 42z" fill="#3f44c9"/>

  <!-- body -->
  <path class="m-body" d="M282 160c-96 0-166 92-166 214v70c0 90 70 160 166 160s166-70 166-160v-70c0-122-70-214-166-214z" fill="url(#m-body)"/>
  <!-- belly -->
  <ellipse cx="292" cy="440" rx="92" ry="128" fill="url(#m-belly)"/>
  <!-- spots -->
  <circle cx="200" cy="330" r="10" fill="#8b8ef3" opacity=".8"/>
  <circle cx="190" cy="380" r="6" fill="#8b8ef3" opacity=".8"/>
  <circle cx="396" cy="250" r="8" fill="#8b8ef3" opacity=".8"/>
  <circle cx="420" cy="300" r="5" fill="#8b8ef3" opacity=".8"/>

  <!-- head -->
  <g class="m-head">
    <path d="M292 60c-74 0-126 48-126 118 0 60 48 100 126 100s126-40 126-100c0-70-52-118-126-118z" fill="url(#m-body)"/>
    <!-- snout -->
    <path d="M160 200c-30-4-60 18-54 46 6 26 44 32 78 20z" fill="#5257e0"/>
    <!-- cap -->
    <path d="M352 76c26-30 90-40 112-18 10 10 2 26-14 24-28-4-56 6-74 24z" fill="#1f2470"/>
    <path d="M292 60c-34 0-62 12-82 30 36-10 86-6 118 10 16 8 34 2 40-6-18-22-46-34-76-34z" fill="#2a2f8f"/>
    <!-- eyes -->
    <g class="m-eye">
      <ellipse cx="256" cy="150" rx="22" ry="26" fill="#fff"/>
      <ellipse cx="258" cy="154" rx="11" ry="14" fill="#13163f"/>
      <circle cx="263" cy="146" r="4" fill="#fff"/>
    </g>
    <g class="m-eye">
      <ellipse cx="328" cy="150" rx="22" ry="26" fill="#fff"/>
      <ellipse cx="330" cy="154" rx="11" ry="14" fill="#13163f"/>
      <circle cx="335" cy="146" r="4" fill="#fff"/>
    </g>
    <!-- cheeks -->
    <ellipse cx="224" cy="200" rx="14" ry="8" fill="#ff9fc0" opacity=".6"/>
    <ellipse cx="364" cy="200" rx="14" ry="8" fill="#ff9fc0" opacity=".6"/>
    <!-- smile -->
    <path d="M262 206c20 18 50 18 70-2" stroke="#13163f" stroke-width="6" stroke-linecap="round"/>
    <!-- nostrils -->
    <circle cx="146" cy="222" r="4" fill="#2a2f8f"/>
    <circle cx="130" cy="230" r="3" fill="#2a2f8f"/>
  </g>

  <!-- left arm holding pole -->
  <path class="m-arm" d="M176 330c-40 20-70 70-50 120 10 26 40 30 54 8l12-24" stroke="#3f44c9" stroke-width="42" stroke-linecap="round"/>
  <!-- vacuum pole -->
  <g class="m-vac">
    <rect x="96" y="150" width="22" height="430" rx="11" fill="url(#m-pole)" transform="rotate(8 107 365)"/>
    <!-- handle -->
    <rect x="70" y="118" width="84" height="54" rx="20" fill="#3f6bd8" transform="rotate(8 112 145)"/>
    <rect x="86" y="132" width="50" height="22" rx="11" fill="#86a7ff" opacity=".7" transform="rotate(8 112 145)"/>
    <!-- vacuum head -->
    <path d="M40 560c-14 0-24 12-22 26l4 20c2 10 10 16 20 16h130c10 0 18-6 20-16l4-20c2-14-8-26-22-26z" fill="#3f6bd8"/>
    <rect x="28" y="596" width="180" height="12" rx="6" fill="#1f2470"/>
    <rect x="56" y="572" width="40" height="8" rx="4" fill="#86a7ff" opacity=".8"/>
  </g>
  <!-- hand on pole -->
  <circle cx="134" cy="452" r="30" fill="#5257e0"/>
  <path d="M112 440c14-10 34-8 46 6" stroke="#8b8ef3" stroke-width="6" stroke-linecap="round" opacity=".7"/>

  <!-- right arm -->
  <path class="m-arm2" d="M416 380c40-4 80 20 86 58 4 24-14 40-34 30l-24-14" stroke="#3f44c9" stroke-width="40" stroke-linecap="round"/>
  <circle cx="452" cy="458" r="28" fill="#5257e0"/>

  <!-- feet -->
  <ellipse cx="236" cy="600" rx="58" ry="20" fill="#2f33a6"/>
  <ellipse cx="350" cy="604" rx="58" ry="20" fill="#2f33a6"/>

  <!-- sparkles -->
  <g class="m-spark" fill="#fff">
    <path d="M60 300l6 16 16 6-16 6-6 16-6-16-16-6 16-6z" opacity=".9"/>
    <path d="M500 140l4 11 11 4-11 4-4 11-4-11-11-4 11-4z" opacity=".9"/>
    <path d="M520 560l4 11 11 4-11 4-4 11-4-11-11-4 11-4z" opacity=".9"/>
  </g>
</svg>`;

/* Spray bottle, sponge and bubbles — used for the "Our Services" block. */
export const services = `
<svg viewBox="0 0 480 600" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="s-bottle" x1="0" y1="0" x2="0" y2="1">
      <stop stop-color="#7d81f0"/>
      <stop offset="1" stop-color="#3f44c9"/>
    </linearGradient>
    <linearGradient id="s-liquid" x1="0" y1="0" x2="0" y2="1">
      <stop stop-color="#a0a3ea"/>
      <stop offset="1" stop-color="#5b5fe0"/>
    </linearGradient>
  </defs>
  <rect width="480" height="600" rx="16" fill="#f6f2fd"/>
  <circle cx="400" cy="90" r="90" fill="#f8f3f3"/>
  <circle cx="60" cy="520" r="110" fill="#f7f7ff"/>

  <!-- bottle body -->
  <path d="M150 300c0-40 30-70 70-70h20c40 0 70 30 70 70v200c0 20-14 34-34 34H184c-20 0-34-14-34-34z" fill="url(#s-bottle)"/>
  <path d="M166 380h138v120c0 14-10 24-24 24H190c-14 0-24-10-24-24z" fill="url(#s-liquid)" opacity=".9"/>
  <rect x="190" y="400" width="90" height="70" rx="10" fill="#fff" opacity=".9"/>
  <rect x="204" y="416" width="62" height="8" rx="4" fill="#3f44c9"/>
  <rect x="204" y="432" width="42" height="6" rx="3" fill="#a0a3ea"/>
  <rect x="204" y="446" width="52" height="6" rx="3" fill="#a0a3ea"/>
  <!-- neck + trigger -->
  <rect x="210" y="180" width="40" height="60" rx="8" fill="#2f33a6"/>
  <path d="M230 150h70c20 0 36 12 36 30v10h-36v-6c0-6-4-10-10-10h-60z" fill="#2f33a6"/>
  <path d="M300 190c6 30-2 60-20 70-8-24-6-48 4-70z" fill="#13163f"/>
  <rect x="330" y="156" width="26" height="30" rx="8" fill="#5b5fe0"/>

  <!-- spray mist -->
  <g fill="#3f44c9" opacity=".5">
    <circle cx="380" cy="150" r="4"/>
    <circle cx="400" cy="130" r="6"/>
    <circle cx="420" cy="160" r="5"/>
    <circle cx="436" cy="136" r="3"/>
    <circle cx="414" cy="186" r="3"/>
    <circle cx="446" cy="172" r="7"/>
  </g>

  <!-- sponge -->
  <rect x="42" y="430" width="120" height="78" rx="14" fill="#ffd36b"/>
  <rect x="42" y="430" width="120" height="30" rx="14" fill="#f4b4b4"/>
  <circle cx="70" cy="486" r="4" fill="#e9b94e"/>
  <circle cx="100" cy="478" r="3" fill="#e9b94e"/>
  <circle cx="130" cy="490" r="4" fill="#e9b94e"/>

  <!-- bubbles -->
  <g stroke="#a0a3ea" stroke-width="3" fill="#fff" fill-opacity=".8">
    <circle cx="90" cy="360" r="26"/>
    <circle cx="140" cy="310" r="14"/>
    <circle cx="60" cy="280" r="10"/>
    <circle cx="380" cy="420" r="30"/>
    <circle cx="420" cy="360" r="12"/>
  </g>
  <path d="M78 350c2-10 10-16 18-18" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
  <path d="M366 408c2-12 12-20 22-22" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
</svg>`;

/* Gloved hand with a cloth — used for the "Meet our cleaners" block. */
export const cleaners = `
<svg viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="c-glove" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="#ffb3c9"/>
      <stop offset="1" stop-color="#f27a9e"/>
    </linearGradient>
    <linearGradient id="c-cloth" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="#6b6fe8"/>
      <stop offset="1" stop-color="#3f44c9"/>
    </linearGradient>
  </defs>
  <rect width="520" height="520" rx="260" fill="#f5f4fa"/>
  <path d="M60 200c60-30 130-20 180 20" stroke="#f4b4b4" stroke-width="10" stroke-linecap="round" opacity=".5"/>
  <!-- cloth -->
  <path d="M250 300c-70-30-90-120-30-170 50-40 150-20 190 50 30 60 0 120-60 140-40 12-70 0-100-20z" fill="url(#c-cloth)"/>
  <path d="M276 190c20-30 70-40 110-18" stroke="#a0a3ea" stroke-width="8" stroke-linecap="round" opacity=".8"/>
  <path d="M250 240c30-20 80-20 120 10" stroke="#a0a3ea" stroke-width="8" stroke-linecap="round" opacity=".6"/>
  <!-- glove -->
  <path d="M110 520V380c0-40 24-70 60-78l20-100c4-22 36-20 36 4v90l30-4 10-120c2-24 36-22 36 2v126l20-6 14-96c4-22 36-20 34 4l-12 110 20-4 20-70c6-20 36-14 32 8l-24 150c-10 60-60 100-130 110z" fill="url(#c-glove)"/>
  <path d="M170 320c-20 10-34 30-36 54" stroke="#fff" stroke-width="8" stroke-linecap="round" opacity=".6"/>
  <rect x="100" y="450" width="200" height="70" rx="10" fill="#e2456f"/>
  <rect x="100" y="450" width="200" height="16" fill="#ff9fc0" opacity=".6"/>
  <!-- shine -->
  <g fill="#fff">
    <path d="M400 110l6 16 16 6-16 6-6 16-6-16-16-6 16-6z"/>
    <path d="M440 300l4 11 11 4-11 4-4 11-4-11-11-4 11-4z"/>
    <path d="M80 120l4 11 11 4-11 4-4 11-4-11-11-4 11-4z"/>
  </g>
</svg>`;

/* Abstract "home" scene for the "Meet oboosho" block. */
export const home = `
<svg viewBox="0 0 520 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="h-sofa" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="#6b6fe8"/>
      <stop offset="1" stop-color="#3f44c9"/>
    </linearGradient>
  </defs>
  <!-- window -->
  <rect x="300" y="40" width="170" height="150" rx="16" fill="#fff"/>
  <rect x="316" y="56" width="138" height="118" rx="8" fill="#e8ecff"/>
  <path d="M316 150c30-30 60-30 90 0 20-18 40-18 48 0v24H316z" fill="#c9cbff"/>
  <circle cx="420" cy="90" r="16" fill="#ffd36b"/>
  <rect x="384" y="56" width="4" height="118" fill="#fff"/>
  <!-- plant -->
  <rect x="60" y="260" width="50" height="60" rx="8" fill="#f4b4b4"/>
  <path d="M85 260c-40-20-50-80-20-110 20 30 20 70 20 110zM85 260c40-20 50-80 20-110-20 30-20 70-20 110zM85 262c0-60 20-90 50-100-10 50-20 80-50 100z" fill="#5fc99a"/>
  <!-- sofa -->
  <rect x="150" y="230" width="300" height="100" rx="24" fill="url(#h-sofa)"/>
  <rect x="170" y="190" width="260" height="60" rx="20" fill="#5b5fe0"/>
  <rect x="150" y="250" width="40" height="80" rx="16" fill="#2f33a6"/>
  <rect x="410" y="250" width="40" height="80" rx="16" fill="#2f33a6"/>
  <rect x="210" y="200" width="70" height="60" rx="14" fill="#f4b4b4"/>
  <rect x="300" y="200" width="70" height="60" rx="14" fill="#ffd36b"/>
  <rect x="170" y="330" width="16" height="30" rx="6" fill="#2f33a6"/>
  <rect x="414" y="330" width="16" height="30" rx="6" fill="#2f33a6"/>
  <!-- rug -->
  <ellipse cx="300" cy="380" rx="200" ry="22" fill="#f8f3f3"/>
  <ellipse cx="300" cy="380" rx="150" ry="14" fill="#f4b4b4" opacity=".5"/>
  <!-- sparkles -->
  <g fill="#fff">
    <path d="M250 110l6 16 16 6-16 6-6 16-6-16-16-6 16-6z"/>
    <path d="M140 150l4 11 11 4-11 4-4 11-4-11-11-4 11-4z"/>
    <path d="M490 240l4 11 11 4-11 4-4 11-4-11-11-4 11-4z"/>
  </g>
</svg>`;

export const icons = {
  book: `<svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="35" cy="35" r="35" fill="#f5f4fa"/><rect x="18" y="20" width="34" height="32" rx="6" stroke="#3f44c9" stroke-width="2.5"/><path d="M18 30h34M27 16v8M43 16v8" stroke="#3f44c9" stroke-width="2.5" stroke-linecap="round"/><path d="M28 42l5 5 9-10" stroke="#3f44c9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  shield: `<svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="35" cy="35" r="35" fill="#f5f4fa"/><path d="M35 16l16 6v12c0 10-7 18-16 21-9-3-16-11-16-21V22z" stroke="#3f44c9" stroke-width="2.5" stroke-linejoin="round"/><path d="M28 35l5 5 10-11" stroke="#3f44c9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  lock: `<svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="35" cy="35" r="35" fill="#f5f4fa"/><rect x="21" y="31" width="28" height="22" rx="6" stroke="#3f44c9" stroke-width="2.5"/><path d="M27 31v-6a8 8 0 0116 0v6" stroke="#3f44c9" stroke-width="2.5"/><circle cx="35" cy="42" r="3" fill="#3f44c9"/></svg>`,
  repeat: `<svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="35" cy="35" r="35" fill="#f5f4fa"/><path d="M22 32a13 13 0 0123-7l4 4M48 38a13 13 0 01-23 7l-4-4" stroke="#3f44c9" stroke-width="2.5" stroke-linecap="round"/><path d="M49 20v9h-9M21 50v-9h9" stroke="#3f44c9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><text x="35" y="39" text-anchor="middle" font-family="Manrope, sans-serif" font-weight="700" font-size="9" fill="#3f44c9">%</text></svg>`,
};

/* Avatar portraits for the team page (flat, abstract). */
export function portrait(seed, tone = '#3f44c9') {
  const skins = ['#f3c9a8', '#d9a47c', '#a86d4b', '#f7d7c4', '#8d5a3b', '#e0b08f'];
  const hairs = ['#2a2017', '#5a3b22', '#1f2470', '#d8893f', '#111', '#8c4a2f'];
  const skin = skins[seed % skins.length];
  const hair = hairs[(seed * 3) % hairs.length];
  const bg = seed % 2 ? '#f6f2fd' : '#f8f3f3';
  return `
<svg viewBox="0 0 320 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <rect width="320" height="400" fill="${bg}"/>
  <circle cx="${seed % 2 ? 60 : 260}" cy="80" r="70" fill="#fff" opacity=".6"/>
  <path d="M40 400c0-70 54-120 120-120s120 50 120 120z" fill="${tone}"/>
  <rect x="130" y="240" width="60" height="50" rx="20" fill="${skin}"/>
  <ellipse cx="160" cy="170" rx="62" ry="74" fill="${skin}"/>
  <path d="M98 160c0-50 28-84 62-84s62 34 62 84c-14-26-36-38-62-38s-48 12-62 38z" fill="${hair}"/>
  ${seed % 3 === 0 ? `<path d="M98 160v70c-12-10-20-40-10-70zM222 160v70c12-10 20-40 10-70z" fill="${hair}"/>` : ''}
  <circle cx="140" cy="176" r="5" fill="#13163f"/>
  <circle cx="180" cy="176" r="5" fill="#13163f"/>
  <path d="M146 204c8 8 20 8 28 0" stroke="#13163f" stroke-width="4" stroke-linecap="round"/>
  <ellipse cx="128" cy="196" rx="8" ry="4" fill="#ff9fc0" opacity=".5"/>
  <ellipse cx="192" cy="196" rx="8" ry="4" fill="#ff9fc0" opacity=".5"/>
  <path d="M120 300c12-14 68-14 80 0" stroke="#fff" stroke-width="6" stroke-linecap="round" opacity=".5"/>
</svg>`;
}

export const social = {
  fb: `<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M25 15h-1.5a2.5 2.5 0 00-2.5 2.5V29M18.5 21.5h6" /></svg>`,
  ig: `<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2"><rect x="15" y="15" width="14" height="14" rx="4.5" /><circle cx="22" cy="22" r="3.2" /><circle cx="26.2" cy="17.8" r=".6" fill="currentColor" /></svg>`,
};

export const userIcon = `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="8" cy="5" r="3.2" /><path d="M2 14.5c1.2-2.6 3.4-4 6-4s4.8 1.4 6 4" /></svg>`;

export const menuIcon = `<svg viewBox="0 0 36 22" xmlns="http://www.w3.org/2000/svg">
  <circle cx="3" cy="11" r="2.6"/><circle cx="18" cy="11" r="2.6"/><circle cx="33" cy="11" r="2.6"/>
  <line class="line" x1="8" y1="1" x2="28" y2="21"/><line class="line" x1="28" y1="1" x2="8" y2="21"/>
</svg>`;

export const glove = `
<svg class="glove" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M40 240V150c0-26 16-46 40-52l12-62c2-14 24-12 24 2v56l20-2 6-74c2-14 24-12 24 2v78l12-4 10-60c2-14 24-12 22 2l-8 70 12-2 14-44c4-12 24-8 20 6l-16 94c-6 40-40 66-86 72z" fill="#ffd0df"/>
  <path d="M78 130c-14 6-22 20-24 36" stroke="#fff" stroke-width="6" stroke-linecap="round" opacity=".8"/>
  <rect x="34" y="200" width="130" height="40" rx="6" fill="#ff7aa8"/>
</svg>`;
