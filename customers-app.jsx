// CUSTOMERS page.
const {
  Nav, Footer, Container, Section, Eyebrow, Button, SectionHead, PageHero, ReadinessRing, Spark,
  Outcomes, FinalCTA, MarkThroughput,
  SECTION_PAD, HEAD_GAP, GAP, bodyStyle, leadStyle, CARD, hoverLift,
  NAVY, NAVY_DEEP, NAVY_LO, RED, RED_SOFT, INK, SLATE, MUTED, SAND, CREAM, LINE, LINE2, OK,
} = window;

// ── Logo wall ────────────────────────────────────────────────────────────────
function LogoWall() {
  const logos = ['CITY OF DURHAM', 'CITY OF RALEIGH', 'CITY OF ASHEVILLE'];
  return (
    <section style={{ padding: '48px 0', borderBottom: `1px solid ${LINE}`, background: '#FFFBF4' }}>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, alignItems: 'center' }}>
          {logos.map(l => (
            <div key={l} className="grotesk" style={{ textAlign: 'center', fontSize: 15, color: SLATE,
                                                      fontWeight: 700, letterSpacing: '0.01em', opacity: 0.55 }}>{l}</div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ── Case study cards ─────────────────────────────────────────────────────────
function CaseStudies() {
  const cases = [
    {
      org: 'City of Raleigh', sector: 'Municipal · Finance',
      score: 82, initials: 'CR',
      challenge: 'An 18-day PO cycle no one could explain, across three disconnected systems.',
      result: 'Live in 41 days. Cycle time cut to 11.4 days; the bottleneck turned out to be a manual approval step P2P surfaced in week six.',
      metric: '−38%', metricLabel: 'PO cycle time',
    },
    {
      org: 'City of Durham', sector: 'Municipal · Procurement',
      score: 74, initials: 'CD',
      challenge: 'Off-contract spend was only visible at quarter-end — millions leaked before anyone noticed.',
      result: 'Standard-tier deployment with light remediation. Leakage alerts now fire the day spend goes off-contract.',
      metric: '$4.2M', metricLabel: 'leakage recovered / yr',
    },
    {
      org: 'City of Asheville', sector: 'Municipal · Finance',
      score: 88, initials: 'CA',
      challenge: 'Audit prep took weeks of manual reconciliation across procurement and AP.',
      result: 'Fast-Track go-live in 38 days. Every metric now carries lineage; audit evidence exports in minutes, not weeks.',
      metric: '94.6%', metricLabel: 'on-time payment',
    },
  ];
  return (
    <Section>
      <Container>
        <SectionHead center eyebrow="Case studies"
          title="The score, then the outcome."
          sub="Every story starts with a readiness number and ends with a metric that moved." />
        <div style={{ display: 'flex', flexDirection: 'column', gap: GAP, marginTop: HEAD_GAP }}>
          {cases.map((c, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 18, border: `1px solid ${LINE}`,
                                  display: 'grid', gridTemplateColumns: '200px 1fr 200px', overflow: 'hidden' }}>
              {/* left: identity + score */}
              <div style={{ background: NAVY_DEEP, color: '#fff', padding: 26, display: 'flex',
                            flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, textAlign: 'center' }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(255,255,255,0.10)',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 18 }}>{c.initials}</div>
                <div>
                  <div className="grotesk" style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.2 }}>{c.org}</div>
                  <div className="plex" style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4 }}>{c.sector}</div>
                </div>
                <ReadinessRing value={c.score} size={84} dark />
              </div>
              {/* middle: challenge + result */}
              <div style={{ padding: '28px 30px', display: 'flex', flexDirection: 'column', gap: 16, justifyContent: 'center' }}>
                <div>
                  <div className="plex" style={{ fontSize: 9.5, color: RED, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 5 }}>Challenge</div>
                  <p style={{ ...bodyStyle(15.5, INK), margin: 0 }}>{c.challenge}</p>
                </div>
                <div>
                  <div className="plex" style={{ fontSize: 9.5, color: OK, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 5 }}>Result</div>
                  <p style={{ ...bodyStyle(15.5, SLATE), margin: 0 }}>{c.result}</p>
                </div>
              </div>
              {/* right: headline metric */}
              <div style={{ borderLeft: `1px solid ${LINE}`, padding: 26, display: 'flex', flexDirection: 'column',
                            alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: SAND }}>
                <div className="grotesk" style={{ fontSize: 44, fontWeight: 700, color: RED, letterSpacing: '-0.04em', lineHeight: 1 }}>{c.metric}</div>
                <div className="plex" style={{ fontSize: 10.5, color: MUTED, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginTop: 8, maxWidth: 130 }}>{c.metricLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// ── Quote band ────────────────────────────────────────────────────────────────
function Quotes() {
  const quotes = [
    { q: 'We knew our PO cycle was slow. We didn\u2019t know where. P2P showed us in week six.', n: 'Renee Kwon', r: 'Finance Director · City of Raleigh', i: 'RK' },
    { q: 'The readiness score meant no surprises. We knew the timeline and the fee before we signed.', n: 'Marcus Bell', r: 'Procurement Director · City of Durham', i: 'MB' },
    { q: 'Audit prep went from three weeks to an afternoon. The lineage is all there.', n: 'Dana Ortiz', r: 'Controller · City of Asheville', i: 'DO' },
  ];
  return (
    <Section alt>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: GAP }}>
          {quotes.map((qt, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 16, border: `1px solid ${LINE}`, padding: 28,
                                  display: 'flex', flexDirection: 'column', gap: 18 }}>
              <MarkThroughput size={32} theme="tile" />
              <blockquote className="news" style={{ fontSize: 18, color: INK, lineHeight: 1.4, margin: 0, fontStyle: 'italic', fontWeight: 500, flex: 1 }}>
                “{qt.q}”
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                <div style={{ width: 38, height: 38, borderRadius: '50%', background: NAVY, color: '#fff',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 13 }}>{qt.i}</div>
                <div>
                  <div className="grotesk" style={{ fontSize: 14, fontWeight: 700, color: INK, letterSpacing: '-0.01em' }}>{qt.n}</div>
                  <div className="plex" style={{ fontSize: 10.5, color: MUTED, letterSpacing: '0.06em' }}>{qt.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function App() {
  return (
    <div id="top">
      <Nav current="customers" />
      <PageHero
        eyebrow="Customers"
        title='Discipline, <span style="color:#C32A2E">deployed.</span>'
        sub="Public-sector finance teams and procurement leaders use P2P to see their pipeline, recover leakage, and stay audit-ready."
        cta={<Button variant="primary" size="lg" href="readiness.html">Start your assessment →</Button>} />
      <LogoWall />
      <Outcomes />
      <CaseStudies />
      <Quotes />
      <FinalCTA />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
