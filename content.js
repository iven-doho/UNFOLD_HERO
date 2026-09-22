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
        s      24 chars      flag        9 chars
        lk     22 chars      p (intro)  90 chars, one sentence
        subs   3-4 items: sc 14 / st 24 / sd 40

      Titles longer than 12 chars with no space get clipped on
      phones. That is why "Dadaocheng" became "Dihua Street".

   ── photo:'07' points at photos/07.webp. Leave it off and the
      square falls back to its flat colour, which is a valid
      state — squares can be filled in one at a time.
   ============================================================ */

const MARKET='sf';
const LOGO='img/';
const MARKETS={
 sf:{brand:'Feel Taiwan',region:'Northern California · Nevada · Utah',
     carriers:[{k:'ci',name:'China Airlines',cond:'SFO → TPE direct'},
               {k:'br',name:'EVA Air',cond:'787-9 · free Taipei stopover'},
               {k:'jx',name:'STARLUX Airlines',cond:'A350 · SFO non-stop'}]},
 east:{brand:'Unfold Taiwan',region:'US East · Canada East',
     carriers:[{k:'ci',name:'China Airlines',cond:'JFK / YYZ → TPE'},
               {k:'br',name:'EVA Air',cond:'787-9 · free Taipei stopover'}]}};
const M=MARKETS[MARKET];

const START={cls:'start',kind:'Start',t:'TPE Airport',s:M.carriers.length+' ways in',
  lk:'Start · Getting there',
  p:'Taiwan\u2019s national carriers fly you in. Fares and conditions travel with the logo.',
  g:1,carriers:M.carriers,
  subs:M.carriers.map(c=>({sc:'Book direct',st:c.name,sd:c.cond,logo:c.k}))};
const RETURN={hue:'#007758',kind:'Promo',t:'Return to Taiwan',s:'Returning visitors',flag:'NT$8,000',
  head:'Return to Taiwan, Double Your Luck',cta:'Register and win',
  long:'Starting October 1st, 2026. Returning visitors can win stored-value card top-up credits '
      +'of up to NT$8,000 \u2014 NT$5,000 for you and NT$3,000 for the friend or relative you bring. '
      +'Register 7 to 90 days before you fly.',
  lk:'Promo · Prizes',p:'Come back with someone. Both of you draw.',g:2,
  subs:[{sc:'Returning visitor',st:'NT$5,000',sd:'Stored-value card top-up',amt:1},
        {sc:'Travelling companion',st:'NT$3,000',sd:'Stored-value card top-up',amt:1},
        {sc:'Together',st:'Up to NT$8,000',sd:'From 1 October 2026',amt:1},
        {sc:'Register',st:'Double Your Luck',sd:'Sign up before you fly'}]};
const HALFDAY={hue:'#269AF9',kind:'Promo',t:'Half-Day Tour',s:'7\u201324 hour layover',flag:'Free',
  head:'Taiwan Free Half-Day Tour',cta:'Learn more & book a tour',
  long:'Transit or transfer passengers with a 7- to 24-hour layover before their next connecting '
      +'flight, who hold a valid R.O.C. visa or are eligible for visa-exempt entry, may join the '
      +'free half-day tour programme. Those who register receive a NT$600 gift voucher.',
  lk:'Promo',p:'Free half-day tour for transit passengers, plus a NT$600 voucher.',g:1,
  subs:[{sc:'Free + NT$600',st:'Taiwan Free Half-Day Tour',sd:'7–24h layover · valid R.O.C. visa or visa-exempt entry'}]};
const PASS={hue:'#8146C6',kind:'Promo',t:'Taiwan PASS',s:'7 days',lk:'Promo',
  head:'Taiwan PASS',cta:'Learn more',
  long:'A must-have electronic pass. One pass covers transport and entry to top attractions, '
      +'giving you the flexibility to explore for 7 days. Travel smarter and see more.',
  p:'One pass — transport and attraction entry together.',g:1,
  subs:[{sc:'Learn more',st:'Taiwan PASS',sd:'Transport + attractions · 7 days'}]};
const THSR={photo:'07',hue:'#814724',kind:'Promo',t:'Go2Taiwan HSR',s:'High speed rail',flag:'1+1',lk:'Promo',
  head:'Go2Taiwan \u2014 Taiwan High Speed Rail BOGO',cta:'Book & save',
  long:'Your Taiwan adventure just got better. With the Go2Taiwan promotion you receive a Buy One, '
      +'Get One Free promo code for Taiwan High Speed Rail. Explore more of the island, for half '
      +'the price.',
  p:'Buy one, get one free on Taiwan High Speed Rail.',g:1,
  subs:[{sc:'Book & save',st:'THSR Buy One Get One',sd:'Explore more of the island for half the price'}]};
const WHATSON={photo:'08',hue:'#E5863B',kind:"What's On",t:'Happening Now',s:'Four events this month',
  lk:"What's On",p:'Refreshed monthly. Four is editorial discipline, not a container.',g:2,
  subs:[{sc:'Events',st:'Running Across Taiwan',sd:'Road races, Wanjinshi and beyond'},
        {sc:'Events',st:'Cycling Around Taiwan',sd:'Sun Moon Lake · round-island route'},
        {sc:'Events',st:'Rural Ecotourism',sd:'Brown Boulevard, Taitung'},
        {sc:'Events',st:'Authentic Cooking Class',sd:'Gua bao by hand with CookInn'}]};
const W=(kind,hue,t,s,now,next,photo)=>({photo,hue,kind,t,s,lk:kind+' - Taiwan 100 Ways',
  p:'One of 100 Ways. This season: '+t+'.',g:2,
  subs:[{sc:'This season',st:now[0],sd:now[1]},...next.map(n=>({sc:'Next',st:n[0],sd:n[1]}))]});
const STYLE=W('Style','#004740','Dihua Street','Dadaocheng shophouses',
  ['Dadaocheng – Dihua Street','Arcades, fabric halls, coffee'],
  [['Pier-2 Art Center','Kaohsiung'],['Songshan Cultural Park','Taipei'],['Lukang Old Street','Changhua']]);   // no photo yet
const VITALITY=W('Vitality','#FFCA03','Beitou','Sulphur springs',
  ['Beitou Hot Springs','Steam, timber windows, quiet'],
  [['Jiaoxi Hot Springs','Yilan'],['Sun Moon Lake Cycling','Nantou'],['Spa & Wellness','Island-wide']],'13');
const NATURE=W('Nature','#007758','Taroko','Marble gorge',
  ['Taroko Gorge','Marble walls, Swallow Grotto'],
  [['Qingshui Cliffs','Hualien'],['Alishan','Chiayi'],['Xiaoliuqiu','Pingtung']],'10');
const CULTURE=W('Culture','#814724','Tainan','Forts & old temples',
  ['Anping Fort','Red brick, banyan, sea wind'],
  [['Lukang','Changhua'],['Dajia Mazu Pilgrimage','Taichung'],['Southern Branch, NPM','Chiayi']],'11');
const FLAVOR=W('Flavor','#FF5629','Keelung','Night market',
  ['Miaokou Night Market','Stall lights, steam, queues'],
  [['Tainan Street Food','Tainan'],['Jiufen','New Taipei'],['Fengjia Night Market','Taichung']],'09');
const LOVE=W('Love','#269AF9','Gaomei','Wetland sunset',
  ['Gaomei Wetlands','Boardwalk, turbines, silhouettes'],
  [['Pingxi Sky Lanterns','New Taipei'],['Sun Moon Lake','Nantou'],['Kenting Sunset','Pingtung']],'14');

/* clockwise from top-left. Carriers hold the three wide top-middle slots and
   no carrier sits on a corner, so none outranks another. */
const TILES=[START,RETURN,HALFDAY,PASS, THSR,WHATSON,
             FLAVOR,NATURE,CULTURE,STYLE, VITALITY,LOVE];

/* ── the middle of the board ──────────────────────────────── */
const CENTRE = {
  kicker : 'Taiwan Tourism Administration',   // region is appended
  title  : ['Unfold', 'Taiwan'],              // 2nd word takes the orange
  sublede: 'An island that opens one layer at a time',
  lines  : ['Every Turn Reveals More.',
            'One Island. Endless Ways.'],
  // inline <s> and <b> are allowed here
  // the two ways in: click a square, or press the button
  shift  : 'Choose your square \u2014 or let the dice choose.',
  button : 'Surprise me'
};
