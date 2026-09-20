/* ==========================================================================
   site.js — shared header, footer and small utilities.
   Loaded on every page BEFORE data.js and app.js.
   ========================================================================== */

const NAV_LINKS = [
  { href: "index.html", label: "Home" },
  { href: "prayer.html", label: "Prayer" },
  { href: "community.html", label: "Community" },
  { href: "learn.html", label: "Learn" },
  { href: "guides.html", label: "Guides" },
  { href: "events.html", label: "Events" },
  { href: "qna.html", label: "Q&A" },
  { href: "about.html", label: "About" },
];

function renderHeader() {
  const host = document.getElementById("site-header");
  if (!host) return;
  const current = document.body.dataset.page || "";
  const links = NAV_LINKS.map(
    (l) =>
      `<a href="${l.href}" ${l.href.replace(".html", "") === current ? 'aria-current="page"' : ""}>${l.label}</a>`
  ).join("");

  host.innerHTML = `
    <nav class="nav">
      <a class="nav__brand" href="index.html">
        <span class="nav__mark">IS</span>
        ISOC DMU
      </a>
      <ul class="nav__links" id="nav-links">${links}</ul>
      <div class="nav__actions">
        <a class="btn btn-ghost" href="qna.html">Ask a question</a>
        <a class="btn btn-primary" href="donate.html">Donate</a>
        <button class="nav__toggle" id="nav-toggle" aria-label="Open menu" aria-expanded="false">
          <span></span>
        </button>
      </div>
    </nav>
  `;

  const toggle = document.getElementById("nav-toggle");
  const list = document.getElementById("nav-links");
  toggle.addEventListener("click", () => {
    const open = list.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

function renderFooter() {
  const host = document.getElementById("site-footer");
  if (!host) return;
  host.innerHTML = `
    <div class="container">
      <div class="footer__grid">
        <div>
          <h4 style="color:var(--paper-high); font-family:var(--font-display); font-size:1.1rem; text-transform:none; letter-spacing:0;">ISOC DMU</h4>
          <p class="small" style="color:rgba(244,239,226,.7); max-width:32ch;">Creating Unity in Times of Division. DMU Prayer Room, Portland Building, Newarke Close, Leicester, LE2 7GZ.</p>
        </div>
        <div>
          <h4>Learn</h4>
          <ul>
            <li><a href="learn.html">Learn hub</a></li>
            <li><a href="guides.html">Guides</a></li>
            <li><a href="prayer.html">Prayer times</a></li>
          </ul>
        </div>
        <div>
          <h4>Society</h4>
          <ul>
            <li><a href="community.html">Sisters' &amp; Brothers' Corners</a></li>
            <li><a href="events.html">Events</a></li>
            <li><a href="qna.html">Ask a question</a></li>
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul>
            <li><a href="mailto:islamicsociety@demontfortsu.com">islamicsociety@demontfortsu.com</a></li>
            <li><a href="https://instagram.com/dmuisoc" target="_blank" rel="noopener">Instagram @dmuisoc</a></li>
            <li><a href="donate.html">Donate</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <span>© <span id="year"></span> ISOC DMU · Islamic Society, De Montfort University</span>
        <span>Prayer times are calculated locally and are a guide, not a ruling.</span>
      </div>
    </div>
  `;
  document.getElementById("year").textContent = new Date().getFullYear();
}

/* ---------- small reusable UI behaviours ---------- */

function initTabs(root) {
  const buttons = root.querySelectorAll(".tabs__btn");
  const panels = root.querySelectorAll(".tabs__panel");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.setAttribute("aria-selected", "false"));
      panels.forEach((p) => p.classList.remove("is-active"));
      btn.setAttribute("aria-selected", "true");
      root.querySelector(`#${btn.dataset.target}`).classList.add("is-active");
    });
  });
}

function initAccordion(root) {
  root.querySelectorAll(".accordion__item").forEach((item) => {
    const q = item.querySelector(".accordion__q");
    const a = item.querySelector(".accordion__a");
    q.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      root.querySelectorAll(".accordion__item").forEach((i) => {
        i.classList.remove("is-open");
        i.querySelector(".accordion__a").style.maxHeight = null;
        i.querySelector(".plus").textContent = "+";
      });
      if (!isOpen) {
        item.classList.add("is-open");
        a.style.maxHeight = a.scrollHeight + "px";
        q.querySelector(".plus").textContent = "–";
      }
    });
  });
}

/* Renders a countdown "prayer ring" into a container.
   data: { name, at (HH:MM 24h today), progressPct 0-100 } */
function renderPrayerRing(container, { name, countdownText, progressPct }) {
  const r = 84;
  const c = 2 * Math.PI * r;
  const offset = c - (progressPct / 100) * c;
  container.innerHTML = `
    <div class="ring-wrap">
      <svg viewBox="0 0 200 200">
        <circle class="ring-track" cx="100" cy="100" r="${r}"></circle>
        <circle class="ring-progress" cx="100" cy="100" r="${r}"
          stroke-dasharray="${c}" stroke-dashoffset="${offset}"></circle>
      </svg>
      <div class="ring-center">
        <span class="label">Next prayer</span>
        <span class="name">${name}</span>
        <span class="count">${countdownText}</span>
      </div>
    </div>
  `;
}

function formatCountdown(ms) {
  if (ms < 0) ms = 0;
  const totalMin = Math.floor(ms / 60000);
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
});
