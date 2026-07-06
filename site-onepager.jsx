// One-pager assembly for the P2P · Procure-to-Pay Intelligence System.
// Folds the key bits of Platform / Pricing / Customers / Readiness / About into a
// single self-contained scroll. No cross-page links — nav + CTAs scroll in-page.
// Framed as an INTERNAL DRAFT for team review (positioning / direction feedback).

const {
  P2P, P2P_IS, MarkThroughput,
  Container, Section, Eyebrow, Button, SectionHead, ReadinessRing, Spark, ProductGlass, OK,
  Hero, TrustBar, Problem, HowItWorks, ReadinessShowcase, Features,
  ProductSection, Outcomes, Deployment, ChevTick, Footer,
  SECTION_PAD, HEAD_GAP, GAP, bodyStyle, leadStyle, CARD, hoverLift,
  NAVY, NAVY_DEEP, NAVY_LO, NAVY_50, RED, RED_SOFT, INK, SLATE, MUTED, SAND, CREAM, LINE, LINE2,
} = window;

// ═══════════════════════════════════════════════════════════════════════════
// DRAFT RIBBON — honest "work in progress" signal for internal review
// ═══════════════════════════════════════════════════════════════════════════
function DraftRibbon() {
  return (
    <div style={{ background: NAVY_DEEP, color: '#fff', borderBottom: `2px solid ${RED}` }}>
      <Container style={{ display: 'flex', alignItems: 'center', gap: 14, height: 38, flexWrap: 'wrap' }}>
        <span className="plex" style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.16em',
                                        textTransform: 'uppercase', color: '#fff', background: RED,
                                        padding: '3px 8px', borderRadius: 4, whiteSpace: 'nowrap' }}>
          Internal draft
        </span>
        <span className="plex" style={{ fontSize: 12, color: 'rgba(255,255,255,0.78)', letterSpacing: '0.01em' }}>
          Working concept for team review — copy, metrics &amp; customer names are placeholders, not final.
        </span>
        <span className="mono" style={{ marginLeft: 'auto', fontSize: 10.5, color: 'rgba(255,255,255,0.5)',
                                        letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>
          v0.1 · {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
        </span>
      </Container>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// NAV — in-page anchors + scroll-spy + draft chip
// ═══════════════════════════════════════════════════════════════════════════
const NAV_LINKS = [
  { id: 'problem',   label: 'The gap' },
  { id: 'how',       label: 'How it works' },
  { id: 'readiness', label: 'Readiness' },
  { id: 'platform',  label: 'Platform' },
  { id: 'pricing',   label: 'Pricing' },
  { id: 'customers', label: 'Customers' },
];

function OnePagerNav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState('');
  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const probe = window.scrollY + 140;
      let cur = '';
      for (const l of NAV_LINKS) {
        const el = document.getElementById(l.id);
        if (el && el.offsetTop <= probe) cur = l.id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, paddingTop: 12 }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', height: 60, gap: 16, padding: '0 12px 0 18px',
                      borderRadius: 999,
                      background: scrolled ? 'rgba(255,255,255,0.74)' : 'rgba(255,255,255,0.52)',
                      backdropFilter: 'saturate(180%) blur(16px)', WebkitBackdropFilter: 'saturate(180%) blur(16px)',
                      border: '1px solid rgba(255,255,255,0.7)',
                      boxShadow: scrolled ? '0 18px 44px -18px rgba(20,25,58,0.30)' : '0 14px 36px -22px rgba(20,25,58,0.24)',
                      transition: 'all 220ms ease' }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
          <MarkThroughput size={32} theme="tile" />
          <P2P_IS size={17} fg={INK} accent={RED} weight={700} />
        </a>
        <div style={{ width: 1, height: 20, background: LINE2, marginLeft: 2 }} />
        <nav style={{ display: 'flex', gap: 2, flexWrap: 'nowrap' }}>
          {NAV_LINKS.map(l => {
            const on = active === l.id;
            return (
              <a key={l.id} href={`#${l.id}`} className="grotesk"
                 style={{ fontSize: 13, fontWeight: 600, color: on ? INK : SLATE, padding: '7px 11px',
                          borderRadius: 7, letterSpacing: '-0.005em', whiteSpace: 'nowrap',
                          background: on ? 'rgba(30,40,86,0.06)' : 'transparent', transition: 'all 140ms ease' }}
                 onMouseOver={e => { if (!on) { e.currentTarget.style.background = 'rgba(30,40,86,0.05)'; e.currentTarget.style.color = INK; } }}
                 onMouseOut={e => { if (!on) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = SLATE; } }}>
                {l.label}
              </a>
            );
          })}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
          <a href="#about" className="grotesk" style={{ fontSize: 13, fontWeight: 600, color: INK, whiteSpace: 'nowrap' }}>About</a>
          <Button variant="primary" size="sm" href="#cta">Request a DRA</Button>
        </div>
        </div>
      </div>
    </header>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// PRODUCT VIDEO — embed-ready 16:9 frame + schedule-a-demo CTA
// ═══════════════════════════════════════════════════════════════════════════
function VideoSection() {
  const [hover, setHover] = React.useState(false);
  const [playing, setPlaying] = React.useState(false);
  const startPlay = () => setPlaying(true);
  return (
    <section id="video" style={{ background: NAVY_DEEP, color: '#fff',
                                 padding: `clamp(56px, 7vw, 88px) 0`, position: 'relative', overflow: 'hidden' }}>
      <svg width="100%" height="100%" viewBox="0 0 1200 400" preserveAspectRatio="none"
           style={{ position: 'absolute', inset: 0, opacity: 0.07 }}>
        {[0,1,2,3,4,5,6].map(i => (
          <path key={i} d={`M -50 ${50+i*52} C 250 ${20+i*52}, 450 ${82+i*52}, 700 ${50+i*52} S 1150 ${20+i*52}, 1300 ${50+i*52}`}
                fill="none" stroke={RED} strokeWidth="3" />
        ))}
      </svg>
      <Container style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 40px' }}>
          <Eyebrow center color={RED_SOFT}>See it in action</Eyebrow>
          <h2 className="grotesk" style={{ fontSize: 'clamp(28px,3.6vw,42px)', fontWeight: 700,
                                            letterSpacing: '-0.035em', lineHeight: 1.05, margin: '14px 0 0' }}>
            The product tour, in two minutes.
          </h2>
          <p style={{ ...leadStyle(19, 'rgba(255,255,255,0.82)'), margin: '16px auto 0', maxWidth: 560 }}>
            Watch P2P score readiness, unify procurement and AP data, and turn it into live
            intelligence — then book time to see it running on your own stack.
          </p>
        </div>

        {/* product video */}
        <div style={{ maxWidth: 940, margin: '0 auto' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', borderRadius: 24,
                        overflow: 'hidden', border: '1px solid rgba(255,255,255,0.14)',
                        boxShadow: '0 44px 90px rgba(0,0,0,0.45)', background: '#000' }}>
            {playing && (
              <iframe
                src="https://player.vimeo.com/video/1205807635?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1"
                frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin" title="Product tour"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }} />
            )}
            {!playing && (
              <div onClick={startPlay} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}
                   style={{ position: 'absolute', inset: 0, cursor: 'pointer' }}>
                {/* product poster */}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center',
                              justifyContent: 'center', opacity: 0.5, filter: 'blur(1.5px)' }}>
                  <div style={{ transform: 'scale(1.28)', transformOrigin: 'center' }}><ProductGlass /></div>
                </div>
                <div style={{ position: 'absolute', inset: 0,
                              background: 'linear-gradient(180deg, rgba(20,25,58,0.35) 0%, rgba(20,25,58,0.72) 100%)' }} />
                {/* play button */}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div aria-label="Play product video"
                       style={{ width: 86, height: 86, borderRadius: '50%', background: RED,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                boxShadow: hover ? '0 0 0 14px rgba(195,42,46,0.22)' : '0 0 0 8px rgba(195,42,46,0.16)',
                                transform: hover ? 'scale(1.06)' : 'scale(1)', transition: 'all 180ms ease' }}>
                    <svg width="30" height="34" viewBox="0 0 30 34" fill="#fff"><path d="M2 2 L28 17 L2 32 Z" /></svg>
                  </div>
                </div>
                {/* duration chip */}
                <div className="mono" style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(13,18,48,0.7)',
                                               color: '#fff', fontSize: 11, fontWeight: 600, letterSpacing: '0.04em',
                                               padding: '5px 10px', borderRadius: 6, backdropFilter: 'blur(4px)' }}>
                  Product tour · 2:20
                </div>
                {/* caption */}
                <div style={{ position: 'absolute', left: 20, bottom: 18, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <MarkThroughput size={30} theme="dark" />
                  <span className="grotesk" style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.01em',
                                                      textShadow: '0 1px 12px rgba(0,0,0,0.4)' }}>How P2P works</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* schedule-a-demo CTA */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 36 }}>
          <Button variant="accent" size="lg" href="#cta">Schedule a demo →</Button>
          <Button variant="ghost" size="lg" dark href="#platform">Explore the platform</Button>
        </div>
      </Container>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// READINESS — scoring dimensions (from the DRA page)
// ═══════════════════════════════════════════════════════════════════════════
function Dimensions() {
  const dims = [
    { n: '01', t: 'Access', q: 'Can we reach the data?', d: 'We inventory every procurement, contract, and AP source and confirm we can read it cleanly — credentials, APIs, exports, the lot.', score: 94 },
    { n: '02', t: 'Joinability', q: 'Does it connect?', d: 'Vendors, POs, contracts, and invoices have to link by shared keys. We test whether your records actually join — or quietly don\u2019t.', score: 87 },
    { n: '03', t: 'KPI coverage', q: 'Can we measure what matters?', d: 'Cycle time, leakage, on-time payment, vendor risk — we check the fields exist and are trustworthy enough to drive a KPI.', score: 78 },
  ];
  return (
    <Section alt>
      <Container>
        <SectionHead center eyebrow="How scoring works"
          title="Three dimensions. One honest number."
          sub="The readiness score isn’t a vanity metric. Each dimension is tested against your real data — and the weakest one sets your ceiling." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: GAP, marginTop: HEAD_GAP }}>
          {dims.map((d, i) => (
            <div key={i} style={{ ...CARD, padding: 28, transition: 'transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease' }} {...hoverLift}>
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

// ═══════════════════════════════════════════════════════════════════════════
// PLATFORM — architecture (read-only in, intelligence out)
// ═══════════════════════════════════════════════════════════════════════════
function Architecture() {
  const sources = ['SAP', 'Oracle', 'Workday', 'NetSuite', 'Coupa', 'D365'];
  const outputs = [
    { t: 'Readiness score', d: 'Live, monitored' },
    { t: 'Pipeline view', d: 'Req → PO → invoice → pay' },
    { t: 'Alerts & playbooks', d: 'Leakage, risk, renewals' },
  ];
  return (
    <Section>
      <Container>
        <SectionHead center eyebrow="Architecture"
          title="Read-only in. Intelligence out."
          sub="P2P never becomes your system of record. It reads from the systems you already run and returns intelligence you can act on." />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1.1fr auto 1fr', gap: 20, alignItems: 'center', marginTop: HEAD_GAP }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div className="plex" style={{ fontSize: 10, color: MUTED, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 4 }}>Your sources</div>
            {sources.map(s => (
              <div key={s} style={{ background: '#fff', border: `1px solid ${LINE}`, borderRadius: 8, padding: '10px 14px',
                                    fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 14, color: SLATE }}>{s}</div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <ChevTick color={NAVY_50} size={22} />
            <div className="plex" style={{ fontSize: 8.5, color: MUTED, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, writingMode: 'vertical-rl' }}>read-only</div>
          </div>
          <div style={{ background: NAVY_DEEP, borderRadius: 22, padding: '28px 22px', color: '#fff', textAlign: 'center',
                        boxShadow: '0 24px 50px rgba(20,25,58,0.25)' }}>
            <MarkThroughput size={56} theme="dark" />
            <P2P size={30} fg="#fff" accent={RED_SOFT} weight={700} />
            <div className="plex" style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600, marginTop: 8 }}>
              Unified data model + intelligence
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <ChevTick color={RED} size={22} />
            <div className="plex" style={{ fontSize: 8.5, color: MUTED, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, writingMode: 'vertical-rl' }}>intelligence</div>
          </div>
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

// ═══════════════════════════════════════════════════════════════════════════
// PRICING — three commercial stages + comparison
// ═══════════════════════════════════════════════════════════════════════════
function Plans() {
  const plans = [
    { name: 'Assess', tag: 'Start here', price: 'Fixed fee', unit: 'from $18k',
      desc: 'A Data Readiness Assessment. Score your sources, set the tier, get a fixed-fee path to go-live.',
      features: ['2-week engagement', 'Source-by-source scoring', 'Readiness report + tier', 'Fixed-fee deployment quote', 'Credited toward Deploy'],
      cta: 'Request a DRA', href: '#cta', accent: false },
    { name: 'Deploy', tag: 'Most popular', price: 'Fixed fee', unit: 'by readiness tier',
      desc: 'The 45-day implementation. Connect sources, build the model, validate, and go live.',
      features: ['45-day go-live (Fast-Track)', 'Read-only ERP connectors', 'Unified P2P data model', 'Dashboards + alerts + playbooks', 'Reconciled against your ERP', 'Team enablement'],
      cta: 'Talk to the team', href: '#cta', accent: true },
    { name: 'Operate', tag: 'Ongoing', price: 'Annual', unit: 'by data scale',
      desc: 'The platform subscription. Live intelligence, monitoring, and support, priced to your volume.',
      features: ['Live readiness monitoring', 'Unlimited dashboards & users', 'Anomaly & leakage alerts', 'Quarterly business reviews', 'Audit-grade controls & lineage', 'SLA-backed support'],
      cta: 'Get a quote', href: '#cta', accent: false },
  ];
  return (
    <Section>
      <Container>
        <SectionHead center eyebrow="Pricing"
          title="Priced to the risk we can see."
          sub="Every engagement starts with a readiness score — so your timeline and your fee are set before you commit, not discovered along the way." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: GAP, alignItems: 'stretch', marginTop: HEAD_GAP }}>
          {plans.map((p, i) => (
            <div key={i} style={{ background: p.accent ? NAVY_DEEP : '#fff', color: p.accent ? '#fff' : INK,
                                  borderRadius: 24, border: `1px solid ${p.accent ? 'transparent' : LINE}`,
                                  padding: 30, display: 'flex', flexDirection: 'column',
                                  boxShadow: p.accent ? '0 36px 84px -26px rgba(20,25,58,0.5)' : '0 18px 46px -20px rgba(20,25,58,0.18)',
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

function Comparison() {
  const rows = [
    ['', 'Assess', 'Deploy', 'Operate'],
    ['Readiness scoring', '✓', '✓', '✓'],
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
        <div style={{ marginTop: HEAD_GAP, background: '#fff', borderRadius: 22, border: `1px solid ${LINE}`, overflow: 'hidden', boxShadow: '0 18px 46px -20px rgba(20,25,58,0.18)' }}>
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

// ═══════════════════════════════════════════════════════════════════════════
// CUSTOMERS — case studies + quotes
// ═══════════════════════════════════════════════════════════════════════════
function CaseStudies() {
  const cases = [
    { org: 'City of Raleigh', sector: 'Municipal · Finance', score: 82, initials: 'CR',
      challenge: 'An 18-day PO cycle no one could explain, across three disconnected systems.',
      result: 'Live in 41 days. Cycle time cut to 11.4 days; the bottleneck turned out to be a manual approval step P2P surfaced in week six.',
      metric: '−38%', metricLabel: 'PO cycle time' },
    { org: 'City of Durham', sector: 'Municipal · Procurement', score: 74, initials: 'CD',
      challenge: 'Off-contract spend was only visible at quarter-end — millions leaked before anyone noticed.',
      result: 'Standard-tier deployment with light remediation. Leakage alerts now fire the day spend goes off-contract.',
      metric: '$4.2M', metricLabel: 'leakage recovered / yr' },
    { org: 'City of Asheville', sector: 'Municipal · Finance', score: 88, initials: 'CA',
      challenge: 'Audit prep took weeks of manual reconciliation across procurement and AP.',
      result: 'Fast-Track go-live in 38 days. Every metric now carries lineage; audit evidence exports in minutes, not weeks.',
      metric: '94.6%', metricLabel: 'on-time payment' },
  ];
  return (
    <Section>
      <Container>
        <SectionHead center eyebrow="Case studies"
          title="The score, then the outcome."
          sub="Every story starts with a readiness number and ends with a metric that moved." />
        <div style={{ display: 'flex', flexDirection: 'column', gap: GAP, marginTop: HEAD_GAP }}>
          {cases.map((c, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 24, border: `1px solid ${LINE}`, boxShadow: '0 18px 46px -20px rgba(20,25,58,0.18)',
                                  display: 'grid', gridTemplateColumns: '200px 1fr 200px', overflow: 'hidden' }}>
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
              <div style={{ borderLeft: `1px solid ${LINE}`, padding: 26, display: 'flex', flexDirection: 'column',
                            alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: SAND }}>
                <div className="grotesk" style={{ fontSize: 44, fontWeight: 700, color: RED, letterSpacing: '-0.04em', lineHeight: 1 }}>{c.metric}</div>
                <div className="plex" style={{ fontSize: 10.5, color: MUTED, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginTop: 8, maxWidth: 130 }}>{c.metricLabel}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="plex" style={{ textAlign: 'center', fontSize: 11.5, color: MUTED, marginTop: 22, letterSpacing: '0.03em', fontStyle: 'italic' }}>
          Draft note — customer names, scores, and quotes below are illustrative pending client sign-off.
        </div>
      </Container>
    </Section>
  );
}

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
            <div key={i} style={{ background: '#fff', borderRadius: 22, border: `1px solid ${LINE}`, padding: 28, boxShadow: '0 18px 46px -20px rgba(20,25,58,0.18)',
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

// ═══════════════════════════════════════════════════════════════════════════
// ABOUT — the firm behind the platform
// ═══════════════════════════════════════════════════════════════════════════
function Story() {
  return (
    <Section>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 56, alignItems: 'start' }}>
          <SectionHead eyebrow="About · Miller³" title="Built from a hundred procurement engagements." />
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
              beside your systems instead of replacing them, and we never ship a number we can’t trace.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

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

// ═══════════════════════════════════════════════════════════════════════════
// CTA — the DRA request form (the real conversion surface)
// ═══════════════════════════════════════════════════════════════════════════
function RequestForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const field = { width: '100%', padding: '12px 14px', borderRadius: 9, border: `1px solid ${LINE2}`,
                  fontFamily: "'Manrope', sans-serif", fontSize: 14, color: INK, background: '#fff', outline: 'none' };
  const labelS = { fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 10.5, color: MUTED,
                   letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 7, display: 'block' };
  return (
    <section id="cta" style={{ padding: '64px 0 100px' }}>
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
            <Eyebrow color={RED_SOFT}>Start with the score</Eyebrow>
            <h2 className="grotesk" style={{ fontSize: 'clamp(30px,3.8vw,46px)', fontWeight: 700,
                                              letterSpacing: '-0.035em', lineHeight: 1.04, margin: '14px 0 0' }}>
              Find out if you’re ready in two weeks.
            </h2>
            <p className="news" style={{ fontSize: 18, color: 'rgba(255,255,255,0.82)', lineHeight: 1.5, margin: '16px 0 0', maxWidth: 420 }}>
              A Data Readiness Assessment gives you a score, a tier, and a fixed-fee path to go-live —
              before you commit to anything.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 26 }}>
              <ReadinessRing value={82} size={64} dark />
              <div className="plex" style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', lineHeight: 1.4, maxWidth: 200 }}>
                Most Fast-Track customers score 80+ and go live in 45 days.
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', background: '#fff', borderRadius: 22, padding: 28, boxShadow: '0 30px 70px -28px rgba(0,0,0,0.5)' }}>
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

// ═══════════════════════════════════════════════════════════════════════════
// APP — single self-contained scroll
// ═══════════════════════════════════════════════════════════════════════════
function App() {
  return (
    <div id="top">
      <DraftRibbon />
      <OnePagerNav />
      <Hero />
      <VideoSection />
      <TrustBar />
      <div id="problem"><Problem /></div>
      <div id="how"><HowItWorks /></div>
      <div id="readiness"><ReadinessShowcase /><Dimensions /></div>
      <Features />
      <Architecture />
      <ProductSection />
      <Outcomes />
      <Deployment />
      <div id="pricing"><Plans /><Comparison /></div>
      <div id="customers"><CaseStudies /><Quotes /></div>
      <div id="about"><Story /><Principles /><ByTheNumbers /></div>
      <RequestForm />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
