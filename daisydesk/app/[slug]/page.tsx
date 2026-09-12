import { notFound } from "next/navigation";

const pages = {
  features: {
    kicker: "Product tour",
    title: "Everything your client work needs, without the clutter.",
    intro: "DaisyDesk groups the small-business workflow into a few calm, predictable places so leads, projects, appointments and money stay connected.",
    art: "✿",
    cards: [
      ["Lead Garden","Capture new inquiries, next steps and follow-up dates in one visible pipeline."],
      ["Project Petals","Turn approved work into milestones, tasks, approvals and client-facing progress."],
      ["Money Meadow","Connect proposals, invoices and payment status to the clients and projects they belong to."],
      ["Calendar Patch","Keep appointments, deadlines and reminders visible without building a second calendar system."],
      ["Client Notes","Store practical context, preferences and conversation history beside the relationship."],
      ["Gentle Automations","Use simple reminders for follow-ups, invoices and upcoming approvals without robotic overreach."]
    ]
  },
  solutions: {
    kicker: "Made for service businesses",
    title: "A client workflow that adapts to the way you actually work.",
    intro: "The concept is designed for small teams and solo professionals who sell expertise, appointments or creative services rather than inventory.",
    art: "❀",
    cards: [
      ["Creative studios","Proposals, milestones, approvals and recurring client work."],
      ["Photographers","Inquiry tracking, session dates, deliverables and payment follow-up."],
      ["Beauty professionals","Appointments, client notes, service packages and deposits."],
      ["Consultants","Lead qualification, project scope, meetings and invoice status."],
      ["Event professionals","Timelines, approvals, vendors and payment milestones."],
      ["Freelancers","A lightweight home for clients without enterprise CRM complexity."]
    ]
  },
  pricing: {
    kicker: "Simple pricing concept",
    title: "Start small. Add structure when you need it.",
    intro: "These fictional plans demonstrate SaaS pricing hierarchy. No subscriptions are offered.",
    art: "$",
    cards: [
      ["Bud — $0/mo","3 active clients, basic project tracking and invoice templates."],
      ["Bloom — $24/mo","Unlimited clients, proposals, appointments and automated reminders."],
      ["Garden — $49/mo","Up to five teammates, shared inbox, roles and advanced reporting."]
    ]
  },
  resources: {
    kicker: "Resource garden",
    title: "Useful ideas for running client work more calmly.",
    intro: "A CMS-ready editorial surface for practical small-business content, onboarding education and organic search.",
    art: "☼",
    cards: [
      ["The gentle follow-up","A practical framework for checking in without sounding automated."],
      ["What belongs in a client portal?","A simple content model for approvals, files and project status."],
      ["Invoice clarity checklist","Small copy and hierarchy choices that make payment instructions easier to act on."],
      ["From inquiry to kickoff","A sample service-business lifecycle mapped to the DaisyDesk product story."],
      ["When not to automate","Where a human message is worth more than another workflow rule."],
      ["Client offboarding that leaves the door open","How to close work clearly and preserve the relationship."]
    ]
  },
  "customer-story": {
    kicker: "Illustrative scenario",
    title: "How a tiny studio could simplify a messy client week.",
    intro: "This is a fictional workflow scenario—not a testimonial or measured customer result. It demonstrates how DaisyDesk content could tell a product story without inventing evidence.",
    art: "☕",
    cards: [
      ["Monday","A new inquiry arrives and is added to Lead Garden with a follow-up date."],
      ["Tuesday","The proposal is accepted and becomes a project with two approval milestones."],
      ["Thursday","The client approves the first direction and the next invoice is scheduled."],
      ["Friday","The studio closes the week with every next step visible on the Today view."]
    ]
  },
  about: {
    kicker: "Why DaisyDesk",
    title: "Business software can be capable without feeling corporate.",
    intro: "DaisyDesk is a self-directed portfolio concept built to explore a softer visual language for serious client operations.",
    art: "🌼",
    cards: [
      ["Design principle 01","Clarity before decoration."],
      ["Design principle 02","Warmth without infantilizing the user."],
      ["Design principle 03","Business language people actually use."],
      ["Design principle 04","Visible next steps instead of dashboard noise."]
    ]
  },
  demo: {
    kicker: "Demo request",
    title: "See how DaisyDesk could fit a small client business.",
    intro: "This form is a portfolio interaction demo. It does not send data or create an account.",
    art: "✉",
    cards: []
  }
} as const;

type Slug = keyof typeof pages;

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export default async function DaisySubpage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug as Slug];
  if (!page) notFound();

  return <div className="subpage-shell">
    <header className="subpage-header">
      <a className="brand" href="/"><span className="brand-flower" aria-hidden="true">✿</span>DaisyDesk</a>
      <nav className="subpage-nav" aria-label="DaisyDesk pages">
        <a href="/features">Features</a><a href="/solutions">Solutions</a><a href="/pricing">Pricing</a><a href="/resources">Resources</a><a href="/about">About</a>
      </nav>
      <a className="button button-small" href="/demo">Book a demo</a>
    </header>
    <main className="subpage-main">
      <section className="subpage-hero">
        <div><p className="subpage-kicker">{page.kicker}</p><h1>{page.title}</h1><p>{page.intro}</p></div>
        <div className="subpage-art" aria-hidden="true">{page.art}</div>
      </section>

      {slug === "demo" ? <>
        <form className="subpage-form" onSubmit={(e) => e.preventDefault()}>
          <label>Name<input name="name" autoComplete="name" required /></label>
          <label>Work email<input name="email" type="email" autoComplete="email" required /></label>
          <label>Business type<select name="type" defaultValue="Creative studio"><option>Creative studio</option><option>Photography</option><option>Beauty / wellness</option><option>Consulting</option><option>Other service business</option></select></label>
          <label>What would you want to organize?<textarea name="needs" /></label>
          <button className="subpage-button" type="submit">Preview request flow</button>
        </form>
        <p className="subpage-note">Portfolio demo only. No information is transmitted or stored.</p>
      </> : <section className="subpage-grid">
        {page.cards.map(([title, copy]) => <article className="subpage-card" key={title}><h2>{title}</h2><p>{copy}</p></article>)}
      </section>}

      <aside className="subpage-cta"><div><p className="subpage-kicker">DaisyDesk concept</p><h2>Keep the work blooming.</h2></div><a href="/demo">Explore the demo flow</a></aside>
    </main>
    <footer className="subpage-footer"><span>Self-directed concept by Brianna Dickenson.</span><a href="/">Back to DaisyDesk home</a></footer>
  </div>;
}
