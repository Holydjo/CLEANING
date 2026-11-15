import { brand, nav } from './data.js';
import { social, userIcon, menuIcon, glove } from './illustrations.js';

const page = document.body.dataset.page || '';

function isCurrent(href) {
  return href.replace('.html', '') === page;
}

export function renderPreloader() {
  const el = document.createElement('div');
  el.className = 'preload';
  el.innerHTML = `
    <div class="load">
      <div class="anim-hand">
        <div class="circle">
          <span class="bubble" style="width:18px;height:18px;left:22%;top:70%"></span>
          <span class="bubble" style="width:10px;height:10px;left:68%;top:62%"></span>
          <span class="bubble" style="width:26px;height:26px;left:72%;top:22%"></span>
          ${glove}
        </div>
      </div>
      <div class="perc">0%</div>
      <small>Tidying up, one moment</small>
    </div>`;
  document.body.prepend(el);
  return el;
}

export function renderHeader() {
  const header = document.createElement('header');
  header.id = 'header';
  header.innerHTML = `
    <div class="flex flex-just-b flex-center-v">
      <a href="index.html" class="logo" aria-label="${brand.name} home">
        <span class="main">${brand.name}</span>
        <span class="desc">${brand.tagline}</span>
      </a>
      <div class="controls">
        <a href="signin.html" class="controls-login">${userIcon}<span>Login</span></a>
        <button class="controls-menu" aria-label="Open menu" aria-expanded="false" aria-controls="main-menu">${menuIcon}</button>
      </div>
    </div>`;

  const menu = document.createElement('nav');
  menu.id = 'main-menu';
  menu.setAttribute('aria-label', 'Main');
  menu.innerHTML = `
    <div class="menu-back">
      <span class="menu-blob b1"></span>
      <span class="menu-blob b2"></span>
    </div>
    <div class="wrap" data-lenis-prevent>
      <div class="menu-side">
        <div>
          <div class="ttl">Contacts</div>
          <div class="values">
            <div class="value"><div class="name">E-Mail</div><a class="val" href="mailto:${brand.email}">${brand.email}</a></div>
            <div class="value"><div class="name">Phone</div><a class="val" href="${brand.phoneHref}">${brand.phone}</a></div>
          </div>
          <div class="social">
            <a href="#" aria-label="Facebook">${social.fb}</a>
            <a href="#" aria-label="Instagram">${social.ig}</a>
          </div>
        </div>
        <div>
          <div class="ttl">Business hours (EST)</div>
          <div class="values">
            ${brand.hours.map((h) => `<div class="value"><div class="name">${h.days}</div><div class="val">${h.time}</div></div>`).join('')}
          </div>
        </div>
      </div>
      <div class="menu-nav">
        <ul>
          ${nav.map((n) => `<li><a href="${n.href}" class="${isCurrent(n.href) ? 'is-current' : ''}">${n.label}</a></li>`).join('')}
          <li><a href="booking.html">Book cleaning</a></li>
        </ul>
      </div>
      <div class="menu-foot">
        <span>New York, NY</span>
        <span>Get your life back!</span>
      </div>
    </div>`;

  document.body.prepend(menu);
  document.body.prepend(header);
  return { header, menu };
}

export function renderFooter() {
  const footer = document.createElement('footer');
  footer.id = 'footer';
  footer.innerHTML = `
    <div class="wrap">
      <div class="top">
        <div>
          <a href="index.html" class="logo">${brand.name}</a>
          <p class="copy">Copyright © ${new Date().getFullYear()} Oboosho.<br>All rights reserved.</p>
        </div>
        <div class="footer-menu">
          <div class="menu"><ul>
            <li><a href="about.html">About us</a></li>
            <li><a href="team.html">Team</a></li>
            <li><a href="contacts.html">Contact Us</a></li>
          </ul></div>
          <div class="menu"><ul>
            <li><a href="services.html">Our Services</a></li>
            <li><a href="faq.html">Frequently Asked Questions</a></li>
            <li><a href="careers.html">Become a Cleaner</a></li>
          </ul></div>
          <div class="menu"><ul>
            <li><a href="booking.html">Book cleaning</a></li>
            <li><a href="signin.html">Sign in</a></li>
          </ul></div>
        </div>
        <div class="subinfo">
          <b>Get your life back!</b>
          <div class="social">
            <a href="#" aria-label="Facebook">${social.fb}</a>
            <a href="#" aria-label="Instagram">${social.ig}</a>
          </div>
        </div>
      </div>
      <div class="btm">
        <div class="legal"><a href="#">Terms and Conditions</a><a href="#">Privacy Policy</a></div>
        <div class="creator">Unofficial design study inspired by the 2019 <b>Oboosho</b> site · not affiliated</div>
      </div>
    </div>`;
  document.body.append(footer);
  return footer;
}
