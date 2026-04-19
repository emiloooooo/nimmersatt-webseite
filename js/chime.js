'use strict';

/* ══════════════════════════════════════════════
   CHIME — Menü als Windspiel
   Spielt bei Hover (Maus) bzw. Finger-Wandern (Touch) über jeden
   Projekt-Eintrag einen kurzen Ton ab. Jeder Eintrag hat eine feste
   Tonlage (pentatonisch), damit Re-Hover reproduzierbar ist und die
   Kombinationen harmonisch klingen. Jeder Trigger spawnt eine eigene
   AudioBufferSourceNode, damit sich Töne überlappen können
   (Windspiel im Wind).
══════════════════════════════════════════════ */

(function initChime() {
  const AUDIO_URL  = 'Nimmersatt%20Ton.mp3?v=7';
  const menu       = document.getElementById('menu');
  if (!menu) return;

  const items = Array.from(menu.querySelectorAll('.menu__item'));
  if (!items.length) return;

  // Pentatonische Skala (Halbtöne relativ zum Original-Ton).
  // Jeder Trigger wählt seine Stufe zufällig aus dieser Skala — wie ein
  // echtes Windspiel klingt derselbe Eintrag nie zweimal gleich.
  // Grundpitch um 14 Halbtöne (eine ganze Oktave plus ein Ganzton)
  // nach unten verschoben — der letzte Ganzton bringt das Windspiel
  // deutlich tiefer, ohne dass die pentatonischen Stufen ihre Balance
  // verlieren.
  const PITCH_SHIFT_SEMITONES = -14;
  const PENTATONIC = [0, 2, 4, 7, 9, 12].map((n) => n + PITCH_SHIFT_SEMITONES);

  // Mikro-Detune-Spanne in Cents (±), damit Wiederholungen nicht 1:1 klingen.
  const MICRO_DETUNE_CENTS = 15;

  // Letzte gezogene Index-Position — verhindert "gleicher Ton zweimal direkt
  // hintereinander" (aber innerhalb der restlichen 5 Stufen bleibt's zufällig).
  let lastPickedIdx = -1;

  items.forEach((item, i) => {
    item.dataset.chimeId = 'c' + i; // bleibt nur als stabile Element-ID
  });

  function pickPentatonicIdx() {
    const n = PENTATONIC.length;
    if (n <= 1) return 0;
    // Gleichverteilt über die restlichen n-1 Stufen ziehen: zieh einen
    // Index aus [0..n-2] und schieb ihn um 1 hoch, wenn er den letzten
    // Index trifft oder übersteigt.
    let idx = Math.floor(Math.random() * (n - 1));
    if (lastPickedIdx >= 0 && idx >= lastPickedIdx) idx++;
    lastPickedIdx = idx;
    return idx;
  }

  // ── Web-Audio-State ──
  let audioCtx = null;
  let buffer   = null;
  let loaded   = false;
  let loading  = false;

  // Kein Voice-Cap, kein Cooldown — jede Geste spawnt eine eigene Source.
  // Überlappung ist gewollt ("Windspiel im Wind"), deshalb etwas leiseres
  // Grundgain, damit sich stapelnde Sources nicht aufsummieren ins Clipping.
  // -3 dB leiser als 0.22 → 0.22 × 10^(-3/20) ≈ 0.156.
  const BASE_VOLUME = 0.156;

  async function ensureCtx() {
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return; // kein Web Audio verfügbar → still nichts tun
      try { audioCtx = new AC(); } catch (e) { return; }
    }
    // iOS entsperrt den Context nur nach User-Geste
    if (audioCtx.state === 'suspended') {
      try { await audioCtx.resume(); } catch (e) { /* ignore */ }
    }
    if (!loaded && !loading) {
      loading = true;
      try {
        const res  = await fetch(AUDIO_URL);
        if (!res.ok) throw new Error('fetch status ' + res.status);
        const arr  = await res.arrayBuffer();
        // decodeAudioData in Promise-Form (älteres Safari nutzt Callback-Variante)
        buffer = await new Promise((resolve, reject) => {
          try {
            const p = audioCtx.decodeAudioData(arr, resolve, reject);
            if (p && typeof p.then === 'function') p.then(resolve, reject);
          } catch (e) { reject(e); }
        });
        loaded = true;
      } catch (e) {
        console.warn('[chime] audio load failed:', e);
      } finally {
        loading = false;
      }
    }
  }

  // ── Visueller Pulse am betroffenen Menü-Eintrag ──
  const CHIME_CLASS       = 'menu__item--chime';
  const CHIME_DURATION_MS = 180;

  function pulseChimeVisual(item) {
    if (!item) return;
    // Re-Trigger mitten im Pulse: Klasse zurücksetzen, Reflow erzwingen,
    // damit die CSS-Transition von vorn beginnt, nicht aus Mid-State.
    const existing = item._chimeTid;
    if (existing) {
      clearTimeout(existing);
      item.classList.remove(CHIME_CLASS);
      // eslint-disable-next-line no-unused-expressions
      item.offsetWidth; // force reflow
    }
    requestAnimationFrame(() => {
      item.classList.add(CHIME_CLASS);
      item._chimeTid = setTimeout(() => {
        item.classList.remove(CHIME_CLASS);
        item._chimeTid = null;
      }, CHIME_DURATION_MS);
    });
  }

  function playChime(item) {
    if (!loaded || !audioCtx || !buffer) return;

    // Visueller Sync — Menü-Eintrag "pulst" synchron zum Chime.
    pulseChimeVisual(item);

    // Zufällige Stufe aus der Pentatonik (≠ letzte) plus Mikro-Detune,
    // damit auch Wiederholungen derselben Stufe nicht identisch klingen.
    const stepIdx = pickPentatonicIdx();
    const micro   = (Math.random() * 2 - 1) * MICRO_DETUNE_CENTS;
    const cents   = PENTATONIC[stepIdx] * 100 + micro;
    const rate    = Math.pow(2, cents / 1200); // für Dauer-Berechnung

    const src = audioCtx.createBufferSource();
    src.buffer = buffer;

    // detune bevorzugt (sauberer), Fallback auf playbackRate
    let detuneWorked = false;
    if (src.detune) {
      try { src.detune.value = cents; detuneWorked = true; } catch (e) { /* fallthrough */ }
    }
    if (!detuneWorked) {
      src.playbackRate.value = rate;
    }

    const gain = audioCtx.createGain();
    const tNow = audioCtx.currentTime;
    gain.gain.setValueAtTime(0, tNow);
    gain.gain.linearRampToValueAtTime(BASE_VOLUME, tNow + 0.008); // mini attack

    // kleines Release am Ende, damit nichts klickt
    const playDur      = buffer.duration / rate;
    const releaseStart = Math.max(0.01, playDur - 0.12);
    gain.gain.setValueAtTime(BASE_VOLUME, tNow + releaseStart);
    gain.gain.linearRampToValueAtTime(0, tNow + playDur);

    // Leichter Random-Pan für Räumlichkeit
    let pan = null;
    try {
      if (audioCtx.createStereoPanner) {
        pan = audioCtx.createStereoPanner();
        pan.pan.value = (Math.random() - 0.5) * 0.6;
      }
    } catch (e) { pan = null; }

    src.connect(gain);
    if (pan) { gain.connect(pan); pan.connect(audioCtx.destination); }
    else     { gain.connect(audioCtx.destination); }

    src.onended = () => {
      try { src.disconnect(); } catch (e) {}
      try { gain.disconnect(); } catch (e) {}
      if (pan) { try { pan.disconnect(); } catch (e) {} }
    };

    try { src.start(tNow); } catch (e) { /* ignore */ }
  }

  // ── Priming: Web-Audio-Context wird erst bei User-Geste entsperrt ──
  function primeOnce() {
    ensureCtx();
  }
  window.addEventListener('pointerdown', primeOnce, { once: true });
  window.addEventListener('touchstart',  primeOnce, { once: true, passive: true });
  window.addEventListener('click',       primeOnce, { once: true });
  window.addEventListener('keydown',     primeOnce, { once: true });

  // Wenn das Menü aufgeht, ist das immer nach einer Geste — da können wir
  // auch schon mal Puffer decodieren (falls der initiale Prime früher war).
  const menuObserver = new MutationObserver(() => {
    if (menu.classList.contains('is-open')) ensureCtx();
  });
  menuObserver.observe(menu, { attributes: true, attributeFilter: ['class'] });

  // ── Maus: pointerenter pro Eintrag ──
  // Kein "last item" Gate mehr — jedes erneute Betreten (Back-and-forth,
  // Wiggle über denselben Eintrag) soll einen neuen Ton auslösen.
  items.forEach((item) => {
    item.addEventListener('pointerenter', (e) => {
      // Touch-Pointer werden separat über touchmove abgehandelt, sonst
      // würde der Initial-Tap doppelt zum Chime führen.
      if (e.pointerType === 'touch') return;
      playChime(item);
    });
  });

  // ── Touch: Finger folgen, Eintragswechsel erkennen ──
  let lastTouchItem = null;

  function pickItemFromTouch(t) {
    const el = document.elementFromPoint(t.clientX, t.clientY);
    return (el && el.closest) ? el.closest('.menu__item') : null;
  }

  menu.addEventListener('touchstart', (e) => {
    ensureCtx();
    const t = e.touches[0];
    if (!t) return;
    const item = pickItemFromTouch(t);
    if (item) { playChime(item); lastTouchItem = item; }
  }, { passive: true });

  menu.addEventListener('touchmove', (e) => {
    const t = e.touches[0];
    if (!t) return;
    const item = pickItemFromTouch(t);
    if (item && item !== lastTouchItem) {
      playChime(item);
      lastTouchItem = item;
    } else if (!item) {
      lastTouchItem = null;
    }
  }, { passive: true });

  menu.addEventListener('touchend',    () => { lastTouchItem = null; }, { passive: true });
  menu.addEventListener('touchcancel', () => { lastTouchItem = null; }, { passive: true });
})();
