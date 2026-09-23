/* ============================================================
   UNFOLD TAIWAN — board content
   ------------------------------------------------------------
   EVERYTHING you would want to change lives in this file.
   index.html holds only layout and behaviour; you should not
   need to open it.

   ── The board is a fixed 4x4 ring. Positions run CLOCKWISE
      from the top-left corner. The shape of each position is
      decided by the grid, not by what you put in it:

        01  02  03  04          01 04 07 10   square  206x206
        12          05          02 03 08 09   WIDE    409x206  (2:1)
        11          06          05 06 11 12   side    206x190
        10  09  08  07

      Reorder by moving entries in TILES at the bottom. The
      first entry lands on 01, the second on 02, and so on.

   ── Two things to know before you rearrange:

      1. Corners (01 04 07 10) are the strongest positions on a
         board — the eye stops there.
      2. The four WIDE positions crop a square photo to HALF its
         height. Put things there whose picture survives that,
         or things that lean on their words rather than a photo.

   ── Copy limits, measured against the 83px mobile square:

        kind   10 chars      t (title)  12 chars, breaks on a space
        s      ~30 chars     flag        9 chars
               (measured: 'Travel together. Pay for one.' at 29 still
                sits on one line down to the 178px tablet square)

      On the CARD, which is roomier:
        s      reappears as the display line over the manifesto
        body   40-60 words. Longer still fits — the card scrolls —
               but past ~70 words the three pictures get pushed
               under the fold on a phone.
        gal    exactly 3. Captions optional; 4-5 words each.

      Titles longer than 12 chars with no space get clipped on
      phones. That is why "Dadaocheng" became "Dihua Street".

   ── AFTER EDITING THIS FILE: bump the ?v= number on the content.js
      <script> tag in index.html, or hard-refresh. Browsers cache this
      file and will otherwise keep showing the old copy.

   ── photo:'07' points at photos/07.webp. Leave it off and the
      square falls back to its flat colour, which is a valid
      state — squares can be filled in one at a time.
   ============================================================ */

const LOGO='img/';          // where the carrier marks live
/* The beige behind a square that shows a LOGO or EMBLEM instead of a
   photograph, sampled from the campaign artwork. Squares marked
   light:true use it, and their type turns dark to suit. */
const ICON_BG='#F6EED7';
const MARKET='sf';
const MARKETS={
 sf:{brand:'Feel Taiwan',region:'Northern California · Nevada · Utah',
     carriers:[{k:'ci',name:'China Airlines',cond:'SFO → TPE direct'},
               {k:'br',name:'EVA Air',cond:'787-9 · free Taipei stopover'},
               {k:'jx',name:'STARLUX Airlines',cond:'A350 · SFO non-stop'}]},
 east:{brand:'Unfold Taiwan',region:'US East · Canada East',
     carriers:[{k:'ci',name:'China Airlines',cond:'JFK / YYZ → TPE'},
               {k:'br',name:'EVA Air',cond:'787-9 · free Taipei stopover'}]}};
const M=MARKETS[MARKET];

/* ── the twelve squares, in board order ──────────────────
   01 is the top-left corner, running CLOCKWISE.
   02 03 08 09 are the WIDE 2:1 slots — all four promos now sit there.

   Each square carries:
     photo  the square's OWN picture         photos/<name>.webp
     kind   the small label                  10 chars
     t      the title                        12 chars
     s      the line under it                24 chars
     flag   the corner badge, promos only     9 chars
     body   THE MANIFESTO — the card's whole text, 40-60 words
     gal    the card's pictures: THREE, or ONE for a single big image
            {i:'flavor-a', c:'caption'}      photos/cards/<i>.webp
     cta    the link at the foot, or null    {t:'label', u:'https://…'}
            Card links open the WHOLE page, not the little frame, so u
            must be a full URL — including for an anchor on the host
            page: 'https://www.feeltaiwan.com/#flight-offer'.

   Pictures are named after the SQUARE'S SUBJECT, not its position.
   Rearranging the board therefore no longer re-maps every photo —
   which is exactly what went wrong when 09 and 10 swapped meaning.
   ────────────────────────────────────────────── */

/* 01 — corner. The tile draws START! and TPE Airport itself; the card
   opens on TPE Airport with no kicker above it. Logos run large with
   no captions underneath. */
const START={cls:'start',photo:'start',kind:'',t:'TPE Airport',
  s:'Fly to Taiwan. Discover the offers.',
  carriers:M.carriers,
  body:'Taiwanese carriers bring you to Taiwan in distinctly Taiwanese style, with warm '
      +'hospitality, thoughtful service, and flavors of the island. Your journey begins '
      +'before you land.',
  gal:M.carriers.map(c=>({logo:c.k})),   // no captions, by request
  cta:{t:'Find out about the latest promotions',
       u:'https://www.feeltaiwan.com/#flight-offer'}};

/* 02 — WIDE. One big image, not three. */
const REWARD={photo:'reward',light:true,hue:'#007758',kind:'Promo',t:'NT$8,000 Reward',
  s:'Return to Taiwan. Double your luck.',
  body:'Registration opens October 1 for eligible repeat visitors arriving from October 10, '
      +'with a chance at NT$5,000 in travel credit, plus NT$3,000 for an eligible companion.',
  gal:[{i:'reward-a',c:''}],
  cta:{t:'Learn more and register', u:'#'}};

/* 03 — WIDE */
const TRANSIT={photo:'transit',light:true,hue:'#269AF9',kind:'Promo',t:'NT$600 Transit Gift',
  s:'A free half-day tour awaits.',
  body:'Connect to Asia through Taiwan, and turn a long layover into your first taste of the '
      +'island. Eligible transit travelers with 7 to 24 hours can enjoy a free tour and '
      +'NT$600 in gift vouchers.',
  /* one big image: Taipei at dusk with the Free Tour mark on it */
  gal:[{i:'transit-a',c:''}],
  cta:{t:'Learn more and register', u:'#'}};

/* 04 — corner. Was a wide slot; now a full square, so its photo is
   no longer cropped to half height. */
const FLAVOR={photo:'flavor',hue:'#FF5629',kind:"Unfold Taiwan's",t:'Flavor',
  s:'Follow your appetite.',
  body:'Come hungry. Follow your appetite through Taiwan\u2019s night markets, savor island '
      +'specialties, and discover everything from beloved street food to Michelin-starred '
      +'dining. Every turn serves up something deliciously unexpected.',
  gal:[{i:'flavor-a',c:'Raohe Night Market'},{i:'flavor-b',c:''},{i:'flavor-c',c:''}],
  cta:null};

const CULTURE={photo:'culture',hue:'#814724',kind:"Unfold Taiwan's",t:'Culture',
  s:'Get lost in the story.',
  body:'Wander lantern-lit lanes, meet diverse cultures, and discover how many traditions '
      +'inspire new creativity. In Taiwan, every street, temple, and teahouse has something '
      +'to tell.',
  gal:[{i:'culture-a',c:'Jiufen'},{i:'culture-b',c:''},{i:'culture-c',c:''}],
  cta:null};

/* opens by echoing the line above it — your file reads this way; say the
   word and it becomes 'Taiwan\u2019s diverse landscapes are always within reach.' */
const NATURE={photo:'nature',hue:'#007758',kind:"Unfold Taiwan's",t:'Nature',
  s:'Where mountains meet blue.',
  body:'Where mountains meet blue, Taiwan\u2019s diverse landscapes are always within reach. '
      +'From dramatic cliffs and forest trails to beaches and valleys, every natural wonder '
      +'leads easily to the next.',
  gal:[{i:'nature-a',c:'Qingshui Cliffs'},{i:'nature-b',c:''},{i:'nature-c',c:''}],
  cta:null};

/* 07 — corner */
const WHATSON={hue:'#E5863B',kind:"What's On",t:"What's On",
  s:"See what Taiwan's talking about.",
  body:'Run a road race, take a bike trip, join a cooking class, or explore through '
      +'ecotourism. However you travel, there is an experience waiting for you.',
  gal:[{i:'whatson-a',c:''},{i:'whatson-b',c:''},{i:'whatson-c',c:''}],
  cta:null};

/* 08 — WIDE. Light square: the Taiwan Pass mark, not a photograph. */
const PASS={photo:'pass',light:true,hue:'#8146C6',kind:'Promo',t:'Taiwan Pass',
  s:'One pass. More Taiwan.',
  body:'Combine three days of high-speed rail or railway travel with your choice of metro '
      +'and scenic shuttle, making cities and signature sights easier to connect.',
  /* one big image */
  gal:[{i:'pass-a',c:''}],
  cta:{t:'Learn more', u:'#'}};

/* 09 — WIDE. A train photographed side-on suits a 2:1 crop. */
const THSR={photo:'thsr',hue:'#1F8897',kind:'Promo',t:'THSR BOGO',
  s:'Travel together. Pay for one.',
  /* GO 2 TAIWAN! sits low and right in this photo; the crop is pulled that
     way so the phrase survives the narrow crops instead of losing its tail. */
  pos:'92% 85%',
  body:'Your Taiwan adventure just got even better. With the Go 2 Taiwan promotion, you\u2019ll '
      +'receive a Buy One, Get One Free promo code for Taiwan High Speed Rail. Explore more '
      +'of the island \u2013 for half the price!',
  /* one big image */
  gal:[{i:'thsr-a',c:''}],
  cta:{t:'Learn more', u:'#'}};

/* 10 — corner. Was "Love". Also echoes its own line; same note as Nature. */
const ROMANCE={photo:'romance',hue:'#269AF9',kind:"Unfold Taiwan's",t:'Romance',
  s:'Fall for the moment.',
  body:'Fall for the moment, and for Taiwan. Find love in warm welcomes, shared meals, time '
      +'with family and friends, romantic waterfront sunsets, music-filled dates, and quiet '
      +'moments for yourself. Here, every connection becomes part of the journey.',
  gal:[{i:'romance-a',c:'Kaohsiung Music Center'},{i:'romance-b',c:''},{i:'romance-c',c:''}],
  cta:null};

const STYLE={photo:'style',hue:'#FFCA03',kind:"Unfold Taiwan's",t:'Style',
  s:'Many finds. One stylish journey.',
  body:'Browse heritage stores, creative boutiques, and local labels where timeless craft '
      +'meets fresh design. In Taiwan, every shopping street reveals another way to stand out.',
  gal:[{i:'style-a',c:'Hayashi Department Store'},{i:'style-b',c:''},{i:'style-c',c:''}],
  cta:null};

/* 12 — was "Vitality" */
const WELLNESS={photo:'wellness',hue:'#098956',kind:"Unfold Taiwan's",t:'Wellness',
  s:'Keep the good energy moving.',
  body:'Cycle beside shining lakes, explore scenic trails, then slow down in soothing hot '
      +'springs. Taiwan\u2019s LOHAS spirit makes every active adventure a natural reset.',
  gal:[{i:'wellness-a',c:'Sun Moon Lake'},{i:'wellness-b',c:''},{i:'wellness-c',c:''}],
  cta:null};

/*  01  02  03  04
    12          05        corners 01 04 07 10   ·   WIDE 02 03 08 09
    11          06        sides   05 06 11 12
    10  09  08  07                                                 */
const TILES=[START,   REWARD, TRANSIT, FLAVOR,
             CULTURE, NATURE,
             WHATSON, PASS,   THSR,    ROMANCE,
             STYLE,   WELLNESS];


/* ── the middle of the board ──────────────────────────────── */
const CENTRE = {
  title  : ['Unfold', 'Taiwan'],              // 2nd word takes the orange
  // one supporting line only, shown at every screen size
  lede   : 'Choose what calls you, or let the next turn surprise you.',
  lines  : ['Every Turn Reveals More.',
            'One Island. Endless Ways.'],
  button : 'Surprise me'
};
