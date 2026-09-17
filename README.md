# Feel Taiwan — Unfold Taiwan board (hero embed)

The 12-square board with the **Surprise me** dice, packaged to drop on any
static host. Everything is relative — no build step, no dependencies, nothing
loaded from a CDN.

## Deploy

**GitHub Pages** — push this folder to a repo, then Settings → Pages →
Source: `main` / root. The board is at the repo's Pages URL.

**Cloudflare Pages** — Workers & Pages → Create → Pages → Upload assets, drag
this folder in. Same pattern as `game.feeltaiwan.com`.

Either way you end up with an HTTPS URL. Test it opens on its own first.

## Put it on the Wix page

In Studio, add **Embed → Embed a site** (the HTML element), choose
**Website address**, and paste the URL. Do not paste the code — a URL avoids
paste-size limits, lets the fonts and images load normally, and means
redeploying here updates the site without anyone opening Wix.

Then set the element's height per breakpoint:

| Breakpoint | Height |
|---|---|
| Desktop | 700 |
| Tablet | 900 |
| Mobile | 644 |

### Better: let it size itself (6 lines)

The board reports the height it wants — on load, on resize, and whenever the
content changes. Add this to the Wix **page code** and the element matches it
exactly, so there is never a blank band and you never tune heights again:

```javascript
$w.onReady(() => {
  $w('#html1').onMessage(event => {
    if (event.data && event.data.boardHeight) {
      $w('#html1').height = event.data.boardHeight;
    }
  });
});
```

Replace `#html1` with the element's real ID (click it in Studio to see it).

Why it matters: the height the board wants depends on the width, and phones
run 360–430px wide, which spans 109px. Measured: 360→535, 375→558, 390→582,
430→644, 820→908. One fixed number cannot serve them all.

## What is in here

```
index.html            the board — no nav, no footer, hero only
fonts/                Taiwan Sans (display) + Montserrat subset (UI)
img/                  ci/br/jx carrier marks, OhBear token
photos/               7 tile photos — PREVIEW ONLY, see below
```

## Known placeholders

- **Photos are 236×236 previews** lifted from the game build and cropped 16:9
  to 1:1, so they have lost 44% of their width. Five squares have no photo at
  all and fall back to a colour block. Final artwork is specified in
  `圖片規格-首頁板.md` — 1:1, 1600×1600.
- Copy is drafted, not approved.
- Links go nowhere yet (`href="#"`). `<base target="_top">` is set, so once
  they point somewhere they will open in the parent window, not inside
  the iframe.

## Not included, on purpose

No analytics, no deep links, no CMS. The rest of feeltaiwan.com is untouched —
this replaces the hero section only.
