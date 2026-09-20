# ISOC DMU website

Single-page site. The whole thing is `index.html` — navigation switches sections in place, so there are no separate `events.html`, `prayer.html` etc. If files like those exist in the repo, they are from an older build: **delete them.**

## Why the design was missing

GitHub Pages runs Jekyll, which silently deletes any file or folder whose name starts with an underscore. The stylesheet lived in `_ds/`, so it was never published and the site rendered with no styling at all.

Fixed two ways in this build: the folder is now `ds/` and there is an empty `.nojekyll` file at the root that turns Jekyll off entirely. **`.nojekyll` is a hidden file** — on Mac press Cmd+Shift+. in Finder to see it, on Windows enable "Hidden items" in the View tab. It must be uploaded or the problem comes back.

## Size

The whole folder is about 24 MB. Still small enough to drag into GitHub in one go. Photos are compressed.

## The book library

The Free book library section (on the Learn page) is back, with 23 books:

- **8 are hosted here**, in `books/` — the ones you originally uploaded as PDFs, so the exact edition is guaranteed correct.
- **15 link out** to kalamullah.com, islamhouse.com, archive.org, adviceforparadise.com or ghazali.org — well-known, long-standing free Islamic ebook sites. Two of your original uploads (*One Hundred Pieces of Advice* and *A Treatise on Muslim Unity*) are linked out rather than hosted here purely because they were large files and kept the download too big to send — everything else you uploaded is still hosted directly. If any external link ever breaks, tell Claude and it can find a replacement or add the PDF here directly.
- One title, **Fiqh Made Easy**, couldn't have its author confirmed (the original PDF was a scanned image with no readable text) — the card says so honestly rather than guessing.

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
books/              10 of the free-library PDFs, linked from the Learn page
```

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
