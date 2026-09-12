"use client";

import { useState } from "react";

const dashboardViews = {
  Today: {
    eyebrow: "Thursday, 11 September",
    title: "A gentle plan for a busy day",
    cards: [
      ["3", "client replies"],
      ["2", "approvals due"],
      ["$1,840", "scheduled"]
    ]
  },
  Clients: {
    eyebrow: "12 active clients",
    title: "Every relationship, easy to find",
    cards: [
      ["4", "new leads"],
      ["7", "active projects"],
      ["1", "needs follow-up"]
    ]
  },
  Money: {
    eyebrow: "September overview",
    title: "Know what is paid and what is next",
    cards: [
      ["$6.2k", "invoiced"],
      ["$4.4k", "received"],
      ["3", "open invoices"]
    ]
  }
} as const;

type ViewName = keyof typeof dashboardViews;

export default function Home() {
  const [activeView, setActiveView] = useState<ViewName>("Today");
  const [yearly, setYearly] = useState(false);
  const view = dashboardViews[activeView];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="DaisyDesk home">
          <span className="brand-flower" aria-hidden="true">✿</span>
          DaisyDesk
        </a>
        <nav aria-label="Primary navigation">
          <a href="/features">Features</a>
          <a href="/solutions">Solutions</a>
          <a href="/pricing">Pricing</a>
        </nav>
        <a className="button button-small" href="/demo">Start organizing</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker">🌼 Client management for small, lovely businesses</p>
          <h1>Run the work.<br/><em>Keep the warmth.</em></h1>
          <p className="hero-text">
            DaisyDesk brings leads, projects, appointments, proposals and invoices into one calm workspace—so the admin never gets louder than the work you love.
          </p>
          <div className="hero-actions">
            <a className="button" href="/features">Explore the workspace</a>
            <a className="text-link" href="/features">See what is inside →</a>
          </div>
          <p className="fine-print">Concept website • interactive demo data • no credit card</p>
        </div>

        <div className="dashboard-shell" aria-label="Interactive DaisyDesk product preview">
          <div className="window-bar"><span/><span/><span/><b>daisydesk / home</b></div>
          <div className="dashboard-tabs" role="tablist" aria-label="Product preview views">
            {(Object.keys(dashboardViews) as ViewName[]).map((name) => (
              <button
                key={name}
                role="tab"
                aria-selected={activeView === name}
                className={activeView === name ? "active" : ""}
                onClick={() => setActiveView(name)}
              >
                {name}
              </button>
            ))}
          </div>
          <div className="dashboard-content">
            <p>{view.eyebrow}</p>
            <h2>{view.title}</h2>
            <div className="stat-grid">
              {view.cards.map(([value, label]) => (
                <article key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </article>
              ))}
            </div>
            <div className="task-list">
              <div><span className="dot yellow"/>Send Marigold Studio proposal <b>10:30</b></div>
              <div><span className="dot pink"/>Review Willow & Co. homepage <b>1:00</b></div>
              <div><span className="dot mint"/>Invoice Juniper Photo <b>Friday</b></div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="DaisyDesk positioning">
        <span>Leads</span><i>✿</i><span>Projects</span><i>✿</i><span>Appointments</span><i>✿</i><span>Invoices</span><i>✿</i><span>Follow-ups</span>
      </section>

      <section className="section" id="features">
        <div className="section-heading">
          <p className="kicker">Everything has a home</p>
          <h2>Less tab-hopping.<br/>More tiny wins.</h2>
          <p>Designed for solo service providers and small teams that need real structure without enterprise-software energy.</p>
        </div>
        <div className="feature-grid">
          <article className="feature-card sunshine"><span>01</span><h3>Lead Garden</h3><p>See every inquiry, next step and follow-up before a warm lead goes cold.</p></article>
          <article className="feature-card blush"><span>02</span><h3>Project Petals</h3><p>Turn accepted work into clear milestones, approvals and client-ready progress.</p></article>
          <article className="feature-card mint"><span>03</span><h3>Money Meadow</h3><p>Keep proposals, invoices and payment status close to the work they belong to.</p></article>
        </div>
      </section>

      <section className="workflow section" id="workflow">
        <div className="workflow-card">
          <p className="kicker">A softer workflow</p>
          <h2>From “hello!” to happily paid.</h2>
          <ol>
            <li><b>01</b><span><strong>Capture the inquiry</strong>Keep contact details, service interest and notes together.</span></li>
            <li><b>02</b><span><strong>Shape the project</strong>Send a proposal and turn approved scope into milestones.</span></li>
            <li><b>03</b><span><strong>Keep momentum visible</strong>Track approvals, appointments and what needs your attention.</span></li>
            <li><b>04</b><span><strong>Close the loop</strong>Invoice, follow up and preserve the relationship for what comes next.</span></li>
          </ol>
        </div>
        <aside className="quote-card">
          <span aria-hidden="true">❀</span>
          <p>“Your business can be organized without feeling corporate.”</p>
          <small>DaisyDesk design principle</small>
        </aside>
      </section>

      <section className="pricing section" id="pricing">
        <div className="section-heading">
          <p className="kicker">Simple pricing concept</p>
          <h2>Pick the desk that fits.</h2>
          <div className="billing-toggle" aria-label="Billing period">
            <button className={!yearly ? "selected" : ""} onClick={() => setYearly(false)}>Monthly</button>
            <button className={yearly ? "selected" : ""} onClick={() => setYearly(true)}>Yearly · save 20%</button>
          </div>
        </div>
        <div className="price-grid">
          <article><p>Bud</p><h3>${yearly ? "0" : "0"}<small>/mo</small></h3><p>For trying the workflow.</p><ul><li>3 active clients</li><li>Basic project tracking</li><li>Invoice templates</li></ul><button>Start with Bud</button></article>
          <article className="featured"><span className="pill">Most loved</span><p>Bloom</p><h3>${yearly ? "19" : "24"}<small>/mo</small></h3><p>For growing solo businesses.</p><ul><li>Unlimited clients</li><li>Proposals + appointments</li><li>Automated reminders</li></ul><button>Choose Bloom</button></article>
          <article><p>Garden</p><h3>${yearly ? "39" : "49"}<small>/mo</small></h3><p>For small collaborative teams.</p><ul><li>Up to 5 teammates</li><li>Roles + shared inbox</li><li>Advanced reporting</li></ul><button>Choose Garden</button></article>
        </div>
        <p className="concept-note">Pricing and product details are fictional and shown only to demonstrate web-design and conversion patterns.</p>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-flower" aria-hidden="true">✿</span>DaisyDesk</a>
        <p>Where small businesses keep work blooming.</p>
        <p>Self-directed portfolio concept by Brianna Dickenson.</p>
      </footer>
    </main>
  );
}
