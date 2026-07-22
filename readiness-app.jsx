// READINESS ASSESSMENT page (the DRA).
const {
  Nav, Footer, Container, Section, Eyebrow, Button, SectionHead, PageHero, ReadinessRing, ChevTick,
  ReadinessShowcase, MarkThroughput, P2P,
  SECTION_PAD, HEAD_GAP, GAP, bodyStyle, leadStyle, CARD, hoverLift,
  NAVY, NAVY_DEEP, NAVY_LO, NAVY_50, RED, RED_SOFT, INK, SLATE, MUTED, SAND, CREAM, LINE, LINE2, OK,
} = window;

// ── How scoring works — three dimensions ─────────────────────────────────────
function Dimensions() {
  const dims = [
    { n: '01', t: 'Access', q: 'Can we reach the data?', d: 'We inventory every procurement, contract, and AP source and confirm we can read it cleanly — credentials, APIs, exports, the lot.', score: 94 },
    { n: '02', t: 'Joinability', q: 'Does it connect?', d: 'Vendors, POs, contracts, and invoices have to link by shared keys. We test whether your records actually join — or quietly don\u2019t.', score: 87 },
    { n: '03', t: 'KPI coverage', q: 'Can we measure what matters?', d: 'Cycle time, leakage, on-time payment, vendor risk — we check the fields exist and are trustworthy enough to drive a KPI.', score: 78 },
  ];
  return (
    <Section>
      <Container>
        <SectionHead center eyebrow="How scoring works"
          title="Three dimensions. One honest number."
          sub="The readiness score isn’t a vanity metric. Each dimension is tested against your real data — and the weakest one sets your ceiling." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: GAP, marginTop: HEAD_GAP }}>
          {dims.map((d, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 16, border: `1px solid ${LINE}`, padding: 28 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className="mono" style={{ fontSize: 13, color: RED, fontWeight: 700 }}>{d.n}</div>
                <ReadinessRing value={d.score} size={64} showLabel={true} />
              </div>
              <h3 className="grotesk" style={{ fontSize: 21, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '16px 0 2px' }}>{d.t}</h3>
              <div className="news" style={{ fontSize: 15, color: RED, fontStyle: 'italic', marginBottom: 10 }}>{d.q}</div>
              <p style={{ ...bodyStyle(15, SLATE), margin: 0 }}>{d.d}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// ── What you get ─────────────────────────────────────────────────────────────
function Deliverables() {
  const items = [
    'A readiness score (0–100) with the breakdown by dimension',
    'Your tier — Fast-Track, Standard, Foundational, or Pre-readiness',
    'A source-by-source data inventory with gaps flagged',
    'A fixed-fee deployment quote and a committed timeline',
    'A remediation plan, if anything needs shoring up first',
    'An executive-ready summary you can take to your sponsor',
  ];
  return (
    <Section alt>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <SectionHead eyebrow="What you walk away with"
            title="A two-week assessment. A clear answer."
            sub="No long discovery phase, no open-ended scoping. You get a number, a path, and a price." />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12 }}>
            {items.map((it, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', background: '#fff',
                                    borderRadius: 12, border: `1px solid ${LINE}`, padding: '14px 18px' }}>
                <span style={{ flexShrink: 0, marginTop: 2 }}><ChevTick color={RED} size={16} /></span>
                <span style={{ ...bodyStyle(15.5, INK) }}>{it}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

// ── Request form ─────────────────────────────────────────────────────────────
function RequestForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const field = { width: '100%', padding: '12px 14px', borderRadius: 9, border: `1px solid ${LINE2}`,
                  fontFamily: "'Manrope', sans-serif", fontSize: 14, color: INK, background: '#fff', outline: 'none' };
  const labelS = { fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 10.5, color: MUTED,
                   letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 7, display: 'block' };
  return (
    <section id="cta" style={{ padding: '40px 0 96px' }}>
      <Container>
        <div style={{ background: NAVY, borderRadius: 24, padding: 'clamp(36px, 5vw, 60px)', color: '#fff',
                      position: 'relative', overflow: 'hidden',
                      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <svg width="360" height="100%" viewBox="0 0 360 320" preserveAspectRatio="xMaxYMid slice"
               style={{ position: 'absolute', top: 0, right: 0, opacity: 0.14 }}>
            {[0,1,2,3,4,5].map(i => (
              <path key={i} d={`M 20 ${30+i*52} C 120 ${10+i*52}, 200 ${56+i*52}, 300 ${30+i*52} S 460 ${10+i*52}, 540 ${30+i*52}`}
                    fill="none" stroke={RED} strokeWidth="4" />
            ))}
          </svg>
          <div style={{ position: 'relative' }}>
            <Eyebrow color={RED_SOFT}>Request a DRA</Eyebrow>
            <h2 className="grotesk" style={{ fontSize: 'clamp(30px,3.8vw,44px)', fontWeight: 700,
                                              letterSpacing: '-0.035em', lineHeight: 1.04, margin: '14px 0 0' }}>
              Find out if you’re ready.
            </h2>
            <p className="news" style={{ fontSize: 18, color: 'rgba(255,255,255,0.82)', lineHeight: 1.5, margin: '16px 0 0', maxWidth: 420 }}>
              Tell us a little about your stack. A Miller³ specialist will scope your assessment and send back next steps within two business days.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 26 }}>
              <ReadinessRing value={82} size={64} dark />
              <div className="plex" style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', lineHeight: 1.4, maxWidth: 200 }}>
                Most Fast-Track customers score 80+ and go live in 45 days.
              </div>
            </div>
          </div>
          {/* form card */}
          <div style={{ position: 'relative', background: '#fff', borderRadius: 16, padding: 28 }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 12px' }}>
                <MarkThroughput size={56} theme="tile" />
                <h3 className="grotesk" style={{ fontSize: 24, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '20px 0 8px' }}>Request received.</h3>
                <p className="news" style={{ fontSize: 16, color: SLATE, lineHeight: 1.5, margin: 0 }}>
                  Thanks — a Miller³ specialist will be in touch within two business days.
                </p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
                    style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div><label style={labelS}>Full name</label><input style={field} placeholder="Jane Doe" required /></div>
                  <div><label style={labelS}>Work email</label><input style={field} type="email" placeholder="jane@org.gov" required /></div>
                </div>
                <div><label style={labelS}>Organization</label><input style={field} placeholder="Metro Transit Authority" required /></div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <label style={labelS}>Primary ERP</label>
                    <select style={field} defaultValue="">
                      <option value="" disabled>Select…</option>
                      {['SAP', 'Oracle', 'Workday', 'NetSuite', 'Coupa', 'Microsoft D365', 'Other'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelS}>Annual P2P spend</label>
                    <select style={field} defaultValue="">
                      <option value="" disabled>Select…</option>
                      {['< $50M', '$50M – $250M', '$250M – $1B', '> $1B'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>
                <button type="submit" className="grotesk"
                        style={{ width: '100%', justifyContent: 'center', display: 'inline-flex', alignItems: 'center', gap: 8,
                                 border: 'none', borderRadius: 8, background: RED, color: '#fff',
                                 padding: '15px 26px', fontSize: 15.5, fontWeight: 600, letterSpacing: '-0.01em',
                                 cursor: 'pointer', transition: 'transform 120ms ease, box-shadow 120ms ease' }}
                        onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(20,25,58,0.16)'; }}
                        onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                  Request my assessment →
                </button>
                <div className="plex" style={{ fontSize: 11, color: MUTED, textAlign: 'center', letterSpacing: '0.03em' }}>
                  No commitment. The assessment fee is credited toward deployment.
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

function App() {
  return (
    <div id="top">
      <Nav current="readiness" />
      <PageHero
        eyebrow="Data Readiness Assessment"
        title='Start with the <span style="color:#C32A2E">score.</span>'
        sub="Before any deployment, a two-week assessment tells you — honestly — whether your data can carry a P2P intelligence layer, and what it takes to get there."
        cta={<Button variant="primary" size="lg" href="#cta">Request a DRA →</Button>} />
      <Dimensions />
      <ReadinessShowcase />
      <Deliverables />
      <RequestForm />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
