// One-pager assembly for the P2P · Procure-to-Pay Intelligence System.
// Folds the key bits of Platform / Pricing / Customers / Readiness / About into a
// single self-contained scroll. No cross-page links — nav + CTAs scroll in-page.
// Framed as an INTERNAL DRAFT for team review (positioning / direction feedback).

const {
  P2P, P2P_IS, MarkThroughput,
  Container, Section, Eyebrow, Button, SectionHead, ReadinessRing, Spark, ProductGlass, OK,
  Hero, DataSignal, TrustBar, Problem, HowItWorks, ReadinessShowcase, Features,
  ProductSection, Outcomes, Deployment, ChevTick, Footer,
  SECTION_PAD, HEAD_GAP, GAP, bodyStyle, leadStyle, CARD, hoverLift,
  NAVY, NAVY_DEEP, NAVY_LO, NAVY_50, RED, RED_SOFT, INK, SLATE, MUTED, SAND, CREAM, LINE, LINE2,
  QuickDiagnostic, submitLead,
  useTweaks, TweaksPanel, TweakSection, TweakRadio,
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
  { id: 'platform',  label: 'Platform' },
  { id: 'readiness', label: 'Quick diagnostic' },
  { id: 'how',       label: 'How it works' },
  { id: 'pricing',   label: 'Pricing' },
  { id: 'about',     label: 'About' },
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
        <nav className="nav-links" style={{ display: 'flex', gap: 2, flexWrap: 'nowrap' }}>
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
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
          <a href="https://www.miller3group.com" target="_blank" rel="noopener" className="grotesk nav-m3"
             style={{ fontSize: 12.5, fontWeight: 600, color: '#fff', padding: '7px 12px', borderRadius: 999,
                      background: RED, border: `1px solid ${RED}`, whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 5,
                      transition: 'all 140ms ease' }}
             onMouseOver={e => { e.currentTarget.style.opacity = '0.88'; }}
             onMouseOut={e => { e.currentTarget.style.opacity = '1'; }}>
            ← Miller³ Consulting Website
          </a>
          <Button variant="primary" size="sm" href="https://outlook.office.com/book/Miller3Consulting1@miller3group.onmicrosoft.com/?ismsaljsauthenabled">Book a demo</Button>
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
        <div style={{ textAlign: 'center', maxWidth: 740, margin: '0 auto 40px' }}>
          <Eyebrow center color={RED_SOFT}>Watch · 2 min</Eyebrow>
          <h2 className="grotesk" style={{ fontSize: 'clamp(29px,3.8vw,46px)', fontWeight: 700,
                                            letterSpacing: '-0.035em', lineHeight: 1.04, margin: '14px 0 0' }}>
            See scattered procurement data become one live score.
          </h2>
          <p style={{ ...leadStyle(19, 'rgba(255,255,255,0.82)'), margin: '16px auto 0', maxWidth: 600 }}>
            In two minutes, watch P2P read your existing ERP, AP, and contract systems — read-only —
            and turn them into a readiness score, a legible pipeline, and alerts you can act on today.
            This is what your finance team would see on day one.
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
          <Button variant="accent" size="lg" href="https://outlook.office.com/book/Miller3Consulting1@miller3group.onmicrosoft.com/?ismsaljsauthenabled">Schedule a demo →</Button>
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
    { n: '01', t: 'Access', q: 'Can we reach the data?', d: 'We inventory every procurement, contract, and payment source and confirm we can read it cleanly — credentials, APIs, exports, the lot.', score: 94 },
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
              <MarkThroughput size={40} theme="dark" />
              <P2P size={30} fg="#fff" accent={RED_SOFT} weight={700} />
            </div>
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
    { name: 'Assess', tag: 'Start here', price: 'Fixed fee', unit: 'from $35k',
      desc: 'A Data Readiness Assessment. Score your sources, set the tier, get a fixed-fee path to go-live.',
      features: ['2–6 week engagement', 'Source-by-source scoring', 'Readiness report + tier', 'Fixed-fee deployment quote', 'Credited toward Deploy'],
      cta: 'Talk to the team', href: 'https://outlook.office.com/book/Miller3Consulting1@miller3group.onmicrosoft.com/?ismsaljsauthenabled', accent: false },
    { name: 'Deploy', tag: 'Most popular', price: 'Fixed fee', unit: 'by readiness tier',
      desc: 'The 45-day implementation. Connect sources, build the model, validate, and go live.',
      features: ['45-day go-live (Fast-Track)', 'Read-only ERP connectors', 'Unified P2P data model', 'Dashboards + alerts + playbooks', 'Reconciled against your ERP', 'Team enablement'],
      cta: 'Talk to the team', href: 'https://outlook.office.com/book/Miller3Consulting1@miller3group.onmicrosoft.com/?ismsaljsauthenabled', accent: true },
    { name: 'Operate', tag: 'Ongoing', price: 'Annual', unit: 'by data scale',
      desc: 'The platform subscription. Live intelligence, monitoring, and support, priced to your volume.',
      features: ['Live readiness monitoring', 'Unlimited dashboards & users', 'Anomaly & leakage alerts', 'Quarterly business reviews', 'Audit-grade controls & lineage', 'SLA-backed support'],
      cta: 'Talk to the team', href: 'https://outlook.office.com/book/Miller3Consulting1@miller3group.onmicrosoft.com/?ismsaljsauthenabled', accent: false },
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

// ═══════════════════════════════════════════════════════════════════════════
// ABOUT — the firm behind the platform
// ═══════════════════════════════════════════════════════════════════════════
function Story() {
  return (
    <Section>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 56, alignItems: 'start' }}>
          <SectionHead eyebrow="About · Miller³ Consulting" title="Built from a hundred procurement assessments." />
          <div>
            <p style={{ ...leadStyle(20, INK), margin: 0 }}>
              Miller³ Consulting has assessed over 100 procurement departments. Across those engagements, the
              same patterns kept surfacing in how procurement departments are designed.
            </p>
            <p style={{ ...bodyStyle(16.5, SLATE), margin: '18px 0 0' }}>
              P2P was born out of that pattern-matching, informed by a hundred real procurement environments
              rather than built from theory. Every readiness score and pricing recommendation in the platform
              follows the same discipline we use in the field: we price the work to data complexity before we
              commit to a delivery date, and we validate feasibility of our 45-day implementation before it starts.
            </p>
            <p style={{ ...bodyStyle(16.5, SLATE), margin: '16px 0 0' }}>
              P2P sits alongside your existing systems. It is not a replacement for your ERP or procurement platform.
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
        <div className="two-col" style={{ background: NAVY, borderRadius: 24, padding: 'clamp(36px, 5vw, 60px)', color: '#fff',
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
            <Eyebrow color={RED_SOFT}>Quick Diagnostic</Eyebrow>
            <h2 className="grotesk" style={{ fontSize: 'clamp(30px,3.8vw,46px)', fontWeight: 700,
                                              letterSpacing: '-0.035em', lineHeight: 1.04, margin: '14px 0 0' }}>
              Tell us a bit about your setup. We'll tell you if your data is ready.
            </h2>
            <p className="news" style={{ fontSize: 18, color: 'rgba(255,255,255,0.82)', lineHeight: 1.5, margin: '16px 0 0', maxWidth: 420 }}>
              A few quick details, then book time with our team — we'll walk through your
              data readiness live and map the fastest path to go-live.
            </p>
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
              <form onSubmit={e => { e.preventDefault();
                             const f = e.target;
                             submitLead({ first: f.first.value, last: f.last.value, email: f.email.value,
                                          company: f.company.value, erp: f.erp.value, spend: f.spend.value,
                                          bidSystem: f.bidSystem.value, environment: f.environment.value, source: 'dra-request' });
                             window.open('https://outlook.office.com/book/Miller3Consulting1@miller3group.onmicrosoft.com/?ismsaljsauthenabled', '_blank', 'noopener');
                             setSubmitted(true); }}
                    style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div className="diag-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div><label style={labelS}>First name</label><input name="first" style={field} placeholder="Jane" required /></div>
                  <div><label style={labelS}>Last name</label><input name="last" style={field} placeholder="Doe" required /></div>
                </div>
                <div><label style={labelS}>Work email</label><input name="email" style={field} type="email" placeholder="jane@company.gov" required /></div>
                <div><label style={labelS}>Agency</label><input name="company" style={field} placeholder="Metro Transit Authority" required /></div>
                <div className="diag-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <label style={labelS}>ERP system</label>
                    <select name="erp" style={field} defaultValue="">
                      <option value="" disabled>Select…</option>
                      {['SAP', 'Oracle', 'Workday', 'NetSuite', 'Coupa', 'Microsoft D365', 'Other', 'I don’t know'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelS}>Annual spend</label>
                    <select name="spend" style={field} defaultValue="">
                      <option value="" disabled>Select…</option>
                      {['< $50M', '$50M – $250M', '$250M – $1B', '> $1B', 'I don’t know'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label style={labelS}>Do you have a bid management system?</label>
                  <select name="bidSystem" style={field} defaultValue="">
                    <option value="" disabled>Select…</option>
                    {['Yes — a dedicated system', 'Yes — within our ERP', 'No', 'I don’t know', 'Other'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelS}>Is your procurement environment centralized or decentralized?</label>
                  <select name="environment" style={field} defaultValue="">
                    <option value="" disabled>Select…</option>
                    {['Centralized', 'Decentralized', 'Hybrid / mixed', 'I don’t know'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <button type="submit" className="grotesk"
                        style={{ width: '100%', justifyContent: 'center', display: 'inline-flex', alignItems: 'center', gap: 8,
                                 border: 'none', borderRadius: 8, background: RED, color: '#fff',
                                 padding: '15px 26px', fontSize: 15.5, fontWeight: 600, letterSpacing: '-0.01em',
                                 cursor: 'pointer', transition: 'transform 120ms ease, box-shadow 120ms ease' }}
                        onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(20,25,58,0.16)'; }}
                        onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                  Book a demo →
                </button>
                <div className="plex" style={{ fontSize: 11, color: MUTED, textAlign: 'center', letterSpacing: '0.03em' }}>
                  No commitment. This just gets our conversation started.
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
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "readinessStyle": "diagnostic"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  const ReadinessTop = t.readinessStyle === 'diagnostic'
    ? <div id="readiness"><QuickDiagnostic /></div>
    : <div id="readiness"><ReadinessShowcase /></div>;

  return (
    <div id="top">
      <OnePagerNav />

      {/* Video now lives inside the hero — first section, playable, expands fullscreen. */}
      <Hero />
      <DataSignal />

      <div id="problem"><Problem /></div>
      <Features />
      {ReadinessTop}
      <div id="how"><HowItWorks /></div>
      <Dimensions />
      <Architecture />
      <ProductSection />
      <Outcomes />
      <div id="pricing"><Plans /></div>
      <div id="about"><Story /><Principles /></div>
      <RequestForm />
      <Footer />

      <TweaksPanel>
        <TweakSection label="Readiness section" />
        <TweakRadio label="Framing" value={t.readinessStyle}
          options={[{ value: 'diagnostic', label: 'Quick diagnostic' }, { value: 'classic', label: 'Classic' }]}
          onChange={v => setTweak('readinessStyle', v)} />
      </TweaksPanel>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
