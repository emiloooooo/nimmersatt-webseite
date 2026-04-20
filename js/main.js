'use strict';

/* ══════════════════════════════════════════════
   PROJECTS
   12 sections, each with its own frame sequence folder under frames/<slug>/.
   Each folder holds frame0001.jpg … frame0079.jpg (contain-letterboxed JPGs).
══════════════════════════════════════════════ */
const PROJECTS = [
  {
    title: 'CHARLIEXCX - Moment (Premiere)',
    slug:  'brat',
    body:  "Berlinale premiere night with a 24 hour turnaround. We caught the club at full energy and built Cupra in 3D, matching its lighting to the room so the brand felt native to the moment.",
    description:
      'During the Berlinale premiere of "Moment," I was commissioned by a PR agency to capture the event\'s energy. The project expanded to include brand integration for Cupra, requiring a luxury aesthetic within a club setting.\n\n' +
      'Communication was difficult due to the environment, requiring a highly adaptive filming style. Since the vehicles were not on-site, we utilized 3D models and matched the club\'s lighting to generate assets that felt organic to the edit.\n\n' +
      'The project followed a strict 24-hour turnaround in February 2026. From the initial shoot to the final 3D-integrated delivery, the timeline was optimized to meet the peak interest of the Berlinale week.',
    video: 'https://emiloooooo.github.io/nimmersatt-webseite/web-assets/charli-xcx.mp4',
    credits: [
      { label: 'Direction', value: 'nimmersatt' },
      { label: 'Location',  value: 'Berlin' },
      { label: 'Year',      value: '2026' },
    ],
  },
  {
    title: 'Stylo - Alles Gut (Short Film)',
    slug:  'berlin-klohaus',
    body:  "A couple's story threaded through Berlin's everyday life, told as a short drama built on invisible transitions where the quiet moments carry the narrative.",
    description: null,
    video: 'https://emiloooooo.github.io/nimmersatt-webseite/web-assets/stylo.mp4',
    credits: [
      { label: 'Direction', value: 'nimmersatt' },
      { label: 'Location',  value: 'Berlin' },
      { label: 'Year',      value: '2025' },
    ],
    // Source frames are noticeably off-centre: content sits right of
    // the horizontal midline and slightly above the vertical midline.
    // Offsets apply in CANVAS space before the CSS scale transform —
    // at hard-stop scale 0.373 the visible shift is ~37 % of the value,
    // so we need a larger offset than the apparent miss to correct it.
    frameOffsetX: -0.04,
    frameOffsetY:  0.03,
  },
  {
    title: '032c x CUPRA (Collaboration)',
    slug:  'paris',
    body:  "An urban fashion vibe meeting Cupra in the middle of Paris Fashion Week, where the city itself became the set and street tempo met sharper brand lines in one editorial frame.",
    description: null,
    video: null,
    credits: [
      { label: 'Direction', value: 'nimmersatt' },
      { label: 'Location',  value: 'Paris' },
      { label: 'Year',      value: '2024' },
    ],
  },
  {
    title: "Marc O'Polo (Documentary)",
    slug:  'vietnam',
    body:  "Global transparency mapped across continents. We documented authentic production conditions to Fair Wear Foundation standards, moving through industrial environments without breaking the flow of work.",
    description:
      'The objective was to provide visual evidence of Marc O\u2019Polo\u2019s supply chain transparency and their adherence to Fair Wear Foundation standards. The film aimed to document authentic production conditions for their sustainability report.\n\n' +
      'The production involved navigating large-scale industrial environments in a new global context. The challenge was documenting the facilities without disrupting their high-efficiency workflows, requiring a tactical and non-intrusive approach to cinematography.\n\n' +
      'In October 2024, the team traveled internationally to multiple sites. The resulting footage was processed to meet the launch of the brand\u2019s sustainability campaign, requiring a highly organized workflow from field capture to final cut.',
    video: 'https://emiloooooo.github.io/nimmersatt-webseite/web-assets/marc-o-polo.mp4',
    credits: [
      { label: 'Direction', value: 'nimmersatt' },
      { label: 'Location',  value: 'Global' },
      { label: 'Year',      value: '2024' },
    ],
  },
  {
    title: 'miiraqt (Artist Identity)',
    slug:  'miira',
    body:  "New generation energy sampled from the past and built for 3 Strikes on a thirty minute feedback loop, the shoot kept the artist's fresh perspective intact all the way through to upload.",
    description:
      'The connection for "3 Strikes" developed through a professional network that recognized the value of my previous work in the genre. The visuals were designed to support a heavy sample while highlighting the artist\'s position in a new generation of talent.\n\n' +
      'The atmosphere on set was defined by the artist\'s youth and fresh perspective. The collaboration was efficient and focused, allowing for a streamlined workflow that capitalized on the direct energy of the shoot.\n\n' +
      'In September 2025, the project was defined by its speed of execution. After submitting the initial edit, a thirty-minute feedback loop led directly to the final upload, demonstrating a highly effective production cycle.',
    video: 'https://emiloooooo.github.io/nimmersatt-webseite/web-assets/3strikes-color.mp4',
    credits: [
      { label: 'Direction', value: 'nimmersatt' },
      { label: 'Location',  value: 'Berlin' },
      { label: 'Year',      value: '2025' },
    ],
  },
  {
    title: 'SS26 (Berlin Fashion Week)',
    slug:  'berlin',
    body:  'Four brands across two days at the legendary Funkturmpalais, produced with Reference Studio. We handled lighting, camera, crew and post so every brand arrived runway ready.',
    description: null,
    video: null,
    credits: [
      { label: 'Direction', value: 'nimmersatt' },
      { label: 'Location',  value: 'Berlin' },
      { label: 'Year',      value: '2025' },
    ],
  },
  {
    title: 'FW26 (Berlin Fashion Week)',
    slug:  'garage',
    body:  'Four brands across two days at the legendary Kant Garage, produced with Reference Studio. We handled lighting, camera, crew and post so every brand arrived runway ready.',
    description: null,
    video: null,
    credits: [
      { label: 'Direction', value: 'nimmersatt' },
      { label: 'Location',  value: 'Berlin' },
      { label: 'Year',      value: '2025' },
    ],
  },
  {
    title: 'Whispers - WINTERGARTEN (Short Film)',
    slug:  'hermannplatz',
    body:  'Following Berlin youth culture through a story of abuse and trauma, a patient, unflinching short film told close to the people it portrays rather than over them.',
    description: null,
    video: 'https://emiloooooo.github.io/nimmersatt-webseite/web-assets/whispers-wintergarten.mp4',
    credits: [
      { label: 'Direction', value: 'nimmersatt' },
      { label: 'Location',  value: 'Berlin' },
      { label: 'Year',      value: '2025' },
    ],
  },
  {
    title: 'index® (Brand Identity)',
    slug:  'portugal',
    body:  'Brand development, strategy and supervision across ten campaigns shipped in three months, grounded in one shared visual system that scaled across print, screen and space.',
    description: null,
    videos: [
      'https://emiloooooo.github.io/nimmersatt-webseite/web-assets/index-kleider.mp4',
      'https://emiloooooo.github.io/nimmersatt-webseite/web-assets/index-nos004.mp4',
      'https://emiloooooo.github.io/nimmersatt-webseite/web-assets/index-000014.mp4',
      'https://emiloooooo.github.io/nimmersatt-webseite/web-assets/index-000018.mp4',
      'https://emiloooooo.github.io/nimmersatt-webseite/web-assets/index-000020.mp4',
      'https://emiloooooo.github.io/nimmersatt-webseite/web-assets/index-000022.mp4',
    ],
    credits: [
      { label: 'Direction', value: 'nimmersatt' },
      { label: 'Location',  value: 'Porto' },
      { label: 'Year',      value: '2024' },
    ],
  },
  {
    title: 'Soyhan (Artist Identity)',
    slug:  'wedding',
    body:  'Over six million streams with a viral social rollout, three concerts and a merchandise line, anchored by a 2D visualizer built from a thousand images and fifty typefaces synced to the rhythm.',
    description:
      'Stevie B from Berlin Wedding Pankstra\u00dfe.\n\n' +
      'Initiated through Universal Music, this project was part of a larger visual rollout for the artist\'s debut. The track required a 2D visualizer that utilized a heavy-asset workflow, a new technical direction for the production team.\n\n' +
      'The focus was on the synergy between typography and motion graphics. By managing the flow between different graphic layers, we created a 2D environment that felt kinetic and synchronized with the track\u2019s rhythm.\n\n' +
      'In November 2025, the project involved managing an extensive volume of data. The timeline integrated over 1,000 individual images and 50 typefaces, requiring a precise digital arrangement to ensure a cohesive visual experience.',
    video: null,
    credits: [
      { label: 'Direction', value: 'nimmersatt' },
      { label: 'Location',  value: 'Berlin' },
      { label: 'Year',      value: '2025' },
    ],
  },
  {
    title: 'Kleinstadt Uniques (Artist Identity)',
    slug:  'wolfsburg',
    body:  'A Blue Ice automotive aesthetic applied to a studio music video, keeping the look sharp and expensive while staying grounded in the raw energy of the track.',
    description:
      'This collaboration aimed to apply the "Blue Ice" aesthetic of high-end automotive commercials to a studio-based music video. The goal was a sharp, expensive look that remained grounded in the energy of the track.\n\n' +
      'My role involved bridging the gap between technical planning and the spontaneous creative energy of the artists. It required maintaining the production\'s direction while allowing room for the artists to operate within their own creative flow.\n\n' +
      'Released in August 2025, the project focused on maintaining high production standards within a relaxed studio environment. The challenge was ensuring a polished final product that successfully mirrored luxury commercial standards.',
    video: 'https://emiloooooo.github.io/nimmersatt-webseite/web-assets/dante-yn.mp4',
    credits: [
      { label: 'Direction', value: 'nimmersatt' },
      { label: 'Location',  value: 'Wolfsburg' },
      { label: 'Year',      value: '2025' },
    ],
  },
  {
    title: 'The Benchmark (Commercial)',
    slug:  'said',
    body:  "A Berlin stone setter's workshop turned cinematic for the intimate process of gemstone setting, the film anchoring the Benchalist stand at Inhorgenta Munich.",
    description:
      'The project was initiated as a strategic exchange between a Berlin-based stone setter and Benchalist. The objective was to document the technical precision of their specialized workbench within a professional workshop environment, providing the brand with high-end visual assets in exchange for the workstation.\n\n' +
      'Executed as a collaborative passion project, the production focused on the intimate details of the gemstone setting process. We transformed the workshop into a cinematic space, utilizing specific lighting and cinematography to highlight the synergy between the artisan\'s craft and the technical design of the furniture.\n\n' +
      'Completed in February 2026, the delivery was specifically timed for the Inhorgenta trade fair in Munich. The final film served as the visual centerpiece for the Benchalist exhibition stand, presented on a full-screen display to an international industry audience.',
    video: 'https://emiloooooo.github.io/nimmersatt-webseite/web-assets/benchalist.mp4',
    credits: [
      { label: 'Direction', value: 'nimmersatt' },
      { label: 'Location',  value: 'Munich' },
      { label: 'Year',      value: '2026' },
    ],
  },
];

/* ══════════════════════════════════════════════
   LEGACY MENU ENTRIES
   Five pre-refactor titles that live in the menu only — no scroll-scrub
   frames. Clicking one opens the player in "coming soon" mode so users
   see the title + a friendly placeholder. Kept separate from PROJECTS so
   the render pipeline never tries to load nonexistent frame folders.
══════════════════════════════════════════════ */
// Earlier placeholders were either promoted to full PROJECTS (Berlin
// Fashion Week → berlin, Soyhan → wedding, index® → portugal) or
// retired entirely (Dante Yn feat. Nibor, Ronzino Von Oswald). Empty
// by design — the menu now shows only real scroll-scrub projects.
// Kept as an array so the menu-population loop stays uniform if
// archive-only entries come back later.
const LEGACY_ENTRIES = [];

/* ══════════════════════════════════════════════
   KONFIGURATION
══════════════════════════════════════════════ */
const CONFIG = {
  FRAME_COUNT:     79,
  FRAME_SRC:       (slug, i) => `frames/${slug}/frame${String(i).padStart(4, '0')}.jpg`,
  CONCURRENCY:     8,
  PRIORITY_FRAMES: 16,

  // Scales per phase (per project, localPos in [0, 2.0])
  SCALE_P0_START:  0.11,   // localPos 0
  SCALE_P0_END:    0.373,  // localPos 1 (hard stop)
  SCALE_P1_END:    1.1,    // localPos 2 (end of fade)

  DEADZONE_PX:     110,

  // White fade: starts at WHITE_FADE_FROM, completes at CYCLE_LEN
  WHITE_FADE_FROM: 1.40,
  CYCLE_LEN:       2.0,

  VIGNETTE_SIDES:  0.14,
  VIGNETTE_TB:     0.08,

  SENSITIVITY:     0.0010,
  LERP_SPEED:      0.075,
};

// Fully sequential projects — previous project must complete its entire
// fade-to-white before the next one begins its fade-in-from-white. The
// videos never co-exist on screen at any point.
const OVERLAP     = 0;
const CYCLE_STEP  = CONFIG.CYCLE_LEN;                               // 2.0
const TOTAL_LEN   = CYCLE_STEP * PROJECTS.length;                   // 24.0 for 12 projects
// localPos where fade-in-from-white completes. Narrow so the image
// reaches full presence quickly (~0.32 of the cycle), then stays
// stable from 0.32 → 1.40 before starting its fade-out. The crossfade
// mapping below handles the fade-out → fade-in duration mismatch by
// scaling, so widths don't need to match — smootherstep keeps the
// curve itself smooth at either width.
const FADE_IN_END = 0.32;

const mod = (a, b) => ((a % b) + b) % b;

/* ══════════════════════════════════════════════
   FRAME LOADER — per-section lazy loading
   Each section is an independent { frames[], loadedCount, state } block.
   • state: 'idle' | 'loading' | 'priority' | 'ready'
   • loadSection(idx) kicks off (or resumes) loading for that section only.
   • get(sectionIdx, frameIdx) returns the image or null.
   Section 0 loads eagerly at init; neighbours stream in as scroll approaches.
══════════════════════════════════════════════ */
class FrameLoader {
  constructor(cfg, projects) {
    this.cfg      = cfg;
    this.projects = projects;
    this.sections = projects.map(() => ({
      frames:      new Array(cfg.FRAME_COUNT).fill(null),
      loadedCount: 0,
      state:       'idle',     // idle → loading → priority → ready
      active:      0,
      qi:          0,
      queue:       null,
    }));
    this.onFirstPriority = null;   // fires when section 0 hits PRIORITY_FRAMES
    this.onFirstReady    = null;   // fires when section 0 finishes entirely
  }

  _buildQueue() {
    const { FRAME_COUNT, PRIORITY_FRAMES } = this.cfg;
    return [
      ...Array.from({ length: PRIORITY_FRAMES }, (_, i) => i),
      ...Array.from({ length: FRAME_COUNT - PRIORITY_FRAMES }, (_, i) => i + PRIORITY_FRAMES),
    ];
  }

  loadSection(sectionIdx) {
    if (sectionIdx < 0 || sectionIdx >= this.sections.length) return;
    const sec = this.sections[sectionIdx];
    if (sec.state === 'ready') return;
    if (sec.state === 'idle') {
      sec.state = 'loading';
      sec.queue = this._buildQueue();
    }
    this._pump(sectionIdx);
  }

  _pump(sectionIdx) {
    const sec = this.sections[sectionIdx];
    const { FRAME_COUNT, CONCURRENCY, PRIORITY_FRAMES, FRAME_SRC } = this.cfg;
    const slug = this.projects[sectionIdx].slug;

    while (sec.active < CONCURRENCY && sec.qi < sec.queue.length) {
      const frameIdx = sec.queue[sec.qi++];
      sec.active++;
      const img = new Image();
      const done = () => {
        sec.frames[frameIdx] = (img.complete && img.naturalWidth) ? img : null;
        sec.loadedCount++;
        sec.active--;

        if (sec.state === 'loading' && sec.loadedCount >= PRIORITY_FRAMES) {
          sec.state = 'priority';
          if (sectionIdx === 0) this.onFirstPriority?.();
        }
        if (sec.loadedCount === FRAME_COUNT) {
          sec.state = 'ready';
          if (sectionIdx === 0) this.onFirstReady?.();
        }
        this._pump(sectionIdx);
      };
      img.onload  = done;
      img.onerror = done;
      img.src     = FRAME_SRC(slug, frameIdx + 1);
    }
  }

  get(sectionIdx, frameIdx) {
    const sec = this.sections[sectionIdx];
    if (!sec) return null;
    const i = Math.max(0, Math.min(this.cfg.FRAME_COUNT - 1, Math.round(frameIdx)));
    return sec.frames[i];
  }

  /* Fallback: if the exact frame isn't loaded yet, walk outward in the same
     section to find the nearest loaded frame. Crucial during fast scrolls —
     without this the canvas keeps whatever was last drawn (often the end of
     the previous section) and appears "stuck". */
  getNearest(sectionIdx, frameIdx) {
    const sec = this.sections[sectionIdx];
    if (!sec) return null;
    const N = this.cfg.FRAME_COUNT;
    const i = Math.max(0, Math.min(N - 1, Math.round(frameIdx)));
    if (sec.frames[i]) return { img: sec.frames[i], frameIdx: i };
    for (let d = 1; d < N; d++) {
      const lo = i - d, hi = i + d;
      if (lo >= 0 && sec.frames[lo]) return { img: sec.frames[lo], frameIdx: lo };
      if (hi <  N && sec.frames[hi]) return { img: sec.frames[hi], frameIdx: hi };
    }
    return null;
  }

  isSectionReady(sectionIdx) {
    const sec = this.sections[sectionIdx];
    return !!sec && (sec.state === 'priority' || sec.state === 'ready');
  }
}

/* ══════════════════════════════════════════════
   PROJECT-LOKALE POSITIONS-LOGIK
   localPos 0 → 1    frames 0→N forward, scale P0_START → P0_END
   localPos 1 → 2    frames N→0 reverse, scale P0_END  → P1_END
══════════════════════════════════════════════ */
function getFrameIndex(localPos) {
  const n = CONFIG.FRAME_COUNT - 1;
  if (localPos <= 1.0) return Math.round(localPos * n);
  return Math.round((2.0 - localPos) * n);
}

// Mobile: larger transform so the contained (letterboxed) frame fills
// more of the portrait viewport, especially at the hard stop.
function mobileScaleFactor() {
  return window.innerWidth <= 820 ? 3.0 : 1.0;
}

function getScale(localPos) {
  const { SCALE_P0_START, SCALE_P0_END, SCALE_P1_END } = CONFIG;
  const f  = mobileScaleFactor();
  const s0 = SCALE_P0_START * f;
  const s1 = SCALE_P0_END   * f;
  const s2 = SCALE_P1_END   * f;
  if (localPos <= 1.0) return s0 + localPos       * (s1 - s0);
  return               s1 + (localPos - 1.0) * (s2 - s1);
}

function getWhiteOpacity(localPos, allowStartFade) {
  const { WHITE_FADE_FROM, CYCLE_LEN } = CONFIG;
  if (allowStartFade && localPos < FADE_IN_END) {
    return 1 - localPos / FADE_IN_END;
  }
  if (localPos >= WHITE_FADE_FROM) {
    return Math.min(1, (localPos - WHITE_FADE_FROM) / (CYCLE_LEN - WHITE_FADE_FROM));
  }
  return 0;
}

/* Smootherstep — Ken Perlin's C²-continuous ease-in-out. Produces a much
   softer perceived motion than the C¹ smoothstep, particularly at the
   endpoints where smoothstep still has a visible "kick". */
function smootherstep(t) {
  if (t <= 0) return 0;
  if (t >= 1) return 1;
  return t * t * t * (t * (6 * t - 15) + 10);
}

/* ══════════════════════════════════════════════
   RENDER STATE
   primary = most recent project to have started (emerging/current)
   secondary = previous project still in its fade-out tail (1.65 → 2.0)
══════════════════════════════════════════════ */
function getRenderState(globalPos, allowOverlap) {
  const wrapped      = mod(globalPos, TOTAL_LEN);
  const primaryIdx   = Math.floor(wrapped / CYCLE_STEP);
  const primaryLocal = wrapped - primaryIdx * CYCLE_STEP;

  // Crossfade intentionally disabled.
  //
  // Earlier versions rendered the PREVIOUS project on the bg canvas
  // while the emerging project was in its fade-in zone (0 → FADE_IN_END).
  // With OVERLAP = 0 that design re-showed a project that had ALREADY
  // faded to white on the fg canvas — visible as a ghost of the previous
  // clip popping back into view at every wrap, and doubled/tripled
  // stacks when scrolling fast across multiple boundaries. Each project
  // now handles its own fade in-to-white / out-from-white on the fg
  // canvas alone, so transitions stay clean and single-image.
  const fading = null;

  return {
    emerging: { projectIdx: primaryIdx, localPos: primaryLocal },
    fading,
  };
}

/* ══════════════════════════════════════════════
   HARD STOPS (infinity-safe)
   One hard stop per project at its localPos = 1.0
   → in globalPos: k * CYCLE_STEP + 1.0 for any integer k.
══════════════════════════════════════════════ */
function findCrossedHardStop(from, to) {
  if (from === to) return null;
  const lo = Math.min(from, to), hi = Math.max(from, to);
  const kLo = Math.ceil((lo - 1.0) / CYCLE_STEP);
  const kHi = Math.floor((hi - 1.0) / CYCLE_STEP);
  if (to > from) {
    for (let k = kLo; k <= kHi; k++) {
      const stop = k * CYCLE_STEP + 1.0;
      if (stop > from && stop <= to) return stop;
    }
  } else {
    for (let k = kHi; k >= kLo; k--) {
      const stop = k * CYCLE_STEP + 1.0;
      if (stop < from && stop >= to) return stop;
    }
  }
  return null;
}

/* ══════════════════════════════════════════════
   CANVAS DRAW HELPERS
══════════════════════════════════════════════ */
// Hybrid draw strategy — the mobile layout depends on the image NOT
// filling the full viewport, because the caption needs room beneath the
// video. So:
//   Desktop ( > 820px): Math.max (true center-crop cover) — every section
//     occupies the same rectangle regardless of source aspect, so comp
//     doesn't shift between sections.
//   Mobile  (≤ 820px): Math.min (letterbox / contain) — image fits with
//     breathing room for the title + body stacked below it.
// The text-positioning code below reads back the effective scale so the
// caption always lands right under the actual image bottom, regardless of
// which path we took here.
function drawCover(ctx, img, w, h, offsetX, offsetY) {
  const isMobile = w <= 820;
  const s  = isMobile
    ? Math.min(w / img.naturalWidth, h / img.naturalHeight)
    : Math.max(w / img.naturalWidth, h / img.naturalHeight);
  const dw = img.naturalWidth  * s;
  const dh = img.naturalHeight * s;
  // Per-project offset lets us correct source frames whose subject
  // isn't perfectly centred in the 1600×900 canvas. Value is a fraction
  // of the destination canvas; positive Y shifts the image down.
  const ox = (offsetX || 0) * w;
  const oy = (offsetY || 0) * h;
  ctx.drawImage(img, (w - dw) / 2 + ox, (h - dh) / 2 + oy, dw, dh);
}

function drawVignette(ctx, w, h) {
  const sw = w * CONFIG.VIGNETTE_SIDES;
  const sh = h * CONFIG.VIGNETTE_TB;
  ctx.globalCompositeOperation = 'destination-out';

  const l = ctx.createLinearGradient(0, 0, sw, 0);
  l.addColorStop(0, 'rgba(0,0,0,1)'); l.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = l; ctx.fillRect(0, 0, sw, h);

  const r = ctx.createLinearGradient(w - sw, 0, w, 0);
  r.addColorStop(0, 'rgba(0,0,0,0)'); r.addColorStop(1, 'rgba(0,0,0,1)');
  ctx.fillStyle = r; ctx.fillRect(w - sw, 0, sw, h);

  const t = ctx.createLinearGradient(0, 0, 0, sh);
  t.addColorStop(0, 'rgba(0,0,0,1)'); t.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = t; ctx.fillRect(0, 0, w, sh);

  const b = ctx.createLinearGradient(0, h - sh, 0, h);
  b.addColorStop(0, 'rgba(0,0,0,0)'); b.addColorStop(1, 'rgba(0,0,0,1)');
  ctx.fillStyle = b; ctx.fillRect(0, h - sh, w, sh);

  ctx.globalCompositeOperation = 'source-over';
}

/* ══════════════════════════════════════════════
   HAUPT-CONTROLLER
══════════════════════════════════════════════ */
(function init() {
  const preloader    = document.getElementById('preloader');
  const fgCanvas     = document.getElementById('fg-canvas');
  const bgCanvas     = document.getElementById('bg-canvas');
  const whiteOverlay = document.getElementById('white-overlay');
  const textFg       = document.getElementById('text-fg');
  const textBg       = document.getElementById('text-bg');
  const menu         = document.getElementById('menu');
  const menuViewport = document.getElementById('menu-viewport');
  const menuList     = document.getElementById('menu-list');
  const playerModal  = document.getElementById('player-modal');
  const projectNav   = document.getElementById('project-nav');
  const fgCtx        = fgCanvas.getContext('2d', { alpha: true });
  const bgCtx        = bgCanvas.getContext('2d', { alpha: true });

  const isMenuOpen   = () => menu.classList.contains('is-open');
  const isPlayerOpen = () => playerModal.classList.contains('is-open');

  // ── Populate menu dynamically: LEGACY entries first, then PROJECTS ─────
  // Must happen BEFORE chime.js runs its querySelectorAll('.menu__item').
  // main.js loads synchronously before chime.js in index.html, so this IIFE
  // completes first and the entries exist when chime.js boots.
  // data-kind distinguishes legacy (no frames) from project (scroll-scrub).
  if (menuList) {
    const frag = document.createDocumentFragment();
    LEGACY_ENTRIES.forEach((p, i) => {
      const li = document.createElement('li');
      const a  = document.createElement('a');
      a.href   = '#';
      a.className = 'menu__item menu__item--legacy';
      a.dataset.kind = 'legacy';
      a.dataset.idx  = String(i);
      a.textContent  = p.title;
      li.appendChild(a);
      frag.appendChild(li);
    });
    PROJECTS.forEach((p, i) => {
      const li = document.createElement('li');
      const a  = document.createElement('a');
      a.href   = '#';
      a.className = 'menu__item';
      a.dataset.kind = 'project';
      a.dataset.idx  = String(i);
      // Legacy data-projectIdx kept for any downstream code still referencing it.
      a.dataset.projectIdx = String(i);
      a.textContent  = p.title;
      li.appendChild(a);
      frag.appendChild(li);
    });
    menuList.appendChild(frag);
  }

  const loader = new FrameLoader(CONFIG, PROJECTS);

  let targetPos    = 0;
  let currentPos   = 0;
  let isReady      = false;
  let rafId        = null;
  let hasAdvanced  = false;   // true once we've scrolled past CYCLE_STEP → enables overlap on wrap

  let inDeadzone    = false;
  let deadzoneAt    = 0;
  let deadzoneAccum = 0;
  let bounceOffset  = 0;

  let fgLastKey = '';
  let bgLastKey = '';
  // Displayed canvas opacities — eased toward the per-frame target so a
  // fast scroll that would otherwise snap from ~0.7 → 0 in one frame
  // still glides. Rates are near-symmetric so the fade-in from white and
  // the fade-out to white feel equally deliberate — a hair faster on
  // fade-in (so the image doesn't stay hazy during phase 1) but no more
  // of a "pop" than the exit. Widened FADE_IN_END (0.50 localPos units)
  // gives both directions the same ~0.6-unit travel distance; the ease
  // rate difference is just protection against multi-frame jumps.
  let fgDisplayedOp = 0;
  let bgDisplayedOp = 0;
  const EASE_OP_UP   = 0.28;  // fade-in:  reach target in ~14 frames (~235 ms)
  const EASE_OP_DOWN = 0.22;  // fade-out: reach target in ~18 frames (~300 ms)

  // ── Menu scroll-bound translate ──────────────────────────────────────
  // Architecture: the menu is an OVERLAY (it doesn't live in the document
  // flow), so "bind translation to window.scrollY" isn't available —
  // there is no page scroll while the overlay is up. Instead we capture
  // wheel + touch events at the WINDOW level (capture phase, non-passive)
  // while the menu is open, prevent the page scroll, and add the delta
  // to a target translate. A LERP (0.28) eases the <ul>'s transform
  // translate3d toward the target so items glide as a block — earlier
  // entries push up and out the top, new entries enter from the bottom.
  // No scrollbar, no native overflow — the <ul> has overflow:visible and
  // only the wrapping .menu__viewport clips. v=33 used scrollTop on the
  // <ul> and a residual overflow-y:auto fought with it; v=34 uses pure
  // transform on a non-scrollable list, which is deterministic on iOS.
  let menuScrollCurrent = 0;
  let menuScrollTarget  = 0;
  // Lower LERP = more glide. 0.18 reaches target in ~22 frames (~370 ms)
  // — smooth without feeling laggy on input.
  const MENU_LERP       = 0.18;
  // Pixels of scroll input that map to the full 25vh → 92vh viewport
  // expansion (phase 1). Smaller values = faster expand; larger = more
  // deliberate. Tuned so two to three trackpad ticks reach full expand.
  const MENU_EXPAND_DISTANCE = 420;

  // Rubber-band overscroll — a quiet edge hint, nothing more. Pulling
  // past either edge pushes the list a few px in the direction of the
  // gesture, with a tapered resistance so further pulls have less
  // effect as we approach MAX. Release is a straight exponential ease
  // back to 0 — no spring, no velocity, no bounce. That was the
  // "hoch und runter bouncen" the user called out: the earlier
  // underdamped spring oscillated noticeably when released after a
  // long scroll. The decay here goes one way, once.
  let menuOverscroll = 0;  // current pixel offset past the edge
  const MENU_OVERSCROLL_RESISTANCE = 0.09;  // % of past-edge input accepted (tapered below)
  const MENU_OVERSCROLL_DECAY      = 0.86;  // per-frame ease back to 0
  const MENU_OVERSCROLL_MAX        = 40;    // tight clamp; edge hint only

  // Route all scroll input through this so overscroll kicks in
  // automatically at either edge instead of a hard clamp. Resistance is
  // tapered by how much overscroll we've already accumulated, so the
  // approach to MAX feels asymptotic instead of linear — each additional
  // pull reaches less far, matching the physical feeling of a rubber
  // band stretching.
  function pushMenuScroll(delta) {
    const max = menuMaxScrollRef.fn ? menuMaxScrollRef.fn() : 0;
    const proposed = menuScrollTarget + delta;
    const taper = () => Math.max(0, 1 - Math.abs(menuOverscroll) / MENU_OVERSCROLL_MAX);
    if (proposed > max) {
      const excess = proposed - max;
      menuOverscroll += excess * MENU_OVERSCROLL_RESISTANCE * taper();
      if (menuOverscroll >  MENU_OVERSCROLL_MAX) menuOverscroll =  MENU_OVERSCROLL_MAX;
      menuScrollTarget = max;
    } else if (proposed < 0) {
      const excess = proposed; // negative
      menuOverscroll += excess * MENU_OVERSCROLL_RESISTANCE * taper();
      if (menuOverscroll < -MENU_OVERSCROLL_MAX) menuOverscroll = -MENU_OVERSCROLL_MAX;
      menuScrollTarget = 0;
    } else {
      menuScrollTarget = proposed;
    }
  }
  // Forward-reference shim: menuMaxScroll is declared further down near
  // the wheel/touch handlers. Assigned below the declaration so this
  // closure stays valid at call time.
  const menuMaxScrollRef = { fn: null };

  // ── Canvas-Größen ──
  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    [fgCanvas, bgCanvas].forEach((c) => {
      c.width  = Math.floor(window.innerWidth  * dpr);
      c.height = Math.floor(window.innerHeight * dpr);
    });
    fgCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    bgCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    fgLastKey = ''; bgLastKey = '';
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  // ── Preloader — plays the full loader video by default, but skippable
  //   on click. The auto-path still respects LOADER_DURATION so the
  //   animation doesn't get cut off on fast connections; a deliberate
  //   click/tap bypasses that minimum immediately. ──
  const LOADER_DURATION = 2800;
  const preloadStart = Date.now();
  let preloaderDismissed       = false;

  // Loader is now a GIF — browsers auto-animate images without
  // autoplay-policy gymnastics, so no play()/kick logic is needed.
  // Separate flag from isReady: the scene must also be VISUALLY emerged
  // before we allow the click-to-open-player gesture. Otherwise users
  // can accidentally tap the player open while the preloader is still
  // on screen.
  let sceneReadyForInteraction = false;

  function armInteractionLater(delay) {
    setTimeout(() => {
      sceneReadyForInteraction = true;
      // Reveal the mobile project-nav once the scene is interactive.
      if (projectNav) projectNav.classList.remove('is-hidden');
    }, delay);
  }

  function dismiss() {
    if (preloaderDismissed) return;
    const elapsed   = Date.now() - preloadStart;
    const remaining = Math.max(0, LOADER_DURATION - elapsed);
    preloaderDismissed = true;
    setTimeout(() => preloader.classList.add('is-done'), remaining + 400);
    // Arm interaction after the preloader has fully faded
    // (0.8 s CSS transition) — prevents the click-that-skips from also
    // opening the player the same frame.
    armInteractionLater(remaining + 400 + 850);
    // Land on the first project fully emerged (localPos = 1.0). Without
    // this the scene starts at the tiny scale 0.11 and the user has to
    // scroll to see anything — the intended first impression is the
    // hero frame, already open at the hard stop.
    targetPos = 1.0;
  }

  // Skip-on-click: dismiss immediately and flip isReady so the scene
  // starts rendering even if frames haven't hit the priority threshold
  // yet (the FrameLoader's getNearest fallback handles holes — user sees
  // whatever is ready, which is far better than being held hostage by
  // the loader). Attached via pointerdown (fires earlier than click,
  // most reliable across devices), with touchend + click fallbacks so
  // every input path works. De-duplicated via preloaderDismissed.
  function skipPreloader(e) {
    if (preloaderDismissed) return;
    preloaderDismissed = true;
    if (!isReady) {
      isReady = true;
      fgCanvas.classList.add('is-loaded');
      bgCanvas.classList.add('is-loaded');
    }
    preloader.classList.add('is-done');
    // Same first-impression rule as dismiss(): land on project 0 fully
    // emerged so a user who skips the loader sees the hero frame, not
    // the tiny scale 0.11 start state.
    targetPos = 1.0;
    // Stop the same click from bubbling to document — otherwise the
    // click-to-open-player handler would fire at the exact moment the
    // preloader starts fading.
    if (e) {
      if (e.stopPropagation)          e.stopPropagation();
      if (e.stopImmediatePropagation) e.stopImmediatePropagation();
      if (e.preventDefault)           e.preventDefault();
    }
    armInteractionLater(850);
  }
  ['pointerdown', 'touchend', 'click'].forEach((evt) => {
    preloader.addEventListener(evt, skipPreloader);
  });

  loader.onFirstPriority = () => {
    if (!isReady) {
      isReady = true;
      fgCanvas.classList.add('is-loaded');
      bgCanvas.classList.add('is-loaded');
      dismiss();
    }
  };
  loader.onFirstReady = () => {
    if (!isReady) {
      isReady = true;
      fgCanvas.classList.add('is-loaded');
      bgCanvas.classList.add('is-loaded');
      dismiss();
    }
  };
  setTimeout(() => { if (!isReady) { isReady = true; dismiss(); } }, 6000);

  // Kick off section 0 + immediate neighbours (first-scroll candidates)
  // so the moment anyone scrolls there's already something to draw. After
  // a short stagger, start *every* section so fast scrolls across all 12
  // projects never land on an empty canvas. HTTP/2 multiplexes gracefully
  // and priority frames of section 0 still arrive first because they were
  // queued first.
  loader.loadSection(0);
  loader.loadSection(1);
  loader.loadSection(PROJECTS.length - 1);
  setTimeout(() => {
    PROJECTS.forEach((_, i) => loader.loadSection(i));
  }, 1200);

  // ── Bounce beim Hartstopp ──
  // Mobile touch input is coarser than a trackpad, so the hard stops
  // need more "presence" there — bigger bounce scale kick and a deeper
  // deadzone so users really feel the pause at each project.
  const isMobileNow = () => window.innerWidth <= 820;
  function triggerBounce() { bounceOffset = isMobileNow() ? 0.016 : 0.006; }
  function deadzonePx() { return isMobileNow() ? 240 : CONFIG.DEADZONE_PX; }

  // ── Scroll-Delta ──
  function handleDelta(deltaPx) {
    if (inDeadzone) {
      const dz = deadzonePx();
      deadzoneAccum += deltaPx;
      if (deadzoneAccum > dz) {
        inDeadzone = false;
        targetPos  = deadzoneAt + 0.002;
        deadzoneAccum = 0;
      } else if (deadzoneAccum < -(dz * 0.5)) {
        inDeadzone = false;
        targetPos  = deadzoneAt - 0.002;
        deadzoneAccum = 0;
      }
      return;
    }

    const newPos = targetPos + deltaPx * CONFIG.SENSITIVITY;
    const stop   = findCrossedHardStop(targetPos, newPos);
    if (stop !== null) {
      targetPos     = stop;
      inDeadzone    = true;
      deadzoneAt    = stop;
      deadzoneAccum = 0;
      triggerBounce();
      return;
    }
    targetPos = newPos; // unbounded — infinity loop
  }

  // Project-step jump — used by the mobile nav buttons. Snaps targetPos
  // to the next / previous project's hard stop so the scroll scene
  // plays one full transition automatically. The existing tick lerp
  // keeps the motion smooth, so the user sees the fade-out and fade-in
  // animation between projects instead of a hard cut.
  function jumpProjects(dir) {
    inDeadzone    = false;
    deadzoneAccum = 0;
    const nearestStop = Math.round((currentPos - 1.0) / CYCLE_STEP) * CYCLE_STEP + 1.0;
    targetPos = nearestStop + dir * CYCLE_STEP;
  }

  if (projectNav) {
    projectNav.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-project-nav]');
      if (!btn) return;
      if (!sceneReadyForInteraction) return;
      e.stopPropagation();
      jumpProjects(btn.dataset.projectNav === 'next' ? 1 : -1);
    });
  }

  function updateProjectNavVisibility() {
    if (!projectNav) return;
    const hide = isMenuOpen() || isPlayerOpen() || !sceneReadyForInteraction;
    projectNav.classList.toggle('is-hidden', hide);
  }

  // Per-event delta cap keeps a single aggressive wheel tick from shooting
  // currentPos way past the trigger in one frame, which previously caused
  // visible jumps during fast scrolls.
  const MAX_DELTA = window.innerWidth <= 820 ? 600 : 260;
  const clampDelta = (d) => Math.max(-MAX_DELTA, Math.min(MAX_DELTA, d));

  // Let clicks/scrolls inside overlays (menu, player card) bubble naturally
  // so their own scroll containers work on touch + trackpad without
  // hijacking the frame-scrub scroll. .text-body is ONLY treated as an
  // overlay when it actually has overflowing internal content — without
  // this gate, touch-swipes that happen to land on the caption area on
  // mobile would be swallowed (no scroll-scrub, nothing to scroll inside),
  // producing a dead zone. Same logic for the menu list so it only
  // absorbs scroll when it's actually tall enough to need it.
  const hasInternalOverflow = (el) => el && el.scrollHeight > el.clientHeight + 1;
  const eventInsideOverlay = (e) => {
    if (!e.target.closest) return false;
    if (e.target.closest('#player-modal')) return true;
    if (e.target.closest('#menu')) {
      // Menu fully takes over when open (wheel/touch should scroll the list
      // if it overflows, otherwise still absorb so the canvas doesn't move).
      return true;
    }
    const tb = e.target.closest('.text-body');
    if (hasInternalOverflow(tb)) return true;
    return false;
  };

  // ── Wheel ──
  window.addEventListener('wheel', (e) => {
    if (eventInsideOverlay(e)) return;   // allow native scroll in overlays
    e.preventDefault();
    if (isMenuOpen() || isPlayerOpen()) return;
    let d = e.deltaY;
    if (e.deltaMode === 1) d *= 32;
    if (e.deltaMode === 2) d *= window.innerHeight;
    handleDelta(clampDelta(d));
  }, { passive: false });

  // ── Touch ──
  // Mobile touch traverses far less pixel distance than a trackpad scroll,
  // so give each finger-pixel more weight to reach the next project without
  // multiple drags.
  const TOUCH_MULTIPLIER = window.innerWidth <= 820 ? 12.0 : 1.2;
  let touchY = 0;
  window.addEventListener('touchstart', (e) => { touchY = e.touches[0].clientY; }, { passive: true });
  window.addEventListener('touchmove', (e) => {
    if (eventInsideOverlay(e)) return;   // allow native swipe in overlays
    e.preventDefault();
    if (isMenuOpen() || isPlayerOpen()) return;
    const dy = touchY - e.touches[0].clientY;
    touchY   = e.touches[0].clientY;
    handleDelta(clampDelta(dy * TOUCH_MULTIPLIER));
  }, { passive: false });

  // Shrink the title font-size until it fits the container on a single
  // line. Re-runs when the title text or the viewport width changes.
  function fitTitleToOneLine(titleEl) {
    titleEl.style.fontSize = ''; // reset to stylesheet value
    const available = titleEl.clientWidth;
    const natural   = titleEl.scrollWidth;
    if (!available || !natural || natural <= available) return;
    const baseFs = parseFloat(getComputedStyle(titleEl).fontSize);
    const newFs  = baseFs * (available / natural) * 0.98; // 2 % safety
    titleEl.style.fontSize = newFs.toFixed(2) + 'px';
  }

  // ── Layer renderer ──
  // Returns { lastKey, displayedOp } so the caller can persist the eased
  // opacity between frames.
  function renderLayer(canvas, ctx, lastKey, textEl, state, bounce, allowStartFade, displayedOp) {
    if (!state) {
      // Ease down to 0 instead of snapping — keeps fade-out from the
      // secondary layer smooth even after it stops being tracked. Always
      // the DOWN rate here because target is 0.
      displayedOp += (0 - displayedOp) * EASE_OP_DOWN;
      if (displayedOp < 0.003) displayedOp = 0;
      canvas.style.opacity = displayedOp.toFixed(3);
      textEl.style.opacity = '0';
      return { lastKey, displayedOp };
    }
    const { projectIdx, localPos } = state;
    const frameIdx = getFrameIndex(localPos);
    // Fallback lookup: prefer exact frame, otherwise nearest loaded frame
    // in the SAME section. If nothing in the section is loaded, clear the
    // canvas so we don't bleed the previous section's last frame through.
    const found = loader.getNearest(projectIdx, frameIdx);

    const projectForDraw = PROJECTS[projectIdx];
    const frameOffsetX = projectForDraw ? projectForDraw.frameOffsetX : 0;
    const frameOffsetY = projectForDraw ? projectForDraw.frameOffsetY : 0;

    if (found) {
      const key = `${projectIdx}:${found.frameIdx}`;
      if (key !== lastKey) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        drawCover(ctx, found.img, window.innerWidth, window.innerHeight, frameOffsetX, frameOffsetY);
        drawVignette(ctx, window.innerWidth, window.innerHeight);
        lastKey = key;
      }
    } else {
      const key = `empty:${projectIdx}`;
      if (key !== lastKey) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        lastKey = key;
      }
    }

    const scale       = getScale(localPos) + bounce;
    const whiteOp     = getWhiteOpacity(localPos, allowStartFade);
    // Smootherstep gives a C²-continuous curve — no perceptible kick at
    // the endpoints where smoothstep would still snap subtly.
    const smoothWhite = smootherstep(whiteOp);
    const targetOp    = 1 - smoothWhite;
    // Ease the *displayed* opacity toward the target. Asymmetric rate:
    // fade-IN snaps up fast so the image "opens up" the moment it should
    // be visible; fade-OUT stays gentle so fast scrolls don't read as a
    // hard cut. Without this split, a single 0.22 rate left the canvas
    // at ~70 % opacity during/after the fade-in zone — the visual
    // symptom the user called out ("Bilder klappen sich nicht richtig auf").
    const rate = (targetOp > displayedOp) ? EASE_OP_UP : EASE_OP_DOWN;
    displayedOp += (targetOp - displayedOp) * rate;
    if (Math.abs(targetOp - displayedOp) < 0.002) displayedOp = targetOp;
    canvas.style.transform = `scale(${scale.toFixed(4)})`;
    canvas.style.opacity   = displayedOp.toFixed(3);

    // Text content sync
    const project = PROJECTS[projectIdx];
    const titleEl = textEl.querySelector('.text-title');
    const bodyEl  = textEl.querySelector('.text-body');
    const fitKey  = `${project.title}@${window.innerWidth}`;
    if (titleEl.textContent !== project.title) {
      titleEl.textContent = project.title;
      titleEl.dataset.fitKey = '';
    }
    if (titleEl.dataset.fitKey !== fitKey) {
      fitTitleToOneLine(titleEl);
      titleEl.dataset.fitKey = fitKey;
    }
    if (bodyEl.textContent !== project.body) bodyEl.textContent = project.body;

    // Text fade — smootherstep on both directions so the caption enters
    // and leaves as softly as the image it sits under. Fade-in starts
    // once the image is mostly visible (localPos ≥ 0.82) and completes
    // at 1.0 (the hard stop). Fade-out mirrors the canvas's own
    // fade-to-white window (WHITE_FADE_FROM → CYCLE_LEN), so text and
    // image vanish in lockstep instead of the text lingering over a
    // half-white background.
    const textInT   = Math.max(0, Math.min(1, (localPos - 0.82) / 0.18));
    const textIn    = smootherstep(textInT);
    const textOutSpan = CONFIG.CYCLE_LEN - CONFIG.WHITE_FADE_FROM;
    const textOutT  = Math.max(0, Math.min(1, (localPos - CONFIG.WHITE_FADE_FROM) / textOutSpan));
    const textOut   = 1 - smootherstep(textOutT);
    textEl.style.opacity = (textIn * textOut).toFixed(3);

    // Text-under-image positioning — must match whichever draw mode was
    // used above (cover on desktop, contain on mobile).
    //   Desktop (cover): image always fills the canvas, so visible bottom
    //     in canvas-coords is canvasH.
    //   Mobile (contain): image is letterboxed vertically, so visible
    //     bottom = (canvasH + dh) / 2 where dh = ih * min(w/iw, h/ih).
    // After the CSS transform (origin: center at originY*h, scale), the
    // on-screen bottom shifts toward the origin by the same factor the
    // image itself shrinks — so the text stays glued to the image edge.
    const isMobile = window.innerWidth <= 820;
    const canvasW  = window.innerWidth;
    const canvasH  = window.innerHeight;
    const originY  = isMobile ? 0.40 : 0.50;
    const originPx = originY * canvasH;
    let imgBottomInCanvas = canvasH;
    if (found) {
      const iw = found.img.naturalWidth, ih = found.img.naturalHeight;
      const s  = isMobile
        ? Math.min(canvasW / iw, canvasH / ih)
        : Math.max(canvasW / iw, canvasH / ih);
      const dh = ih * s;
      // For contain dh ≤ h → image is centered vertically inside canvas.
      // For cover  dh ≥ h → image is clipped to canvas edges.
      // Add the per-project frameOffsetY (in canvas fraction) so the
      // text follows a shifted image down.
      const oy = (frameOffsetY || 0) * canvasH;
      imgBottomInCanvas = Math.min(canvasH, (canvasH + dh) / 2 + oy);
    }
    const imageBottom = originPx + (imgBottomInCanvas - originPx) * scale;
    const gap = isMobile ? 14 : -canvasH * scale * 0.045;
    textEl.style.top = (imageBottom + gap).toFixed(1) + 'px';

    // On mobile the text does NOT shrink with the canvas — scaling it down by
    // 0.37× at the hard stop would make it unreadable. Keep it at its natural
    // CSS size there; position still follows the canvas bottom.
    textEl.style.transform = isMobile ? 'scale(1)' : `scale(${scale.toFixed(4)})`;

    return { lastKey, displayedOp };
  }

  // ── Lazy-load neighbours ──
  // Prefetch strategy: always keep current + next + prev sections warm.
  // "Next" fires earlier than "prev" because forward scroll is the common path.
  // NEXT_PREFETCH_AT triggers the next section to start loading once the
  // current section is past ~60% of its cycle — gives ~1 viewport-height
  // of headroom before it's actually needed on screen.
  const NEXT_PREFETCH_AT = 0.60;  // of CYCLE_LEN
  let lastLoadedIdx = -1;
  function ensureNeighbourLoad(globalPos) {
    const wrapped = mod(globalPos, TOTAL_LEN);
    const curIdx  = Math.floor(wrapped / CYCLE_STEP);
    const local   = (wrapped - curIdx * CYCLE_STEP) / CYCLE_STEP; // 0..1 of current cycle

    // Avoid spamming loadSection() — it short-circuits if already ready,
    // but reduce work by remembering the last idx we processed.
    if (curIdx !== lastLoadedIdx) {
      loader.loadSection(curIdx);
      // Warm ±1 always so scroll in either direction is covered.
      loader.loadSection(mod(curIdx - 1, PROJECTS.length));
      loader.loadSection(mod(curIdx + 1, PROJECTS.length));
      lastLoadedIdx = curIdx;
    }

    // Once past mid-cycle, also warm +2 so a fast scroll that blows through
    // the next section still lands on something loaded.
    if (local >= NEXT_PREFETCH_AT) {
      loader.loadSection(mod(curIdx + 2, PROJECTS.length));
    }
  }

  // ── Animationsschleife ──
  function tick() {
    if (isReady) {
      // Lerp toward target, but cap per-frame velocity so fast scrolls can't
      // skip the fade zone in 2–3 frames.
      const MAX_STEP = window.innerWidth <= 820 ? 0.06 : 0.024;
      const diff = targetPos - currentPos;
      let step = diff * CONFIG.LERP_SPEED;
      if (step >  MAX_STEP) step =  MAX_STEP;
      if (step < -MAX_STEP) step = -MAX_STEP;
      currentPos += (Math.abs(diff) > 0.0001) ? step : diff;

      if (currentPos >= CYCLE_STEP) hasAdvanced = true;

      bounceOffset *= 0.88;
      if (bounceOffset < 0.00005) bounceOffset = 0;

      const allowStartFade = hasAdvanced || currentPos < 0;
      const state          = getRenderState(currentPos, allowStartFade);

      // Lazy-load sections that are about to be needed.
      ensureNeighbourLoad(currentPos);

      const fgRes = renderLayer(fgCanvas, fgCtx, fgLastKey, textFg, state.emerging, bounceOffset, allowStartFade, fgDisplayedOp);
      fgLastKey = fgRes.lastKey; fgDisplayedOp = fgRes.displayedOp;
      const bgRes = renderLayer(bgCanvas, bgCtx, bgLastKey, textBg, state.fading,   0,            false,          bgDisplayedOp);
      bgLastKey = bgRes.lastKey; bgDisplayedOp = bgRes.displayedOp;

      whiteOverlay.style.opacity = '0';
    }

    // Menu scroll — two-phase expand-then-translate.
    //
    //   Phase 1 (scroll 0 → MENU_EXPAND_DISTANCE):
    //     The viewport's max-height grows from 25vh to 80vh via the
    //     CSS variable --menu-expand (0 → 1). Items are top-anchored
    //     in the viewport, so as the viewport top rises they travel
    //     upward on screen while new items reveal at the bottom.
    //     This is what the user meant by "texts pushed up, more space".
    //
    //   Phase 2 (scroll > MENU_EXPAND_DISTANCE, only if list exceeds
    //     the fully-expanded viewport height):
    //     Any extra scroll translates the <ul> upward inside the now-
    //     static viewport, so remaining items can still be reached.
    //
    //   Scrolling back up reverses both phases smoothly (LERP).
    if (menu.classList.contains('is-open') && menuViewport && menuList) {
      const expandedMaxPx = window.innerHeight * 0.92;
      const overflowPx    = Math.max(0, menuList.scrollHeight - expandedMaxPx);
      const maxScroll     = MENU_EXPAND_DISTANCE + overflowPx;
      // Targets entering out-of-range now go into overscroll instead of
      // being silently clamped — but we still clamp defensively here in
      // case they ever bypass pushMenuScroll().
      if (menuScrollTarget > maxScroll) menuScrollTarget = maxScroll;
      if (menuScrollTarget < 0)         menuScrollTarget = 0;

      menuScrollCurrent += (menuScrollTarget - menuScrollCurrent) * MENU_LERP;
      if (Math.abs(menuScrollTarget - menuScrollCurrent) < 0.3) {
        menuScrollCurrent = menuScrollTarget;
      }

      // Overscroll release — straight exponential decay back to 0. No
      // spring, no velocity, so the list glides back once without the
      // up-and-down bounce the earlier spring produced at the end of a
      // long scroll. The decay rate stays the same whether we just
      // nudged the edge or we're releasing from MAX, so long pulls
      // ease back proportionally longer without oscillating.
      menuOverscroll *= MENU_OVERSCROLL_DECAY;
      if (Math.abs(menuOverscroll) < 0.2) menuOverscroll = 0;

      const expandPx    = Math.min(menuScrollCurrent, MENU_EXPAND_DISTANCE);
      const expandRatio = MENU_EXPAND_DISTANCE > 0 ? expandPx / MENU_EXPAND_DISTANCE : 0;
      const translatePx = Math.max(0, menuScrollCurrent - MENU_EXPAND_DISTANCE) + menuOverscroll;

      menu.style.setProperty('--menu-expand', expandRatio.toFixed(3));
      menuList.style.transform = 'translate3d(0, ' + (-translatePx).toFixed(1) + 'px, 0)';
    }

    rafId = requestAnimationFrame(tick);
  }

  rafId = requestAnimationFrame(tick);
  window.addEventListener('beforeunload', () => cancelAnimationFrame(rafId));

  // ── Player-Modal ──────────────────────────────────────────────
  const playerTitle   = playerModal.querySelector('.player-modal__title');
  const playerDesc    = playerModal.querySelector('.player-modal__description');
  const playerStageT  = playerModal.querySelector('.player-modal__stage-title');
  const playerCredit  = playerModal.querySelector('.player-modal__credits');
  const playerVideo   = playerModal.querySelector('.player-modal__video');
  const playerFall    = playerModal.querySelector('.player-modal__stage-fallback');
  const playerLoading = playerModal.querySelector('.player-modal__loading');
  const playerNavPrev = playerModal.querySelector('.player-modal__nav--prev');
  const playerNavNext = playerModal.querySelector('.player-modal__nav--next');
  const playerCounter = playerModal.querySelector('.player-modal__counter');
  const playerCountI  = playerModal.querySelector('.player-modal__counter-index');
  const playerCountT  = playerModal.querySelector('.player-modal__counter-total');
  const playerFs      = playerModal.querySelector('[data-fs]');
  let playerSnapshot = null;

  // Fullscreen — native video controls already expose a button, but
  // iOS Safari won't honour the standard requestFullscreen() while
  // playsinline is set; it needs the webkit-specific call on the video
  // element itself. This handler picks the right path per browser and
  // fails silent on unsupported environments.
  function enterVideoFullscreen() {
    if (!playerVideo) return;
    if (typeof playerVideo.webkitEnterFullscreen === 'function') {
      try { playerVideo.webkitEnterFullscreen(); return; } catch (e) { /* ignore */ }
    }
    const el  = playerVideo;
    const req = el.requestFullscreen || el.webkitRequestFullscreen || el.mozRequestFullScreen || el.msRequestFullscreen;
    if (req) {
      const p = req.call(el);
      if (p && typeof p.catch === 'function') p.catch(() => {});
    }
  }
  if (playerFs) {
    playerFs.addEventListener('click', (e) => {
      e.stopPropagation();
      enterVideoFullscreen();
    });
  }

  // Carousel state — scoped to the currently-open project. 0 entries = no
  // video, 1 entry = no nav UI, 2+ entries = arrows + counter.
  let videoList = [];
  let videoIdx  = 0;

  // Pass absolute URLs through untouched — they're already valid and
  // shouldn't be re-encoded. For relative paths, encode each segment so
  // spaces, (), apostrophes and ® survive to the server.
  const encodeSrc = (path) => {
    if (/^https?:\/\//i.test(path)) return path;
    return path.split('/').map((seg, i) => i === 0 ? seg : encodeURIComponent(seg)).join('/');
  };

  function showLoading() { if (playerLoading) playerLoading.classList.add('is-active'); }
  function hideLoading() { if (playerLoading) playerLoading.classList.remove('is-active'); }

  function setStageVideo(src, { fade } = { fade: false }) {
    if (!playerVideo) return;

    // Try play(), with a muted fallback for strict autoplay configs.
    // IMPORTANT: this must run synchronously inside the user-gesture
    // call stack (menu tap, carousel arrow) — iOS Safari and mobile
    // Chrome silently reject play() if the invocation is deferred to
    // an async event handler that fires OUTSIDE the gesture, which is
    // why the previous "wait for loadeddata, then play" flow left
    // mobile with no playback at all.
    const tryPlay = () => {
      const p = playerVideo.play();
      if (p && typeof p.catch === 'function') {
        p.catch(() => {
          // Unmuted play blocked by autoplay policy — retry muted so
          // the clip still starts. User can unmute via native controls.
          playerVideo.muted = true;
          const p2 = playerVideo.play();
          if (p2 && typeof p2.catch === 'function') p2.catch(() => {});
        });
      }
    };

    const apply = () => {
      playerVideo.src   = encodeSrc(src);
      playerVideo.muted = false;
      try { playerVideo.load(); } catch (e) { /* ignore */ }
      // Kick play NOW, while the user gesture is still in scope. The
      // browser queues the request if the video isn't decodable yet
      // and honours it on the first renderable frame.
      tryPlay();
      // Loader GIF overlay until the incoming clip has its first frame.
      showLoading();
      const onReady = () => {
        playerVideo.classList.remove('is-swapping');
        hideLoading();
      };
      if (playerVideo.readyState >= 2) onReady();
      else {
        playerVideo.addEventListener('loadeddata', onReady, { once: true });
        playerVideo.addEventListener('canplay',    onReady, { once: true });
      }
    };
    try { playerVideo.pause(); } catch (e) { /* ignore */ }
    if (fade) {
      // Carousel swap: the old clip fades out via .is-swapping while the
      // new one loads underneath. Src swap + play() still run
      // synchronously so the user gesture remains in scope.
      playerVideo.classList.add('is-swapping');
      apply();
    } else {
      apply();
    }
  }

  function updateNavUI() {
    const multi = videoList.length > 1;
    if (playerNavPrev) playerNavPrev.hidden = !multi;
    if (playerNavNext) playerNavNext.hidden = !multi;
    if (playerCounter) playerCounter.hidden = !multi;
    if (multi) {
      if (playerCountI) playerCountI.textContent = String(videoIdx + 1);
      if (playerCountT) playerCountT.textContent = String(videoList.length);
    }
  }

  function stepVideo(delta) {
    if (videoList.length < 2) return;
    videoIdx = (videoIdx + delta + videoList.length) % videoList.length;
    setStageVideo(videoList[videoIdx], { fade: true });
    updateNavUI();
  }

  function populatePlayer(project) {
    playerTitle.textContent  = project.title;
    playerStageT.textContent = project.title;

    // Multi-paragraph description — split on double newlines so the
    // rich narrative breaks into readable paragraphs inside the modal.
    if (playerDesc) {
      playerDesc.innerHTML = '';
      if (project.description) {
        project.description.split(/\n{2,}/).forEach((para) => {
          const p = document.createElement('p');
          p.textContent = para.trim();
          playerDesc.appendChild(p);
        });
        playerDesc.style.display = '';
      } else {
        playerDesc.style.display = 'none';
      }
    }

    // Resolve the clip list — `videos[]` takes priority over legacy
    // single `video`. Projects with neither fall back to "Coming soon".
    videoList = Array.isArray(project.videos) && project.videos.length
      ? project.videos.slice()
      : (project.video ? [project.video] : []);
    videoIdx = 0;

    if (playerVideo && playerFall) {
      try { playerVideo.pause(); } catch (e) { /* ignore */ }
      playerVideo.classList.remove('is-swapping');
      if (videoList.length) {
        playerVideo.style.display = '';
        playerFall.style.display  = 'none';
        setStageVideo(videoList[0], { fade: false });
      } else {
        playerVideo.removeAttribute('src');
        playerVideo.style.display = 'none';
        playerFall.style.display  = '';
        hideLoading();
      }
    }
    updateNavUI();

    // Credits render as inline label + value pairs, grouped so the pair
    // wraps together on narrow widths instead of breaking mid-entry.
    playerCredit.innerHTML = '';
    (project.credits || []).forEach(({ label, value }) => {
      const pair = document.createElement('span');
      pair.className = 'player-modal__credit-pair';
      const dt = document.createElement('dt');
      const dd = document.createElement('dd');
      dt.textContent = label;
      dd.textContent = value;
      pair.append(dt, dd);
      playerCredit.appendChild(pair);
    });
  }

  let playerSource = 'scene'; // 'scene' or 'menu'

  function openPlayer(target, source = 'scene') {
    let project;
    if (target && typeof target === 'object') {
      // Direct project object (legacy entries and similar off-scene sources).
      project = target;
    } else {
      const projectIdx = (typeof target === 'number')
        ? target
        : getRenderState(currentPos).emerging.projectIdx;
      project = PROJECTS[projectIdx];
    }
    if (!project) return;
    // Make the modal visible BEFORE populating the video. iOS Safari
    // and mobile Chrome suspend load() / play() on a <video> inside a
    // visibility:hidden container — the previous order left the clip
    // loading forever on phones because setStageVideo ran while the
    // modal was still hidden. Opening the modal first guarantees the
    // element is part of the visible render tree when load() / play()
    // run, so the user gesture carries through to actual playback.
    playerSnapshot = { currentPos, targetPos, inDeadzone, deadzoneAt, deadzoneAccum };
    playerSource = source;
    playerModal.classList.add('is-open');
    playerModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-player-open');
    populatePlayer(project);
    updateProjectNavVisibility();
  }

  function closePlayer() {
    playerModal.classList.remove('is-open');
    playerModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-player-open');
    updateProjectNavVisibility();
    hideLoading();
    // Stop any playing video so audio doesn't continue behind the
    // scroll-scene after the modal closes.
    if (playerVideo) {
      try { playerVideo.pause(); } catch (e) { /* ignore */ }
    }
    if (playerSnapshot) {
      currentPos    = playerSnapshot.currentPos;
      targetPos     = playerSnapshot.targetPos;
      inDeadzone    = playerSnapshot.inDeadzone;
      deadzoneAt    = playerSnapshot.deadzoneAt;
      deadzoneAccum = playerSnapshot.deadzoneAccum;
      playerSnapshot = null;
    }
    // If the player was opened from the menu, return the user to the menu
    // instead of dropping back to the scroll scene.
    if (playerSource === 'menu') {
      setMenu(true);
    }
    playerSource = 'scene';
  }

  // Click anywhere on the scroll surface opens the player for the current project.
  // Ignore clicks on the logo button, the menu, and inside the modal itself.
  // Gated by sceneReadyForInteraction so taps can't open the player
  // while the preloader is still on screen or mid-fade.
  document.addEventListener('click', (e) => {
    if (!isReady)                   return;
    if (!sceneReadyForInteraction)  return;
    if (isMenuOpen())               return;
    if (isPlayerOpen())             return;
    if (e.target.closest('#preloader'))    return;
    if (e.target.closest('#logo-btn'))     return;
    if (e.target.closest('#menu'))         return;
    if (e.target.closest('#player-modal')) return;
    openPlayer();
  });

  // Close triggers
  playerModal.addEventListener('click', (e) => {
    if (e.target.matches('[data-close]')) closePlayer();
    const navBtn = e.target.closest('[data-nav]');
    if (navBtn) {
      e.stopPropagation();
      stepVideo(navBtn.dataset.nav === 'next' ? 1 : -1);
    }
  });

  // ── Dropdown-Menü ──
  const logoBtn = document.getElementById('logo-btn');
  function setMenu(open) {
    menu.classList.toggle('is-open', open);
    logoBtn.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', open ? 'false' : 'true');
    logoBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    logoBtn.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    document.body.classList.toggle('is-menu-open', open);
    updateProjectNavVisibility();
    // Reset scroll state every time the menu opens OR closes so the
    // first view always starts collapsed (25vh bottom quarter) and a
    // half-scrolled state doesn't linger after close.
    menuScrollTarget  = 0;
    menuScrollCurrent = 0;
    menuOverscroll    = 0;
    menu.style.setProperty('--menu-expand', '0');
    if (menuList) {
      menuList.style.transform = 'translate3d(0, 0, 0)';
      // v=33 used menuList.scrollTop; clear any residual just in case a
      // cached older main.js left non-zero scrollTop on the element.
      menuList.scrollTop = 0;
    }
  }
  logoBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    setMenu(!menu.classList.contains('is-open'));
  });

  // ── Menu scroll-bound wiring ─────────────────────────────────────────
  // Window-level capture listeners. Fire BEFORE any other wheel/touch
  // handler in the document, gated by isMenuOpen(). While the menu is
  // open they preventDefault() so the page scene doesn't scrub, then
  // add the delta to menuScrollTarget. The tick loop eases the <ul>'s
  // transform translate3d toward target via MENU_LERP.
  //
  // Why window-level and not menu-level (v=33): on iOS, a touchstart
  // bound to the overlay element can miss the first touchmove delta if
  // the browser consumes it for its own momentum/overscroll heuristic
  // before the capture phase reaches our listener. Listening on window
  // with capture:true + passive:false lets us claim the gesture before
  // any UA heuristic, across every target inside the overlay.
  const menuMaxScroll = () => {
    if (!menuViewport || !menuList) return 0;
    // Mirror the tick-loop clamp: phase-1 expansion distance plus the
    // overflow past a fully-expanded 92vh viewport (if any).
    const expandedMaxPx = window.innerHeight * 0.92;
    const overflowPx    = Math.max(0, menuList.scrollHeight - expandedMaxPx);
    return MENU_EXPAND_DISTANCE + overflowPx;
  };
  // Wire the forward reference so pushMenuScroll() (defined earlier)
  // can resolve menuMaxScroll at call time.
  menuMaxScrollRef.fn = menuMaxScroll;

  window.addEventListener('wheel', (e) => {
    if (!isMenuOpen()) return;
    e.preventDefault();
    e.stopPropagation();
    // Mobile: menu is static — all 12 entries fit on screen. Swallow the
    // wheel delta so nothing behind scrubs, but don't drive the menu
    // scroll state.
    if (isMobileNow()) return;
    let d = e.deltaY;
    if (e.deltaMode === 1) d *= 32;
    if (e.deltaMode === 2) d *= window.innerHeight;
    pushMenuScroll(d);
  }, { passive: false, capture: true });

  let menuTouchY = null;
  window.addEventListener('touchstart', (e) => {
    if (!isMenuOpen()) return;
    menuTouchY = e.touches[0].clientY;
  }, { passive: false, capture: true });
  window.addEventListener('touchmove', (e) => {
    if (!isMenuOpen() || menuTouchY === null) return;
    // Mobile: the menu list is static; the only reason to handle the
    // touchmove here is to stop the page scene behind from scrubbing.
    // We preventDefault for that, but DO NOT stopPropagation — the
    // chime module needs the same touchmove to drive "drag across
    // names to play the pentatonic notes". The earlier stopPropagation
    // swallowed the event before chime.js ever saw it.
    if (isMobileNow()) {
      e.preventDefault();
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    const y   = e.touches[0].clientY;
    const dy  = menuTouchY - y;
    menuTouchY = y;
    // 1.6× amplification on touch — finger-pixel distance is short, a
    // single downward drag should reveal a meaningful chunk of the list.
    pushMenuScroll(dy * 1.6);
  }, { passive: false, capture: true });
  window.addEventListener('touchend',    () => { menuTouchY = null; }, { capture: true });
  window.addEventListener('touchcancel', () => { menuTouchY = null; }, { capture: true });

  menu.addEventListener('click', (e) => {
    const item = e.target.closest('.menu__item');
    if (item) {
      e.preventDefault();
      const kind = item.dataset.kind || 'project';
      const idx  = parseInt(item.dataset.idx ?? item.dataset.projectIdx, 10);
      setMenu(false);
      if (Number.isNaN(idx)) return;
      if (kind === 'legacy') {
        openPlayer(LEGACY_ENTRIES[idx], 'menu');
      } else {
        openPlayer(idx, 'menu');
      }
      return;
    }
    if (e.target === menu) setMenu(false);
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (isPlayerOpen()) { closePlayer(); return; }
      if (menu.classList.contains('is-open')) setMenu(false);
      return;
    }
    if (!isPlayerOpen()) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); stepVideo( 1); }
    else if (e.key === 'ArrowLeft')  { e.preventDefault(); stepVideo(-1); }
  });
})();
