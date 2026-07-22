// ABOUT page.
const {
  Nav, Footer, Container, Section, Eyebrow, Button, SectionHead, PageHero,
  ReadinessRing, FinalCTA, MarkThroughput, P2P, ChevTick,
  SECTION_PAD, HEAD_GAP, GAP, bodyStyle, leadStyle, CARD, hoverLift,
  NAVY, NAVY_DEEP, NAVY_LO, NAVY_50, RED, RED_SOFT, INK, SLATE, MUTED, SAND, CREAM, LINE, LINE2, OK,
} = window;

// ── The story ────────────────────────────────────────────────────────────────
function Story() {
  return (
    <Section>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 56, alignItems: 'start' }}>
          <SectionHead eyebrow="Our story" title="Built from a hundred procurement engagements." />
          <div>
            <p style={{ ...leadStyle(20, INK), margin: 0 }}>
              Miller³ Consulting spent years walking into the same room: a finance team that knew its
              procure-to-pay process was leaking time and money, and an ERP that could prove every
              transaction but explain none of them.
            </p>
            <p style={{ ...bodyStyle(16.5, SLATE), margin: '18px 0 0' }}>
              We kept building the same intelligence layer by hand — scoring data readiness, joining
              procurement, contracts, and AP, and standing up the dashboards that finally made the
              pipeline legible. P2P is that work, productized: the disciplined method we ran on
              engagement after engagement, now a platform any team can deploy in 45 days.
            </p>
            <p style={{ ...bodyStyle(16.5, SLATE), margin: '16px 0 0' }}>
              It stays true to how Miller³ works — we price the risk before we promise a date, we sit
              beside your systems instead of replacing them, and we never ship a number we can't trace.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// ── Principles ───────────────────────────────────────────────────────────────
function Principles() {
  const items = [
    { t: 'Score before you sign', d: 'A readiness assessment opens every engagement. We earn the date and the fee with evidence, not optimism.' },
    { t: 'Sit beside, never replace', d: 'Your ERP stays your system of record. P2P reads from it and returns intelligence — nothing to rip out.' },
    { t: 'Lineage or it didn\u2019t happen', d: 'Every metric carries its source. If we can\u2019t trace it back to the row, we don\u2019t put it on the dashboard.' },
    { t: 'Discipline you can measure', d: 'Cycle time, leakage, on-time payment — we hold ourselves to the same numbers we put in front of you.' },
  ];
  return (
    <Section alt>
      <Container>
        <SectionHead center eyebrow="What we believe"
          title="Four principles, on every engagement."
          sub="They predate the platform. P2P just makes them repeatable." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: GAP, marginTop: HEAD_GAP }}>
          {items.map((it, i) => (
            <div key={i} style={{ ...CARD, padding: 30, display: 'flex', gap: 18, alignItems: 'flex-start',
                                  transition: 'transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease' }} {...hoverLift}>
              <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 10, background: SAND,
                            display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ChevTick color={RED} size={20} />
              </div>
              <div>
                <h3 className="grotesk" style={{ fontSize: 19, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '2px 0 8px' }}>{it.t}</h3>
                <p style={{ ...bodyStyle(15, SLATE), margin: 0 }}>{it.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// ── Firm by the numbers ──────────────────────────────────────────────────────
function ByTheNumbers() {
  const stats = [
    { v: '12', u: 'yrs', l: 'Miller³ in procurement & finance advisory' },
    { v: '140+', u: '', l: 'P2P engagements delivered' },
    { v: '6', u: 'ERPs', l: 'Supported out of the box' },
    { v: '45', u: 'days', l: 'Typical kickoff to go-live' },
  ];
  return (
    <section style={{ background: NAVY_DEEP, color: '#fff', padding: `clamp(64px, 7vw, 88px) 0`, position: 'relative', overflow: 'hidden' }}>
      <svg width="100%" height="100%" viewBox="0 0 1200 300" preserveAspectRatio="none"
           style={{ position: 'absolute', inset: 0, opacity: 0.08 }}>
        {[0,1,2,3,4,5].map(i => (
          <path key={i} d={`M -50 ${60+i*44} C 250 ${30+i*44}, 450 ${90+i*44}, 700 ${60+i*44} S 1150 ${30+i*44}, 1300 ${60+i*44}`}
                fill="none" stroke={RED} strokeWidth="3" />
        ))}
      </svg>
      <Container style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <Eyebrow center color={RED_SOFT}>The firm</Eyebrow>
          <h2 className="grotesk" style={{ fontSize: 'clamp(28px,3.4vw,40px)', fontWeight: 700,
                                            letterSpacing: '-0.03em', margin: '12px 0 0' }}>
            Miller³, by the numbers.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: 'center', borderLeft: i ? '1px solid rgba(255,255,255,0.14)' : 'none' }}>
              <div className="grotesk" style={{ fontSize: 'clamp(38px,4.6vw,58px)', fontWeight: 700,
                                                 letterSpacing: '-0.04em', lineHeight: 1 }}>
                {s.v}<span style={{ fontSize: '0.4em', color: RED_SOFT, marginLeft: 4 }}>{s.u}</span>
              </div>
              <div className="plex" style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', lineHeight: 1.45,
                                              marginTop: 14, maxWidth: 200, marginLeft: 'auto', marginRight: 'auto', fontWeight: 500 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ── Endorsement / parent relationship ────────────────────────────────────────
function Endorsed() {
  return (
    <Section>
      <Container style={{ maxWidth: 900 }}>
        <div style={{ ...CARD, padding: 'clamp(32px, 5vw, 56px)', display: 'flex', gap: 36, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
            <MarkThroughput size={96} theme="tile" />
            <div className="plex" style={{ fontSize: 9.5, color: MUTED, letterSpacing: '0.24em', textTransform: 'uppercase', fontWeight: 700 }}>A Miller³ Platform</div>
          </div>
          <div style={{ flex: 1, minWidth: 280 }}>
            <h2 className="grotesk" style={{ fontSize: 'clamp(24px,2.8vw,32px)', fontWeight: 700, color: INK, letterSpacing: '-0.025em', margin: 0, lineHeight: 1.1 }}>
              An endorsed platform, not a side project.
            </h2>
            <p style={{ ...bodyStyle(16, SLATE), margin: '14px 0 0' }}>
              P2P is owned and operated by Miller³ Consulting. The same people who advise on your
              procurement transformation stand behind the software — so the platform and the engagement
              are never working from different playbooks.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 22, flexWrap: 'wrap' }}>
              <Button variant="primary" size="md" href="readiness.html">Request a readiness assessment →</Button>
              <Button variant="ghost" size="md" href="customers.html">See customer results</Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function App() {
  return (
    <div id="top">
      <Nav current="about" />
      <PageHero
        eyebrow="About"
        title='The firm behind the <span style="color:#C32A2E">platform.</span>'
        sub="P2P is the productized method of Miller³ Consulting — built from years of untangling procure-to-pay, now deployable in 45 days."
        cta={<Button variant="primary" size="lg" href="readiness.html">Start a readiness assessment →</Button>} />
      <Story />
      <Principles />
      <ByTheNumbers />
      <Endorsed />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
