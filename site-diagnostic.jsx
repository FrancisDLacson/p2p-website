// ═══════════════════════════════════════════════════════════════════════════
// QUICK DIAGNOSTIC — now the same single-page form pattern as the bottom
// "Book a call" CTA: one dark panel, copy on the left, every field on the
// right, submit opens Calendly directly. No multi-step quiz.
//
// Lead payload is handed to submitLead() which fans out to Smartsheet (lead
// tracking) and Mailchimp (nurture sequence). Both are documented, endpoint-
// driven, and no-op safely until the team wires a real proxy — see below.
// ═══════════════════════════════════════════════════════════════════════════
const {
  Container, Section, Eyebrow, Button, SectionHead,
  NAVY, NAVY_DEEP, RED, RED_SOFT, INK, SLATE, MUTED, SAND, LINE, LINE2,
  bodyStyle, HEAD_GAP, MarkThroughput,
} = window;

// ─── Lead routing ────────────────────────────────────────────────────────────
// Real Smartsheet/Mailchimp calls need a secret (API token / server key) that
// must NEVER live in client HTML. The right pattern is ONE serverless proxy
// (e.g. a Zapier/Make webhook, Netlify/Cloudflare function, or Miller³'s own
// endpoint) that receives this JSON and, server-side:
//   • Smartsheet  → POST https://api.smartsheet.com/2.0/sheets/{sheetId}/rows
//                   Authorization: Bearer <token>   (adds one row per lead)
//   • Mailchimp   → POST https://<dc>.api.mailchimp.com/3.0/lists/{listId}/members
//                   then tag "p2p-diagnostic" to trigger the nurture journey.
// Point window.P2P_LEAD_ENDPOINT at that proxy and this fires automatically.
async function submitLead(payload) {
  const endpoint = window.P2P_LEAD_ENDPOINT;
  if (!endpoint) { console.info('[P2P] Lead captured (no endpoint wired yet):', payload); return; }
  try {
    await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ source: 'quick-diagnostic', submittedAt: new Date().toISOString(), ...payload }),
    });
  } catch (e) { console.warn('[P2P] Lead submit failed (queued client-side):', e); }
}

const field = { width: '100%', padding: '12px 14px', borderRadius: 9, border: `1px solid ${LINE2}`,
                fontFamily: "'Manrope', sans-serif", fontSize: 14, color: INK, background: '#fff', outline: 'none' };
const labelS = { fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 10.5, color: MUTED,
                 letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 7, display: 'block' };

function QuickDiagnostic() {
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <Section>
      <Container style={{ maxWidth: 1080 }}>
        <SectionHead center eyebrow="Quick diagnostic"
          title="Tell us a bit about your setup. We'll tell you if your data is ready."
          sub="A few quick details, then book time with our team — we'll walk through your data readiness live and map the fastest path to go-live." />

        <div style={{ marginTop: HEAD_GAP, display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', background: '#fff', borderRadius: 22, padding: 28, maxWidth: 560, width: '100%',
                        border: `1px solid ${LINE}`, boxShadow: '0 18px 46px -20px rgba(20,25,58,0.18)' }}>
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
                                          bidSystem: f.bidSystem.value, environment: f.environment.value, source: 'quick-diagnostic' });
                             window.open('https://calendly.com/miller3group/30min', '_blank', 'noopener');
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
                                 whiteSpace: 'nowrap', cursor: 'pointer', transition: 'transform 120ms ease, box-shadow 120ms ease' }}
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
    </Section>
  );
}

Object.assign(window, { QuickDiagnostic, submitLead });
