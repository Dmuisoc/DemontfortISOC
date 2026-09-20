# ISOC DMU website

Single-page site. The whole thing is `index.html` — navigation switches sections in place, so there are no separate `events.html`, `prayer.html` etc. If files like those exist in the repo, they are from an older build: **delete them.**

## Why the design was missing

GitHub Pages runs Jekyll, which silently deletes any file or folder whose name starts with an underscore. The stylesheet lived in `_ds/`, so it was never published and the site rendered with no styling at all.

Fixed two ways in this build: the folder is now `ds/` and there is an empty `.nojekyll` file at the root that turns Jekyll off entirely. **`.nojekyll` is a hidden file** — on Mac press Cmd+Shift+. in Finder to see it, on Windows enable "Hidden items" in the View tab. It must be uploaded or the problem comes back.

## Why books and the gallery were broken

GitHub's drag-and-drop upload in the browser quietly drops files when a batch is too large. The photo folder was 48 MB and the book folder is 124 MB, so those two folders never fully arrived while the small files did.

The photos in this folder are now compressed — 48 MB down to 3 MB, no visible difference on screen. The PDFs cannot be shrunk, so see below.

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
photos/             photos and the two videos (30 MB)
books/              20 library PDFs (124 MB) — see below
```

`index.html` links to `books/`, `photos/`, `_ds/` and the three scripts by relative path. Moving or renaming any of them breaks the page.

## The books folder

124 MB is too much for the browser upload. Two options:

**Use GitHub Desktop or the command line.** This handles the whole repo in one go and is the recommended route:

```
git clone https://github.com/dmuisoc/DemontfortISOC.git
cd DemontfortISOC
# delete the old files, copy everything from this folder in, then:
git add .
git commit -m "Rebuild site"
git push
```

**Or upload books in small batches.** Drag four or five PDFs at a time into the `books` folder through the web interface, committing between each batch.

## Replacing the older version

1. Delete every existing file in the repo, especially any old `.html` pages.
2. Upload everything from this folder.
3. Hard refresh the live site (Cmd/Ctrl + Shift + R) — GitHub Pages caches for a few minutes.

## Checking it worked

Open the live site and visit Learn → Free book library. Click any "Download PDF" button. If it 404s, that PDF did not upload.

## Publishing with GitHub Pages

Settings → Pages → Deploy from a branch → `main` / `/ (root)`.

## Custom domain

Add a file named `CNAME` at the repository root containing just the domain,
for example `isocdmu.com`, then point the domain's DNS at GitHub Pages.

## Still to fill in

- Committee cards say "Add name" — send names, roles and photos.
- Asr and Isha jamaah times say "See the timetable" — need the monthly figures.
