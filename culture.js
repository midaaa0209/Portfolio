/* =====================================================================
   MARANAO HERITAGE MUSEUM (PAGE 2)  -  culture.js

   EDIT ONLY THE "CONFIG" SECTION BELOW to change text, photos, audio,
   captions, credits and links. Everything after it is the behavior code.
   ===================================================================== */
'use strict';

/* =====================================================================
   CONFIG  (edit me)
   ===================================================================== */

/* ---- LINK BACK TO PAGE 1 ---------------------------------------------
   index.html is page 1 (the gift box). Keep it in the SAME folder as this
   file, or change the name here. Every "Return to My Portfolio" button
   uses this.                                                             */
const RETURN_URL = 'index.html';

/* ---- PHOTOS ----------------------------------------------------------
   Put your photos in the folder  assets/culture/  using the file names
   below (img: 'kulintang.jpg' means assets/culture/kulintang.jpg).
   If a file is missing, a labeled placeholder is shown instead.
   To use a different name or folder, change PHOTO_DIR or the img: value.
   Use only photos that you took, have permission to use, or that are
   properly licensed, and fill in the credit: line for each one.          */
const PHOTO_DIR = 'assets/culture/';

/* ---- KULINTANG AUDIO AND VIDEO ---------------------------------------
   When a visitor opens the Kulintang exhibit they can choose to play the
   audio or the video. Put your files here (or change the paths):
     assets/audio/kulintang.mp3      assets/video/kulintang.mp4
   */
const KULINTANG_AUDIO = { src: 'assets/audio/kulintang.mp3' };
const KULINTANG_VIDEO = { src: 'assets/video/kulintang.mp4', poster: '' };

/* ---- SECTION 1: KULINTANG ---------------------------------------------- */
const MUSIC = [{
  title: 'Kulintang', cat: 'Music', img: 'kulintang-instru.jpg',
  caption: 'The kulintang: a row of tuned, knobbed gongs laid on a frame.',
  credit: '',            // e.g. 'Photo by Hamidah, 2026'
  body: [
    'The kulintang is a set of small, tuned, knobbed gongs laid horizontally on a frame. It carries the melody in an ensemble that usually also includes larger hanging gongs and drums.',
    '<b>How it is played.</b> The player strikes the raised knob of each gong with two wooden beaters. A set usually has about five to nine gongs. The gongs are tuned by ear, so the tuning differs from one set to another. The frame the gongs rest on is called <em>langkonga</em> by the Maranao.',
    '<b>Cultural context.</b> A Maranao ensemble is commonly described as the kulintang together with the <em>agong</em> (large hanging gongs), the <em>dabakan</em> (a drum) and the <em>babandir</em> (another gong). Spellings vary between sources. Kulintang music is associated with social gatherings, weddings, welcoming guests and ceremonies, and many communities have customs about when it is and is not played, for example traditionally avoiding funerals and mosques.',
    'Practices differ across communities in Mindanao and the southern Philippines, so please treat this as a general introduction.'
  ],
  facts: [['Instrument', 'Row of small knobbed gongs'], ['Played with', 'Two wooden beaters'], ['Frame (Maranao)', 'Langkonga'], ['Gongs per set', 'Usually about 5 to 9']],
  media: { audio: KULINTANG_AUDIO, video: KULINTANG_VIDEO }
}];

/* ---- SECTION 2: TEXTILE ARTISTRY (malong and landap) ------------------ */
const TEXTILES = [
  { title: 'Malong and Landap', cat: 'Textile Artistry', img: 'malong.jpg',
    caption: 'Women wearing malong, the tubular wrapped textile.', credit: '',
    body: ['A malong is a tubular textile garment worn in various communities in Mindanao, including Maranao communities. It is wrapped and worn in many ways, by both men and women, in daily and ceremonial dress.',
      'The <em>malong a landap</em> is described as a Maranao tubular garment of thin silk, made from broad tubes joined by woven tapestry bands called <em>langkit</em>. Its geometric designs are described as similar to Okir. One catalogue also names the wide vertical bands (<em>lakban</em>) and a narrower center band (<em>tobrian</em>).'],
    sources: [{ t: 'Malong a Landap (Philippine Studies mapping)', u: 'https://philippinestudies.uk/mapping/items/show/29323' }] }
];

/* ---- SECTION 3: VISUAL CULTURE (Okir a datu, Okir a bai, brassware) ---- */
const OKIR_EXAMPLES = [
  { title: 'Okir a Datu', cat: 'Visual Culture', img: 'okir-a-datu.jpg', caption: 'A painted Okir carving with flowing scroll and leaf forms.', credit: '',
    body: ['Published sources describe two broad kinds of Okir: <em>okir-a-dato</em>, called the "male" style, and <em>okir-a-bai</em>, called the "female" style. Okir a datu is described as flowing and curvilinear, with scrolls, leaves and serpent forms.',
      'Okir like this decorates torogan beams, posts and panolong, and is often painted in bright colors.'],
    },
  { title: 'Okir a Bai', cat: 'Visual Culture', img: 'okir-a-bai.jpg', caption: 'Painted Okir wings on a wooden building.', credit: '',
    body: ['Okir-a-bai is the style called "female" in published descriptions. In those descriptions it is more often straight-lined (rectilinear), while "male" okir is more often curved. The two are not always separate, and names and categories can differ between sources.'],
    },
  { title: 'Brassware and Metalwork', cat: 'Visual Culture', img: 'brassware.jpg', caption: 'A lidded brass vessel with engraved bands and pierced stand.', credit: '',
    body: ['Metalwork is one of the arts where Okir-style designs appear. Maranao brass and silver-inlaid pieces, such as betel-quid containers, are found in museum collections, and gongs of the kulintang are also made of metal.',
      'This piece has engraved scroll and triangle bands, a pierced base and a tall finial.'],
    sources: [{ t: 'Maranao inlaid brass betel set (Roots.gov.sg collection)', u: 'https://www.roots.gov.sg/Collection-Landing/listing/1251105' }] }
];
const OKIR_WHERE = ['Torogan beams and posts', 'Malong and langkit bands', 'Musical instruments', 'Betel-quid containers', 'Sculptures', 'Weapons', 'Silver and metal inlay'];

/* ---- SECTION 4: ROYAL ARCHITECTURE (Torogan) -------------------------- */
const TOROGAN = [
  { title: 'The Torogan', cat: 'Royal Architecture', img: 'torogan.jpg', caption: 'A model of a torogan, the house of a Maranao chief or noble family.', credit: '',
    body: ['The torogan is a traditional Maranao house, a symbol of high status, wealth and power. It was the home of a community leader and also a social hall for feasts, weddings, funerals and meetings.',
      'It is raised on wooden columns and built without nails, using fitted joints and fiber lashings. A large open hall forms the main floor under a thatched roof.',
      'Not every Maranao family lived in a torogan, and traditional architecture does not describe every modern household.'],
    facts: [['Raised on', 'Large wooden columns'], ['Joined with', 'Fitted joints and fiber lashings, no nails'], ['Roof', 'Thatched']] },
  { title: 'Panolong: carved beam ends', cat: 'Royal Architecture', img: 'panolong.jpg', caption: 'A carved panolong displayed in a museum.', credit: '',
    body: ['Panolong are wing-like carved slabs at the ends of the floor beams. They resemble the prows of traditional boats, which makes the house look like a floating royal vessel.',
      'Many panolong show the <em>niyaga</em>, a mythical sea serpent, in flowing Okir designs. Carving and Okir also decorate posts, windows and door frames, often painted in bright colors.'] }
];

/* ---- SECTION 5: IDENTITY AND ATTIRE ----------------------------------- */
const ATTIRE = [
  { title: 'Identity and Attire', cat: 'Identity and Attire', img: 'attire.jpg', caption: 'Gold and purple costumes displayed on stands.', credit: '',
    body: ['Traditional dress differs by occasion, community and personal taste. This exhibit shows one example, not a single standard, and no garment here stands for every Maranao person.',
      'Malong are worn by both men and women, in daily and ceremonial dress. Costumes like these are often worn for performances and celebrations.'] }
];
const ATTIRE_FACT = 'One documented point: malong are worn by both men and women, in daily and ceremonial dress.';

/* ---- SECTION 6: TRADITIONS, COMMUNITY, AND EVERYDAY LIFE ----------------
   Three cards, each with its own pictures. "intro" and "more" are documented
   facts. "note" is the dashed space for Hamidah's own words.            */
const LIFE_CARDS = [
  { icon: '📜', title: 'Oral Traditions & Darangen',
    imgs: [{ img: 'darangen.jpg', title: 'Darangen (Epikong Maranao)', caption: 'An illustrated cover for the Darangen, the Maranao epic.' }],
    intro: 'The Darangen is a Maranao epic sung in verse and passed down mostly by word of mouth. UNESCO describes it as having 17 cycles and about 72,000 lines.',
    more: ['The name is said to mean "to narrate in song". It is typically sung at weddings that last several nights, and it also gave rise to the Singkil dance.',
      'It was proclaimed a Masterpiece of the Oral and Intangible Heritage of Humanity in 2005 and inscribed on UNESCO\'s Representative List in 2008.'],
    sources: [{ t: 'UNESCO: Darangen epic of the Maranao people of Lake Lanao', u: 'https://ich.unesco.org/en/RL/00159' }] },
  { icon: '🍲', title: 'Culinary Heritage',
    imgs: [{ img: 'culinary-1.jpg', title: 'Palapa', caption: 'A bowl of palapa, a spicy Maranao condiment.' },
           { img: 'culinary-2.jpg', title: 'A chicken and rice dish', caption: 'A chicken and rice dish.' }],
    intro: 'Maranao cuisine is often described as spicier than that of most other regions of the Philippines.',
    more: ['A well-known condiment is <em>palapa</em>, made from stewed scallions, ginger and chilies in coconut oil.'] },
  { icon: '👨‍👩‍👧', title: 'Family & Social Values',
    imgs: [{ img: 'family-1.jpg', title: 'A shared meal', caption: 'Food shared on a decorated tray at a gathering.' },
           { img: 'family-2.jpg', title: 'Together in traditional dress', caption: 'A group together in traditional dress.' }],
    intro: 'Shared occasions and gathering places have long been part of Maranao community life, from weddings and feasts to the torogan, which also served as a social hall.',
    more: ['The Darangen is typically sung at weddings, and kulintang music is associated with weddings and other celebrations. Family life differs from household to household, so this museum does not generalize.'],
    sources: [{ t: 'UNESCO: Darangen', u: 'https://ich.unesco.org/en/RL/00159' }] }
];
const LIFE_ITEMS = [];
LIFE_CARDS.forEach((c, ci) => c.imgs.forEach((p) => LIFE_ITEMS.push({
  title: p.title, cat: c.title, img: p.img, caption: p.caption, credit: '', _card: ci,
  body: [c.intro].concat(c.more), sources: c.sources
})));

/* ---- SECTION 7: TIMELINE (dates and sources supplied by Hamidah) --------- */
const TIMELINE = [
  { year: '1895', title: 'Battle of Marahui', img: 'timeline-1.jpg',
    text: 'The Battle of Marahui in 1895 was an important event in the history of the Lanao area. It is remembered as part of the resistance of local communities during Spanish colonial expansion in Mindanao. This event reflects the history of local leadership and the efforts to defend their homeland and way of life.',
    srcName: 'Bangsamoro Commission for the Preservation of Cultural Heritage', url: 'https://bcpch.bangsamoro.gov.ph/significant-meeting-of-historical-and-cultural-importance-with-bcpch-and-nhcp-takes-place-in-marawi-city-province-of-lanao-del-sur/' },
  { year: '2005', title: 'Darangen recognized by UNESCO (November 25, 2005)', img: 'timeline-2.jpg',
    text: 'The Darangen is a traditional Maranao epic chant that tells stories about heroes, love, leadership, customs and community values. On November 25, 2005, UNESCO proclaimed it a Masterpiece of the Oral and Intangible Heritage of Humanity. This recognition helped bring greater attention to the importance of preserving Maranao oral literature and cultural traditions.',
    srcName: 'National Commission for Culture and the Arts', url: 'https://ncca.gov.ph/about-culture-and-arts/culture-profile/intangible-heritage/' },
  { year: '2008', title: 'Darangen added to UNESCO\'s Representative List', img: 'timeline-3.jpg',
    text: 'In 2008, the Darangen was included in UNESCO\'s Representative List of the Intangible Cultural Heritage of Humanity. It contains stories that preserve Maranao history, beliefs, social values and traditional knowledge. This recognition supports efforts to protect the epic and pass it on to future generations.',
    srcName: 'UNESCO Intangible Cultural Heritage', url: 'https://ich.unesco.org/' },
  { year: '2017', title: 'Beginning of the Marawi Siege (May 23, 2017)', img: 'timeline-4.jpg',
    text: 'On May 23, 2017, armed conflict began in Marawi City, leading to a long siege that caused widespread destruction and forced many residents to leave their homes. The conflict deeply affected Maranao families, communities and cultural sites. It remains an important part of modern Maranao history and highlights the need to protect cultural heritage and support affected communities.',
    srcName: 'Supreme Court of the Philippines', url: 'https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/18/67591' },
  { year: '2022', title: 'Marawi Siege Victims Compensation Act (April 13, 2022)', img: 'timeline-5.jpg',
    text: 'On April 13, 2022, Republic Act No. 11696, known as the Marawi Siege Victims Compensation Act, was approved. The law established a legal process for compensating eligible victims for deaths and property losses caused by the 2017 siege. It marked an important step toward recognizing the losses suffered by affected residents and supporting their recovery.',
    srcName: 'Senate of the Philippines, Legislative Reference Bureau', url: 'https://issuances-library.senate.gov.ph/legislative%2Bissuances/Republic%20Act%20No.%2011696' }
];

/* ---- SECTION 8: VOCABULARY ----------------------------------------------
   Meanings were provided by Hamidah. "pron" is a simple written pronunciation
   guide (syllables). Change it if a fluent speaker says it differently.     */
const WORDS = [
  { word: 'Mapipiya ka anan', pron: 'ma-pi-pi-ya ka a-nan', meaning: 'Are you well?', note: 'Shows care and love for the person you ask.' },
  { word: 'Sallam', pron: 'sa-lam', meaning: 'Assalamu Alaykum', note: 'Means "peace be upon you".' },
  { word: 'Andaka sung?', pron: 'an-da-ka sung', meaning: 'Where are you going?', note: '' },
  { word: 'Kumhan tano dun', pron: 'kum-han ta-no dun', meaning: 'Let us eat now', note: '' },
  { word: 'Tharos kano', pron: 'tha-ros ka-no', meaning: 'Welcome / You are welcome here', note: '' },
  { word: 'Pkababayaan akn ska / Pakatatayaan akn ska', pron: 'pka-ba-ba-ya-an a-kn ska', meaning: 'I adore / love / like you. I care for / spoil you.', note: '' }
];

/* ---- SECTION 9: CENTRAL GALLERY (6 pictures) ---------------------------
   img = file name inside assets/culture/ . Add credit: for each photo.   */
const GALLERY = [
  { title: 'Kulintang on display', caption: 'A kulintang displayed in a museum.', img: 'kulintang-instru2.jpg', credit: '' },
  { title: 'Malong in dance', caption: 'Dancers wearing malong on stage.', img: 'malong-dance.jpg', credit: '' },
  { title: 'Torogan', caption: 'A model of a torogan.', img: 'torogan.jpg', credit: '' },
  { title: 'Dance', caption: 'A staged Maranao dance performance.', img: 'dance.jpg', credit: '' },
  { title: 'Hamidah', caption: 'Hamidah H. Gunting ("Bambi").', img: 'profile.jpg', credit: 'Photo provided by Hamidah' },
  { title: 'Dance ensemble', caption: 'The dance group in costume.', img: 'dance-group.jpg', credit: 'Photo provided by Hamidah' }
];

/* ---- SOURCES LIST (shown at the bottom of the page) ------------------- */
const SOURCES = [
  { t: 'UNESCO: Darangen epic of the Maranao people of Lake Lanao', u: 'https://ich.unesco.org/en/RL/00159' },
  { t: 'Malong a Landap (Philippine Studies mapping)', u: 'https://philippinestudies.uk/mapping/items/show/29323' },
  { t: 'Timeline: Bangsamoro Commission for the Preservation of Cultural Heritage', u: TIMELINE[0].url },
  { t: 'Timeline: National Commission for Culture and the Arts', u: TIMELINE[1].url },
  { t: 'Timeline: UNESCO Intangible Cultural Heritage', u: TIMELINE[2].url },
  { t: 'Timeline: Supreme Court of the Philippines', u: TIMELINE[3].url },
  { t: 'Timeline: Senate of the Philippines, Legislative Reference Bureau', u: TIMELINE[4].url }
];

/* =====================================================================
   END OF CONFIG
   ===================================================================== */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const sleep = (ms) => new Promise((r) => setTimeout(r, reduced ? 0 : ms));

/* ---------- Placeholder pictures (clearly labeled) ---------- */
function svgUri(svg) { return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg); }
function placeholder(title, file) {
  const path = file ? PHOTO_DIR + file : '';
  return svgUri(`<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'>
    <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#f7ecd0'/><stop offset='1' stop-color='#e3cf98'/></linearGradient></defs>
    <rect width='800' height='600' fill='url(#g)'/>
    <rect x='24' y='24' width='752' height='552' fill='none' stroke='#8a6416' stroke-width='4' stroke-dasharray='14 10'/>
    <circle cx='400' cy='210' r='70' fill='none' stroke='#8a6416' stroke-width='6'/><path d='M360 225l30-34 22 26 16-14 32 30z' fill='#8a6416'/><circle cx='426' cy='186' r='9' fill='#8a6416'/>
    <text x='400' y='350' text-anchor='middle' font-family='Georgia,serif' font-size='40' font-weight='bold' fill='#4a3222'>${esc(title)}</text>
    <text x='400' y='420' text-anchor='middle' font-family='Arial,sans-serif' font-size='24' letter-spacing='4' fill='#9b2c2c'>ADD YOUR PHOTO HERE</text>
    <text x='400' y='462' text-anchor='middle' font-family='Arial,sans-serif' font-size='20' fill='#4a3222'>${esc(path)}</text></svg>`);
}
function setImg(img, item) {
  const fb = placeholder(item.title, item.img || '');
  img.classList.remove('tall');
  img.onload = () => { if (img.naturalHeight > img.naturalWidth * 1.15) img.classList.add('tall'); };
  img.onerror = () => { img.onerror = null; img.src = fb; };
  img.src = item.img ? PHOTO_DIR + item.img : fb;
}

const DETAILS = { life: LIFE_ITEMS, music: MUSIC, textiles: TEXTILES, okirEx: OKIR_EXAMPLES, torogan: TOROGAN, attire: ATTIRE };

/* =====================================================================
   1. Mouse effects: 3D tilt, hall spotlight, lobby parallax
   ===================================================================== */
const tilted = new WeakSet();
function makeTilt(el, strength = 12) {
  if (reduced || tilted.has(el)) return;
  tilted.add(el);
  el.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--ry', (((e.clientX - r.left) / r.width - 0.5) * strength).toFixed(1) + 'deg');
    el.style.setProperty('--rx', (-((e.clientY - r.top) / r.height - 0.5) * strength).toFixed(1) + 'deg');
  });
  el.addEventListener('pointerleave', () => { el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg'); });
}
function tiltAll() {
  $$('.room, .topic, .thumb, .frame:not(.static)').forEach((el) => makeTilt(el, 10));
  const arch = $('.arch'); if (arch) makeTilt(arch, 5);
}
if (!reduced) {
  $$('.wall').forEach((w) => w.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    const r = w.getBoundingClientRect();
    w.style.setProperty('--lx', (e.clientX - r.left) + 'px');
    w.style.setProperty('--ly', (e.clientY - r.top) + 'px');
  }));
  const lobby = $('#lobby');
  lobby.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    lobby.style.setProperty('--px', (e.clientX / window.innerWidth - 0.5).toFixed(3));
    lobby.style.setProperty('--py', (e.clientY / window.innerHeight - 0.5).toFixed(3));
  });
}

/* =====================================================================
   2. Building the halls
   ===================================================================== */
function makeExhibit(item, listName, idx) {
  const fig = document.createElement('figure');
  fig.className = 'exhibit reveal';
  const btn = document.createElement('button');
  btn.type = 'button'; btn.className = 'frame';
  btn.setAttribute('aria-label', `View exhibit: ${item.title}`);
  btn.innerHTML = '<span class="mat"><img alt=""><span class="zoom" aria-hidden="true">⌕ View</span></span>';
  const img = $('img', btn);
  img.alt = item.alt || item.title;
  setImg(img, item);
  btn.addEventListener('click', () => openDetail(listName, idx, btn));
  const cap = document.createElement('figcaption');
  cap.className = 'placard';
  cap.innerHTML = `<b>${esc(item.title)}</b><span${item.todo ? ' class="todo"' : ''}>${esc(item.caption)}</span>`;
  fig.append(btn, cap);
  return fig;
}
function fillGrid(id, listName) {
  const host = $('#' + id);
  if (DETAILS[listName].length === 1) host.classList.add('solo');
  DETAILS[listName].forEach((it, i) => host.appendChild(makeExhibit(it, listName, i)));
}

/* Museum map */
$('#map').innerHTML = [
  ['music', '1', 'Kulintang', '🎶'], ['textiles', '2', 'Textile Artistry', '🧵'], ['okir', '3', 'Visual Culture', '🌿'],
  ['torogan', '4', 'Royal Architecture', '🏛️'], ['attire', '5', 'Identity & Attire', '👘'], ['life', '6', 'Traditions & Everyday Life', '🍲'],
  ['timeline', '7', 'Timeline', '⏳'], ['words', '8', 'Vocabulary', '💬'], ['gallery', '9', 'Image Gallery', '🖼️']
].map(([id, l, t, i]) => `<a class="room reveal" href="#${id}"><span class="ri" aria-hidden="true">${i}</span><span class="rl">Section ${l}</span><span class="rt">${esc(t)}</span></a>`).join('');

/* Section 1: one large clickable image + short text */
(function renderMusic() {
  const it = MUSIC[0];
  const host = $('#musicBody');
  host.innerHTML = '<div class="feature"><div class="feature-art"></div><div class="feature-text reveal"></div></div>';
  $('.feature-art', host).appendChild(makeExhibit(it, 'music', 0));
  $('.feature-text', host).innerHTML = `
    <h3>${esc(it.title)}</h3>
    <p>${it.body[0]}</p>
    <ul><li>Played with two wooden beaters on a row of knobbed gongs</li><li>Usually joined by hanging gongs and a drum</li><li>Heard at weddings, gatherings and ceremonies</li></ul>
    <button class="btn-gold" id="musicBtn" type="button">Open the exhibit: play audio or video</button>`;
  $('#musicBtn').addEventListener('click', (e) => openDetail('music', 0, e.currentTarget));
})();

fillGrid('textileGrid', 'textiles');
fillGrid('okirExamples', 'okirEx');
fillGrid('toroganGrid', 'torogan');
fillGrid('attireGrid', 'attire');
$('#attireGrid').insertAdjacentHTML('afterend', `<p class="note-card reveal">${esc(ATTIRE_FACT)}</p>`);

/* Section 3: where Okir appears */
$('#okirWhere').innerHTML = OKIR_WHERE.map((w) => `<li class="chip">${esc(w)}</li>`).join('');

/* Section 6: three cards, each with its own pictures */
(function renderLife() {
  const host = $('#topics');
  let flat = 0;
  LIFE_CARDS.forEach((t, i) => {
    const card = document.createElement('article');
    card.className = 'topic life reveal';
    const mid = 'topicMore' + i;
    card.innerHTML = `
      <div class="ti" aria-hidden="true">${t.icon}</div>
      <h3>${esc(t.title)}</h3>
      <div class="life-pics n${t.imgs.length}"></div>
      <p>${esc(t.intro)}</p>
      <button class="toggle" type="button" aria-expanded="false" aria-controls="${mid}">Read more</button>
      <div class="more" id="${mid}" hidden>
        ${t.more.map((p) => `<p>${p}</p>`).join('')}
      </div>`;
    const pics = $('.life-pics', card);
    t.imgs.forEach((p) => {
      const idx = flat++;
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'frame';
      b.setAttribute('aria-label', `View picture: ${p.title}`);
      b.innerHTML = '<span class="mat"><img alt=""><span class="zoom" aria-hidden="true">⌕ View</span></span>';
      const img = $('img', b); img.alt = p.title; setImg(img, p);
      b.addEventListener('click', () => openDetail('life', idx, b));
      pics.appendChild(b);
    });
    const btn = $('.toggle', card), more = $('.more', card);
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      btn.textContent = open ? 'Read more' : 'Show less';
      more.hidden = open;
    });
    host.appendChild(card);
  });
})();

/* Hall G: timeline */
(function renderTimeline() {
  const host = $('#tl');
  TIMELINE.forEach((e, i) => {
    const li = document.createElement('li');
    li.className = 'tl-item reveal';
    const bid = 'tlBody' + i;
    li.innerHTML = `
      <span class="tl-dot" aria-hidden="true">${i + 1}</span>
      <button class="tl-head" type="button" aria-expanded="false" aria-controls="${bid}">
        <span><span class="when">${esc(e.year)}</span><span class="ttl">${esc(e.title)}</span></span>
        <span class="chev" aria-hidden="true">▾</span>
      </button>
      <div class="tl-body" id="${bid}" hidden>
        <div><p>${esc(e.text)}</p><p class="src"><b>Source:</b> <a href="${esc(e.url)}" target="_blank" rel="noopener noreferrer">${esc(e.srcName)}</a></p></div>
      </div>`;
    const head = $('.tl-head', li), body = $('.tl-body', li);
    head.addEventListener('click', () => {
      const open = head.getAttribute('aria-expanded') === 'true';
      head.setAttribute('aria-expanded', String(!open));
      body.hidden = open;
    });
    host.appendChild(li);
  });
})();

/* Hall H: vocabulary flip cards */
(function renderVocab() {
  const host = $('#vocab');
  WORDS.forEach((w) => {
    const card = document.createElement('div');
    card.className = 'vcard reveal' + (w.word.length > 20 ? ' long' : '');
    card.innerHTML = `
      <div class="vflip"><div class="vinner">
        <button class="vface vfront" type="button" aria-label="Reveal the meaning of ${esc(w.word)}"><span class="vword">${esc(w.word)}</span><span class="vpron">${esc(w.pron)}</span><span class="vhint">Tap to reveal</span></button>
        <button class="vface vback" type="button" aria-label="Turn the card back over" inert>
          <span class="vmean">${esc(w.meaning)}</span>
          ${w.note ? `<span class="vnote">${esc(w.note)}</span>` : ''}
          <span class="vpron">Say it: ${esc(w.pron)}</span>
        </button>
      </div></div>`;
    const front = $('.vfront', card), back = $('.vback', card);
    const flip = (on) => {
      card.classList.toggle('flipped', on);
      front.inert = on; back.inert = !on;
      (on ? back : front).focus({ preventScroll: true });
    };
    front.addEventListener('click', () => flip(true));
    back.addEventListener('click', () => flip(false));
    host.appendChild(card);
  });
})();

/* Sources */
$('#sources').innerHTML = SOURCES.map((s) => `<li><a href="${esc(s.u)}" target="_blank" rel="noopener noreferrer">${esc(s.t)}</a></li>`).join('');

/* =====================================================================
   3. Detail exhibit (modal) with previous / next
   ===================================================================== */
const D = { ov: $('#detail'), frame: $('#dFrame'), credit: $('#dCredit'), kicker: $('#dKicker'), title: $('#dTitle'), content: $('#dContent'), media: $('#dMedia'), src: $('#dSrc'), count: $('#dCount'), prev: $('#dPrev'), next: $('#dNext'), nav: $('#dNav') };
let dList = [], dIdx = 0, dTrigger = null, dOpen = false, dMediaEl = null;

function stopMedia() { if (dMediaEl) { try { dMediaEl.pause(); } catch (e) { /* ignore */ } dMediaEl = null; } }

function buildMedia(m) {
  const box = document.createElement('div');
  box.className = 'media';
  box.innerHTML = `<h4>Listen or watch</h4>
    <p class="mhelp">Curious how the kulintang sounds? Choose one:</p>
    <div class="mchoice"><button class="btn-gold" type="button" data-k="audio">🎧 Play the audio</button><button class="btn-gold" type="button" data-k="video">🎬 Play the video</button></div>
    <div class="mstage"></div>`;
  const stage = $('.mstage', box);
  const choose = (kind) => {
    stopMedia();
    const cfg = m[kind], isVideo = kind === 'video';
    stage.innerHTML = '';
    const el = document.createElement(isVideo ? 'video' : 'audio');
    el.controls = true; el.preload = 'metadata'; el.playsInline = true;
    if (isVideo && cfg.poster) el.poster = cfg.poster;
    el.setAttribute('aria-label', `${isVideo ? 'Video' : 'Audio'} player: kulintang`);
    const status = document.createElement('p');
    status.className = 'mstatus'; status.textContent = 'Loading...';
    el.addEventListener('loadedmetadata', () => { status.hidden = true; });
    el.addEventListener('error', () => {
      el.hidden = true; status.hidden = false; status.className = 'mstatus';
      status.textContent = `Sorry, this ${isVideo ? 'video' : 'audio'} could not be loaded.`;
    });
    el.src = cfg.src;
    stage.append(el, status);
    dMediaEl = el;
    const p = el.play(); if (p && p.catch) p.catch(() => { /* the player's own Play button still works */ });
    $$('[data-k]', box).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.k === kind)));
  };
  $$('[data-k]', box).forEach((b) => b.addEventListener('click', () => choose(b.dataset.k)));
  return box;
}

function showDetail() {
  stopMedia();
  const it = dList[dIdx];
  D.kicker.textContent = it.cat || '';
  D.title.textContent = it.title;
  D.frame.innerHTML = '';
  const img = document.createElement('img');
  img.alt = it.alt || it.title;
  setImg(img, it);
  D.frame.appendChild(img);
  D.credit.innerHTML = it.credit ? esc(it.credit) : '';
  D.content.innerHTML = (it.body || []).map((p) => `<p>${p}</p>`).join('') +
    (it.facts ? `<dl class="facts">${it.facts.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}</dl>` : '');
  D.media.innerHTML = '';
  if (it.media) D.media.appendChild(buildMedia(it.media));
  D.src.innerHTML = it.sources ? `<b>Sources</b><ul>${it.sources.map((s) => `<li><a href="${esc(s.u)}" target="_blank" rel="noopener noreferrer">${esc(s.t)}</a></li>`).join('')}</ul>` : '';
  const many = dList.length > 1;
  D.nav.hidden = !many;
  D.count.textContent = `${dIdx + 1} of ${dList.length}`;
  $('.dbody', D.ov).scrollTop = 0;
}
function openDetail(listName, idx, trigger) {
  if (dOpen) return;
  dList = DETAILS[listName]; dIdx = idx; dTrigger = trigger || document.activeElement; dOpen = true;
  showDetail();
  D.ov.hidden = false;
  document.body.classList.add('lock');
  requestAnimationFrame(() => D.ov.classList.add('show'));
  setTimeout(() => $('.close', D.ov).focus({ preventScroll: true }), 80);
}
async function closeDetail() {
  if (!dOpen) return;
  dOpen = false;
  stopMedia();
  D.ov.classList.remove('show');
  await sleep(380);
  D.ov.hidden = true;
  document.body.classList.remove('lock');
  if (dTrigger && dTrigger.focus) dTrigger.focus({ preventScroll: true });
}
const stepDetail = (d) => { if (dOpen && dList.length > 1) { dIdx = (dIdx + d + dList.length) % dList.length; showDetail(); } };
D.prev.addEventListener('click', () => stepDetail(-1));
D.next.addEventListener('click', () => stepDetail(1));
D.ov.addEventListener('click', (e) => { if (e.target === D.ov || e.target.closest('[data-close]')) closeDetail(); });

/* =====================================================================
   4. Central gallery + lightbox
   ===================================================================== */
let gView = GALLERY;
const LB = { ov: $('#lightbox'), img: $('#lbImg'), title: $('#lbTitle'), cap: $('#lbCap'), credit: $('#lbCredit') };
let lbIdx = 0, lbTrigger = null;

function renderGallery() {
  const host = $('#galleryGrid');
  host.innerHTML = '';
  gView = GALLERY;
  gView.forEach((g, i) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'thumb';
    b.setAttribute('aria-label', `Enlarge image: ${g.title}`);
    b.innerHTML = `<img alt=""><span class="cap">${esc(g.title)}</span>`;
    const img = $('img', b);
    img.alt = g.title;
    setImg(img, g);
    b.addEventListener('click', () => openLightbox(i, b));
    host.appendChild(b);
  });
  tiltAll();
}
function showLightbox() {
  const g = gView[lbIdx];
  setImg(LB.img, g);
  LB.img.alt = g.title;
  LB.title.textContent = g.title;
  LB.cap.textContent = g.caption || '';
  LB.credit.textContent = g.credit ? 'Credit: ' + g.credit : '';
}
function openLightbox(i, trigger) {
  lbIdx = i; lbTrigger = trigger || null;
  showLightbox();
  LB.ov.hidden = false;
  document.body.classList.add('lock');
  $('#lbClose').focus({ preventScroll: true });
}
function closeLightbox() {
  if (LB.ov.hidden) return;
  LB.ov.hidden = true;
  if (!dOpen) document.body.classList.remove('lock');
  if (lbTrigger && lbTrigger.focus) lbTrigger.focus({ preventScroll: true });
}
const stepLightbox = (d) => { if (!LB.ov.hidden && gView.length) { lbIdx = (lbIdx + d + gView.length) % gView.length; showLightbox(); } };
$('#lbClose').addEventListener('click', closeLightbox);
$('#lbPrev').addEventListener('click', () => stepLightbox(-1));
$('#lbNext').addEventListener('click', () => stepLightbox(1));
LB.ov.addEventListener('click', (e) => { if (e.target === LB.ov) closeLightbox(); });
renderGallery();

/* =====================================================================
   5. Keyboard: Escape closes, arrows move, Tab stays inside a window
   ===================================================================== */
document.addEventListener('keydown', (e) => {
  const lbOpen = !LB.ov.hidden;
  if (e.key === 'Escape') {
    if (lbOpen) closeLightbox(); else if (dOpen) closeDetail(); else closeMenu();
    return;
  }
  if (e.key === 'ArrowRight') { if (lbOpen) stepLightbox(1); else if (dOpen && !/INPUT|SELECT|AUDIO|VIDEO/.test(document.activeElement.tagName)) stepDetail(1); }
  if (e.key === 'ArrowLeft') { if (lbOpen) stepLightbox(-1); else if (dOpen && !/INPUT|SELECT|AUDIO|VIDEO/.test(document.activeElement.tagName)) stepDetail(-1); }
  if (e.key === 'Tab' && (lbOpen || dOpen)) {
    const root = lbOpen ? LB.ov : D.ov;
    const f = $$('button, a[href], input, select, audio[controls], video[controls]', root).filter((x) => !x.hidden && x.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (!root.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
    else if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

/* =====================================================================
   6. Navigation: mobile menu, active hall, progress bar, back to top
   ===================================================================== */
const burger = $('#burger'), menu = $('#menu');
function closeMenu() { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); burger.setAttribute('aria-label', 'Open the museum menu'); }
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Close the museum menu' : 'Open the museum menu');
});
$$('#menu a[href^="#"]').forEach((a) => a.addEventListener('click', closeMenu));
document.addEventListener('click', (e) => { if (menu.classList.contains('open') && !e.target.closest('#nav')) closeMenu(); });

const links = $$('#menu a[href^="#"]');
const spy = (id) => links.forEach((a) => { if (a.getAttribute('href') === '#' + id) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
if ('IntersectionObserver' in window) {
  const so = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) spy(en.target.id); }), { rootMargin: '-45% 0px -50% 0px' });
  links.forEach((a) => { const s = $(a.getAttribute('href')); if (s) so.observe(s); });
}
const progress = $('#progress'), toTop = $('#toTop');
let ticking = false;
function onScroll() {
  ticking = false;
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
  toTop.hidden = window.scrollY < 600;
}
window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
onScroll();
const goTop = () => window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
toTop.addEventListener('click', goTop);
$('#topBtn2').addEventListener('click', goTop);
$('#beginBtn').addEventListener('click', () => $('#welcome').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' }));

/* Scroll reveal */
(function reveal() {
  const els = $$('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return; }
  const io = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
  els.forEach((e) => io.observe(e));
})();
tiltAll();

/* =====================================================================
   7. PAGE TRANSITION (gold curtain) between page 1 and page 2
   ===================================================================== */
$$('a[data-transition]').forEach((a) => { a.href = RETURN_URL; });
const curtain = $('#curtain');
function goToPage(url) {
  if (reduced || !curtain) { window.location.href = url; return; }
  try { sessionStorage.setItem('curtain', '1'); } catch (e) { /* storage blocked: still works */ }
  curtain.classList.add('closed');
  setTimeout(() => { window.location.href = url; }, 950);
}
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[data-transition]');
  if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  e.preventDefault();
  goToPage(a.href);
});
(function openCurtain() {
  const root = document.documentElement;
  const open = () => { try { sessionStorage.removeItem('curtain'); } catch (e) { /* ignore */ } if (curtain) curtain.classList.remove('closed'); root.classList.remove('arriving'); };
  if (root.classList.contains('arriving')) setTimeout(open, 120); else open();
  window.addEventListener('pageshow', (ev) => { if (ev.persisted) open(); });
})();
