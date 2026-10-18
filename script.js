/* =====================================================================
   HAMIDAH'S LUXURY PORTFOLIO BOX  -  script.js

   EDIT ONLY THE "CONFIG" SECTION BELOW to change text, photos, songs,
   certificates and links. Everything after it is the behavior code.
   ===================================================================== */
'use strict';

/* =====================================================================
   CONFIG  (edit me)
   ===================================================================== */

/* ---- PAGE 2 LINK -----------------------------------------------------
   Page 2 is the file culture.html in the SAME folder as index.html.
   The "know about my culture!" button in the letter uses this address.
   Keep the file names the same, or change the name here if you rename
   culture.html.                                                           */
const PAGE_2_URL = 'culture.html';

/* ---- BACKGROUND MUSIC ------------------------------------------------
   Plays by itself when the page opens, pauses while you play a song from
   the album box, and comes back when you close the album.
   Put the file at  assets/audio/supernatural.mp3  (Ariana Grande -
   Supernatural) or change src below. Browsers only allow sound after the
   visitor interacts with the page, so if it is blocked it starts on the
   first click or key press. The small "Music" button lets visitors mute it.
   volume: 0 (silent) to 1 (full).                                          */
const BG_MUSIC = { src: 'assets/audio/supernatural.mp3', volume: 0.35 };

/* ---- PROFILE (Object 1) ----------------------------------------------
   photo: put your picture at assets/photos/hamidah.jpg (or change the path).
   Until the file exists, a clearly labeled placeholder is shown.
   Anything with `todo:` is shown as a dashed "write me" note - replace it
   with your own words from your original prompt.                          */
const PROFILE = {
  photo: 'assets/photos/hamidah.jpg',
  fullName: 'Hamidah H. Gunting',
  preferredNames: ['Hamidah', 'Bambi'],
  facts: [
    { icon: '🎂', label: 'Age', value: '17' },
    { icon: '♒', label: 'Zodiac Sign', value: 'Aquarius' },
    { icon: '🏫', label: 'School', value: 'Tomas Cabili National High School (TCNHS)' },
    { icon: '🎓', label: 'Grade Level', value: 'Grade 12' },
    { icon: '💻', label: 'Strand', value: 'TVL 3 – CSS' }
  ],
  sections: [
    { icon: '✨', title: 'About Me',
      text: 'I\u2019m an oddball with a curious mind and a personality of my own. I enjoy learning new things, exploring different ideas, and expressing myself through music and art. I may be a little different from others, but I believe that being unique is part of what makes me who I am.' },
    { icon: '🎶', title: 'Hobbies & Interests',
      tags: ['Singing', 'Drawing', 'Dancing', 'Playing horror games', 'Playing traditional cultural instruments'] },
    { icon: '💛', title: 'Favorite Things',
      rows: [['Food', 'Sweets and desserts'], ['Drinks', 'Iced coffee'], ['Colors', 'Ivory, periwinkle, and cream'],
             ['Places', 'Quiet places with fewer people, city lights at night, and beaches']] },
    { icon: '🌟', title: 'Motto & Personal Values',
      text: 'My motto is \u201cEverything happens for a reason.\u201d I value kindness, honesty, respect, and staying humble. I believe in learning from my experiences, treating people well, and continuing to grow into a better version of myself.' }
  ]
};

/* ---- MUSIC (Object 2) ------------------------------------------------
   For each song:
     art   = album artwork image path (put the image in assets/albums/)
     audio = audio file path (put the file in assets/audio/)
   If a file is missing the site shows a clear placeholder / message
   instead of pretending. Use only files you have the right to use.       */
const TRACKS = [
  { title: 'After Hours',    artist: 'The Weeknd',     art: 'assets/albums/after-hours.jpg',    audio: 'assets/audio/after-hours.mp3',    hue: 350 },
  { title: 'Kiss It Better', artist: 'Rihanna',        art: 'assets/albums/kiss-it-better.jpg', audio: 'assets/audio/kiss-it-better.mp3', hue: 330 },
  { title: 'Company',        artist: 'Justin Bieber',  art: 'assets/albums/company.jpg',        audio: 'assets/audio/company.mp3',        hue: 40 },
  { title: 'Cinderella',     artist: 'Mac Miller',     art: 'assets/albums/cinderella.jpg',     audio: 'assets/audio/cinderella.mp3',     hue: 200 },
  { title: 'Hate Me',        artist: 'Ellie Goulding', art: 'assets/albums/hate-me.jpg',        audio: 'assets/audio/hate-me.mp3',        hue: 280 }
];

/* ---- CERTIFICATE CARDS (Object 3) ------------------------------------
   Add a card by copying one block. Fields:
     icon, title, sub (small subtitle),
     text   (optional paragraph),
     items  (optional list shown as gold chips),
     timeline (optional list of { when, text }),
     gallery ('education' or 'achievements' = show that photo area on the card)  */
const CERT_CARDS = [
  { icon: '🎓', title: 'Education', sub: 'Where I study',
    items: ['Tomas Cabili National High School (TCNHS)', 'Grade 12', 'TVL 3 — Computer Systems Servicing (CSS)'],
    gallery: 'education' },

  { icon: '🛠️', title: 'Technical Skills', sub: 'Student-level CSS skills',
    items: ['Basic computer hardware', 'Troubleshooting concepts', 'Networking concepts', 'UTP cable preparation',
            'RJ45 crimping', 'Straight-through cable wiring', 'Cable testing', 'Basic computer system knowledge', 'Basic operating system knowledge'] },

  { icon: '🌱', title: 'Personal Skills', sub: 'How I learn and grow',
    items: ['Adaptability', 'Quick learner', 'Positive thinking', 'Curiosity', 'Willingness to learn'] },

  { icon: '🎨', title: 'Creative Talents', sub: 'What I love to do',
    items: ['Singing', 'Drawing', 'Dancing'] },

  { icon: '🗣️', title: 'Languages', sub: 'Languages I speak',
    items: ['Maranao', 'Filipino', 'English', 'Bisaya'] },

  { icon: '🏆', title: 'Achievements & Experiences', sub: 'Performances and recognition',
    timeline: [
      { when: '2024 – 2026', text: 'Three-peat champion in the Kalilang competition (Pakaradiyaan Festival)' },
      { when: '3 years',     text: 'Member of the Tagungkuan Cultural Ensemble' },
      { when: '2026',        text: 'Performed the Opening Salvo at Robinsons Iligan for the Diyandi Opening' },
      { when: '2026',        text: 'Won the Diyandi Queen Festival and Best in Group Performance' }
    ],
    gallery: 'achievements' }
];

/* ---- CERTIFICATE / AWARD PHOTOS --------------------------------------
   Put the image files in assets/achievements/ and add one line per photo:
     { src: 'assets/achievements/kalilang-2024.jpg', caption: 'Kalilang 2024' },
   Visitors can click a photo to enlarge it. While a list is empty, labeled
   placeholder tiles are shown instead.
   EDUCATION_PHOTOS    -> shown on the "Education" card
   ACHIEVEMENT_PHOTOS  -> shown on the "Achievements & Experiences" card    */
const EDUCATION_PHOTOS = [
  { src: 'assets/achievements/education-school-logo.jpg', caption: 'Tomas Cabili National High School, Iligan City', fit: 'contain' }
];
const ACHIEVEMENT_PHOTOS = [
  { src: 'assets/achievements/diyandi-2026-best-group.jpg', caption: 'Best Group Performance, Diyandi Festival 2026' },
  { src: 'assets/achievements/dance-ensemble-1.jpg', caption: 'Performance day with the dance ensemble' },
  { src: 'assets/achievements/dance-ensemble-2.jpg', caption: 'Dance ensemble in costume' },
  { src: 'assets/achievements/dance-practice.jpg', caption: 'Practice with the ensemble' }
];
const PLACEHOLDER_TILE_COUNT = 3;

/* ---- LETTER (Object 4) -----------------------------------------------
   Future goals shown on the roadmap. Edit the text or icons freely.
   (The two quotes are written directly in index.html.)                    */
const GOALS = [
  { icon: '🎓', text: 'Graduate from senior high school with good results' },
  { icon: '📚', text: 'Continue studying and learn more skills for my future career' },
  { icon: '🎨', text: 'Improve my skills in technology, art, and music' },
  { icon: '🌴', text: 'Travel to beautiful and peaceful places' },
  { icon: '💛', text: 'Become successful while staying humble and true to myself' }
];

/* =====================================================================
   END OF CONFIG
   ===================================================================== */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const touchOnly = window.matchMedia('(hover: none)').matches;
const sleep = (ms) => new Promise((r) => setTimeout(r, reduced ? 0 : ms));
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ---------- Placeholders (clearly labeled, easy to replace) ---------- */
function svgUri(svg) { return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg); }

function placeholderArt(title, artist, hue) {
  return svgUri(`<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'>
    <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0' stop-color='hsl(${hue},45%,86%)'/><stop offset='1' stop-color='hsl(${hue},40%,66%)'/></linearGradient></defs>
    <rect width='400' height='400' fill='url(#g)'/>
    <rect x='14' y='14' width='372' height='372' fill='none' stroke='#9a7420' stroke-width='3' stroke-dasharray='10 8'/>
    <circle cx='200' cy='130' r='46' fill='none' stroke='#4a3222' stroke-width='4'/><circle cx='200' cy='130' r='10' fill='#4a3222'/>
    <text x='200' y='235' text-anchor='middle' font-family='Georgia,serif' font-size='30' font-weight='bold' fill='#4a3222'>${esc(title)}</text>
    <text x='200' y='272' text-anchor='middle' font-family='Georgia,serif' font-size='22' fill='#4a3222'>${esc(artist)}</text>
    <text x='200' y='338' text-anchor='middle' font-family='Arial,sans-serif' font-size='15' letter-spacing='3' fill='#7a3030'>ALBUM ART PLACEHOLDER</text>
    <text x='200' y='360' text-anchor='middle' font-family='Arial,sans-serif' font-size='12' fill='#4a3222'>replace in script.js (TRACKS)</text></svg>`);
}

function placeholderPhoto(label) {
  return svgUri(`<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'>
    <rect width='400' height='400' fill='#f3e8cf'/><rect x='12' y='12' width='376' height='376' fill='none' stroke='#9a7420' stroke-width='3' stroke-dasharray='10 8'/>
    <circle cx='200' cy='150' r='62' fill='#d9c590'/><path d='M70 360c0-80 58-122 130-122s130 42 130 122z' fill='#d9c590'/>
    <text x='200' y='318' text-anchor='middle' font-family='Arial,sans-serif' font-size='20' font-weight='bold' letter-spacing='2' fill='#7a3030'>${esc(label)}</text>
    <text x='200' y='344' text-anchor='middle' font-family='Arial,sans-serif' font-size='13' fill='#4a3222'>placeholder - replace this image</text></svg>`);
}

/* Load an image, and swap in a placeholder if the file is missing. */
function setImg(img, src, fallback) {
  img.onerror = () => { img.onerror = null; img.src = fallback; };
  if (src) img.src = src; else img.src = fallback;
}

function toast(msg, ms = 4200) {
  const t = $('#toast');
  t.textContent = msg; t.hidden = false;
  clearTimeout(toast._t);
  toast._t = setTimeout(() => { t.hidden = true; }, ms);
}

/* =====================================================================
   1. THE BOX: opening animation, mouse depth, sparks
   ===================================================================== */
const box = $('#box');
const hint = $('#hint');
const openBtn = $('#openBtn');
let boxOpen = false;

hint.textContent = touchOnly ? 'Tap the box to open it' : 'Click the box to open it';
openBtn.textContent = touchOnly ? 'Tap to Open' : 'Click to Open';

function burst() {
  if (reduced) return;
  const c = $('#sparks');
  for (let i = 0; i < 30; i++) {
    const s = document.createElement('i');
    const a = Math.random() * Math.PI * 2, d = 110 + Math.random() * 230;
    s.style.setProperty('--dx', Math.cos(a) * d + 'px');
    s.style.setProperty('--dy', Math.sin(a) * d * 0.6 - 90 + 'px');
    s.style.setProperty('--sz', 6 + Math.random() * 12 + 'px');
    s.style.animationDelay = Math.random() * 0.4 + 's';
    c.appendChild(s);
  }
  setTimeout(() => c.replaceChildren(), 2400);
}

async function openBox() {
  if (boxOpen) return;
  boxOpen = true;
  openBtn.classList.add('gone');
  box.classList.add('open');           // CSS animates the lid + tilt, then the objects drop in
  hint.textContent = '';
  burst();
  await sleep(2600);
  hint.textContent = 'Pick an object to explore — any order you like';
  openBtn.hidden = true;
}
$('#lid').addEventListener('click', openBox);
openBtn.addEventListener('click', openBox);

/* Mouse tracking: the whole box turns slightly toward the cursor (mouse only;
   touch devices use the gentle automatic sway defined in the CSS). */
const tiltLayer = $('#tiltLayer');
let tiltRaf = 0, tiltX = 0, tiltY = 0;
window.addEventListener('pointermove', (e) => {
  if (e.pointerType !== 'mouse' || reduced) return;
  tiltX = e.clientX / window.innerWidth - 0.5;
  tiltY = e.clientY / window.innerHeight - 0.5;
  if (!tiltRaf) tiltRaf = requestAnimationFrame(() => {
    tiltRaf = 0;
    tiltLayer.style.setProperty('--mx', (tiltX * 10).toFixed(2) + 'deg');
    tiltLayer.style.setProperty('--my', (-tiltY * 6).toFixed(2) + 'deg');
  });
});

/* Per-object 3D hover tilt (mouse only). */
function makeTilt(el) {
  if (reduced) return;
  el.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--ry', (px * 16).toFixed(1) + 'deg');
    el.style.setProperty('--rx', (-py * 16).toFixed(1) + 'deg');
  });
  el.addEventListener('pointerleave', () => {
    el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg');
  });
}
$$('.tiltable').forEach(makeTilt);

/* =====================================================================
   2. OVERLAY MANAGER  (lift an object out of the box, bring it back)
   ===================================================================== */
const hooks = {};            // per-overlay { onOpen, beforeClose }
let active = null, busy = false;

async function openOverlay(key, originEl) {
  if (active || busy) return;
  busy = true;
  const ov = $('#' + key + 'Overlay');
  const panel = $('.panel', ov);
  active = { key, ov, panel, originEl, trigger: document.activeElement };
  ov.hidden = false;
  if (originEl) originEl.classList.add('lifted');
  if (hooks[key] && hooks[key].prepare) hooks[key].prepare();   // fill content BEFORE measuring

  if (!reduced && originEl) {            // FLIP: start the panel where the object is
    const r = originEl.getBoundingClientRect();
    const p = panel.getBoundingClientRect();
    const s = Math.max(0.1, Math.min(r.width / p.width, r.height / p.height));
    const dx = r.left + r.width / 2 - (p.left + p.width / 2);
    const dy = r.top + r.height / 2 - (p.top + p.height / 2);
    panel.style.transition = 'none';
    panel.style.transform = `translate(${dx}px, ${dy}px) scale(${s})`;
    panel.style.opacity = '0';
    void panel.offsetWidth;
    panel.style.transition = '';
  }
  ov.classList.add('show');
  panel.style.transform = ''; panel.style.opacity = '';

  if (hooks[key] && hooks[key].onOpen) hooks[key].onOpen(originEl);
  await sleep(450);
  const closeBtn = $('.close', panel);
  if (closeBtn) closeBtn.focus({ preventScroll: true });
  busy = false;
}

async function closeOverlay() {
  if (!active || busy) return;
  busy = true;
  const { key, ov, panel, originEl, trigger } = active;
  if (hooks[key] && hooks[key].beforeClose) await hooks[key].beforeClose();

  if (!reduced && originEl) {            // fly back into the box
    const r = originEl.getBoundingClientRect();
    const p = panel.getBoundingClientRect();
    const s = Math.max(0.1, Math.min(r.width / p.width, r.height / p.height));
    const dx = r.left + r.width / 2 - (p.left + p.width / 2);
    const dy = r.top + r.height / 2 - (p.top + p.height / 2);
    panel.style.transform = `translate(${dx}px, ${dy}px) scale(${s})`;
    panel.style.opacity = '0';
  }
  ov.classList.remove('show');
  await sleep(720);
  if (originEl) originEl.classList.remove('lifted');
  ov.hidden = true;
  panel.style.transform = ''; panel.style.opacity = '';
  active = null; busy = false;
  if (hooks[key] && hooks[key].afterClose) hooks[key].afterClose();
  if (trigger && trigger.focus) trigger.focus({ preventScroll: true });
}

document.addEventListener('click', (e) => {
  if (e.target.closest('[data-close]')) closeOverlay();
  else if (active && e.target === active.ov) closeOverlay();   // click on the dim background
});
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (!$('#lightbox').hidden) closeLightbox(); else closeOverlay();
});

/* Object buttons -> overlays */
const openers = { profile: () => openOverlay('profile', $('#itemFrame')),
                  certs: () => openOverlay('certs', $('#itemFolder')),
                  letter: () => openOverlay('letter', $('#itemLetter')) };
$$('.item[data-target]').forEach((btn) => btn.addEventListener('click', () => openers[btn.dataset.target]()));

/* =====================================================================
   3. OBJECT 1 - PROFILE
   ===================================================================== */
setImg($('#polaroidImg'), PROFILE.photo, placeholderPhoto('YOUR PHOTO HERE'));

function renderProfile() {
  const letters = PROFILE.fullName.split('').map((ch, i) =>
    ch === ' ' ? '<span class="sp"></span>' : `<span class="letter" style="--i:${i}">${esc(ch)}</span>`).join('');
  const names = PROFILE.preferredNames.map((n) => `<span class="name-chip">${esc(n)}</span>`).join('');
  const facts = PROFILE.facts.map((f, i) =>
    `<li class="fact" style="--i:${i}"><span class="ic" aria-hidden="true">${f.icon}</span><span class="lb">${esc(f.label)}</span><span class="vl">${esc(f.value)}</span></li>`).join('');
  const cards = PROFILE.sections.map((s, i) => `
    <section class="pcard" style="--i:${i}">
      <h3><span aria-hidden="true">${s.icon}</span> ${esc(s.title)}</h3>
      ${s.text ? `<p>${esc(s.text)}</p>` : ''}
      ${s.rows ? `<ul class="fav-rows">${s.rows.map((r) => `<li><b>${esc(r[0])}</b><span>${esc(r[1])}</span></li>`).join('')}</ul>` : ''}
      ${s.tags ? `<ul class="chips">${s.tags.map((t) => `<li class="chip">${esc(t)}</li>`).join('')}</ul>` : ''}
      ${s.todo ? `<p class="todo">✎ ${esc(s.todo)}</p>` : ''}
    </section>`).join('');

  $('#profileBody').innerHTML = `
    <div class="profile">
      <div class="profile-photo">
        <div class="polaroid big">
          <span class="tape" aria-hidden="true"></span>
          <span class="polaroid-photo"><img id="profileImg" alt="Photo of ${esc(PROFILE.fullName)} (placeholder until a photo is added)"></span>
          <span class="polaroid-cap">Hamidah ✦ Bambi</span>
        </div>
      </div>
      <div class="profile-info">
        <p class="kicker">About Me</p>
        <h2 class="profile-name" id="profileName" aria-label="${esc(PROFILE.fullName)}">${letters}</h2>
        <p class="aka">Also known as ${names}</p>
        <ul class="facts">${facts}</ul>
        ${cards}
      </div>
    </div>`;
  setImg($('#profileImg'), PROFILE.photo, placeholderPhoto('YOUR PHOTO HERE'));
}
hooks.profile = { prepare: renderProfile };

/* =====================================================================
   4. OBJECT 2 - MUSIC ALBUMS + PLAYER
   ===================================================================== */
const audio = new Audio();
audio.preload = 'metadata';
let trackIdx = 0, audioMissing = false;

const pEl = {
  art: $('#pArt'), title: $('#pTitle'), artist: $('#pArtist'), count: $('#pCount'),
  seek: $('#pSeek'), cur: $('#pCur'), dur: $('#pDur'), play: $('#pPlay'),
  prev: $('#pPrev'), next: $('#pNext'), status: $('#pStatus'), list: $('#pList'), vinyl: $('#vinyl')
};
const playerPanel = $('#playerOverlay .panel');
const artFor = (t) => placeholderArt(t.title, t.artist, t.hue);
const fmt = (s) => (isFinite(s) ? Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0') : '--:--');

/* Album sleeves inside the box */
const sleeves = TRACKS.map((t, i) => {
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'tiltable sleeve';
  b.setAttribute('aria-label', `Play ${t.title} by ${t.artist}`);
  b.innerHTML = `<img alt=""><span class="num">${i + 1}</span>`;
  setImg($('img', b), t.art, artFor(t));
  b.addEventListener('click', () => { selectFromBox(i, b); });
  $('#albumGrid').appendChild(b);
  makeTilt(b);
  return b;
});

/* Track list inside the player */
TRACKS.forEach((t, i) => {
  const li = document.createElement('li');
  li.innerHTML = `<button type="button" class="track"><img alt=""><span><span class="tt">${esc(t.title)}</span><span class="ta">${esc(t.artist)}</span></span><span class="eq" aria-hidden="true"><i></i><i></i><i></i></span></button>`;
  setImg($('img', li), t.art, artFor(t));
  $('.track', li).addEventListener('click', () => loadTrack(i, true));
  pEl.list.appendChild(li);
});

function showMissing() {
  audioMissing = true;
  pEl.status.textContent = `No audio file found yet. Add your song at: ${TRACKS[trackIdx].audio}`;
  pEl.seek.disabled = true;
  updatePlayState();
}

function loadTrack(i, autoplay) {
  trackIdx = (i + TRACKS.length) % TRACKS.length;
  const t = TRACKS[trackIdx];
  audioMissing = false;
  audio.pause();
  pEl.art.style.animation = 'none'; void pEl.art.offsetWidth; pEl.art.style.animation = '';
  setImg(pEl.art, t.art, artFor(t));
  pEl.art.alt = `Album artwork for ${t.title} by ${t.artist}`;
  pEl.title.textContent = t.title;
  pEl.artist.textContent = t.artist;
  pEl.count.textContent = `${trackIdx + 1} / ${TRACKS.length}`;
  pEl.status.textContent = '';
  pEl.seek.disabled = false; pEl.seek.value = 0;
  pEl.cur.textContent = '0:00'; pEl.dur.textContent = '--:--';
  $$('.track', pEl.list).forEach((b, k) => b.classList.toggle('active', k === trackIdx));
  sleeves.forEach((s, k) => s.classList.toggle('is-current', k === trackIdx));
  audio.src = t.audio;
  audio.load();
  updatePlayState();
  if (autoplay) play();
}

async function play() {
  if (audioMissing) { showMissing(); return; }
  try { await audio.play(); }
  catch (err) {
    if (err && err.name === 'NotSupportedError') showMissing();
    else if (err && err.name === 'NotAllowedError') pEl.status.textContent = 'Press play to start the song.';
  }
}
function togglePlay() { if (audio.paused) play(); else audio.pause(); }

function updatePlayState() {
  const playing = !audio.paused && !audioMissing;
  $('.i-play', pEl.play).toggleAttribute('hidden', playing);
  $('.i-pause', pEl.play).toggleAttribute('hidden', !playing);
  pEl.play.setAttribute('aria-label', playing ? 'Pause' : 'Play');
  pEl.vinyl.classList.toggle('spin', playing && !reduced);
  playerPanel.classList.toggle('playing', playing);
}

audio.addEventListener('play', updatePlayState);
audio.addEventListener('pause', updatePlayState);
audio.addEventListener('error', showMissing);
audio.addEventListener('loadedmetadata', () => { pEl.dur.textContent = fmt(audio.duration); });
audio.addEventListener('timeupdate', () => {
  pEl.cur.textContent = fmt(audio.currentTime);
  if (audio.duration) pEl.seek.value = Math.round((audio.currentTime / audio.duration) * 1000);
});
audio.addEventListener('ended', () => loadTrack(trackIdx + 1, true));
pEl.seek.addEventListener('input', () => { if (audio.duration) audio.currentTime = (pEl.seek.value / 1000) * audio.duration; });
pEl.play.addEventListener('click', togglePlay);
pEl.prev.addEventListener('click', () => loadTrack(trackIdx - 1, !audio.paused));
pEl.next.addEventListener('click', () => loadTrack(trackIdx + 1, !audio.paused));

function selectFromBox(i, sleeveEl) {
  if (active || busy) return;
  bgPause();                    // background music steps aside for the album
  loadTrack(i, true);
  openOverlay('player', sleeveEl);
}
hooks.player = { beforeClose: () => { audio.pause(); }, afterClose: () => bgResume() };   // background music returns
loadTrack(0, false);   // prepares the first song so the UI is never empty

/* =====================================================================
   4b. BACKGROUND MUSIC (plays on open, pauses for the albums, resumes after)
   ===================================================================== */
const bg = new Audio();
bg.src = BG_MUSIC.src; bg.loop = true; bg.preload = 'auto'; bg.volume = 0;
const bgBtn = $('#bgBtn'), bgLabel = $('#bgLabel');
let bgMuted = false;        // visitor pressed the Music button to turn it off
let bgSuspended = false;    // paused on purpose while an album is playing
let bgFade = 0;

function bgSync() {
  const on = !bg.paused && !bgMuted;
  bgBtn.classList.toggle('on', on);
  bgBtn.setAttribute('aria-pressed', String(on));
  bgBtn.setAttribute('aria-label', on ? 'Turn background music off' : 'Turn background music on');
  bgLabel.textContent = on ? 'Music on' : 'Music off';
}
function bgFadeTo(target, ms, done) {
  cancelAnimationFrame(bgFade);
  const from = bg.volume, t0 = performance.now();
  const step = (now) => {
    const k = reduced ? 1 : Math.min(1, (now - t0) / ms);
    bg.volume = Math.max(0, Math.min(1, from + (target - from) * k));
    if (k < 1) bgFade = requestAnimationFrame(step); else if (done) done();
  };
  bgFade = requestAnimationFrame(step);
}
function bgStart() {
  if (bgMuted || bgSuspended) return Promise.resolve();
  return bg.play().then(() => { bgFadeTo(BG_MUSIC.volume, 1500); bgSync(); removeUnlock(); })
    .catch(() => { /* blocked until the visitor interacts: the unlock listeners below try again */ });
}
function bgPause() {
  bgSuspended = true;
  bgFadeTo(0, 350, () => { bg.pause(); bgSync(); });
}
function bgResume() {
  bgSuspended = false;
  if (bgMuted) return;
  if (!bg.paused) { bgFadeTo(BG_MUSIC.volume, 800); return; }
  bg.play().then(() => { bgFadeTo(BG_MUSIC.volume, 1200); bgSync(); }).catch(() => {});
}
bgBtn.addEventListener('click', () => {
  if (bgMuted || bg.paused) {          // turn on
    bgMuted = false;
    if (!bgSuspended) bgStart();
  } else {                             // turn off
    bgMuted = true;
    bgFadeTo(0, 300, () => { bg.pause(); bgSync(); });
  }
  bgSync();
});
bg.addEventListener('error', () => { bgBtn.hidden = true; });     // no file yet: stay silent, hide the button
bg.addEventListener('loadedmetadata', () => { bgBtn.hidden = false; bgSync(); });
bg.addEventListener('play', bgSync); bg.addEventListener('pause', bgSync);

/* Browsers block sound until the visitor does something; start on the first interaction. */
const unlockEvents = ['pointerdown', 'keydown', 'touchstart'];
function unlock(e) { if (e.target && e.target.closest && e.target.closest('#bgBtn')) return; bgStart(); }
function removeUnlock() { unlockEvents.forEach((ev) => window.removeEventListener(ev, unlock, true)); }
unlockEvents.forEach((ev) => window.addEventListener(ev, unlock, true));
bgStart();

/* =====================================================================
   5. OBJECT 3 - CERTIFICATES CAROUSEL + LIGHTBOX
   ===================================================================== */
const cTrack = $('#cTrack'), cViewport = $('#cViewport'), cDots = $('#cDots');
let cIndex = 0, suppressClick = false;

function renderCerts() {
  cTrack.innerHTML = '';
  cDots.innerHTML = '';
  CERT_CARDS.forEach((c, i) => {
    const slide = document.createElement('div');
    slide.className = 'ccard';
    slide.setAttribute('role', 'group');
    slide.setAttribute('aria-label', `Card ${i + 1} of ${CERT_CARDS.length}: ${c.title}`);
    slide.innerHTML = `<article class="cert${c.gallery ? ' has-photos' : ''}"><div class="cert-in">
        <div class="ic" aria-hidden="true">${c.icon}</div>
        <h2>${esc(c.title)}</h2>
        <p class="sub">${esc(c.sub || '')}</p>
        ${c.text ? `<p>${esc(c.text)}</p>` : ''}
        ${c.items ? `<ul class="chips">${c.items.map((t) => `<li class="chip">${esc(t)}</li>`).join('')}</ul>` : ''}
        ${c.timeline ? `<ul class="timeline">${c.timeline.map((t) => `<li><span class="when">${esc(t.when)}</span><span>${esc(t.text)}</span></li>`).join('')}</ul>` : ''}
        ${c.gallery ? '<h3 class="gallery-title">Photos &amp; Certificates</h3><div class="gallery"></div>' : ''}
      </div></article>`;
    if (c.gallery) buildGallery($('.gallery', slide), c.gallery === 'education' ? EDUCATION_PHOTOS : ACHIEVEMENT_PHOTOS);
    cTrack.appendChild(slide);

    const d = document.createElement('button');
    d.type = 'button'; d.className = 'dot';
    d.setAttribute('aria-label', `Go to card ${i + 1}: ${c.title}`);
    d.addEventListener('click', () => goTo(i));
    cDots.appendChild(d);
  });
}

function buildGallery(host, list) {
  const photos = list.length
    ? list
    : Array.from({ length: PLACEHOLDER_TILE_COUNT }, (_, i) => ({ src: '', caption: `Photo ${i + 1} (placeholder - add yours in script.js)` }));
  host.classList.toggle('few', photos.length <= 2);
  photos.forEach((p) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'shot';
    b.setAttribute('aria-label', `Enlarge photo: ${p.caption}`);
    const img = document.createElement('img');
    img.alt = p.caption;
    const fb = placeholderPhoto('ADD PHOTO');
    setImg(img, p.src, fb);
    if (p.fit) img.style.objectFit = p.fit;
    b.appendChild(img);
    b.addEventListener('click', () => { if (!suppressClick) openLightbox(img.src, p.caption, b); });
    host.appendChild(b);
  });
}

function goTo(i) {
  cIndex = Math.max(0, Math.min(CERT_CARDS.length - 1, i));
  cTrack.style.transform = `translateX(${-cIndex * 100}%)`;
  $$('.dot', cDots).forEach((d, k) => { d.classList.toggle('on', k === cIndex); d.setAttribute('aria-current', k === cIndex ? 'true' : 'false'); });
  $('#cPrev').disabled = cIndex === 0;
  $('#cNext').disabled = cIndex === CERT_CARDS.length - 1;
}
$('#cPrev').addEventListener('click', () => goTo(cIndex - 1));
$('#cNext').addEventListener('click', () => goTo(cIndex + 1));
document.addEventListener('keydown', (e) => {
  if (!active || active.key !== 'certs' || !$('#lightbox').hidden) return;
  if (e.key === 'ArrowRight') goTo(cIndex + 1);
  if (e.key === 'ArrowLeft') goTo(cIndex - 1);
});

/* Swipe (touch, pen or mouse drag) */
(function setupSwipe() {
  let startX = 0, startY = 0, dx = 0, tracking = false, horizontal = false;
  cViewport.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    tracking = true; horizontal = false; startX = e.clientX; startY = e.clientY; dx = 0;
  });
  window.addEventListener('pointermove', (e) => {
    if (!tracking) return;
    dx = e.clientX - startX;
    const dy = e.clientY - startY;
    if (!horizontal && Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy)) { horizontal = true; cTrack.classList.add('dragging'); }
    if (horizontal) {
      const w = cViewport.clientWidth;
      cTrack.style.transform = `translateX(${-cIndex * w + dx}px)`;
    }
  });
  const end = () => {
    if (!tracking) return;
    tracking = false;
    cTrack.classList.remove('dragging');
    if (horizontal) {
      suppressClick = true; setTimeout(() => { suppressClick = false; }, 60);
      const w = cViewport.clientWidth;
      if (dx < -Math.min(60, w * 0.18)) goTo(cIndex + 1);
      else if (dx > Math.min(60, w * 0.18)) goTo(cIndex - 1);
      else goTo(cIndex);
    }
  };
  window.addEventListener('pointerup', end);
  window.addEventListener('pointercancel', end);
})();

/* Lightbox */
let lbTrigger = null;
function openLightbox(src, caption, trigger) {
  lbTrigger = trigger || null;
  $('#lbImg').src = src; $('#lbImg').alt = caption;
  $('#lbCap').textContent = caption;
  $('#lightbox').hidden = false;
  $('#lbClose').focus();
}
function closeLightbox() {
  $('#lightbox').hidden = true;
  if (lbTrigger) lbTrigger.focus({ preventScroll: true });
}
$('#lbClose').addEventListener('click', closeLightbox);
$('#lightbox').addEventListener('click', (e) => { if (e.target === $('#lightbox')) closeLightbox(); });

renderCerts();
goTo(0);
hooks.certs = { prepare: () => { cTrack.classList.add('dragging'); goTo(0); void cTrack.offsetWidth; cTrack.classList.remove('dragging'); } };

/* =====================================================================
   6. OBJECT 4 - LETTER
   ===================================================================== */
const envelope = $('#envelope'), sheet = $('#sheet');

$('#roadmap').innerHTML = GOALS.map((g, i) =>
  `<li style="--i:${i}"><span class="stop" aria-hidden="true">${g.icon}</span><span>${esc(g.text)}</span></li>`).join('');

/* Page 2 button (in the letter) points at PAGE_2_URL */
$$('#cultureBtn').forEach((a) => { a.href = PAGE_2_URL; });

let letterRun = 0;   // guards the animation if the visitor closes the letter early
hooks.letter = {
  prepare() {
    envelope.classList.remove('opened', 'leave');
    envelope.style.display = '';
    sheet.hidden = true; sheet.classList.remove('unfold', 'fold');
  },
  async onOpen() {
    const run = ++letterRun;
    await sleep(750);
    if (run !== letterRun) return;
    envelope.classList.add('opened');           // flap opens
    await sleep(900);
    if (run !== letterRun) return;
    envelope.classList.add('leave');            // envelope slips away
    await sleep(350);
    if (run !== letterRun) return;
    envelope.style.display = 'none';
    sheet.hidden = false;
    sheet.scrollTop = 0;
    void sheet.offsetWidth;
    sheet.classList.add('unfold');              // letter unfolds
  },
  async beforeClose() {
    letterRun++;                                // cancel any opening animation still running
    if (sheet.hidden) { envelope.style.display = ''; envelope.classList.remove('opened', 'leave'); }
    if (!sheet.hidden) {
      sheet.classList.remove('unfold');
      sheet.classList.add('fold');              // letter folds up
      await sleep(700);
      sheet.hidden = true;
      envelope.style.display = '';
      envelope.classList.add('opened', 'leave');
      void envelope.offsetWidth;
      envelope.classList.remove('leave');
      await sleep(500);
      envelope.classList.remove('opened');      // flap closes again
      await sleep(850);
    }
  }
};


/* =====================================================================
   7. PAGE TRANSITION (gold curtain) - used by every link marked data-transition
   ===================================================================== */
const curtain = $('#curtain');
function goToPage(url) {
  if (reduced || !curtain) { window.location.href = url; return; }
  try { sessionStorage.setItem('curtain', '1'); } catch (e) { /* storage blocked: still works */ }
  curtain.classList.add('closed');          // curtains slide shut...
  setTimeout(() => { window.location.href = url; }, 950);   // ...then the next page loads
}
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[data-transition]');
  if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  e.preventDefault();
  goToPage(a.href);
});
/* When this page loads after a transition, the curtains open */
(function openCurtain() {
  const root = document.documentElement;
  const open = () => { try { sessionStorage.removeItem('curtain'); } catch (e) {} curtain && curtain.classList.remove('closed'); root.classList.remove('arriving'); };
  if (root.classList.contains('arriving')) setTimeout(open, 120); else open();
  window.addEventListener('pageshow', (ev) => { if (ev.persisted) open(); });   // back button
})();
