# ISOC DMU website

Static site. Upload everything in this folder to the repository root.

## Files

- `index.html` — the website
- `freshers-pack.html` — printable freshers pack
- `support.js`, `image-slot.js`, `doc-page.js` — runtime scripts, required
- `_ds/` — design system stylesheet and bundle, required
- `books/` — library PDFs
- `photos/` — photos and videos used on the site

## Publishing with GitHub Pages

1. Create a repository and upload the contents of this folder to the root.
2. Settings → Pages → Deploy from a branch → `main` / `/ (root)`.
3. The site goes live at `https://<user>.github.io/<repo>/`.

## Custom domain

Add a file named `CNAME` at the repository root containing just the domain,
for example `isocdmu.com`, then point the domain's DNS at GitHub Pages.

## Editing

Keep the folder structure as it is. `index.html` links to `books/`, `photos/`,
`_ds/` and the scripts by relative path, so moving or renaming them breaks the page.
