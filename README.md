# ISOC DMU website

Single-page site. The whole thing is `index.html` — navigation switches sections in place, so there are no separate `events.html`, `prayer.html` etc. If files like those exist in the repo, they are from an older build: **delete them.**

## What to upload

Upload the contents of this folder to the root of the repository, keeping the folder structure exactly as it is:

```
index.html          the website
freshers-pack.html  printable freshers pack
support.js          required runtime
image-slot.js       required
doc-page.js         required
_ds/                design system stylesheet + bundle, required
books/              20 library PDFs
photos/             photos and videos used on the site
```

`index.html` links to `books/`, `photos/`, `_ds/` and the three scripts by relative path. Moving or renaming any of them breaks the page.

## Replacing an older version

1. In the repo, delete every existing file (especially any old `.html` pages).
2. Upload everything from this folder.
3. Commit.
4. Hard refresh the live site (Cmd/Ctrl + Shift + R) — GitHub Pages caches aggressively and can take a few minutes.

## Publishing with GitHub Pages

Settings → Pages → Deploy from a branch → `main` / `/ (root)`.
Live at `https://<user>.github.io/<repo>/`.

## Custom domain

Add a file named `CNAME` at the repository root containing just the domain,
for example `isocdmu.com`, then point the domain's DNS at GitHub Pages.

## Still to fill in

- Committee cards on the About page say "Add name" — send names, roles and photos.
- Asr and Isha jamaah times say "See the timetable" — need the monthly figures.
