// Marketing site sections for P2P · Procure-to-Pay Intelligence System.

const {
  P2P, P2P_IS, FullName, Endorsement, MarkThroughput,
  Container, Section, Eyebrow, Button, SectionHead, ReadinessRing, Spark, ProductGlass, OK,
  SECTION_PAD, HEAD_GAP, GAP, bodyStyle, leadStyle, CARD, hoverLift,
  NAVY, NAVY_DEEP, NAVY_LO, NAVY_50, RED, RED_SOFT, INK, SLATE, MUTED, SAND, CREAM, LINE, LINE2,
} = window;

// Tiny inline chevron pair (echo of the mark) for accents
function ChevTick({ color = RED, size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 5 L13 12 L6 19" />
      <path d="M13 5 L20 12 L13 19" opacity="0.5" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// HERO
// ═══════════════════════════════════════════════════════════════════════════
function Hero() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden',
                      background: 'radial-gradient(1150px 640px at 82% -6%, rgba(195,42,46,0.06), transparent 60%)' }}>
      <Container style={{ paddingTop: 92, paddingBottom: 104 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 56, alignItems: 'center' }}>
          {/* left */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(195,42,46,0.09)',
                          color: RED, borderRadius: 999, padding: '7px 14px', fontWeight: 700, fontSize: 11.5,
                          letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif",
                          whiteSpace: 'nowrap' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: RED }} />
              45-day deployment · go-live guaranteed
            </div>
            <h1 className="grotesk" style={{ fontSize: 'clamp(42px, 5.4vw, 70px)', fontWeight: 700, color: INK,
                                              letterSpacing: '-0.042em', lineHeight: 0.98, margin: '22px 0 0' }}>
              Intelligence for the<br /><span style={{ color: RED }}>procure-to-pay</span> lifecycle.
            </h1>
            <p style={{ ...leadStyle(21, SLATE), margin: '24px 0 0', maxWidth: 520 }}>
              P2P is the platform Miller³ deploys to score readiness, unify procurement and AP data,
              and run a disciplined intelligence layer over your existing ERP — without replacing
              anything you already own.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
              <Button variant="primary" size="lg" href="#cta">Start a readiness assessment →</Button>
              <Button variant="accent" size="lg" href="#cta">Schedule a demo →</Button>
              <Button variant="ghost" size="lg" href="#video">Watch the 2-min tour</Button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 38,
                          paddingTop: 24, borderTop: `1px solid ${LINE}`, flexWrap: 'wrap' }}>
              <Eyebrow color={MUTED}>Deployed across</Eyebrow>
              <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                {['CITY OF DURHAM', 'CITY OF RALEIGH', 'CITY OF ASHEVILLE'].map(l => (
                  <span key={l} className="grotesk" style={{ fontSize: 12, color: SLATE, fontWeight: 700,
                                                              letterSpacing: '0.02em', opacity: 0.62 }}>{l}</span>
                ))}
              </div>
            </div>
          </div>
          {/* right — product glass + floating chip */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <ProductGlass />
            <div style={{ position: 'absolute', bottom: -20, left: 0, background: '#fff', borderRadius: 14,
                          padding: '13px 16px', boxShadow: '0 18px 44px rgba(20,25,58,0.18)',
                          display: 'flex', alignItems: 'center', gap: 12, border: `1px solid ${LINE}` }}>
              <MarkThroughput size={38} theme="tile" />
              <div>
                <div className="grotesk" style={{ fontSize: 13, color: INK, fontWeight: 700, letterSpacing: '-0.01em' }}>
                  Fast-Track lane ✓
                </div>
                <div className="plex" style={{ fontSize: 9.5, color: MUTED, letterSpacing: '0.06em', marginTop: 1 }}>
                  Readiness 82 · cleared in 9 days
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// TRUST BAR
// ═══════════════════════════════════════════════════════════════════════════
function TrustBar() {
  return (
    <section style={{ borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}`, background: '#FFFBF4' }}>
      <Container style={{ paddingTop: 24, paddingBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      gap: 24, flexWrap: 'wrap' }}>
          <div className="plex" style={{ fontSize: 10.5, color: MUTED, letterSpacing: '0.16em',
                                          textTransform: 'uppercase', fontWeight: 700 }}>
            Sits on top of the ERP you already run
          </div>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'center' }}>
            {['SAP', 'Oracle', 'Workday', 'NetSuite', 'Coupa', 'Microsoft D365'].map(l => (
              <span key={l} className="grotesk" style={{ fontSize: 15, color: SLATE, fontWeight: 700,
                                                          letterSpacing: '-0.01em', opacity: 0.5 }}>{l}</span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// PROBLEM
// ═══════════════════════════════════════════════════════════════════════════
function Problem() {
  const items = [
    { stat: '60%+', label: 'of P2P data lives in disconnected systems no one can join cleanly.' },
    { stat: '11–18d', label: 'typical PO cycle time, with no live view into where the delay sits.' },
    { stat: '5–9%', label: 'of spend leaks off-contract because nobody sees it until quarter-end.' },
  ];
  return (
    <Section>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <SectionHead
            eyebrow="The P2P gap"
            title="Your ERP records the transaction. It doesn't tell you the story."
            sub="Procurement, contracts, and AP each hold a piece of the truth — but the gaps between them are where cycle time, leakage, and risk hide. P2P closes those gaps." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {items.map((it, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 22, ...CARD, padding: '22px 26px' }}>
                <div className="grotesk" style={{ fontSize: 40, fontWeight: 700, color: RED,
                                                   letterSpacing: '-0.035em', minWidth: 116, lineHeight: 1 }}>{it.stat}</div>
                <div style={{ ...bodyStyle(15.5, SLATE) }}>{it.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// HOW IT WORKS — three steps
// ═══════════════════════════════════════════════════════════════════════════
function HowItWorks() {
  const steps = [
    { n: '01', title: 'Assess readiness', t: '~2 weeks',
      body: 'A Data Readiness Assessment scores your sources across access, joinability, and KPI coverage — and tells you, honestly, whether you can go live in 45 days.' },
    { n: '02', title: 'Unify your data', t: '~3 weeks',
      body: 'We connect procurement, contracts, and AP into one structured model that sits beside your ERP. No rip-and-replace. Your system of record stays exactly where it is.' },
    { n: '03', title: 'Operate with intelligence', t: 'Day 45+',
      body: 'Live readiness, cycle time, leakage, and vendor risk — plus the alerts and playbooks that turn the numbers into action across your team.' },
  ];
  return (
    <Section alt>
      <Container>
        <SectionHead center eyebrow="How it works"
          title="From data chaos to live intelligence in 45 days."
          sub="A disciplined three-step path — the same method Miller³ runs on every engagement." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: GAP, marginTop: HEAD_GAP }}>
          {steps.map((s, i) => (
            <div key={i} style={{ ...CARD, padding: 30, transition: 'transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease' }} {...hoverLift}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className="mono" style={{ fontSize: 13, color: RED, fontWeight: 700 }}>{s.n}</div>
                <div className="plex" style={{ fontSize: 10, color: MUTED, letterSpacing: '0.12em',
                                                textTransform: 'uppercase', fontWeight: 700,
                                                background: SAND, padding: '5px 10px', borderRadius: 999 }}>{s.t}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 20 }}>
                <ChevTick color={RED} size={18} />
                <h3 className="grotesk" style={{ fontSize: 21, fontWeight: 700, color: INK,
                                                  letterSpacing: '-0.02em', margin: 0 }}>{s.title}</h3>
              </div>
              <p style={{ ...bodyStyle(15, SLATE), margin: '12px 0 0' }}>{s.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// READINESS SHOWCASE — the signature artifact
// ═══════════════════════════════════════════════════════════════════════════
function ReadinessShowcase() {
  const tiers = [
    { score: '80–100', name: 'Fast-Track', desc: 'Go live in 45 days. Fixed-fee.', c: RED },
    { score: '60–79', name: 'Standard', desc: 'Light remediation, then deploy.', c: NAVY },
    { score: '40–59', name: 'Foundational', desc: 'Data groundwork first.', c: NAVY_50 },
    { score: '<40', name: 'Pre-readiness', desc: 'Advisory engagement.', c: MUTED },
  ];
  return (
    <Section>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 56, alignItems: 'center' }}>
          {/* left — big ring */}
          <div style={{ background: NAVY_DEEP, borderRadius: 26, padding: '52px 40px', color: '#fff',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22,
                        position: 'relative', overflow: 'hidden' }}>
            <svg width="200" height="120" viewBox="0 0 200 120" style={{ position: 'absolute', top: -8, right: -16, opacity: 0.14 }}>
              {[0,1,2,3].map(i => (
                <path key={i} d={`M -10 ${24 + i*22} C 40 ${12+i*22}, 70 ${36+i*22}, 110 ${24+i*22} S 180 ${12+i*22}, 220 ${24+i*22}`}
                      fill="none" stroke={RED} strokeWidth="2.5" />
              ))}
            </svg>
            <ReadinessRing value={82} size={190} dark />
            <div style={{ textAlign: 'center' }}>
              <div className="plex" style={{ fontSize: 10.5, color: RED_SOFT, letterSpacing: '0.2em',
                                              textTransform: 'uppercase', fontWeight: 700 }}>Your P2P Readiness Score</div>
              <div style={{ ...leadStyle(16, 'rgba(255,255,255,0.78)'), marginTop: 8, fontStyle: 'italic' }}>
                One number that decides your path, your timeline, and your price.
              </div>
            </div>
          </div>
          {/* right */}
          <div>
            <SectionHead eyebrow="The readiness score"
              title="We price the risk before you sign — not after."
              sub="Every engagement opens with a Data Readiness Assessment. The score isn't theater; it sets your tier, your timeline, and your fixed fee. If you're not ready, we tell you." />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 28 }}>
              {tiers.map((t, i) => (
                <div key={i} style={{ ...CARD, padding: '16px 18px', borderLeft: `3px solid ${t.c}` }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                    <span className="grotesk" style={{ fontSize: 17, fontWeight: 700, color: INK, letterSpacing: '-0.02em' }}>{t.name}</span>
                    <span className="mono" style={{ fontSize: 11, color: t.c, fontWeight: 700 }}>{t.score}</span>
                  </div>
                  <div style={{ ...bodyStyle(13.5, SLATE), marginTop: 4 }}>{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// FEATURES GRID
// ═══════════════════════════════════════════════════════════════════════════
function Features() {
  const feats = [
    { icon: 'ring', title: 'Live readiness monitoring', body: 'The score keeps moving after go-live — so data drift surfaces before it becomes a problem.' },
    { icon: 'flow', title: 'Pipeline observability', body: 'Watch spend move from requisition to PO to invoice to payment, with cycle time at every hop.' },
    { icon: 'shield', title: 'Off-contract leakage alerts', body: 'Catch maverick spend the day it happens, not at the quarterly review.' },
    { icon: 'vendor', title: 'Vendor risk signals', body: 'Late-payment trends, concentration risk, and renewal windows — ranked and explained.' },
    { icon: 'plug', title: 'Sits beside your ERP', body: 'Read-only connectors to SAP, Oracle, Workday, NetSuite, Coupa and D365. Nothing to rip out.' },
    { icon: 'lock', title: 'Audit-grade controls', body: 'Row-level access, full lineage, and exportable evidence for finance and compliance.' },
  ];
  const Icon = ({ name }) => {
    const common = { width: 26, height: 26, viewBox: '0 0 24 24', fill: 'none', stroke: NAVY, strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
    const paths = {
      ring: <><circle cx="12" cy="12" r="8" /><path d="M12 4 A8 8 0 0 1 19 9" stroke={RED} /></>,
      flow: <><path d="M5 6 L10 12 L5 18" /><path d="M12 6 L17 12 L12 18" stroke={RED} /></>,
      shield: <><path d="M12 3 L19 6 V11 C19 16 15 19 12 21 C9 19 5 16 5 11 V6 Z" /><path d="M9 12 l2 2 l4 -4" stroke={RED} /></>,
      vendor: <><circle cx="9" cy="8" r="3" /><path d="M4 20 C4 16 6 14 9 14 C12 14 14 16 14 20" /><circle cx="17" cy="10" r="2" stroke={RED} /></>,
      plug: <><path d="M9 3 V8 M15 3 V8" /><path d="M6 8 H18 V12 A6 6 0 0 1 6 12 Z" /><path d="M12 18 V21" stroke={RED} /></>,
      lock: <><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11 V8 A4 4 0 0 1 16 8 V11" stroke={RED} /></>,
    };
    return <svg {...common}>{paths[name]}</svg>;
  };
  return (
    <Section id="platform" alt>
      <Container>
        <SectionHead center eyebrow="The platform"
          title="An intelligence layer, not another system of record."
          sub="Six capabilities that turn your existing P2P data into decisions." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: GAP, marginTop: HEAD_GAP }}>
          {feats.map((f, i) => (
            <div key={i} style={{ ...CARD, padding: 30, transition: 'transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease' }} {...hoverLift}>
              <div style={{ width: 52, height: 52, borderRadius: 12, background: SAND,
                            display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <Icon name={f.icon} />
              </div>
              <h3 className="grotesk" style={{ fontSize: 18.5, fontWeight: 700, color: INK, letterSpacing: '-0.015em', margin: '0 0 9px' }}>{f.title}</h3>
              <p style={{ ...bodyStyle(15, SLATE), margin: 0 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// PRODUCT SECTION — big dashboard
// ═══════════════════════════════════════════════════════════════════════════
function ProductSection() {
  const points = [
    'One screen for readiness, cycle time, leakage, and vendor risk',
    'Drill from a portfolio number to a single invoice in two clicks',
    'Every metric carries its lineage — defensible in an audit',
  ];
  return (
    <Section id="product">
      <Container>
        <SectionHead center eyebrow="Inside the product"
          title="The whole procure-to-pay picture, live."
          sub="Built for the people who run procurement and AP — and the executives who answer for them." />
        <div style={{ marginTop: 48, display: 'flex', justifyContent: 'center' }}>
          <div style={{ transform: 'scale(1.18)', transformOrigin: 'top center', paddingBottom: 86 }}>
            <ProductGlass />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: GAP, marginTop: 8 }}>
          {points.map((p, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ flexShrink: 0, marginTop: 3 }}><ChevTick color={RED} size={18} /></span>
              <span style={{ ...bodyStyle(16, SLATE) }}>{p}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// OUTCOMES — navy stat band
// ═══════════════════════════════════════════════════════════════════════════
function Outcomes() {
  const stats = [
    { v: '45', u: 'days', l: 'From kickoff to live intelligence' },
    { v: '−32%', u: '', l: 'Average PO cycle-time reduction' },
    { v: '$4.2M', u: '', l: 'Median annual leakage recovered' },
    { v: '94.6%', u: '', l: 'On-time payment, post-deployment' },
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
          <Eyebrow center color={RED_SOFT}>What customers see</Eyebrow>
          <h2 className="grotesk" style={{ fontSize: 'clamp(28px,3.4vw,40px)', fontWeight: 700,
                                            letterSpacing: '-0.03em', margin: '12px 0 0' }}>
            Discipline you can measure.
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
                                              marginTop: 14, maxWidth: 200, marginLeft: 'auto', marginRight: 'auto',
                                              fontWeight: 500 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// DEPLOYMENT PROMISE
// ═══════════════════════════════════════════════════════════════════════════
function Deployment() {
  const weeks = [
    { w: 'Week 1–2', t: 'Readiness assessment', d: 'Score sources, set the tier and the fee.' },
    { w: 'Week 3–5', t: 'Connect & model', d: 'Read-only connectors, unified data model.' },
    { w: 'Week 6', t: 'Validate', d: 'Reconcile against your ERP, tune KPIs.' },
    { w: 'Day 45', t: 'Go live', d: 'Dashboards, alerts, and playbooks — live.' },
  ];
  return (
    <Section alt>
      <Container>
        <SectionHead eyebrow="The 45-day promise"
          title="A fixed timeline, because we priced the risk up front."
          sub="The readiness score lets us commit to a date and a number. Fast-Track engagements go live in 45 days — or we keep working at our cost until they do." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, marginTop: HEAD_GAP }}>
          {weeks.map((wk, i) => (
            <div key={i} style={{ padding: '0 18px', position: 'relative' }}>
              <div style={{ height: 3, background: i === 3 ? RED : NAVY, borderRadius: 2 }} />
              <div style={{ position: 'absolute', top: -4, left: 18, width: 11, height: 11, borderRadius: '50%',
                            background: i === 3 ? RED : NAVY, border: '2px solid #FFFBF4' }} />
              <div className="mono" style={{ fontSize: 11, color: i === 3 ? RED : MUTED, fontWeight: 700, marginTop: 16 }}>{wk.w}</div>
              <h3 className="grotesk" style={{ fontSize: 17, fontWeight: 700, color: INK, letterSpacing: '-0.015em', margin: '6px 0 6px' }}>{wk.t}</h3>
              <p style={{ ...bodyStyle(14, SLATE), margin: 0 }}>{wk.d}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// TESTIMONIAL
// ═══════════════════════════════════════════════════════════════════════════
function Testimonial() {
  return (
    <Section>
      <Container style={{ maxWidth: 900 }}>
        <div style={{ textAlign: 'center' }}>
          <MarkThroughput size={48} theme="tile" />
          <blockquote className="news" style={{ fontSize: 'clamp(25px,3vw,35px)', color: INK, lineHeight: 1.32,
                                                 fontWeight: 500, letterSpacing: '-0.01em', margin: '28px 0 0',
                                                 fontStyle: 'italic' }}>
            “We knew our PO cycle was slow. We didn't know <span style={{ color: RED }}>where</span>.
            P2P showed us in week six, and we were live before the quarter closed.”
          </blockquote>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 30 }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: NAVY, color: '#fff',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 16 }}>RK</div>
            <div style={{ textAlign: 'left' }}>
              <div className="grotesk" style={{ fontSize: 15, fontWeight: 700, color: INK, letterSpacing: '-0.01em' }}>Renee Kwon</div>
              <div className="plex" style={{ fontSize: 11, color: MUTED, letterSpacing: '0.06em' }}>VP Finance · City of Raleigh</div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// FINAL CTA
// ═══════════════════════════════════════════════════════════════════════════
function FinalCTA() {
  return (
    <section id="cta" style={{ padding: '48px 0 100px' }}>
      <Container>
        <div style={{ background: NAVY, borderRadius: 24, padding: 'clamp(44px, 6vw, 76px)', color: '#fff',
                      position: 'relative', overflow: 'hidden' }}>
          <svg width="420" height="100%" viewBox="0 0 420 300" preserveAspectRatio="xMaxYMid slice"
               style={{ position: 'absolute', top: 0, right: 0, opacity: 0.16 }}>
            {[0,1,2,3,4].map(i => (
              <path key={i} d={`M 40 ${40+i*52} C 140 ${20+i*52}, 220 ${64+i*52}, 320 ${40+i*52} S 480 ${20+i*52}, 560 ${40+i*52}`}
                    fill="none" stroke={RED} strokeWidth="4" />
            ))}
          </svg>
          <div style={{ position: 'relative', maxWidth: 640 }}>
            <Eyebrow color={RED_SOFT}>Start with the score</Eyebrow>
            <h2 className="grotesk" style={{ fontSize: 'clamp(32px,4.2vw,52px)', fontWeight: 700,
                                              letterSpacing: '-0.035em', lineHeight: 1.02, margin: '16px 0 0' }}>
              Find out if you're ready in two weeks.
            </h2>
            <p style={{ ...leadStyle(19, 'rgba(255,255,255,0.82)'), margin: '18px 0 0', maxWidth: 540 }}>
              A Data Readiness Assessment gives you a score, a tier, and a fixed-fee path to go-live —
              before you commit to anything.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
              <Button variant="accent" size="lg" href="#cta">Request a readiness assessment →</Button>
              <Button variant="ghost" size="lg" dark href="#customers">See customer results</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

Object.assign(window, {
  Hero, TrustBar, Problem, HowItWorks, ReadinessShowcase, Features,
  ProductSection, Outcomes, Deployment, Testimonial, FinalCTA, ChevTick,
});
