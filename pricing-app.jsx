// PRICING page.
const {
  Nav, Footer, Container, Section, Eyebrow, Button, SectionHead, PageHero, ChevTick,
  FinalCTA, MarkThroughput,
  SECTION_PAD, HEAD_GAP, GAP, bodyStyle, leadStyle, CARD, hoverLift,
  NAVY, NAVY_DEEP, NAVY_LO, RED, RED_SOFT, INK, SLATE, MUTED, SAND, CREAM, LINE, LINE2, OK,
} = window;

// ── Three commercial stages ──────────────────────────────────────────────────
function Plans() {
  const plans = [
    {
      name: 'Assess', tag: 'Start here', price: 'Fixed fee', unit: 'from $18k',
      desc: 'A Data Readiness Assessment. Score your sources, set the tier, get a fixed-fee path to go-live.',
      features: ['2-week engagement', 'Source-by-source scoring', 'Readiness report + tier', 'Fixed-fee deployment quote', 'Credited toward Deploy'],
      cta: 'Request a DRA', href: 'readiness.html', accent: false,
    },
    {
      name: 'Deploy', tag: 'Most popular', price: 'Fixed fee', unit: 'by readiness tier',
      desc: 'The 45-day implementation. Connect sources, build the model, validate, and go live.',
      features: ['45-day go-live (Fast-Track)', 'Read-only ERP connectors', 'Unified P2P data model', 'Dashboards + alerts + playbooks', 'Reconciled against your ERP', 'Team enablement'],
      cta: 'Talk to the team', href: '#', accent: true,
    },
    {
      name: 'Operate', tag: 'Ongoing', price: 'Annual', unit: 'by data scale',
      desc: 'The platform subscription. Live intelligence, monitoring, and support, priced to your volume.',
      features: ['Live readiness monitoring', 'Unlimited dashboards & users', 'Anomaly & leakage alerts', 'Quarterly business reviews', 'Audit-grade controls & lineage', 'SLA-backed support'],
      cta: 'Get a quote', href: '#', accent: false,
    },
  ];
  return (
    <Section>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: GAP, alignItems: 'stretch' }}>
          {plans.map((p, i) => (
            <div key={i} style={{ background: p.accent ? NAVY_DEEP : '#fff', color: p.accent ? '#fff' : INK,
                                  borderRadius: 18, border: `1px solid ${p.accent ? 'transparent' : LINE}`,
                                  padding: 30, display: 'flex', flexDirection: 'column',
                                  boxShadow: p.accent ? '0 30px 60px rgba(20,25,58,0.28)' : 'none',
                                  position: 'relative', transform: p.accent ? 'translateY(-8px)' : 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className="grotesk" style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em' }}>{p.name}</div>
                <span className="plex" style={{ fontSize: 9.5, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700,
                                                 color: p.accent ? RED_SOFT : RED,
                                                 background: p.accent ? 'rgba(216,106,109,0.16)' : 'rgba(195,42,46,0.10)',
                                                 padding: '4px 9px', borderRadius: 999 }}>{p.tag}</span>
              </div>
              <div style={{ marginTop: 16, display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span className="grotesk" style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.03em' }}>{p.price}</span>
                <span className="plex" style={{ fontSize: 13, color: p.accent ? 'rgba(255,255,255,0.6)' : MUTED, fontWeight: 600 }}>{p.unit}</span>
              </div>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 15, lineHeight: 1.55, fontWeight: 450, margin: '12px 0 20px',
                          color: p.accent ? 'rgba(255,255,255,0.8)' : SLATE }}>{p.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 11, flex: 1 }}>
                {p.features.map(f => (
                  <li key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ flexShrink: 0, marginTop: 2 }}><ChevTick color={p.accent ? RED_SOFT : RED} size={15} /></span>
                    <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13.5, lineHeight: 1.4, fontWeight: 500,
                                    color: p.accent ? 'rgba(255,255,255,0.92)' : INK }}>{f}</span>
                  </li>
                ))}
              </ul>
              <Button variant={p.accent ? 'accent' : 'primary'} size="md" href={p.href}
                      style={{ width: '100%', justifyContent: 'center' }}>{p.cta}</Button>
            </div>
          ))}
        </div>
        <div className="plex" style={{ textAlign: 'center', fontSize: 12, color: MUTED, marginTop: 24, letterSpacing: '0.04em' }}>
          All engagements begin with a Data Readiness Assessment. Deploy and Operate fees are quoted from your readiness tier.
        </div>
      </Container>
    </Section>
  );
}

// ── What's included comparison ───────────────────────────────────────────────
function Comparison() {
  const rows = [
    ['Readiness scoring', 'Assess', 'Deploy', 'Operate'],
    ['Source connectors', '—', '✓', '✓'],
    ['Unified data model', '—', '✓', '✓'],
    ['Dashboards & pipeline view', '—', '✓', '✓'],
    ['Alerts & playbooks', '—', '✓', '✓'],
    ['Live readiness monitoring', '—', '—', '✓'],
    ['Quarterly business reviews', '—', '—', '✓'],
    ['SLA-backed support', '—', '—', '✓'],
  ];
  return (
    <Section alt>
      <Container style={{ maxWidth: 880 }}>
        <SectionHead center eyebrow="What's included" title="Three stages, one path." />
        <div style={{ marginTop: HEAD_GAP, background: '#fff', borderRadius: 16, border: `1px solid ${LINE}`, overflow: 'hidden' }}>
          {rows.map((r, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
                                  borderTop: i ? `1px solid ${LINE}` : 'none',
                                  background: i === 0 ? SAND : '#fff' }}>
              {r.map((cell, j) => {
                const head = i === 0;
                const yes = cell === '✓';
                return (
                  <div key={j} style={{ padding: '13px 18px', textAlign: j === 0 ? 'left' : 'center',
                                        fontFamily: head ? "'Space Grotesk', sans-serif" : "'Manrope', sans-serif",
                                        fontSize: head ? 13 : 13.5, fontWeight: head ? 700 : (j === 0 ? 600 : 700),
                                        letterSpacing: head ? '0.02em' : '0',
                                        color: head ? INK : (j === 0 ? INK : (yes ? OK : MUTED)) }}>
                    {cell}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────────────
function FAQ() {
  const qs = [
    ['Why does pricing depend on a readiness score?', 'Because the score tells us the real cost of getting you live. Pricing the risk up front is how we can commit to a fixed fee and a 45-day timeline instead of an open-ended project.'],
    ['Is the assessment fee wasted if we don\u2019t proceed?', 'No — the DRA fee is credited toward your Deploy engagement if you move forward, and you keep the readiness report either way.'],
    ['Do we need to replace our ERP?', 'Never. P2P reads from SAP, Oracle, Workday, NetSuite, Coupa, or D365 and sits beside them. Your system of record does not change.'],
    ['What if we score below Fast-Track?', 'You get a clear remediation path and a Foundational or Standard timeline. We will not promise 45 days for data that is not ready.'],
    ['How is Operate priced?', 'Annually, by data scale (sources, transaction volume, users). You get a fixed quote from your readiness profile — no per-seat surprises.'],
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <Section>
      <Container style={{ maxWidth: 820 }}>
        <SectionHead center eyebrow="Questions" title="Pricing, answered." />
        <div style={{ marginTop: HEAD_GAP, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {qs.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ background: '#fff', borderRadius: 12, border: `1px solid ${LINE}`, overflow: 'hidden' }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)}
                        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                 gap: 16, padding: '18px 22px', background: 'none', border: 'none', textAlign: 'left' }}>
                  <span className="grotesk" style={{ fontSize: 16.5, fontWeight: 700, color: INK, letterSpacing: '-0.015em' }}>{q}</span>
                  <span style={{ fontSize: 22, color: RED, lineHeight: 1, transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform 160ms ease' }}>+</span>
                </button>
                {isOpen && (
                  <div style={{ ...bodyStyle(15.5, SLATE), padding: '0 22px 20px', maxWidth: 680 }}>{a}</div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

function App() {
  return (
    <div id="top">
      <Nav current="pricing" />
      <PageHero
        eyebrow="Pricing"
        title='Priced to the risk <span style="color:#C32A2E">we can see.</span>'
        sub="Every engagement starts with a readiness score — so your timeline and your fee are set before you commit, not discovered along the way." />
      <Plans />
      <Comparison />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
