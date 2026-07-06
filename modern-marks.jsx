// Modern marks + wordmark for the P2P Modern round.
// Wordmark uses literal "P2P" (not P²) in a contemporary geometric sans.

const NAVY      = '#1E2856';
const NAVY_DEEP = '#14193A';
const NAVY_LO   = '#2A356D';
const NAVY_50   = '#7A86B8';
const RED       = '#C32A2E';
const RED_SOFT  = '#D86A6D';
const INK       = '#0D1230';
const SLATE     = '#3A3F55';
const MUTED     = '#6B6E7D';
const SAND      = '#EAEEF7';
const CREAM     = '#EFF2FA';
const PAPER     = '#F4F6FC';
const LINE      = 'rgba(30,40,86,0.07)';
const LINE2     = 'rgba(30,40,86,0.12)';
const SHADOW_SOFT = '0 18px 46px -20px rgba(20,25,58,0.20)';
const SHADOW_LIFT = '0 34px 80px -26px rgba(20,25,58,0.28)';

// ═══════════════════════════════════════════════════════════════════════════
// WORDMARK — heavy Space Grotesk "P2P" with red 2
// ═══════════════════════════════════════════════════════════════════════════
function P2P({ size = 48, fg = NAVY, accent = RED, weight = 700, tracking = '-0.04em' }) {
  return (
    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: weight, fontSize: size,
                    color: fg, letterSpacing: tracking, lineHeight: 1, whiteSpace: 'nowrap',
                    display: 'inline-block', fontFeatureSettings: '"ss01" on, "cv01" on' }}>
      P<span style={{ color: accent }}>2</span>P
    </span>
  );
}

// "P2P · IS" — short product mark with separator
function P2P_IS({ size = 24, fg = NAVY, accent = RED, weight = 600 }) {
  return (
    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: weight, fontSize: size,
                    color: fg, letterSpacing: '-0.02em', lineHeight: 1, whiteSpace: 'nowrap',
                    display: 'inline-flex', alignItems: 'baseline', gap: size * 0.18 }}>
      <span>P<span style={{ color: accent }}>2</span>P</span>
      <span style={{ color: accent, fontWeight: weight, fontSize: size * 0.4, transform: 'translateY(-1px)' }}>·</span>
      <span style={{ fontSize: size * 0.7, color: fg, opacity: 0.8 }}>IS</span>
    </span>
  );
}

// Full product name in small-caps style
function FullName({ size = 10, fg = INK, accent = RED, weight = 600, spacing = '0.16em' }) {
  return (
    <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: size, color: fg, fontWeight: weight,
                  letterSpacing: spacing, textTransform: 'uppercase', lineHeight: 1.2 }}>
      Procure-to-Pay <span style={{ color: accent, fontWeight: weight + 100 }}>Intelligence</span> System
    </div>
  );
}

// Endorsement line (sub-brand of Miller³)
function Endorsement({ size = 9, fg = MUTED, weight = 600 }) {
  return (
    <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: size, color: fg, fontWeight: weight,
                  letterSpacing: '0.24em', textTransform: 'uppercase' }}>
      A Miller<span style={{ fontFeatureSettings: '"sups" on' }}>³</span> Platform
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// MARK · 01 — THROUGHPUT (modernized flow pipeline)
// Navy tile with two crisp chevrons + baseline tick.
// ═══════════════════════════════════════════════════════════════════════════
function MarkThroughput({ size = 96, theme = 'tile' }) {
  const palette = {
    tile:    { bg: NAVY,      fg: '#fff', accent: RED,  border: 'none' },
    dark:    { bg: NAVY_DEEP, fg: '#fff', accent: RED,  border: 'none' },
    inverse: { bg: '#fff',    fg: NAVY,   accent: RED,  border: LINE },
    light:   { bg: CREAM,     fg: NAVY,   accent: RED,  border: LINE },
    mono:    { bg: NAVY,      fg: '#fff', accent: '#fff', border: 'none' },
  }[theme];
  const grad = theme === 'tile' || theme === 'mono' ? 'url(#throughput-grad)' : palette.bg;

  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <defs>
        <linearGradient id="throughput-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={NAVY_LO} />
          <stop offset="100%" stopColor={NAVY_DEEP} />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="100" height="100" rx="22" fill={grad}
            stroke={palette.border === 'none' ? undefined : palette.border} />
      {/* two chevrons — bolder, set lower for visual balance */}
      <g strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="10">
        <path d="M 28 26 L 50 50 L 28 74" stroke={palette.fg} />
        <path d="M 54 26 L 76 50 L 54 74" stroke={palette.accent} />
      </g>
      {/* tiny baseline tick */}
      <rect x="28" y="84" width="48" height="2" rx="1" fill={palette.fg} opacity="0.35" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// MARK · 02 — READINESS RING (modernized dial → progress ring)
// Apple-watch / Stripe-style — single colored ring with leading-edge dot.
// ═══════════════════════════════════════════════════════════════════════════
function MarkRing({ size = 96, theme = 'tile' }) {
  const palette = {
    tile:    { bg: '#fff',    track: 'rgba(30,40,86,0.10)', fill: NAVY, accent: RED, dot: NAVY,  border: LINE },
    dark:    { bg: NAVY_DEEP, track: 'rgba(255,255,255,0.18)', fill: '#fff', accent: RED, dot: '#fff', border: 'none' },
    inverse: { bg: '#fff',    track: 'rgba(30,40,86,0.10)', fill: NAVY, accent: RED, dot: NAVY,  border: LINE },
    light:   { bg: CREAM,     track: 'rgba(30,40,86,0.12)', fill: NAVY, accent: RED, dot: NAVY,  border: LINE },
    mono:    { bg: '#fff',    track: 'rgba(30,40,86,0.10)', fill: NAVY, accent: NAVY, dot: NAVY, border: LINE },
  }[theme];

  const cx = 50, cy = 50, r = 28;
  const circ = 2 * Math.PI * r;
  // 78% complete = readiness 78/100 — "Fast-Track" zone
  const completion = 0.78;
  const dashOn = circ * completion;
  const dashOff = circ - dashOn;
  // leading-edge dot position
  const angle = -Math.PI / 2 + completion * 2 * Math.PI;
  const dotX = cx + r * Math.cos(angle);
  const dotY = cy + r * Math.sin(angle);

  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <rect x="0" y="0" width="100" height="100" rx="22" fill={palette.bg}
            stroke={palette.border === 'none' ? undefined : palette.border} />
      {/* track */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={palette.track} strokeWidth="8" />
      {/* fill arc */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={palette.fill} strokeWidth="8"
              strokeLinecap="round" strokeDasharray={`${dashOn} ${dashOff}`}
              transform={`rotate(-90 ${cx} ${cy})`} />
      {/* leading-edge accent dot */}
      <circle cx={dotX} cy={dotY} r="5.5" fill={palette.accent} />
      <circle cx={dotX} cy={dotY} r="1.8" fill={palette.bg} />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// MARK · 03 — SPARK (modernized ledger → refined bars + trend overlay)
// 4 bars with rounded tops, baseline, and a tiny ascending trend line.
// ═══════════════════════════════════════════════════════════════════════════
function MarkSpark({ size = 96, theme = 'tile' }) {
  const palette = {
    tile:    { bg: '#fff',    bar: NAVY,  accent: RED, base: NAVY, line: RED, border: LINE },
    dark:    { bg: NAVY_DEEP, bar: '#fff', accent: RED, base: '#fff', line: RED, border: 'none' },
    inverse: { bg: '#fff',    bar: NAVY,  accent: RED, base: NAVY, line: RED, border: LINE },
    light:   { bg: CREAM,     bar: NAVY,  accent: RED, base: NAVY, line: RED, border: LINE },
    mono:    { bg: '#fff',    bar: NAVY,  accent: NAVY, base: NAVY, line: NAVY, border: LINE },
  }[theme];

  // bars: x, h
  const bars = [
    { x: 18, h: 30 },
    { x: 36, h: 44 },
    { x: 54, h: 36 },
    { x: 72, h: 58 },
  ];
  const top = (h) => 80 - h;

  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <rect x="0" y="0" width="100" height="100" rx="22" fill={palette.bg}
            stroke={palette.border === 'none' ? undefined : palette.border} />
      {/* baseline */}
      <line x1="14" y1="82" x2="86" y2="82" stroke={palette.base} strokeWidth="1.5" opacity="0.35" />
      {/* horizontal target line */}
      <line x1="14" y1="34" x2="86" y2="34" stroke={palette.bar} strokeWidth="1" opacity="0.18" strokeDasharray="2 3" />
      {/* bars (rounded tops) */}
      {bars.map((b, i) => (
        <rect key={i} x={b.x} y={top(b.h)} width="10" height={b.h}
              fill={i === bars.length - 1 ? palette.accent : palette.bar} rx="1.5" />
      ))}
      {/* tiny trend line connecting bar peaks */}
      <polyline points={bars.map(b => `${b.x + 5},${top(b.h) - 2}`).join(' ')}
                fill="none" stroke={palette.line} strokeWidth="1.2" opacity="0.45" />
      {/* endpoint dot on the tallest bar */}
      <circle cx={bars[3].x + 5} cy={top(bars[3].h) - 4} r="2.2" fill={palette.accent} />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// MARK · 04 — MESH (modernized graph → triangular node network)
// Three primary nodes in a triangle, connected; small satellite dots suggest
// a wider network. Center node sized + red.
// ═══════════════════════════════════════════════════════════════════════════
function MarkMesh({ size = 96, theme = 'tile' }) {
  const palette = {
    tile:    { bg: NAVY,      node: '#fff', hub: RED, link: '#fff', sat: 'rgba(255,255,255,0.35)', border: 'none' },
    dark:    { bg: NAVY_DEEP, node: '#fff', hub: RED, link: '#fff', sat: 'rgba(255,255,255,0.35)', border: 'none' },
    inverse: { bg: '#fff',    node: NAVY,   hub: RED, link: NAVY,   sat: 'rgba(30,40,86,0.30)',   border: LINE },
    light:   { bg: CREAM,     node: NAVY,   hub: RED, link: NAVY,   sat: 'rgba(30,40,86,0.30)',   border: LINE },
    mono:    { bg: NAVY,      node: '#fff', hub: '#fff', link: '#fff', sat: 'rgba(255,255,255,0.35)', border: 'none' },
  }[theme];

  // Three primary nodes in a triangle
  const a = { x: 24, y: 32 }; // top-left
  const b = { x: 76, y: 32 }; // top-right
  const c = { x: 50, y: 76 }; // bottom (hub)

  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <rect x="0" y="0" width="100" height="100" rx="22" fill={palette.bg}
            stroke={palette.border === 'none' ? undefined : palette.border} />
      {/* satellite dots */}
      {[{x:14,y:60},{x:88,y:60},{x:50,y:18},{x:34,y:88},{x:66,y:88}].map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="2" fill={palette.sat} />
      ))}
      {/* satellite connections */}
      <g stroke={palette.sat} strokeWidth="1">
        <line x1="14" y1="60" x2={a.x} y2={a.y} />
        <line x1="88" y1="60" x2={b.x} y2={b.y} />
        <line x1="50" y1="18" x2={a.x} y2={a.y} />
        <line x1="50" y1="18" x2={b.x} y2={b.y} />
        <line x1="34" y1="88" x2={c.x} y2={c.y} />
        <line x1="66" y1="88" x2={c.x} y2={c.y} />
      </g>
      {/* primary triangle */}
      <g stroke={palette.link} strokeWidth="2.5" strokeLinecap="round">
        <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
        <line x1={a.x} y1={a.y} x2={c.x} y2={c.y} />
        <line x1={b.x} y1={b.y} x2={c.x} y2={c.y} />
      </g>
      {/* nodes */}
      <circle cx={a.x} cy={a.y} r="7" fill={palette.node} />
      <circle cx={b.x} cy={b.y} r="7" fill={palette.node} />
      <circle cx={c.x} cy={c.y} r="10" fill={palette.hub} />
      <circle cx={c.x} cy={c.y} r="3.5" fill={palette.bg} />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// LOCKUPS — horizontal, vertical (stacked), endorsed
// ═══════════════════════════════════════════════════════════════════════════
function HLockup({ Mark, size = 56, dark = false, theme }) {
  const t = theme ?? (dark ? 'dark' : 'tile');
  const fg = dark ? '#fff' : NAVY;
  const ink = dark ? '#fff' : INK;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14 }}>
      <Mark size={size} theme={t} />
      <div>
        <P2P size={size * 0.62} fg={fg} accent={RED} weight={700} />
        <div style={{ marginTop: 4 }}>
          <FullName size={Math.max(9, size * 0.135)} fg={ink} accent={dark ? RED_SOFT : RED} />
        </div>
      </div>
    </div>
  );
}

function VLockup({ Mark, size = 80, dark = false, theme }) {
  const t = theme ?? (dark ? 'dark' : 'tile');
  const fg = dark ? '#fff' : NAVY;
  const ink = dark ? '#fff' : INK;
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <Mark size={size} theme={t} />
      <P2P size={size * 0.36} fg={fg} accent={dark ? RED_SOFT : RED} weight={700} />
      <FullName size={Math.max(8, size * 0.105)} fg={ink} accent={dark ? RED_SOFT : RED} />
    </div>
  );
}

function EndorsedLockup({ Mark, size = 52 }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14 }}>
      <Mark size={size} theme="tile" />
      <div>
        <P2P size={size * 0.6} fg={NAVY} accent={RED} weight={700} />
        <div style={{ height: 1, background: 'rgba(30,40,86,0.3)', margin: '5px 0' }} />
        <Endorsement size={8.5} fg={MUTED} />
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// MARK · 05 — PULSE (waveform / signal — monitoring tool aesthetic)
// Clean EKG-style waveform with a single high spike in red. Reads as
// observability, live data, "we're watching your P2P pipeline."
// ═══════════════════════════════════════════════════════════════════════════
function MarkPulse({ size = 96, theme = 'tile' }) {
  const palette = {
    tile:    { bg: NAVY,      line: '#fff', peak: RED, base: 'rgba(255,255,255,0.18)', dot: RED,   border: 'none' },
    dark:    { bg: NAVY_DEEP, line: '#fff', peak: RED, base: 'rgba(255,255,255,0.18)', dot: RED,   border: 'none' },
    inverse: { bg: '#fff',    line: NAVY,   peak: RED, base: 'rgba(30,40,86,0.15)',   dot: RED,    border: LINE },
    light:   { bg: CREAM,     line: NAVY,   peak: RED, base: 'rgba(30,40,86,0.18)',   dot: RED,    border: LINE },
    mono:    { bg: NAVY,      line: '#fff', peak: '#fff', base: 'rgba(255,255,255,0.18)', dot: '#fff', border: 'none' },
  }[theme];

  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <rect x="0" y="0" width="100" height="100" rx="22" fill={palette.bg}
            stroke={palette.border === 'none' ? undefined : palette.border} />
      {/* baseline */}
      <line x1="14" y1="50" x2="86" y2="50" stroke={palette.base} strokeWidth="1.5" strokeDasharray="3 4" />
      {/* primary waveform: flat → tiny bump → big spike → flat */}
      <polyline
        points="14,50 26,50 32,46 38,54 44,50 50,50 56,28 62,72 68,50 74,50 86,50"
        fill="none"
        stroke={palette.line}
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* red peak overlay just on the spike segment */}
      <polyline
        points="50,50 56,28 62,72 68,50"
        fill="none"
        stroke={palette.peak}
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* leading-edge dot */}
      <circle cx="86" cy="50" r="4" fill={palette.dot} />
      <circle cx="86" cy="50" r="1.6" fill={palette.bg} />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// MARK · 06 — CELLS (data grid / pivot table — Snowflake / Bloomberg feel)
// 3×3 grid of square cells with one accent cell + selection highlight.
// Reads as data, structure, the underlying table model.
// ═══════════════════════════════════════════════════════════════════════════
function MarkCells({ size = 96, theme = 'tile' }) {
  const palette = {
    tile:    { bg: NAVY,      cell: '#fff', dim: 'rgba(255,255,255,0.35)', accent: RED, border: 'none' },
    dark:    { bg: NAVY_DEEP, cell: '#fff', dim: 'rgba(255,255,255,0.35)', accent: RED, border: 'none' },
    inverse: { bg: '#fff',    cell: NAVY,   dim: 'rgba(30,40,86,0.30)',    accent: RED, border: LINE },
    light:   { bg: CREAM,     cell: NAVY,   dim: 'rgba(30,40,86,0.30)',    accent: RED, border: LINE },
    mono:    { bg: NAVY,      cell: '#fff', dim: 'rgba(255,255,255,0.35)', accent: '#fff', border: 'none' },
  }[theme];

  const cell = 16, gap = 6;
  const startX = 50 - (3 * cell + 2 * gap) / 2;
  const startY = 50 - (3 * cell + 2 * gap) / 2;
  // Pattern: F=filled, D=dim, A=accent
  //   F D F
  //   D F A
  //   F D F
  const grid = [
    ['f', 'd', 'f'],
    ['d', 'f', 'a'],
    ['f', 'd', 'f'],
  ];
  const colorFor = (k) => k === 'f' ? palette.cell : k === 'd' ? palette.dim : palette.accent;
  const radius = 2.5;
  const ax = startX + 2 * (cell + gap);
  const ay = startY + 1 * (cell + gap);

  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <rect x="0" y="0" width="100" height="100" rx="22" fill={palette.bg}
            stroke={palette.border === 'none' ? undefined : palette.border} />
      {grid.map((row, r) =>
        row.map((k, c) => (
          <rect key={r + '-' + c}
                x={startX + c * (cell + gap)}
                y={startY + r * (cell + gap)}
                width={cell} height={cell}
                rx={radius}
                fill={colorFor(k)} />
        ))
      )}
      {/* selection highlight around accent cell */}
      <rect x={ax - 2.5} y={ay - 2.5} width={cell + 5} height={cell + 5} rx={radius + 1.5}
            fill="none" stroke={palette.accent} strokeWidth="1.5" opacity="0.65" />
    </svg>
  );
}

// Export everything to global scope
Object.assign(window, {
  // typography
  P2P, P2P_IS, FullName, Endorsement,
  // marks
  MarkThroughput, MarkRing, MarkSpark, MarkMesh, MarkPulse, MarkCells,
  // lockups
  HLockup, VLockup, EndorsedLockup,
  // tokens
  NAVY, NAVY_DEEP, NAVY_LO, NAVY_50, RED, RED_SOFT, INK, SLATE, MUTED, SAND, CREAM, PAPER, LINE, LINE2,
  SHADOW_SOFT, SHADOW_LIFT,
});
