/* ==========================================================================
   app.js — turns the arrays in data.js into the actual page content,
   and wires up interactive bits (tabs, accordion, search, countdown, forms).
   ========================================================================== */

/* ---------- prayer time helpers, shared by index.html and prayer.html ---------- */

function todayKey() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

function getTimetableRow() {
  return (
    PRAYER_TIMETABLE.find((r) => r.date === todayKey()) ||
    PRAYER_TIMETABLE[PRAYER_TIMETABLE.length - 1]
  );
}

function prayerTimesForRow(row) {
  const order = ["fajr", "dhuhr", "asr", "maghrib", "isha"];
  const names = { fajr: "Fajr", dhuhr: "Dhuhr", asr: "Asr", maghrib: "Maghrib", isha: "Isha" };
  const base = row.date;
  return order.map((key) => {
    const [h, m] = row[key].split(":").map(Number);
    const dt = new Date(base + "T00:00:00");
    dt.setHours(h, m, 0, 0);
    return { key, name: names[key], time: dt, begins: row[key] };
  });
}

function findNextPrayer() {
  const row = getTimetableRow();
  const times = prayerTimesForRow(row);
  const now = new Date();
  for (let i = 0; i < times.length; i++) {
    if (times[i].time > now) {
      const prev = i === 0 ? null : times[i - 1].time;
      return { current: times[i], prevTime: prev, allToday: times };
    }
  }
  // after isha: next prayer is fajr, shown as "tomorrow"
  return { current: { ...times[0], name: times[0].name + " (tomorrow)" }, prevTime: times[times.length - 1].time, allToday: times };
}

function updatePrayerRing(container) {
  if (!container) return;
  const { current, prevTime } = findNextPrayer();
  const now = new Date();
  const msToNext = current.time - now;
  const msWindow = prevTime ? current.time - prevTime : 6 * 60 * 60 * 1000;
  const elapsed = prevTime ? now - prevTime : msWindow - msToNext;
  const progressPct = Math.max(0, Math.min(100, (elapsed / msWindow) * 100));
  renderPrayerRing(container, {
    name: current.name,
    countdownText: formatCountdown(msToNext) + " to go",
    progressPct,
  });
}

function hijriToday() {
  try {
    const fmt = new Intl.DateTimeFormat("en-u-ca-islamic-umalqura", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return fmt.format(new Date());
  } catch (e) {
    return "Hijri date unavailable in this browser";
  }
}

/* ---------- HOME ---------- */
function renderHome() {
  const ringHost = document.getElementById("home-ring");
  if (ringHost) {
    updatePrayerRing(ringHost);
    setInterval(() => updatePrayerRing(ringHost), 30000);
  }

  const reminder = REMINDERS[0];
  const reminderHost = document.getElementById("home-reminder");
  if (reminderHost) {
    reminderHost.innerHTML = `<p style="font-family:var(--font-display); font-size:1.3rem; margin-bottom:.3em;">"${reminder.text}"</p><p class="meta">${reminder.source}</p>`;
  }

  const eventsHost = document.getElementById("home-events");
  if (eventsHost) {
    eventsHost.innerHTML = EVENTS.slice(0, 3)
      .map(
        (ev) => `
      <div class="card">
        <span class="tag">${ev.audience}</span>
        <h3>${ev.title}</h3>
        <p class="meta">${ev.when} · ${ev.where}</p>
        <p>${ev.blurb}</p>
      </div>`
      )
      .join("");
  }

  const blogHost = document.getElementById("home-blog");
  if (blogHost) {
    blogHost.innerHTML = BLOG_ARTICLES.map(
      (a) => `
      <div class="card">
        <span class="tag">${a.kicker}</span>
        <h3>${a.title}</h3>
        <p>${a.blurb}</p>
        <a class="btn-link" href="learn.html">Read →</a>
      </div>`
    ).join("");
  }
}

/* ---------- PRAYER PAGE ---------- */
function renderPrayerPage() {
  const ringHost = document.getElementById("prayer-ring");
  if (ringHost) {
    updatePrayerRing(ringHost);
    setInterval(() => updatePrayerRing(ringHost), 30000);
  }

  const tableHost = document.getElementById("prayer-table-body");
  if (tableHost) {
    const today = todayKey();
    tableHost.innerHTML = PRAYER_TIMETABLE.map((row) => {
      const times = prayerTimesForRow(row);
      return times
        .map(
          (t) => `
        <tr class="${row.date === today ? "is-next" : ""}">
          <td>${t.name}</td>
          <td>${t.begins}</td>
          <td>${addMinutes(t.begins, JAMAAH_OFFSET_MIN[t.key])}</td>
          <td>Prayer Room</td>
        </tr>`
        )
        .join("");
    }).join("");
  }

  const qiblaEl = document.getElementById("qibla-degrees");
  if (qiblaEl) qiblaEl.textContent = QIBLA_DEGREES;
  const qiblaNeedle = document.getElementById("qibla-needle");
  if (qiblaNeedle) qiblaNeedle.style.transform = `rotate(${QIBLA_DEGREES}deg)`;

  const jumuahHost = document.getElementById("jumuah-times");
  if (jumuahHost) jumuahHost.textContent = JUMUAH_TIMES.join(" · ");

  const hijriEl = document.getElementById("hijri-today");
  if (hijriEl) hijriEl.textContent = hijriToday();

  const occHost = document.getElementById("islamic-occasions");
  if (occHost) {
    occHost.innerHTML = ISLAMIC_OCCASIONS.map(
      (o) => `
      <div class="card">
        <h3>${o.name}</h3>
        <p class="meta">${o.when} · ${o.note}</p>
        <p class="tag">${o.away}</p>
      </div>`
    ).join("");
  }

  const monthsHost = document.getElementById("hijri-months");
  if (monthsHost) {
    monthsHost.innerHTML = HIJRI_MONTHS.map(
      (m, i) => `<div class="card"><span class="meta">Month ${i + 1}</span><h3>${m}</h3></div>`
    ).join("");
  }

  const masjidHost = document.getElementById("nearby-masjids");
  if (masjidHost) {
    masjidHost.innerHTML = NEARBY_MASJIDS.map((m) => `<div class="card"><h3>${m.name}</h3><p class="meta">${m.note}</p></div>`).join("");
  }
  const foodHost = document.getElementById("nearby-food");
  if (foodHost) {
    foodHost.innerHTML = NEARBY_HALAL_FOOD.map((f) => `<div class="card"><h3>${f.name}</h3><p class="meta">${f.note}</p></div>`).join("");
  }
}

function addMinutes(hhmm, mins) {
  const [h, m] = hhmm.split(":").map(Number);
  const d = new Date(2000, 0, 1, h, m + mins);
  return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
}

/* ---------- COMMUNITY PAGE ---------- */
function renderCommunityPage() {
  Object.entries(CORNERS).forEach(([key, corner]) => {
    const host = document.getElementById(`corner-${key}`);
    if (!host) return;
    host.innerHTML = `
      <h2>${corner.title}</h2>
      <p class="lede">${corner.intro}</p>
      <div class="grid grid--2" style="margin:24px 0;">
        ${corner.items
          .map(
            (it) => `
          <div class="card">
            <h3>${it.title}</h3>
            <p class="meta">${it.when}</p>
            <p>${it.blurb}</p>
          </div>`
          )
          .join("")}
      </div>
      <p><strong>Your space:</strong> ${corner.room}</p>
      <p><strong>Who to speak to:</strong> ${corner.contact}</p>
    `;
  });
  const root = document.getElementById("community-tabs");
  if (root) initTabs(root);
}

/* ---------- LEARN PAGE ---------- */
function renderLearnPage() {
  fillList("learn-cards", LEARN_CARDS, (c) => `
    <div class="card">
      <span class="tag">${c.kicker}</span>
      <h3>${c.title}</h3>
      <p>${c.blurb}</p>
      <a class="btn-link" href="#">${c.link}</a>
    </div>`);

  fillList("new-muslim-steps", NEW_MUSLIM_STEPS, (s) => `
    <div class="card"><span class="step-n">${s.n}</span><h3>${s.title}</h3><p>${s.blurb}</p></div>`);

  fillList("study-courses", STUDY_COURSES, (c) => `
    <div class="card"><h3>${c.name}</h3><p>${c.blurb}</p><a class="btn-link" href="#">Visit →</a></div>`);

  fillList("recommended-apps", RECOMMENDED_APPS, (a) => `
    <div class="card"><h3>${a.name}</h3><p>${a.blurb}</p><a class="btn-link" href="#">${a.cta} →</a></div>`);

  fillList("book-library", BOOK_LIBRARY, (b) => `
    <div class="card">
      <span class="tag">${b.level}</span>
      <h3>${b.title}</h3>
      <p class="meta">${b.author}</p>
      <p>${b.blurb}</p>
      <p class="meta">${b.meta}</p>
      <a class="btn-link" href="#">${b.cta} →</a>
    </div>`);

  fillList("prophets-list", PROPHETS, (p) => `
    <div class="card"><span class="meta">${p.n}</span><h3>${p.name}</h3><p>${p.hook}</p></div>`);
  fillList("companions-list", COMPANIONS, (c) => `
    <div class="card"><h3>${c.name}</h3><p>${c.hook}</p></div>`);
  fillList("women-list", WOMEN_IN_ISLAM, (w) => `
    <div class="card"><h3>${w.name}</h3><p>${w.hook}</p></div>`);
  fillList("women-topics", WOMEN_TOPICS, (w) => `
    <div class="card"><h3>${w.title}</h3><p>${w.blurb}</p></div>`);

  fillList("reminders-list", REMINDERS, (r) => `
    <div class="card"><p style="font-family:var(--font-display); font-size:1.1rem;">"${r.text}"</p><p class="meta">${r.source}</p></div>`);
  fillList("blog-list", BLOG_ARTICLES, (a) => `
    <div class="card"><span class="tag">${a.kicker}</span><h3>${a.title}</h3><p>${a.blurb}</p><a class="btn-link" href="#">Read →</a></div>`);

  const root = document.getElementById("stories-tabs");
  if (root) initTabs(root);
}

/* ---------- GUIDES PAGE ---------- */
function renderGuidesPage() {
  const host = document.getElementById("guides-list");
  if (!host) return;
  host.innerHTML = GUIDES.map(
    (g, i) => `
    <div class="card" id="guide-${i}">
      <span class="tag">${g.tag}</span>
      <h3>${g.title}</h3>
      <p class="meta">${g.read} · ${g.updated}</p>
      <p>${g.blurb}</p>
      <button class="btn btn-ghost guide-toggle" data-target="guide-body-${i}">Read the guide →</button>
      <div class="guide-body" id="guide-body-${i}" style="display:none; margin-top:18px;">
        <p>${g.intro}</p>
        ${g.sections.map((s) => `<h4>${s.h}</h4><p>${s.p}</p>`).join("")}
        <p><strong>Checklist</strong></p>
        <ul>${g.checklist.map((c) => `<li>${c}</li>`).join("")}</ul>
      </div>
    </div>`
  ).join("");

  host.querySelectorAll(".guide-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const body = document.getElementById(btn.dataset.target);
      const open = body.style.display === "block";
      body.style.display = open ? "none" : "block";
      btn.textContent = open ? "Read the guide →" : "Hide guide";
    });
  });
}

/* ---------- EVENTS PAGE ---------- */
function renderEventsPage() {
  const host = document.getElementById("events-list");
  const tabsRoot = document.getElementById("events-filter");
  if (!host) return;

  function draw(filter) {
    const list = filter === "All" ? EVENTS : EVENTS.filter((e) => e.audience === filter);
    host.innerHTML = list
      .map(
        (ev) => `
      <div class="card">
        <span class="tag">${ev.audience}</span>
        <h3>${ev.title}</h3>
        <p class="meta">${ev.when} · ${ev.where}</p>
        <p>${ev.blurb}</p>
      </div>`
      )
      .join("") || `<p class="small">No events under this filter yet — check back soon.</p>`;
  }
  draw("All");

  if (tabsRoot) {
    tabsRoot.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        tabsRoot.querySelectorAll("button").forEach((b) => b.setAttribute("aria-selected", "false"));
        btn.setAttribute("aria-selected", "true");
        draw(btn.dataset.filter);
      });
    });
  }
}

/* ---------- Q&A PAGE ---------- */
function renderQnaPage() {
  const host = document.getElementById("qna-answered");
  if (host) {
    host.innerHTML = QNA_ANSWERED.map(
      (q) => `
      <div class="accordion__item">
        <button class="accordion__q"><span>${q.question}</span><span class="plus">+</span></button>
        <div class="accordion__a"><p><span class="tag">${q.mark}</span><br>${q.answer}</p></div>
      </div>`
    ).join("");
    initAccordion(host);
  }

  const form = document.getElementById("qna-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const status = document.getElementById("qna-status");
      status.textContent = "Question received — the educational team will research it and publish an answer, usually within a week.";
      status.classList.add("is-visible");
      form.reset();
    });
  }
}

/* ---------- ABOUT PAGE ---------- */
function renderAboutPage() {
  fillList("volunteer-roles", VOLUNTEER_ROLES, (r) => `
    <div class="card"><h3>${r.title}</h3><p>${r.blurb}</p></div>`);
  fillList("committee-list", COMMITTEE, (c) => `
    <div class="card"><span class="tag">${c.role}</span><h3>${c.name}</h3><p>${c.blurb}</p></div>`);
}

/* ---------- DONATE PAGE ---------- */
function renderDonatePage() {
  fillList("donate-tiers", DONATE_TIERS, (t) => `
    <div class="card center"><h3>${t.amount}</h3><p>${t.covers}</p></div>`);
  const splitHost = document.getElementById("donate-split");
  if (splitHost) {
    splitHost.innerHTML = DONATE_SPLIT.map(
      (s) => `
      <div class="stack" style="margin-bottom:14px;">
        <div style="display:flex; justify-content:space-between; font-weight:600;"><span>${s.label}</span><span>${s.pct}</span></div>
        <div style="height:8px; background:var(--line); border-radius:99px; overflow:hidden;">
          <div style="width:${s.pct}; height:100%; background:var(--gold);"></div>
        </div>
      </div>`
    ).join("");
  }
}

/* ---------- SITE SEARCH (used in header on every page, if #global-search exists) ---------- */
function initSiteSearch() {
  const input = document.getElementById("global-search-input");
  const results = document.getElementById("global-search-results");
  if (!input || !results) return;
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (!q) {
      results.innerHTML = "";
      return;
    }
    const hits = SEARCH_INDEX.filter(
      (item) => item.title.toLowerCase().includes(q) || item.blurb.toLowerCase().includes(q)
    );
    results.innerHTML =
      hits.length === 0
        ? `<p class="small">Nothing matched that. <a class="btn-link" href="qna.html">Ask us instead</a></p>`
        : hits
            .map(
              (h) => `<a class="search-hit" href="${h.href}"><span class="tag">${h.kind}</span><br><strong>${h.title}</strong><br><span class="small">${h.blurb}</span></a>`
            )
            .join("");
  });
}

/* ---------- small helper ---------- */
function fillList(id, arr, tpl) {
  const host = document.getElementById(id);
  if (!host) return;
  host.innerHTML = arr.map(tpl).join("");
}

/* ---------- dispatch by page ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  const map = {
    home: renderHome,
    prayer: renderPrayerPage,
    community: renderCommunityPage,
    learn: renderLearnPage,
    guides: renderGuidesPage,
    events: renderEventsPage,
    qna: renderQnaPage,
    about: renderAboutPage,
    donate: renderDonatePage,
  };
  if (map[page]) map[page]();
  initSiteSearch();
});
