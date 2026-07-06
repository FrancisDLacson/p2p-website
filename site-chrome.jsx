// Shared chrome (Nav + Footer) for the multi-page P2P site.
// Nav({current}) highlights the active page and links across pages.

const {
  P2P, P2P_IS, MarkThroughput,
  Container, Button,
  NAVY, NAVY_DEEP, RED, RED_SOFT, INK, SLATE, MUTED, SAND, CREAM, LINE, LINE2,
} = window;

const PAGES = window.__P2P_PAGES || {
  home:      'index.html',
  platform:  'platform.html',
  pricing:   'pricing.html',
  customers: 'customers.html',
  readiness: 'readiness.html',
  about:     'about.html',
  signin:    'signin.html',
};

function Nav({ current = 'home' }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    { key: 'platform',  label: 'Platform',  href: PAGES.platform },
    { key: 'pricing',   label: 'Pricing',   href: PAGES.pricing },
    { key: 'customers', label: 'Customers', href: PAGES.customers },
    { key: 'readiness', label: 'Readiness', href: PAGES.readiness },
  ];
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100,
                     background: scrolled ? 'rgba(250,246,238,0.86)' : 'transparent',
                     backdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
                     borderBottom: `1px solid ${scrolled ? LINE : 'transparent'}`,
                     transition: 'all 200ms ease' }}>
      <Container style={{ display: 'flex', alignItems: 'center', height: 68, gap: 20 }}>
        <a href={PAGES.home} style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
          <MarkThroughput size={34} theme="tile" />
          <P2P_IS size={18} fg={INK} accent={RED} weight={700} />
        </a>
        <div style={{ width: 1, height: 20, background: LINE2, marginLeft: 4 }} />
        <nav style={{ display: 'flex', gap: 4, flexWrap: 'nowrap' }}>
          {links.map(l => {
            const active = current === l.key;
            return (
              <a key={l.key} href={l.href} className="grotesk"
                 style={{ fontSize: 13.5, fontWeight: 600, color: active ? INK : SLATE, padding: '8px 12px',
                          borderRadius: 7, letterSpacing: '-0.005em', whiteSpace: 'nowrap',
                          background: active ? 'rgba(30,40,86,0.06)' : 'transparent' }}
                 onMouseOver={e => { if (!active) { e.currentTarget.style.background = 'rgba(30,40,86,0.05)'; e.currentTarget.style.color = INK; } }}
                 onMouseOut={e => { if (!active) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = SLATE; } }}>
                {l.label}
              </a>
            );
          })}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
          <a href={PAGES.signin} className="grotesk" style={{ fontSize: 13.5, fontWeight: 600, color: INK, whiteSpace: 'nowrap' }}>Sign in</a>
          <Button variant="primary" size="sm" href={PAGES.readiness}>Request a DRA</Button>
        </div>
      </Container>
    </header>
  );
}

function Footer() {
  const cols = [
    { h: 'Platform', items: [
      ['Readiness scoring', PAGES.platform], ['Pipeline observability', PAGES.platform],
      ['Leakage alerts', PAGES.platform], ['Vendor risk', PAGES.platform], ['Integrations', PAGES.platform] ] },
    { h: 'Company', items: [
      ['Customers', PAGES.customers], ['Pricing', PAGES.pricing], ['About Miller³', PAGES.about],
      ['Careers', '#'], ['Contact', '#'] ] },
    { h: 'Resources', items: [
      ['Readiness assessment', PAGES.readiness], ['Pricing model', PAGES.pricing],
      ['Documentation', '#'], ['Security', '#'], ['Status', '#'] ] },
  ];
  return (
    <footer style={{ background: NAVY_DEEP, color: '#fff', padding: '64px 0 32px' }}>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
              <MarkThroughput size={36} theme="dark" />
              <P2P size={24} fg="#fff" accent={RED_SOFT} weight={700} />
            </div>
            <p className="news" style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5,
                                          margin: '16px 0 0', maxWidth: 300 }}>
              The Procure-to-Pay Intelligence System — a disciplined intelligence layer over the
              ERP you already run.
            </p>
            <div style={{ marginTop: 20 }}>
              <span className="plex" style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)',
                                              letterSpacing: '0.24em', textTransform: 'uppercase', fontWeight: 600 }}>
                A Miller³ Platform
              </span>
            </div>
          </div>
          {cols.map(col => (
            <div key={col.h}>
              <div className="plex" style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.55)',
                                              letterSpacing: '0.18em', textTransform: 'uppercase',
                                              fontWeight: 700, marginBottom: 16 }}>{col.h}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
                {col.items.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="grotesk" style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}
                       onMouseOver={e => e.currentTarget.style.color = '#fff'}
                       onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
                      marginTop: 48, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.12)', flexWrap: 'wrap' }}>
          <div className="plex" style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.5)' }}>
            © {new Date().getFullYear()} Miller³ Consulting. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 22 }}>
            {['Privacy', 'Terms', 'Security', 'Accessibility'].map(l => (
              <a key={l} href="#" className="plex" style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.5)' }}
                 onMouseOver={e => e.currentTarget.style.color = '#fff'}
                 onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>{l}</a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

Object.assign(window, { Nav, Footer, PAGES });
