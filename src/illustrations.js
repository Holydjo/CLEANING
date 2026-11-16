/*
  HOLYDJO-CLEAN illustration set.
  Every picture on the site is drawn here from scratch for the brand:
  a sky-blue water-drop mascot with a mop, three scenes, feature icons,
  team portraits, the logo mark and the loader mark.
  Palette: sky blue #0877c8 / #4db8f5 / #a9e2ff, white, and a sunny accent #ffd36b.
*/

/* Logo mark: a water drop with a shine. Coloured by CSS through currentColor. */
export const logoMark = `<svg class="mark" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M16 2.5c-2.6 5.6-9.5 10.4-9.5 17a9.5 9.5 0 0019 0c0-6.600-6.900-11.400-9.500-17z" fill="currentColor"/><path d="M11.200 20.500c0-2.400 1.300-4.300 3.100-5.600" fill="none" stroke="#fff" stroke-width="2.200" stroke-linecap="round" opacity=".9"/><path d="M24.500 3l.9 2.300 2.300.9-2.300.9-.9 2.300-.9-2.300-2.300-.9 2.300-.9z" fill="#ffd36b"/></svg>`;

/* Mascot: "Djo", a water drop in a white apron holding a mop. */
export const mascot = `
<svg class="mascot" viewBox="0 0 560 620" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="m-body" x1="170" y1="90" x2="420" y2="580" gradientUnits="userSpaceOnUse">
      <stop stop-color="#b9e8ff"/>
      <stop offset=".5" stop-color="#58bef7"/>
      <stop offset="1" stop-color="#1c95e3"/>
    </linearGradient>
    <linearGradient id="m-pole" x1="0" y1="0" x2="1" y2="0">
      <stop stop-color="#f0b03a"/>
      <stop offset=".5" stop-color="#ffe7ad"/>
      <stop offset="1" stop-color="#e59f24"/>
    </linearGradient>
    <linearGradient id="m-apron" x1="0" y1="0" x2="0" y2="1">
      <stop stop-color="#ffffff"/>
      <stop offset="1" stop-color="#e1f2ff"/>
    </linearGradient>
    <clipPath id="m-clip">
      <path d="M310 46c-30 92-190 204-190 349a180 180 0 00360 0c0-145-140-257-170-349z"/>
    </clipPath>
  </defs>

  <!-- floor shadow -->
  <ellipse cx="290" cy="604" rx="200" ry="13" fill="#0b2b4a" opacity=".08"/>

  <!-- soap bubbles -->
  <g fill="#fff" fill-opacity=".75" stroke="#8fcdf5" stroke-width="3">
    <circle cx="474" cy="132" r="27"/>
    <circle cx="520" cy="200" r="12"/>
    <circle cx="430" cy="70" r="9"/>
    <circle cx="34" cy="250" r="11"/>
  </g>
  <path d="M460 122c3-9 10-15 18-17" stroke="#fff" stroke-width="5" stroke-linecap="round"/>

  <!-- feet -->
  <ellipse cx="248" cy="584" rx="48" ry="17" fill="#0f7fd1"/>
  <ellipse cx="352" cy="584" rx="48" ry="17" fill="#0f7fd1"/>

  <!-- waving arm -->
  <g class="m-arm2">
    <path d="M452 404c38-8 60-34 68-68" stroke="#2aa3ec" stroke-width="32" stroke-linecap="round"/>
    <circle cx="521" cy="328" r="24" fill="#7dcdf9"/>
  </g>

  <!-- body -->
  <path class="m-body" d="M310 46c-30 92-190 204-190 349a180 180 0 00360 0c0-145-140-257-170-349z" fill="url(#m-body)"/>
  <path d="M176 404c0-70 34-134 78-184" stroke="#fff" stroke-width="14" stroke-linecap="round" opacity=".5"/>
  <circle cx="170" cy="446" r="8" fill="#fff" opacity=".5"/>

  <!-- apron -->
  <g clip-path="url(#m-clip)">
    <path d="M222 446h156v64c0 38-28 66-64 66h-28c-36 0-64-28-64-66z" fill="url(#m-apron)"/>
    <path d="M222 446l-34-30M378 446l34-30" stroke="#fff" stroke-width="8" stroke-linecap="round"/>
    <rect x="266" y="504" width="68" height="40" rx="12" stroke="#8fcdf5" stroke-width="3"/>
    <!-- H monogram -->
    <path d="M284 460v30M316 460v30M284 475h32" stroke="#0877c8" stroke-width="7" stroke-linecap="round"/>
  </g>

  <!-- face -->
  <g class="m-head">
    <g class="m-eye">
      <ellipse cx="258" cy="330" rx="24" ry="28" fill="#fff"/>
      <ellipse cx="261" cy="334" rx="12" ry="15" fill="#0b2b4a"/>
      <circle cx="266" cy="326" r="4.500" fill="#fff"/>
    </g>
    <g class="m-eye">
      <ellipse cx="346" cy="330" rx="24" ry="28" fill="#fff"/>
      <ellipse cx="349" cy="334" rx="12" ry="15" fill="#0b2b4a"/>
      <circle cx="354" cy="326" r="4.500" fill="#fff"/>
    </g>
    <ellipse cx="218" cy="374" rx="16" ry="9" fill="#ff9d7a" opacity=".55"/>
    <ellipse cx="386" cy="374" rx="16" ry="9" fill="#ff9d7a" opacity=".55"/>
    <path d="M274 374q28 36 56 0z" fill="#0b2b4a"/>
    <path d="M290 392q12 8 24 0-12-8-24 0z" fill="#ff8f8f"/>
  </g>

  <!-- mop -->
  <g class="m-vac">
    <rect x="90" y="96" width="20" height="450" rx="10" fill="url(#m-pole)" transform="rotate(6 100 320)"/>
    <rect x="84" y="84" width="32" height="42" rx="14" fill="#0877c8" transform="rotate(6 100 320)"/>
    <g fill="#fff" stroke="#b7dcf7" stroke-width="2.500">
      <rect x="14" y="544" width="22" height="58" rx="11"/>
      <rect x="34" y="544" width="22" height="68" rx="11"/>
      <rect x="54" y="544" width="22" height="60" rx="11"/>
      <rect x="74" y="544" width="22" height="70" rx="11"/>
      <rect x="94" y="544" width="22" height="62" rx="11"/>
      <rect x="114" y="544" width="22" height="56" rx="11"/>
    </g>
    <rect x="10" y="530" width="130" height="28" rx="14" fill="#075a9c"/>
    <rect x="26" y="538" width="46" height="8" rx="4" fill="#8fcdf5" opacity=".8"/>
  </g>

  <!-- arm on the mop -->
  <g class="m-arm">
    <path d="M152 392c-30 2-48 18-60 40" stroke="#2aa3ec" stroke-width="32" stroke-linecap="round"/>
    <circle cx="90" cy="434" r="24" fill="#7dcdf9"/>
    <path d="M74 426c9-8 22-8 32 0" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".6"/>
  </g>

  <!-- sparkles -->
  <g class="m-spark" fill="#ffd36b">
    <path d="M500 462l6 16 16 6-16 6-6 16-6-16-16-6 16-6z"/>
    <path d="M196 96l5 13 13 5-13 5-5 13-5-13-13-5 13-5z"/>
    <path d="M40 330l4 11 11 4-11 4-4 11-4-11-11-4 11-4z"/>
  </g>
</svg>`;

/* "Our Services": a bucket full of suds, a squeegee and a scrub brush. */
export const services = `
<svg viewBox="0 0 480 600" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="s-bucket" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="#6cc6f7"/>
      <stop offset="1" stop-color="#0877c8"/>
    </linearGradient>
    <linearGradient id="s-glass" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="#d9f0ff"/>
      <stop offset="1" stop-color="#a9dcfb"/>
    </linearGradient>
  </defs>
  <rect width="480" height="600" rx="16" fill="#eaf5fd"/>
  <circle cx="410" cy="80" r="96" fill="#fdf3e3"/>
  <circle cx="50" cy="540" r="120" fill="#f5fbff"/>

  <!-- window being cleaned -->
  <rect x="60" y="56" width="210" height="250" rx="18" fill="#fff"/>
  <rect x="76" y="72" width="178" height="218" rx="10" fill="url(#s-glass)"/>
  <path d="M76 190l178-90v46L76 236z" fill="#fff" opacity=".55"/>
  <path d="M76 262l178-90v18L76 280z" fill="#fff" opacity=".4"/>
  <rect x="161" y="72" width="8" height="218" fill="#fff"/>

  <!-- squeegee -->
  <g transform="rotate(24 330 250)">
    <rect x="322" y="150" width="16" height="230" rx="8" fill="#ffd36b"/>
    <rect x="318" y="330" width="24" height="60" rx="10" fill="#f0b03a"/>
    <rect x="262" y="124" width="136" height="24" rx="10" fill="#075a9c"/>
    <rect x="262" y="112" width="136" height="14" rx="4" fill="#0b2b4a"/>
  </g>

  <!-- bucket -->
  <ellipse cx="240" cy="556" rx="150" ry="14" fill="#0b2b4a" opacity=".08"/>
  <path d="M132 392c-10-96 226-96 216 0" stroke="#0b2b4a" stroke-width="8" stroke-linecap="round"/>
  <path d="M128 384h224l-22 150c-2 14-12 22-26 22H176c-14 0-24-8-26-22z" fill="url(#s-bucket)"/>
  <ellipse cx="240" cy="384" rx="112" ry="20" fill="#075a9c"/>
  <rect x="196" y="440" width="88" height="66" rx="12" fill="#fff" opacity=".95"/>
  <path d="M224 456v34M256 456v34M224 473h32" stroke="#0877c8" stroke-width="8" stroke-linecap="round"/>
  <path d="M150 410l12 110" stroke="#fff" stroke-width="8" stroke-linecap="round" opacity=".35"/>

  <!-- suds -->
  <g fill="#fff">
    <circle cx="176" cy="372" r="30"/>
    <circle cx="222" cy="352" r="38"/>
    <circle cx="272" cy="360" r="32"/>
    <circle cx="312" cy="376" r="24"/>
    <circle cx="246" cy="384" r="30"/>
  </g>
  <g fill="none" stroke="#cfe8fb" stroke-width="3" stroke-linecap="round">
    <path d="M200 340c8-12 24-16 38-10"/>
    <path d="M262 348c8-8 20-10 30-4"/>
    <path d="M160 366c4-8 12-12 20-12"/>
  </g>

  <!-- scrub brush -->
  <rect x="356" y="500" width="100" height="34" rx="14" fill="#ffd36b"/>
  <rect x="372" y="508" width="40" height="8" rx="4" fill="#fff" opacity=".7"/>
  <g stroke="#0877c8" stroke-width="6" stroke-linecap="round">
    <path d="M366 536v16M380 536v18M394 536v16M408 536v18M422 536v16M436 536v18M448 536v14"/>
  </g>

  <!-- bubbles -->
  <g fill="#fff" fill-opacity=".8" stroke="#8fcdf5" stroke-width="3">
    <circle cx="396" cy="330" r="28"/>
    <circle cx="436" cy="268" r="13"/>
    <circle cx="84" cy="372" r="18"/>
    <circle cx="52" cy="330" r="9"/>
  </g>
  <path d="M382 320c2-10 10-18 20-20" stroke="#fff" stroke-width="4" stroke-linecap="round"/>

  <!-- sparkles -->
  <g fill="#ffd36b">
    <path d="M214 120l6 16 16 6-16 6-6 16-6-16-16-6 16-6z"/>
    <path d="M120 226l4 11 11 4-11 4-4 11-4-11-11-4 11-4z"/>
  </g>
</svg>`;

/* "Meet our cleaners": a cleaner in the HOLYDJO-CLEAN uniform holding a spray bottle. */
export const cleaners = `
<svg viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="c-shirt" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="#58bef7"/>
      <stop offset="1" stop-color="#0877c8"/>
    </linearGradient>
    <clipPath id="c-clip"><circle cx="260" cy="260" r="260"/></clipPath>
  </defs>
  <circle cx="260" cy="260" r="260" fill="#eaf5fd"/>
  <g clip-path="url(#c-clip)">
    <circle cx="420" cy="110" r="120" fill="#fdf3e3"/>
    <circle cx="70" cy="430" r="110" fill="#f5fbff"/>

    <!-- raised arm with spray bottle -->
    <path d="M356 392c40-30 62-84 58-140" stroke="#58bef7" stroke-width="54" stroke-linecap="round"/>
    <circle cx="414" cy="238" r="30" fill="#c98f66"/>
    <g transform="rotate(-14 414 190)">
      <rect x="388" y="150" width="56" height="96" rx="16" fill="#fff"/>
      <rect x="398" y="186" width="36" height="34" rx="8" fill="#ffd36b"/>
      <rect x="404" y="122" width="24" height="32" rx="6" fill="#075a9c"/>
      <path d="M356 104h62c10 0 16 6 16 16v6h-78z" fill="#075a9c"/>
      <path d="M392 128c2 16-2 30-12 36-4-12-2-26 2-36z" fill="#0b2b4a"/>
    </g>
    <g fill="#8fcdf5">
      <circle cx="318" cy="96" r="5"/>
      <circle cx="298" cy="74" r="7"/>
      <circle cx="286" cy="110" r="4"/>
      <circle cx="270" cy="84" r="4"/>
    </g>

    <!-- body -->
    <path d="M92 560c0-110 70-184 168-184s168 74 168 184z" fill="url(#c-shirt)"/>
    <!-- neck -->
    <rect x="228" y="330" width="64" height="70" rx="26" fill="#b87f58"/>
    <!-- collar -->
    <path d="M214 384l46 40 46-40 18 22-64 54-64-54z" fill="#fff"/>
    <!-- apron bib -->
    <path d="M196 452h128v108H196z" fill="#fff"/>
    <path d="M196 452l-18-58M324 452l18-58" stroke="#fff" stroke-width="10" stroke-linecap="round"/>
    <path d="M244 476v30M276 476v30M244 491h32" stroke="#0877c8" stroke-width="8" stroke-linecap="round"/>

    <!-- head -->
    <ellipse cx="260" cy="262" rx="82" ry="94" fill="#c98f66"/>
    <!-- hair -->
    <path d="M178 250c0-64 36-104 82-104s82 40 82 104c-10-30-26-50-48-58-30 22-74 30-100 22-10 8-16 20-18 36z" fill="#3a2418"/>
    <!-- cap -->
    <path d="M176 214c4-58 40-92 84-92s80 34 84 92c-52-18-116-18-168 0z" fill="#0877c8"/>
    <path d="M168 220c58-22 126-22 184 0 6 2 6 12-2 12-60-12-120-12-180 0-8 0-8-10-2-12z" fill="#075a9c"/>
    <path d="M260 146c-5 10-16 18-16 30a16 16 0 0032 0c0-12-11-20-16-30z" fill="#fff"/>
    <!-- face -->
    <ellipse cx="230" cy="274" rx="8" ry="10" fill="#0b2b4a"/>
    <ellipse cx="290" cy="274" rx="8" ry="10" fill="#0b2b4a"/>
    <path d="M216 252c8-6 18-6 26 0M278 252c8-6 18-6 26 0" stroke="#3a2418" stroke-width="5" stroke-linecap="round"/>
    <ellipse cx="208" cy="304" rx="13" ry="7" fill="#ff9d7a" opacity=".5"/>
    <ellipse cx="312" cy="304" rx="13" ry="7" fill="#ff9d7a" opacity=".5"/>
    <path d="M234 310q26 28 52 0z" fill="#fff"/>
    <path d="M234 310q26 28 52 0" stroke="#0b2b4a" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <!-- sparkles -->
  <g fill="#ffd36b">
    <path d="M96 150l6 16 16 6-16 6-6 16-6-16-16-6 16-6z"/>
    <path d="M452 330l4 11 11 4-11 4-4 11-4-11-11-4 11-4z"/>
  </g>
</svg>`;

/* "Meet HOLYDJO-CLEAN": a bright reading corner with an armchair, a lamp and a sunny window. */
export const home = `
<svg viewBox="0 0 520 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="h-chair" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="#6cc6f7"/>
      <stop offset="1" stop-color="#0877c8"/>
    </linearGradient>
    <linearGradient id="h-sky" x1="0" y1="0" x2="0" y2="1">
      <stop stop-color="#a9dcfb"/>
      <stop offset="1" stop-color="#e3f4ff"/>
    </linearGradient>
  </defs>

  <!-- rug -->
  <ellipse cx="290" cy="378" rx="220" ry="26" fill="#fff"/>
  <ellipse cx="290" cy="378" rx="168" ry="17" fill="#ffd98a" opacity=".55"/>

  <!-- window -->
  <rect x="40" y="30" width="190" height="170" rx="18" fill="#fff"/>
  <rect x="56" y="46" width="158" height="138" rx="10" fill="url(#h-sky)"/>
  <circle cx="176" cy="84" r="18" fill="#ffd36b"/>
  <g fill="#fff">
    <ellipse cx="96" cy="100" rx="26" ry="12"/>
    <ellipse cx="116" cy="92" rx="18" ry="12"/>
    <ellipse cx="170" cy="140" rx="24" ry="10"/>
  </g>
  <rect x="131" y="46" width="8" height="138" fill="#fff"/>
  <rect x="56" y="111" width="158" height="8" fill="#fff"/>
  <rect x="30" y="196" width="210" height="14" rx="7" fill="#fff"/>

  <!-- plant -->
  <path d="M86 300c-34-18-42-70-16-96 18 26 18 60 16 96zM86 300c34-18 42-70 16-96-18 26-18 60-16 96zM88 302c-2-52 16-80 44-88-8 44-18 70-44 88z" fill="#5fc99a"/>
  <path d="M60 296h54l-6 60c-1 8-6 12-14 12H80c-8 0-13-4-14-12z" fill="#fff"/>
  <path d="M60 296h54l-2 16H62z" fill="#cfe8fb"/>

  <!-- floor lamp -->
  <path d="M452 150v214" stroke="#0b2b4a" stroke-width="6" stroke-linecap="round"/>
  <ellipse cx="452" cy="368" rx="34" ry="8" fill="#0b2b4a"/>
  <path d="M420 150l14-70h36l14 70z" fill="#ffd36b"/>
  <path d="M420 150h64l-4-20h-56z" fill="#f0b03a" opacity=".6"/>
  <path d="M408 168c20 10 68 10 88 0" stroke="#ffe7ad" stroke-width="6" stroke-linecap="round" opacity=".8"/>

  <!-- armchair -->
  <rect x="196" y="340" width="14" height="30" rx="6" fill="#075a9c"/>
  <rect x="380" y="340" width="14" height="30" rx="6" fill="#075a9c"/>
  <rect x="192" y="140" width="206" height="170" rx="46" fill="url(#h-chair)"/>
  <rect x="176" y="256" width="238" height="92" rx="28" fill="#2aa3ec"/>
  <rect x="160" y="222" width="52" height="126" rx="24" fill="#0877c8"/>
  <rect x="378" y="222" width="52" height="126" rx="24" fill="#0877c8"/>
  <rect x="252" y="196" width="86" height="70" rx="18" fill="#ffd36b"/>
  <path d="M270 214h50M270 230h34" stroke="#fff" stroke-width="6" stroke-linecap="round" opacity=".7"/>
  <path d="M224 176c20-16 60-22 96-14" stroke="#fff" stroke-width="8" stroke-linecap="round" opacity=".35"/>

  <!-- sparkles -->
  <g fill="#ffd36b">
    <path d="M300 70l6 16 16 6-16 6-6 16-6-16-16-6 16-6z"/>
    <path d="M494 250l4 11 11 4-11 4-4 11-4-11-11-4 11-4z"/>
    <path d="M150 250l4 11 11 4-11 4-4 11-4-11-11-4 11-4z"/>
  </g>
</svg>`;

/* Feature icons: two-tone, sky blue on a pale disc. */
const iconWrap = (inner) => `<svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="35" cy="35" r="35" fill="#eaf5fd"/>${inner}</svg>`;
export const icons = {
  /* phone with a confirmed booking */
  book: iconWrap(`<rect x="23" y="14" width="24" height="42" rx="6" fill="#bfe3fb" stroke="#0877c8" stroke-width="2.500"/><path d="M31 19h8" stroke="#0877c8" stroke-width="2.500" stroke-linecap="round"/><circle cx="35" cy="37" r="8" fill="#fff" stroke="#0877c8" stroke-width="2.500"/><path d="M31.500 37l2.500 2.500 4.500-5" stroke="#0877c8" stroke-width="2.500" stroke-linecap="round" stroke-linejoin="round"/>`),
  /* umbrella: covered and insured */
  shield: iconWrap(`<path d="M15 36a20 20 0 0140 0c-3-3-7-3-10 0-3-3-7-3-10 0-3-3-7-3-10 0-3-3-7-3-10 0z" fill="#bfe3fb" stroke="#0877c8" stroke-width="2.500" stroke-linejoin="round"/><path d="M35 16v-3M35 36v15a4 4 0 01-8 0" stroke="#0877c8" stroke-width="2.500" stroke-linecap="round"/>`),
  /* key: private and secure */
  lock: iconWrap(`<circle cx="27" cy="29" r="9" fill="#bfe3fb" stroke="#0877c8" stroke-width="2.500"/><circle cx="27" cy="29" r="2.500" fill="#0877c8"/><path d="M33.500 35.500L52 54M45 47l4-4M49.500 51.500l3-3" stroke="#0877c8" stroke-width="2.500" stroke-linecap="round"/>`),
  /* price tag with a percent sign */
  repeat: iconWrap(`<path d="M17 20a3 3 0 013-3h14l19 19a3 3 0 010 4L41 52a3 3 0 01-4 0L17 33z" fill="#bfe3fb" stroke="#0877c8" stroke-width="2.500" stroke-linejoin="round"/><circle cx="25" cy="25" r="2.500" fill="#0877c8"/><path d="M33 43l10-10" stroke="#0877c8" stroke-width="2.500" stroke-linecap="round"/><circle cx="34" cy="35" r="2" fill="#0877c8"/><circle cx="42" cy="41" r="2" fill="#0877c8"/>`),
};

/* Team portraits: flat avatars in the HOLYDJO-CLEAN uniform. */
export function portrait(seed, tone = '#0877c8') {
  const skins = ['#f1c7a5', '#d6a078', '#a56a48', '#f6d6c2', '#8a573a', '#deae8c'];
  const hairs = ['#2a2017', '#5a3b22', '#0b2b4a', '#c9813a', '#151515', '#8c4a2f'];
  const skin = skins[seed % skins.length];
  const hair = hairs[(seed * 3) % hairs.length];
  const bg = seed % 2 ? '#eaf5fd' : '#fdf3e3';
  const long = seed % 3 === 0;
  const cap = seed % 4 === 1;
  return `
<svg viewBox="0 0 320 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <rect width="320" height="400" fill="${bg}"/>
  <circle cx="${seed % 2 ? 250 : 70}" cy="90" r="78" fill="#fff" opacity=".7"/>
  <g fill="#fff" fill-opacity=".8" stroke="#8fcdf5" stroke-width="2.500">
    <circle cx="${seed % 2 ? 52 : 268}" cy="${120 + (seed % 3) * 22}" r="13"/>
    <circle cx="${seed % 2 ? 76 : 244}" cy="${84 + (seed % 3) * 22}" r="6"/>
  </g>
  ${long ? `<path d="M92 178c-10 40-6 88 8 112h120c14-24 18-72 8-112z" fill="${hair}"/>` : ''}
  <path d="M34 400c0-74 56-124 126-124s126 50 126 124z" fill="${tone}"/>
  <rect x="130" y="238" width="60" height="58" rx="22" fill="${skin}"/>
  <path d="M122 284l38 34 38-34 14 18-52 46-52-46z" fill="#fff"/>
  <path d="M116 344h88v56h-88z" fill="#fff"/>
  <path d="M148 360v22M172 360v22M148 371h24" stroke="${tone}" stroke-width="6" stroke-linecap="round"/>
  <ellipse cx="160" cy="176" rx="62" ry="72" fill="${skin}"/>
  <path d="M98 172c-4-54 24-92 62-92s66 38 62 92c-10-28-24-44-40-50-24 16-58 20-76 14-4 8-7 20-8 36z" fill="${hair}"/>
  ${cap ? `<path d="M98 146c4-42 30-68 62-68s58 26 62 68c-40-14-84-14-124 0z" fill="${tone}"/><path d="M92 150c44-16 92-16 136 0 5 2 4 9-2 9-44-9-88-9-132 0-6 0-7-7-2-9z" fill="#075a9c"/>` : ''}
  <ellipse cx="138" cy="182" rx="6" ry="7.500" fill="#0b2b4a"/>
  <ellipse cx="182" cy="182" rx="6" ry="7.500" fill="#0b2b4a"/>
  <ellipse cx="124" cy="204" rx="9" ry="5" fill="#ff9d7a" opacity=".5"/>
  <ellipse cx="196" cy="204" rx="9" ry="5" fill="#ff9d7a" opacity=".5"/>
  <path d="M144 208q16 16 32 0" stroke="#0b2b4a" stroke-width="4" stroke-linecap="round"/>
</svg>`;
}

export const social = {
  fb: `<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M25 15h-1.5a2.5 2.5 0 00-2.5 2.5V29M18.5 21.5h6" /></svg>`,
  ig: `<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2"><rect x="15" y="15" width="14" height="14" rx="4.5" /><circle cx="22" cy="22" r="3.2" /><circle cx="26.2" cy="17.8" r=".6" fill="currentColor" /></svg>`,
};

export const userIcon = `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="8" cy="5" r="3.2" /><path d="M2 14.5c1.2-2.6 3.4-4 6-4s4.800 1.400 6 4" /></svg>`;

export const menuIcon = `<svg viewBox="0 0 36 22" xmlns="http://www.w3.org/2000/svg">
  <circle cx="3" cy="11" r="2.6"/><circle cx="18" cy="11" r="2.6"/><circle cx="33" cy="11" r="2.6"/>
  <line class="line" x1="8" y1="1" x2="28" y2="21"/><line class="line" x1="28" y1="1" x2="8" y2="21"/>
</svg>`;

/* Loader mark: the mascot's face on a white drop, shown on the blue loading disc. */
export const loaderMark = `
<svg class="loader-mark" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M104 14c-16 52-84 96-84 150a80 80 0 00160 0c0-54-60-98-76-150z" fill="#fff"/>
  <path d="M46 168c0-30 14-56 34-78" stroke="#bfe3fb" stroke-width="9" stroke-linecap="round"/>
  <ellipse cx="80" cy="150" rx="10" ry="13" fill="#0b2b4a"/>
  <ellipse cx="124" cy="150" rx="10" ry="13" fill="#0b2b4a"/>
  <circle cx="84" cy="145" r="3.500" fill="#fff"/>
  <circle cx="128" cy="145" r="3.500" fill="#fff"/>
  <ellipse cx="62" cy="174" rx="10" ry="6" fill="#ff9d7a" opacity=".6"/>
  <ellipse cx="142" cy="174" rx="10" ry="6" fill="#ff9d7a" opacity=".6"/>
  <path d="M88 176q14 18 28 0z" fill="#0b2b4a"/>
  <path d="M164 40l5 13 13 5-13 5-5 13-5-13-13-5 13-5z" fill="#ffd36b"/>
</svg>`;
