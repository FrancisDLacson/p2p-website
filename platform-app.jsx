// PLATFORM page.
const {
  Nav, Footer, Container, Section, Eyebrow, Button, SectionHead, PageHero, ProductGlass, ChevTick,
  Features, ReadinessShowcase, ProductSection, Outcomes, FinalCTA, MarkThroughput, P2P,
  SECTION_PAD, HEAD_GAP, GAP, bodyStyle, leadStyle, CARD, hoverLift,
  NAVY, NAVY_DEEP, NAVY_LO, NAVY_50, RED, RED_SOFT, INK, SLATE, MUTED, SAND, CREAM, LINE, LINE2, OK,
} = window;

// ── Architecture: sits beside your ERP ───────────────────────────────────────
function Architecture() {
  const sources = ['SAP', 'Oracle', 'Workday', 'NetSuite', 'Coupa', 'D365'];
  const outputs = [
    { t: 'Readiness score', d: 'Live, monitored' },
    { t: 'Pipeline view', d: 'Req → PO → invoice → pay' },
    { t: 'Alerts & playbooks', d: 'Leakage, risk, renewals' },
  ];
  return (
    <Section alt>
      <Container>
        <SectionHead center eyebrow="Architecture"
          title="Read-only in. Intelligence out."
          sub="P2P never becomes your system of record. It reads from the systems you already run and returns intelligence you can act on." />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1.1fr auto 1fr', gap: 20, alignItems: 'center', marginTop: HEAD_GAP }}>
          {/* sources */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div className="plex" style={{ fontSize: 10, color: MUTED, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 4 }}>Your sources</div>
            {sources.map(s => (
              <div key={s} style={{ background: '#fff', border: `1px solid ${LINE}`, borderRadius: 8, padding: '10px 14px',
                                    fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 14, color: SLATE }}>{s}</div>
            ))}
          </div>
          {/* arrow */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <ChevTick color={NAVY_50} size={22} />
            <div className="plex" style={{ fontSize: 8.5, color: MUTED, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, writingMode: 'vertical-rl' }}>read-only</div>
          </div>
          {/* core */}
          <div style={{ background: NAVY_DEEP, borderRadius: 16, padding: '28px 22px', color: '#fff', textAlign: 'center',
                        boxShadow: '0 24px 50px rgba(20,25,58,0.25)' }}>
            <MarkThroughput size={56} theme="dark" />
            <P2P size={30} fg="#fff" accent={RED_SOFT} weight={700} />
            <div className="plex" style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600, marginTop: 8 }}>
              Unified data model + intelligence
            </div>
          </div>
          {/* arrow */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <ChevTick color={RED} size={22} />
            <div className="plex" style={{ fontSize: 8.5, color: MUTED, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, writingMode: 'vertical-rl' }}>intelligence</div>
          </div>
          {/* outputs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div className="plex" style={{ fontSize: 10, color: MUTED, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 4 }}>What you get</div>
            {outputs.map(o => (
              <div key={o.t} style={{ background: '#fff', border: `1px solid ${LINE}`, borderLeft: `3px solid ${RED}`, borderRadius: 8, padding: '10px 14px' }}>
                <div className="grotesk" style={{ fontWeight: 700, fontSize: 14, color: INK, letterSpacing: '-0.01em' }}>{o.t}</div>
                <div className="plex" style={{ fontSize: 11, color: MUTED, marginTop: 1 }}>{o.d}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function App() {
  return (
    <div id="top">
      <Nav current="platform" />
      <PageHero
        eyebrow="The platform"
        title='An intelligence layer over your <span style="color:#C32A2E">P2P stack.</span>'
        sub="Six capabilities that turn the procurement and AP data you already have into decisions — without replacing your ERP."
        cta={<>
          <Button variant="primary" size="lg" href="readiness.html">Request a readiness assessment →</Button>
          <Button variant="ghost" size="lg" href="pricing.html">See pricing</Button>
        </>}
      />
      <Features />
      <Architecture />
      <ReadinessShowcase />
      <ProductSection />
      <Outcomes />
      <FinalCTA />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
