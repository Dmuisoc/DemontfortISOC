# ISOC DMU website

A free, static website — no hosting costs, ever, and no coding tools required to update it.

## How to update content (do this, not the HTML)

Open **`js/data.js`**. Every piece of content that changes — prayer times, events,
guides, Q&A answers, committee members, donate tiers — lives in that one file as
simple lists. Edit the text between the quote marks, keep the commas and brackets
as they are, and save. That's it — no other file needs touching for routine updates.

Monthly job: update `PRAYER_TIMETABLE` at the top of `js/data.js` with the new month's times.

## How to put it online (free, forever)

1. Create a free account at [github.com](https://github.com).
2. Create a new **public** repository.
3. Upload every file in this folder (keep the `css/` and `js/` folders as folders).
4. In the repo, go to **Settings → Pages**, set the source branch to `main`, folder `/ (root)`, and save.
5. Your site will be live at `https://<your-username>.github.io/<repo-name>` within a couple of minutes.

Because this lives in a GitHub repository rather than a personal account, next year's
Head of Educational (or anyone else) just needs GitHub access to keep it running —
nobody has to rebuild it from scratch.

## Connecting the "Ask a question" form

Right now the form on `qna.html` shows a friendly confirmation message but doesn't
send the question anywhere yet. The easiest free fix:

1. Create a free account at [formspree.io](https://formspree.io) and make a new form — it gives you a URL like `https://formspree.io/f/abcd1234`.
2. In `qna.html`, set that URL as the form's `action` and set `method="POST"`.
3. In `js/app.js`, find `renderQnaPage()` and remove the `e.preventDefault()` line so the browser does a normal submit to Formspree instead.

Submitted questions will then land straight in your email.

## Structure

```
index.html        Home
prayer.html        Prayer times, qibla, Islamic calendar
community.html      Sisters' & Brothers' Corners
learn.html          Learn hub, book library, stories
guides.html          Student guides
events.html          Events, with audience filter
qna.html            Ask a question + answered Q&A
about.html          About, get involved, committee
donate.html          Donate
css/style.css       All styling
js/site.js          Shared header/footer/nav
js/data.js          <- EDIT THIS to update content
js/app.js           Page logic — shouldn't need editing for normal updates
```
