/* ==========================================================================
   data.js — EVERYTHING ON THIS SITE THAT CHANGES LIVES HERE.
   To update the website, edit the values below. You do not need to touch
   any .html file. Keep the {{ }}-style structure (commas, quotes) intact —
   if you're not sure, ask Claude to help you edit this file.
   ========================================================================== */

/* ---------- 1. PRAYER TIMETABLE ----------
   Add one row per day for the current month. Times are 24-hour "HH:MM".
   Update this at the start of each month (the site content said the
   committee publishes this monthly — this is where that goes). */
const PRAYER_TIMETABLE = [
  // date "YYYY-MM-DD", then begins time for each prayer
  { date: "2026-08-23", fajr: "04:12", dhuhr: "13:15", asr: "16:55", maghrib: "20:05", isha: "21:35" },
  { date: "2026-08-24", fajr: "04:14", dhuhr: "13:15", asr: "16:53", maghrib: "20:02", isha: "21:32" },
  { date: "2026-08-25", fajr: "04:16", dhuhr: "13:14", asr: "16:52", maghrib: "20:00", isha: "21:29" },
];
// Jamaah (congregation) is usually a few minutes after "begins" — set the gap here:
const JAMAAH_OFFSET_MIN = { fajr: 15, dhuhr: 10, asr: 10, maghrib: 5, isha: 10 };
const JUMUAH_TIMES = ["13:15", "13:45", "14:15"]; // brothers' room runs multiple jamaahs — edit as needed

const QIBLA_DEGREES = 119; // degrees from true north, for Leicester — roughly south-east

/* ---------- 2. EVENTS ---------- */
const EVENTS = [
  {
    audience: "Everyone",
    title: "Weekly Halaqah",
    when: "Every Wednesday, 6:00–7:30pm",
    where: "Prayer Room, Portland Building",
    blurb: "A short talk followed by open discussion and tea. Different topic each week.",
  },
  {
    audience: "Sisters",
    title: "Sisters' Sunday Social",
    when: "First Sunday of the month, 2:00pm",
    where: "Room 00.27",
    blurb: "Tea, crafts, and conversation — bring a friend, everyone's welcome.",
  },
  {
    audience: "Brothers",
    title: "Brothers' Football",
    when: "Every Friday after Jumu'ah",
    where: "Campus sports pitch",
    blurb: "Casual five-a-side, all levels. Boots not required.",
  },
  {
    audience: "Everyone",
    title: "Discussion Night: Ask Anything",
    when: "Last Thursday of the month, 6:30pm",
    where: "Prayer Room",
    blurb: "An open, judgement-free space for questions about Islam — for Muslims and non-Muslims alike.",
  },
];

/* ---------- 3. GUIDES ---------- */
const GUIDES = [
  {
    tag: "Freshers",
    title: "Finding the prayer room on your first week",
    blurb: "Where it is, when it's open, and what to expect if you've never used one before.",
    read: "3 min read",
    updated: "Updated Aug 2026",
    intro: "Everyone remembers being lost on their first day. Here's the short version.",
    sections: [
      { h: "Where it actually is", p: "Portland Building, Newarke Close — go in through the main entrance and head down one level. Follow the signs or ask any student wearing a lanyard." },
      { h: "What to bring", p: "Nothing, honestly. Ablution facilities and prayer mats are provided in both rooms." },
    ],
    checklist: ["Find Portland Building on the campus map", "Note the room numbers: 00.31 (brothers), 00.27 (sisters)", "Say salaam to whoever's in there — someone will show you around"],
  },
  {
    tag: "Housing",
    title: "Halal-friendly student housing in Leicester",
    blurb: "What to check for, which areas students actually live in, and questions to ask landlords.",
    read: "5 min read",
    updated: "Updated Jul 2026",
    intro: "Housing hunting is stressful enough without worrying about your kitchen setup. A few things past students wish they'd asked.",
    sections: [
      { h: "Areas near campus", p: "Most Muslim students end up around Clarendon Park or the city centre halls — both are a short walk to campus and to halal shops." },
      { h: "Questions worth asking", p: "Ask about shared kitchen arrangements if you're keeping a halal-only kitchen, and check bus routes to the nearest masjid." },
    ],
    checklist: ["Check proximity to a masjid", "Ask about kitchen-sharing norms", "Confirm bills and contract length before signing"],
  },
  {
    tag: "Ramadan",
    title: "Surviving exams during Ramadan",
    blurb: "Practical scheduling advice from students who've sat exams while fasting.",
    read: "4 min read",
    updated: "Updated Jul 2026",
    intro: "Ramadan and exam season overlap more years than not. It's manageable — here's what's helped others.",
    sections: [
      { h: "Talk to your department early", p: "Most DMU departments can adjust exam scheduling with enough notice — email your course leader as soon as dates are announced." },
      { h: "Protect your sleep", p: "Suhoor plus an early lecture is rough. Where you can, front-load harder revision earlier in the day." },
    ],
    checklist: ["Email your course leader about exam timing", "Plan revision around Taraweeh, not against it", "Line up iftar plans so food isn't a daily decision"],
  },
];

/* ---------- 4. Q&A: already answered ---------- */
const QNA_ANSWERED = [
  {
    question: "Is it okay to shorten my prayers between lectures if I'm rushing?",
    mark: "Fiqh",
    answer: "You can still pray fully within a short window — most prayers take under five minutes end to end. If you're genuinely traveling (not just walking across campus), there are concessions for shortening prayer, but day-to-day lecture gaps don't usually count. If you're unsure about your specific situation, the Chaplaincy Imam can walk through it with you.",
  },
  {
    question: "I'm not Muslim but I want to come to a halaqah — will that be weird?",
    mark: "Community",
    answer: "Not at all — non-Muslim students come to our discussion nights regularly. Nobody will pressure you or expect anything from you. Come with your questions; that's genuinely welcome.",
  },
  {
    question: "How do I make up missed fasts from last Ramadan?",
    mark: "Fiqh",
    answer: "Missed fasts (for a valid reason — illness, travel, etc.) can be made up any time before the next Ramadan begins, in any order, on any days that work for you. If you're not sure whether your reason for missing them qualifies, ask the Chaplaincy Imam directly.",
  },
];

/* ---------- 5. LEARN HUB: cards, steps, courses, apps ---------- */
const LEARN_CARDS = [
  { kicker: "Quran", title: "Reading the Quran with translation", blurb: "Start with a mushaf that has side-by-side English so meaning isn't lost.", link: "Explore →" },
  { kicker: "Hadith", title: "Where to start with hadith", blurb: "Riyad as-Salihin is the usual first collection — organised by theme, not book number.", link: "Explore →" },
  { kicker: "Reflection", title: "Five-minute daily reflections", blurb: "Short, so it's actually sustainable during term time.", link: "Explore →" },
];

const NEW_MUSLIM_STEPS = [
  { n: "01", title: "Learn the five daily prayers", blurb: "Start with just one prayer done consistently before adding the rest." },
  { n: "02", title: "Find one person to ask questions", blurb: "A committee member or Chaplaincy contact — someone real, not just the internet." },
  { n: "03", title: "Come to one halaqah", blurb: "No pressure to speak. Just sit in and see what it feels like." },
  { n: "04", title: "Get a beginner-friendly Quran translation", blurb: "See the free book library below for recommendations." },
  { n: "05", title: "Be patient with yourself", blurb: "This is a lifelong path, not a checklist to finish this term." },
];

const STUDY_COURSES = [
  { name: "SeekersGuidance", blurb: "Free structured Islamic studies courses, self-paced." },
  { name: "Bayyinah TV", blurb: "Arabic and Quranic studies from Ustadh Nouman Ali Khan." },
];

const RECOMMENDED_APPS = [
  { name: "Muslim Pro", blurb: "Prayer times, Quran audio and qibla in one app.", cta: "Visit site" },
  { name: "Quran.com", blurb: "Clean, ad-free Quran reader with multiple translations.", cta: "Visit site" },
];

/* ---------- 6. FREE BOOK LIBRARY ---------- */
const BOOK_LIBRARY = [
  { level: "Going deeper", title: "One Hundred Pieces of Advice", author: "Ibn al-Qayyim al-Jawziyyah", blurb: "A hundred short, practical pieces of advice for everyday faith.", cta: "Read free", meta: "PDF", href: "Books/One-Hundred-Pieces-Of-Advice-Ibn-Qayyim.pdf" },
  { level: "Going deeper", title: "The Love of Allah", author: "Author not stated in filename — check PDF", blurb: "On what it means to love Allah and what that love should look like in practice.", cta: "Read free", meta: "PDF", href: "Books/Love-of-Allah.pdf" },
  { level: "Going deeper", title: "Beneficial Stories from Riyad as-Saliheen", author: "Shaykh Ibn al-Uthaymin", blurb: "Short, memorable stories drawn from Imam an-Nawawi's Riyad as-Saliheen.", cta: "Read free", meta: "PDF", href: "Books/Beneficial-Stories-from-Riyaḍ-aṣ-Ṣaliḥin-Shaykh-Uthaymin.pdf" },
  { level: "Going deeper", title: "Heartfelt Advice to a Friend", author: "Ibn al-Qayyim al-Jawziyyah", blurb: "Sincere, personal advice on faith and character, addressed as a letter to a friend.", cta: "Read free", meta: "PDF", href: "Books/Heartfelt-Advice-to-a-Friend-Ibn-al-Qayyim.pdf" },
  { level: "Going deeper", title: "Patience & Gratitude", author: "Ibn al-Qayyim al-Jawziyyah", blurb: "A classical treatment of sabr and shukr as two halves of faith.", cta: "Read free", meta: "PDF", href: "Books/Patience_and_Gratitude.pdf" },
  { level: "Foundational", title: "Fiqh us-Sunnah (Five Volumes)", author: "Sayyid Sabiq", blurb: "A widely-used, comprehensive reference on fiqh drawn from the Sunnah.", cta: "Read free", meta: "PDF", href: "Books/Fiqh us Sunnah (Five Volumes).pdf" },
  { level: "Foundational", title: "Seerah Series, Part 1: The Lineage (2nd Edition)", author: "Ebrahim Noor", blurb: "The first part of a seerah series, covering the Prophet's ﷺ lineage.", cta: "Read free", meta: "PDF", href: "Books/Seerah-Series-Part-1-The-Lineage-2nd-Edition (1).pdf" },
  { level: "Going deeper", title: "Remembrance of the Most Merciful", author: "Ibn al-Qayyim al-Jawziyyah", blurb: "On the place of dhikr — remembrance of Allah — in daily life.", cta: "Read free", meta: "PDF", href: "Books/Remembrance of the Most Merciful - Ibn al-Qayyim.pdf" },
  { level: "Foundational", title: "Fiqh Made Easy", author: "Author not stated in filename — check PDF", blurb: "An accessible, beginner-friendly walkthrough of everyday fiqh.", cta: "Read free", meta: "PDF", href: "Books/English_Fiqh_Made_Easy.pdf" },
  { level: "Going deeper", title: "Usool at-Tafseer: The Methodology of Qur'anic Interpretation", author: "Commonly attributed to Bilal Philips — check PDF", blurb: "A methodology for approaching tafsir, the science of Quranic interpretation.", cta: "Read free", meta: "PDF", href: "Books/usool-at-tafseer-the-methodology-of-qur-anic-interpretation.pdf" },
  { level: "Foundational", title: "Ulum al-Qur'an: An Introduction to the Sciences of the Qur'an", author: "Author not stated in filename — check PDF", blurb: "A starting point for ulum al-Quran: revelation, compilation, tafsir methodology.", cta: "Read free", meta: "PDF", href: "Books/ulum-al-qur-an-an-introduction-to-the-sciences-of-the-qur-an.pdf" },
  { level: "Going deeper", title: "من أطيب المنح في علم المصطلح", author: "Author not stated in filename — check PDF", blurb: "An Arabic-language work on the science of hadith terminology (mustalah al-hadith).", cta: "Read free", meta: "PDF · Arabic", href: "Books/من أطيب المنح في علم المصطلح.pdf" },
  { level: "Going deeper", title: "The Tree of Faith", author: "Author not stated in filename — check PDF", blurb: "A short classical treatise unpacking the Quranic parable of the good word as a tree.", cta: "Read free", meta: "PDF", href: "Books/The_Tree_of_Faith.pdf" },
  { level: "Going deeper", title: "Disciplining the Soul", author: "Author not stated in filename — check PDF", blurb: "On training and correcting the soul (tazkiyah) in everyday life.", cta: "Read free", meta: "PDF", href: "Books/Disciplining The Soul.pdf" },
  { level: "Going deeper", title: "Timeless Seeds of Advice", author: "Sayings of the Prophet ﷺ, Ibn Taymiyyah, Ibn al-Qayyim, Ibn al-Jawzi and other scholars", blurb: "A compiled collection of short, timeless advice from the Prophet ﷺ and prominent scholars.", cta: "Read free", meta: "PDF", href: "Books/Timeless Seeds of Advice The Sayings of Prophet Muhammad ﷺ , Ibn Taymiyyah, Ibn al-Qayyim, Ibn al-Jawzi and Other Prominent..pdf" },
  { level: "Going deeper", title: "Min Atyab al-Minah (English)", author: "Author not stated in filename — check PDF", blurb: "English edition of a classical collection of spiritual gifts and reflections.", cta: "Read free", meta: "PDF", href: "Books/min-atyab-al-minah-EN.pdf" },
  { level: "New to Islam", title: "You Can Be the Happiest Woman in the World", author: "Author not stated in filename — check PDF", blurb: "A popular, encouraging read on contentment and faith for women.", cta: "Read free", meta: "PDF", href: "Books/You Can Be the Happiest Woman in the World.pdf" },
  { level: "New to Islam", title: "تعليم الأطفال الإسلام", author: "Author not stated in filename — check PDF", blurb: "An Arabic-language guide to teaching children the basics of Islam.", cta: "Read free", meta: "PDF · Arabic", href: "Books/Noor-Book.com تعليم الأطفال الإسلام.pdf" },
  { level: "Foundational", title: "Summarized Islamic Fiqh", author: "Commonly attributed to Muhammad ibn Ibrahim At-Tuwaijri — check PDF", blurb: "A condensed, structured reference covering the main areas of fiqh.", cta: "Read free", meta: "PDF", href: "Books/en_Summarized_Islamic_Fiqh.pdf" },
  { level: "Foundational", title: "A Treatise on Muslim Unity", author: "Shaykh Abd ar-Rahman as-Sa'di", blurb: "On the causes of division among Muslims and what unity actually requires.", cta: "Read free", meta: "PDF", href: "Books/A-Treatise-On-Muslim-Unity-Sh.-Abd-al-Rahman-al-Sadi.pdf" },
];
/* NOTE for whoever edits this next:
   - hrefs point into a folder named exactly "Books" (capital B) at the site root —
     that's the folder the committee uploads the actual PDF files into on GitHub.
   - Authors marked "not stated in filename" or "commonly attributed to" were NOT
     confirmed by reading the PDF itself. Open each one and check its title page
     before treating the author name as reliable — these are religious texts, so
     getting attribution right matters. Fix this note once verified. */

/* ---------- 7. STORIES: prophets, companions, women ---------- */
const PROPHETS = [
  { n: 1, name: "Adam (peace be upon him)", hook: "The first human, and the first to be taught the names of all things." },
  { n: 2, name: "Nuh / Noah (peace be upon him)", hook: "Called his people for 950 years before the flood came." },
  { n: 3, name: "Ibrahim / Abraham (peace be upon him)", hook: "Willing to give up everything, and given a nation in return." },
];

const COMPANIONS = [
  { name: "Abu Bakr (may Allah be pleased with him)", hook: "The first adult male to accept Islam, and the Prophet's closest friend." },
  { name: "Bilal ibn Rabah (may Allah be pleased with him)", hook: "Freed from slavery for his faith, and chosen as the first muezzin." },
];

const WOMEN_IN_ISLAM = [
  { name: "Khadijah bint Khuwaylid (may Allah be pleased with her)", hook: "A successful businesswoman who was the first to believe." },
  { name: "Fatima al-Fihri", hook: "Founded the world's oldest continually operating university, in Fes." },
];

const WOMEN_TOPICS = [
  { title: "Hijab: choice, culture and pressure", blurb: "An honest look at the difference between religious guidance and cultural expectation." },
  { title: "Women's spaces on campus", blurb: "Why the Sisters' Corner exists, and what it isn't." },
];

/* ---------- 8. REMINDERS & BLOG ---------- */
const REMINDERS = [
  { text: "Verily, in the remembrance of Allah do hearts find rest.", source: "Surah Ar-Ra'd, 13:28" },
  { text: "The best of you are those who learn the Quran and teach it.", source: "Sahih al-Bukhari" },
];

const BLOG_ARTICLES = [
  { kicker: "Reflection", title: "What halaqah actually taught me this year", blurb: "Notes from a student who almost didn't go to their first one." },
  { kicker: "Placement", title: "Balancing shifts, salah and deadlines", blurb: "A part-timer's honest breakdown of what actually worked." },
];

/* ---------- 9. ISLAMIC CALENDAR: upcoming occasions ---------- */
const ISLAMIC_OCCASIONS = [
  { name: "Mawlid al-Nabi", when: "Approx. 25 Aug 2026", note: "Commemoration of the Prophet's ﷺ birth", away: "in 2 days" },
  { name: "Ramadan begins", when: "Approx. Feb 2027", note: "Subject to moon sighting", away: "in ~6 months" },
];

const HIJRI_MONTHS = [
  "Muharram", "Safar", "Rabi' al-Awwal", "Rabi' al-Thani", "Jumada al-Awwal", "Jumada al-Thani",
  "Rajab", "Sha'ban", "Ramadan", "Shawwal", "Dhu al-Qi'dah", "Dhu al-Hijjah",
];

/* ---------- 10. FIND US: masjids & halal food ---------- */
const NEARBY_MASJIDS = [
  { name: "Leicester Central Mosque", note: "10 min walk · main Jumu'ah option for many students" },
  { name: "Masjid Umar", note: "15 min bus · known for a lively evening programme" },
];

const NEARBY_HALAL_FOOD = [
  { name: "Spice Grill", note: "Student discount with DMU card" },
  { name: "Al-Noor Bakery", note: "Good for a cheap, filling lunch between lectures" },
];

/* ---------- 11. COMMUNITY CORNERS ---------- */
const CORNERS = {
  sisters: {
    title: "Sisters' Corner",
    intro: "Halaqah, socials, a sisters-only space with ablution next door, and someone to sit with on your first day.",
    room: "Room 00.27",
    contact: "Message @dmuisoc and ask for the Sisters' lead",
    items: [
      { title: "Sisters' Halaqah", when: "Wednesdays, 6:00pm", blurb: "Runs alongside the main halaqah, sisters-only." },
      { title: "Sunday Social", when: "First Sunday monthly, 2:00pm", blurb: "Tea, crafts and conversation." },
    ],
  },
  brothers: {
    title: "Brothers' Corner",
    intro: "Halaqah, football, Jumu'ah duties and the room that stays busy between lectures.",
    room: "Room 00.31",
    contact: "Message @dmuisoc and ask for the Brothers' lead",
    items: [
      { title: "Brothers' Halaqah", when: "Wednesdays, 6:00pm", blurb: "Open discussion after a short talk." },
      { title: "Friday Football", when: "After Jumu'ah", blurb: "Casual five-a-side on the campus pitch." },
    ],
  },
};

/* ---------- 12. GET INVOLVED / COMMITTEE ---------- */
const VOLUNTEER_ROLES = [
  { title: "Event helper", blurb: "Set up, welcome new faces, help pack down. As little or as much time as you can give." },
  { title: "Guide writer", blurb: "Been through something worth writing up? Turn it into a guide for next year." },
];

const COMMITTEE = [
  { role: "President", name: "Add name", blurb: "One line about them.", intro: "" },
  { role: "Head of Educational", name: "Add name", blurb: "One line about them.", intro: "" },
];

/* ---------- 13. DONATE ---------- */
const DONATE_TIERS = [
  { amount: "£5", covers: "Supplies for one halaqah" },
  { amount: "£20", covers: "One student's iftar for a week" },
  { amount: "£50", covers: "A share of the prayer room's monthly Qurans and mats" },
];

const DONATE_SPLIT = [
  { label: "Ramadan iftars", pct: "45%" },
  { label: "Prayer room supplies", pct: "35%" },
  { label: "Events & socials", pct: "20%" },
];

/* ---------- 14. SITE SEARCH INDEX ----------
   Add anything you want findable through the search bar. */
const SEARCH_INDEX = [
  { kind: "Guide", title: "Finding the prayer room on your first week", blurb: "Where it is and what to expect.", href: "guides.html#guide-0" },
  { kind: "Page", title: "Prayer times & Qibla", blurb: "This month's timetable and the qibla direction.", href: "prayer.html" },
  { kind: "Page", title: "Sisters' & Brothers' Corners", blurb: "Two spaces, one society.", href: "community.html" },
  { kind: "Q&A", title: "Is it okay to shorten my prayers between lectures?", blurb: "Fiqh answer from the educational team.", href: "qna.html" },
  { kind: "Event", title: "Weekly Halaqah", blurb: "Every Wednesday, 6:00–7:30pm.", href: "events.html" },
];
