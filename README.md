# ISOC DMU website

Single-page site. The whole thing is `index.html` — navigation switches sections in place, so there are no separate `events.html`, `prayer.html` etc. If files like those exist in the repo, they are from an older build: **delete them.**

## Why the design was missing

GitHub Pages runs Jekyll, which silently deletes any file or folder whose name starts with an underscore. The stylesheet lived in `_ds/`, so it was never published and the site rendered with no styling at all.

Fixed two ways in this build: the folder is now `ds/` and there is an empty `.nojekyll` file at the root that turns Jekyll off entirely. **`.nojekyll` is a hidden file** — on Mac press Cmd+Shift+. in Finder to see it, on Windows enable "Hidden items" in the View tab. It must be uploaded or the problem comes back.

## Size

The main site (this zip) is about 24 MB. The two largest books ship as a **second zip** — see below. Photos are compressed.

## The book library

The Free book library section (on the Learn page) now has **10 books, all hosted directly in `books/`** — no external links at all. Every link-rot problem you were hitting was because the earlier version pointed at other websites (kalamullah.com, archive.org, etc.) — some blocked automated checks, some had broken/expired direct-file URLs. Rather than keep chasing that, every book that couldn't be reliably hosted here was removed instead of left as a maybe-broken link. Titles that were dropped for this reason: Fiqh Made Easy, Beneficial Stories from Riyad as-Saliheen, Timeless Seeds of Advice, You Can Be the Happiest Woman in the World, Disciplining the Soul, Remembrance of the Most Merciful, Summarized Islamic Fiqh, Fiqh us-Sunnah, Usool at-Tafseer, تعليم الأطفال الإسلام, The Sealed Nectar, The Book of Assistance, and The Revival of the Religious Sciences (Ihya). If you'd like any of these back, send Claude a real (non-scanned) PDF of it and it can be added and hosted here directly.

The 10 remaining books are: The Seerah Series Pt.1, One Hundred Pieces of Advice, Patience and Gratitude, Love of Allah, Heartfelt Advice to a Friend, The Tree of Faith, A Treatise on Muslim Unity, Ulum al-Quran, and Min Atyab al-Minah (English + Arabic).

## What to upload

Keep the folder structure exactly as it is:

```
index.html          the website
freshers-pack.html  printable freshers pack
support.js          required runtime
image-slot.js       required
doc-page.js         required
ds/                 design system stylesheet + bundle, required
.nojekyll           empty file — stops GitHub stripping folders, required
photos/             photos used on the site
books/              8 of the 10 free-library PDFs (this zip)
```

Then unzip the **second file** ("isoc-dmu-books-extra.zip") and drag its two PDFs (`one-hundred-pieces-of-advice.pdf` and `muslim-unity-sadi.pdf`) into the *same* `books/` folder on GitHub — they were left out of the main zip only because together they'd have pushed the download over the size limit. All 10 books need to be in one `books/` folder for their links to work.

`index.html` links to `books/`, `photos/`, `ds/` and the three scripts by relative path. Moving or renaming any of them breaks the page.

## Replacing the older version

1. Delete every existing file in the repo, especially any old `.html` pages.
2. Upload everything from this folder.
3. Hard refresh the live site (Cmd/Ctrl + Shift + R) — GitHub Pages caches for a few minutes.

## Publishing with GitHub Pages

Settings → Pages → Deploy from a branch → `main` / `/ (root)`.

## Custom domain

Add a file named `CNAME` at the repository root containing just the domain,
for example `isocdmu.com`, then point the domain's DNS at GitHub Pages.

## Still to fill in

- Committee cards say "Add name" — send names, roles and photos.
- Asr and Isha jamaah times say "See the timetable" — need the monthly figures.
