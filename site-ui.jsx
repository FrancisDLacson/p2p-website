// Shared UI primitives + brand visuals for the P2P marketing site.
// Reuses MarkThroughput / P2P / FullName / Endorsement from modern-marks.jsx.

const {
  P2P, P2P_IS, FullName, Endorsement, MarkThroughput,
  NAVY, NAVY_DEEP, NAVY_LO, NAVY_50, RED, RED_SOFT, INK, SLATE, MUTED, SAND, CREAM, PAPER, LINE, LINE2,
  SHADOW_SOFT, SHADOW_LIFT,
} = window;

const OK = '#0E7C44';

// ─── Spacing rhythm ──────────────────────────────────────────────────────────
const SECTION_PAD = 'clamp(84px, 9.5vw, 128px)';  // airier vertical rhythm
const HEAD_GAP = 64;                              // section head → content
const GAP = 22;                                   // default grid gap

// Shared body-copy style (functional prose). Manrope, generous leading.
const bodyStyle = (size = 16.5, color = SLATE) => ({
  fontFamily: "'Manrope', sans-serif", fontSize: size, color,
  lineHeight: 1.62, fontWeight: 450, letterSpacing: '0.001em',
});
// Editorial lead (serif) — reserved for section intros / pull quotes only.
const leadStyle = (size = 20, color = SLATE) => ({
  fontFamily: "'Newsreader', serif", fontSize: size, color,
  lineHeight: 1.55, fontWeight: 400,
});
// Soft-premium card: solid white, generous rounding, soft elevation, hairline.
const CARD = { background: '#fff', borderRadius: 24, border: `1px solid ${LINE}`, boxShadow: SHADOW_SOFT };

// ─── Layout ──────────────────────────────────────────────────────────────────
function Container({ children, style = {} }) {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', ...style }}>
      {children}
    </div>
  );
}

// Standard section wrapper — consistent padding + optional alt/tinted bg.
function Section({ id, alt = false, style = {}, children }) {
  return (
    <section id={id} style={{ padding: `${SECTION_PAD} 0`,
                              background: alt ? 'rgba(255,255,255,0.55)' : 'transparent',
                              backdropFilter: alt ? 'blur(8px)' : 'none',
                              WebkitBackdropFilter: alt ? 'blur(8px)' : 'none',
                              borderTop: alt ? `1px solid rgba(255,255,255,0.7)` : 'none',
                              borderBottom: alt ? `1px solid ${LINE}` : 'none', ...style }}>
      {children}
    </section>
  );
}

// Subtle card hover-lift handlers (spread onto a card div).
const hoverLift = {
  onMouseOver: e => { e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = SHADOW_LIFT;
                      e.currentTarget.style.borderColor = 'rgba(30,40,86,0.12)'; },
  onMouseOut: e => { e.currentTarget.style.transform = 'translateY(0)';
                     e.currentTarget.style.boxShadow = SHADOW_SOFT;
                     e.currentTarget.style.borderColor = LINE; },
};

function Eyebrow({ children, color = RED, center = false }) {
  return (
    <div className="plex" style={{ fontSize: 11.5, letterSpacing: '0.2em', textTransform: 'uppercase',
                                    color, fontWeight: 700, textAlign: center ? 'center' : 'left' }}>
      {children}
    </div>
  );
}

// ─── Buttons ───────────────────────────────────────────────────────────────
function Button({ children, variant = 'primary', size = 'md', href = '#', style = {}, dark = false }) {
  const sizes = {
    sm: { padding: '10px 18px', fontSize: 13 },
    md: { padding: '13px 24px', fontSize: 14.5 },
    lg: { padding: '17px 32px', fontSize: 16 },
  }[size];
  const variants = {
    primary: { background: dark ? '#fff' : NAVY,
               backgroundImage: dark ? 'none' : `linear-gradient(180deg, ${NAVY_LO}, ${NAVY})`,
               color: dark ? NAVY : '#fff', border: '1px solid transparent',
               boxShadow: dark ? '0 8px 22px -10px rgba(20,25,58,0.30)' : '0 12px 28px -12px rgba(30,40,86,0.6)' },
    accent:  { background: RED, backgroundImage: `linear-gradient(180deg, #D23A3E, ${RED})`,
               color: '#fff', border: '1px solid transparent',
               boxShadow: '0 12px 28px -12px rgba(195,42,46,0.6)' },
    ghost:   { background: dark ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.55)',
               backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
               color: dark ? '#fff' : INK,
               border: `1px solid ${dark ? 'rgba(255,255,255,0.28)' : LINE2}` },
  }[variant];
  return (
    <a href={href} className="grotesk"
       {...(/^https?:/.test(href) ? { target: '_blank', rel: 'noopener' } : {})}
       style={{ display: 'inline-flex', alignItems: 'center', gap: 8, borderRadius: 14,
                fontWeight: 600, letterSpacing: '-0.01em', whiteSpace: 'nowrap',
                transition: 'transform 160ms cubic-bezier(0.22,0.61,0.36,1), box-shadow 160ms ease',
                ...sizes, ...variants, ...style }}
       onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)';
                           e.currentTarget.style.boxShadow = variant === 'accent'
                             ? '0 18px 36px -12px rgba(195,42,46,0.65)'
                             : '0 18px 38px -12px rgba(20,25,58,0.4)'; }}
       onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = (variants.boxShadow || 'none'); }}>
      {children}
    </a>
  );
}

// ─── Section heading block ───────────────────────────────────────────────────
function SectionHead({ eyebrow, title, sub, center = false, color = INK, maxWidth = 700 }) {
  return (
    <div style={{ textAlign: center ? 'center' : 'left', maxWidth: center ? maxWidth : 'none',
                  margin: center ? '0 auto' : '0' }}>
      {eyebrow && <Eyebrow center={center}>{eyebrow}</Eyebrow>}
      <h2 className="grotesk" style={{ fontSize: 'clamp(33px, 4.3vw, 56px)', fontWeight: 700, color,
                                        letterSpacing: '-0.042em', lineHeight: 1.03, margin: '18px 0 0' }}>
        {title}
      </h2>
      {sub && (
        <p style={{ ...leadStyle(20, color === '#fff' ? 'rgba(255,255,255,0.82)' : SLATE),
                     margin: '20px auto 0', maxWidth: center ? maxWidth : 620 }}>
          {sub}
        </p>
      )}
    </div>
  );
}

// ─── Readiness Ring (signature visual) ───────────────────────────────────────
function ReadinessRing({ value = 82, size = 120, dark = false, showLabel = true }) {
  const cx = 50, cy = 50, r = 38;
  const circ = 2 * Math.PI * r;
  const dashOn = circ * (value / 100);
  const a = -Math.PI / 2 + (value / 100) * 2 * Math.PI;
  const track = dark ? 'rgba(255,255,255,0.16)' : 'rgba(30,40,86,0.10)';
  const fill = dark ? '#fff' : NAVY;
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 100 100">
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={track} strokeWidth="9" />
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={fill} strokeWidth="9" strokeLinecap="round"
                strokeDasharray={`${dashOn} ${circ - dashOn}`} transform={`rotate(-90 ${cx} ${cy})`} />
        <circle cx={cx + r * Math.cos(a)} cy={cy + r * Math.sin(a)} r="6" fill={RED} />
        <circle cx={cx + r * Math.cos(a)} cy={cy + r * Math.sin(a)} r="2.2" fill={dark ? NAVY_DEEP : '#fff'} />
      </svg>
      {showLabel && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
                       alignItems: 'center', justifyContent: 'center' }}>
          <div className="grotesk" style={{ fontSize: size * 0.30, fontWeight: 700,
                                             color: dark ? '#fff' : INK, letterSpacing: '-0.03em', lineHeight: 1 }}>
            {value}
          </div>
          <div className="plex" style={{ fontSize: size * 0.075, color: dark ? RED_SOFT : RED,
                                          letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700,
                                          marginTop: 2 }}>
            Ready
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Mini sparkline ──────────────────────────────────────────────────────────
function Spark({ dir = 'up', w = 44, h = 22, color }) {
  const paths = {
    up:   'M 0 18 L 8 14 L 16 16 L 24 8 L 32 10 L 44 3',
    down: 'M 0 4 L 8 10 L 16 8 L 24 14 L 32 12 L 44 18',
    flat: 'M 0 11 L 8 13 L 16 9 L 24 14 L 32 10 L 44 12',
  };
  const c = color || (dir === 'down' ? OK : dir === 'flat' ? RED : OK);
  return (
    <svg width={w} height={h} viewBox="0 0 44 22">
      <path d={paths[dir]} fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Compact product dashboard visual (for hero + product section) ───────────
function ProductGlass({ scale = 1 }) {
  return (
    <div style={{ background: NAVY_DEEP, borderRadius: 22, padding: 16, color: '#fff',
                  boxShadow: '0 40px 80px rgba(20,25,58,0.35)', width: '100%', maxWidth: 520 * scale,
                  transformOrigin: 'top left' }}>
      {/* head */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
        <MarkThroughput size={24} theme="dark" />
        <P2P size={16} fg="#fff" accent={RED_SOFT} weight={700} />
        <div style={{ flex: 1 }} />
        <span className="mono" style={{ fontSize: 9, color: RED_SOFT, fontWeight: 700, letterSpacing: '0.06em' }}>● LIVE</span>
      </div>
      {/* body */}
      <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: 12 }}>
        <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 10, padding: 14,
                       display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <ReadinessRing value={82} size={92} dark />
          <div className="plex" style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.55)',
                                          letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>
            P2P Readiness
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {[
            { l: 'PO Cycle', v: '11.4d', d: 'up' },
            { l: 'On-time pay', v: '94.6%', d: 'up' },
            { l: 'Off-contract', v: '6.2%', d: 'flat' },
            { l: 'Vendors', v: '1,284', d: 'up' },
          ].map((k, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 8, padding: '9px 11px' }}>
              <div className="plex" style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.5)',
                                              letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>{k.l}</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: 4 }}>
                <span className="grotesk" style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em' }}>{k.v}</span>
                <Spark dir={k.d} color={k.d === 'flat' ? RED_SOFT : '#7BE0A9'} w={32} h={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* chart */}
      <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 10, padding: 12, marginTop: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <span className="plex" style={{ fontSize: 8, color: 'rgba(255,255,255,0.5)',
                                           letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>
            Spend through pipeline · 12 wk
          </span>
          <span className="plex" style={{ fontSize: 8, color: 'rgba(255,255,255,0.5)' }}>
            <span style={{ color: '#fff' }}>● </span>Committed&nbsp;&nbsp;<span style={{ color: RED_SOFT }}>● </span>Paid
          </span>
        </div>
        <svg viewBox="0 0 400 70" style={{ width: '100%', height: 56 }}>
          <defs>
            <linearGradient id="pg-w" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.25" /><stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M 0 56 L 34 50 L 68 52 L 102 40 L 136 44 L 170 32 L 204 36 L 238 24 L 272 20 L 306 24 L 340 12 L 374 16 L 400 8 L 400 70 L 0 70 Z" fill="url(#pg-w)" />
          <path d="M 0 56 L 34 50 L 68 52 L 102 40 L 136 44 L 170 32 L 204 36 L 238 24 L 272 20 L 306 24 L 340 12 L 374 16 L 400 8" fill="none" stroke="#fff" strokeWidth="1.6" />
          <path d="M 0 62 L 34 58 L 68 56 L 102 50 L 136 54 L 170 46 L 204 48 L 238 38 L 272 36 L 306 40 L 340 28 L 374 32 L 400 22" fill="none" stroke={RED_SOFT} strokeWidth="1.6" />
        </svg>
      </div>
    </div>
  );
}

Object.assign(window, {
  Container, Section, Eyebrow, Button, SectionHead, ReadinessRing, Spark, ProductGlass, OK, PageHero,
  SECTION_PAD, HEAD_GAP, GAP, bodyStyle, leadStyle, CARD, hoverLift,
});

// ─── Interior page hero (compact, for sub-pages) ─────────────────────────────
function PageHero({ eyebrow, title, sub, cta }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden',
                      background: `radial-gradient(900px 460px at 82% -10%, rgba(30,40,86,0.07), transparent 60%), var(--sand)`,
                      borderBottom: `1px solid ${LINE}` }}>
      <Container style={{ paddingTop: 64, paddingBottom: 56 }}>
        <div style={{ maxWidth: 760 }}>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="grotesk" style={{ fontSize: 'clamp(36px, 4.8vw, 58px)', fontWeight: 700, color: INK,
                                            letterSpacing: '-0.04em', lineHeight: 1.0, margin: '16px 0 0' }}
              dangerouslySetInnerHTML={{ __html: title }} />
          {sub && (
            <p style={{ ...leadStyle(20, SLATE), margin: '20px 0 0', maxWidth: 600 }}>{sub}</p>
          )}
          {cta && <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>{cta}</div>}
        </div>
      </Container>
    </section>
  );
}
