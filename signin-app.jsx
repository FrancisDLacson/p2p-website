// SIGN IN page — split-screen login.
const {
  P2P, P2P_IS, MarkThroughput, ReadinessRing, PAGES,
  NAVY, NAVY_DEEP, NAVY_LO, RED, RED_SOFT, INK, SLATE, MUTED, SAND, CREAM, LINE, LINE2, OK,
} = window;

function TopBar() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '22px 28px' }}>
      <a href={PAGES.home} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <MarkThroughput size={30} theme="tile" />
        <P2P_IS size={16} fg="#fff" accent={RED_SOFT} weight={700} />
      </a>
      <a href={PAGES.home} className="grotesk"
         style={{ fontSize: 13, fontWeight: 600, color: MUTED, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
        ← Back to site
      </a>
    </div>
  );
}

// Left brand panel
function BrandPanel() {
  return (
    <div style={{ background: NAVY_DEEP, color: '#fff', position: 'relative', overflow: 'hidden',
                  display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(40px, 5vw, 72px)' }}>
      <svg width="320" height="200" viewBox="0 0 320 200" style={{ position: 'absolute', top: -10, right: -30, opacity: 0.14 }}>
        {[0,1,2,3,4].map(i => (
          <path key={i} d={`M -10 ${30+i*34} C 70 ${14+i*34}, 130 ${50+i*34}, 210 ${30+i*34} S 350 ${14+i*34}, 430 ${30+i*34}`}
                fill="none" stroke={RED} strokeWidth="3" />
        ))}
      </svg>
      <div style={{ position: 'relative' }}>
        <MarkThroughput size={52} theme="dark" />
        <h1 className="grotesk" style={{ fontSize: 'clamp(30px, 3.4vw, 44px)', fontWeight: 700,
                                          letterSpacing: '-0.035em', lineHeight: 1.04, margin: '24px 0 0', maxWidth: 420 }}>
          Your procure-to-pay,<br />in one place.
        </h1>
        <p className="news" style={{ fontSize: 18, color: 'rgba(255,255,255,0.78)', lineHeight: 1.5,
                                      margin: '18px 0 0', maxWidth: 380, fontWeight: 400 }}>
          Live readiness, pipeline, and vendor risk — the moment you sign in.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 36,
                       background: 'rgba(255,255,255,0.06)', borderRadius: 14, padding: 16, maxWidth: 360 }}>
          <ReadinessRing value={82} size={64} dark />
          <div>
            <div className="grotesk" style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>Readiness 82</div>
            <div className="plex" style={{ fontSize: 10.5, color: RED_SOFT, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 700, marginTop: 4 }}>
              Fast-Track · live
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'relative', marginTop: 'auto', paddingTop: 40 }}>
        <span className="plex" style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.24em', textTransform: 'uppercase', fontWeight: 600 }}>
          A Miller³ Platform
        </span>
      </div>
    </div>
  );
}

// Right form panel
function FormPanel() {
  const [state, setState] = React.useState('idle'); // idle | loading | done
  const field = { width: '100%', padding: '13px 15px', borderRadius: 10, border: `1px solid ${LINE2}`,
                  fontFamily: "'Manrope', sans-serif", fontSize: 14.5, color: INK, background: '#fff', outline: 'none' };
  const labelS = { fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 10.5, color: MUTED,
                   letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 8, display: 'block' };
  const sso = (label, glyph) => (
    <button type="button"
            style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9,
                     padding: '11px 14px', borderRadius: 10, border: `1px solid ${LINE2}`, background: '#fff',
                     fontFamily: "'Manrope', sans-serif", fontSize: 13, fontWeight: 600, color: INK, cursor: 'pointer',
                     transition: 'background 120ms ease' }}
            onMouseOver={e => e.currentTarget.style.background = SAND}
            onMouseOut={e => e.currentTarget.style.background = '#fff'}>
      <span aria-hidden="true" style={{ fontSize: 15, lineHeight: 1 }}>{glyph}</span>{label}
    </button>
  );
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(40px, 5vw, 64px)' }}>
      <div style={{ width: '100%', maxWidth: 380 }}>
        <div className="plex" style={{ fontSize: 11, color: RED, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>
          Welcome back
        </div>
        <h2 className="grotesk" style={{ fontSize: 30, fontWeight: 700, color: INK, letterSpacing: '-0.03em', margin: '10px 0 0' }}>
          Sign in to P2P
        </h2>
        <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 14.5, color: SLATE, lineHeight: 1.5, margin: '8px 0 0' }}>
          Use your work account to access your readiness workspace.
        </p>

        {state === 'done' ? (
          <div style={{ marginTop: 28, background: 'rgba(14,124,68,0.08)', border: `1px solid rgba(14,124,68,0.25)`,
                        borderRadius: 12, padding: '20px 22px', textAlign: 'center' }}>
            <div className="grotesk" style={{ fontSize: 18, fontWeight: 700, color: OK, letterSpacing: '-0.01em' }}>Signed in ✓</div>
            <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: 14, color: SLATE, marginTop: 6 }}>
              Redirecting to your workspace…
            </div>
          </div>
        ) : (
          <form onSubmit={e => { e.preventDefault(); setState('loading'); setTimeout(() => setState('done'), 1100); }}
                style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div>
              <label style={labelS}>Work email</label>
              <input style={field} type="email" placeholder="jane@org.gov" required />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label style={labelS}>Password</label>
                <a href="#" className="grotesk" style={{ fontSize: 11.5, color: RED, fontWeight: 600, marginBottom: 8 }}>Forgot?</a>
              </div>
              <input style={field} type="password" placeholder="••••••••" required />
            </div>
            <label style={{ display: 'flex', alignItems: 'center', gap: 9, fontFamily: "'Manrope', sans-serif",
                            fontSize: 13, color: SLATE, fontWeight: 500, cursor: 'pointer' }}>
              <input type="checkbox" style={{ width: 15, height: 15, accentColor: NAVY }} /> Keep me signed in
            </label>
            <button type="submit" disabled={state === 'loading'} className="grotesk"
                    style={{ width: '100%', justifyContent: 'center', display: 'inline-flex', alignItems: 'center', gap: 8,
                             border: 'none', borderRadius: 10, background: state === 'loading' ? NAVY_LO : NAVY, color: '#fff',
                             padding: '15px 26px', fontSize: 15, fontWeight: 600, letterSpacing: '-0.01em',
                             cursor: state === 'loading' ? 'default' : 'pointer',
                             transition: 'transform 120ms ease, box-shadow 120ms ease, background 120ms ease' }}
                    onMouseOver={e => { if (state !== 'loading') { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(20,25,58,0.20)'; } }}
                    onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              {state === 'loading' ? 'Signing in…' : 'Sign in →'}
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '4px 0' }}>
              <div style={{ flex: 1, height: 1, background: LINE }} />
              <span className="plex" style={{ fontSize: 10.5, color: MUTED, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>or</span>
              <div style={{ flex: 1, height: 1, background: LINE }} />
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              {sso('SSO', '🔑')}
              {sso('Microsoft', '⊞')}
              {sso('Google', 'G')}
            </div>
          </form>
        )}

        <div style={{ marginTop: 28, paddingTop: 20, borderTop: `1px solid ${LINE}`, textAlign: 'center',
                       fontFamily: "'Manrope', sans-serif", fontSize: 13.5, color: SLATE }}>
          New to P2P? <a href={PAGES.readiness} className="grotesk" style={{ color: RED, fontWeight: 700 }}>Request a readiness assessment →</a>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div style={{ minHeight: '100vh', position: 'relative', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr' }}>
      <TopBar />
      <BrandPanel />
      <FormPanel />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
