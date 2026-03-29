const pillars = [
  {
    title: 'Multi-agent execution',
    description:
      'An orchestrator routes work to specialist agents for review, testing, implementation, and delivery so each step has a clear owner.',
  },
  {
    title: 'RAG with governed memory',
    description:
      'Agents retrieve only the relevant conventions, tickets, docs, and historical decisions instead of dragging your whole knowledge base into every prompt.',
  },
  {
    title: 'Tool-connected automation',
    description:
      'We connect models to GitHub, Jira, Slack, internal APIs, and databases so the system does work instead of producing isolated text.',
  },
]

const outcomes = [
  'Deploy inside the client environment',
  'Reduce context cost with retrieval-first design',
  'Preserve institutional knowledge in versioned memory',
  'Measure ROI from baseline to day-30 review',
]

const industries = [
  {
    name: 'Software agencies',
    detail:
      'Fast sales cycles, clear workflow pain, and immediate proof through review, test, and release automation.',
  },
  {
    name: 'Product engineering teams',
    detail:
      'Strong fit for teams that need more velocity without adding coordination overhead to every sprint.',
  },
  {
    name: 'Healthcare tech',
    detail:
      'A strong second vertical when privacy and infrastructure control are part of the buying decision.',
  },
]

const processSteps = [
  'Map the client workflow and identify where time, rework, and human error accumulate.',
  'Design the agent roles, retrieval layer, governance model, and tool integrations around that workflow.',
  'Deploy the system in the client environment and validate against baseline delivery metrics.',
]

function App() {
  return (
    <div className="page-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <header className="site-header">
        <div className="brand">
          <span className="brand-mark" />
          <span className="brand-name">AI Workflow Orchestration</span>
        </div>
        <a className="nav-cta" href="#contact">
          Book discovery
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Done-for-you AI systems for tech teams</p>
            <h1>Replace slow internal workflows with agent systems that run inside your infrastructure.</h1>
            <p className="hero-text">
              We do not sell generic AI tooling. We design and deploy custom workflow orchestration systems that
              reduce turnaround time, lower operational error, and keep your company knowledge versioned and usable.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Start a project
              </a>
              <a className="button button-secondary" href="#solution">
                See how it works
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-card hero-card-top">
              <p className="card-label">What clients buy</p>
              <p className="card-title">Replaced workflows</p>
              <p className="card-copy">
                A process that took days now runs in hours, follows internal rules, and leaves an audit trail.
              </p>
            </div>
            <div className="stats-grid">
              <article className="stat-card">
                <strong>0</strong>
                <span>client data leaves their environment</span>
              </article>
              <article className="stat-card">
                <strong>80%</strong>
                <span>context cost reduction through retrieval-first architecture</span>
              </article>
              <article className="stat-card">
                <strong>5+</strong>
                <span>specialist agents per implementation</span>
              </article>
              <article className="stat-card">
                <strong>∞</strong>
                <span>institutional memory, versioned</span>
              </article>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <p>Best first use case</p>
          <div>
            <span>PR review automation</span>
            <span>Test generation</span>
            <span>Commit and release support</span>
          </div>
        </section>

        <section className="section" id="solution">
          <div className="section-heading">
            <p className="eyebrow">The offer</p>
            <h2>Custom orchestration systems for workflows where delay and inconsistency are expensive.</h2>
          </div>

          <div className="content-grid">
            <div className="copy-card copy-card-large">
              <p>
                We study the client workflow, break it into agent responsibilities, connect it to the right tools, and
                deploy the system inside the client environment. The implementation is the product.
              </p>
            </div>

            <div className="outcomes-card">
              <p className="card-label">What differentiates the model</p>
              <ul>
                {outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="section-heading">
            <p className="eyebrow">Core architecture</p>
            <h2>Built around a repeatable stack, adapted to each client workflow.</h2>
          </div>

          <div className="pillar-grid">
            {pillars.map((pillar) => (
              <article className="pillar-card" key={pillar.title}>
                <p className="pillar-title">{pillar.title}</p>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Where to start</p>
            <h2>Focus on teams that can understand value quickly and act on it.</h2>
          </div>

          <div className="industry-grid">
            {industries.map((industry) => (
              <article className="industry-card" key={industry.name}>
                <h3>{industry.name}</h3>
                <p>{industry.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-process">
          <div className="section-heading">
            <p className="eyebrow">Engagement model</p>
            <h2>One workflow at a time. Baseline first, automation second, ROI review after deployment.</h2>
          </div>

          <div className="process-list">
            {processSteps.map((step, index) => (
              <article className="process-card" key={step}>
                <span>{`0${index + 1}`}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section cta-section" id="contact">
          <div className="cta-panel">
            <div>
              <p className="eyebrow">Next step</p>
              <h2>Use the landing page to sell the service, then turn the first workflow into the reference implementation.</h2>
            </div>
            <div className="cta-actions">
              <a className="button button-primary" href="mailto:hello@example.com">
                hello@example.com
              </a>
              <p>Replace the email, connect a form later, and deploy directly to Vercel free tier.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
