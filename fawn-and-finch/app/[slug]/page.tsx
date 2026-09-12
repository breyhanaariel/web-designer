import { notFound } from "next/navigation";

const pages = {
  collection: {
    kicker: "Collection No. 01",
    title: "The Woodland Edit",
    intro: "A shoppable concept collection translating feathers, fawns, foxglove and forest color into restrained accessories.",
    art: "❦",
    cards: [
      ["Meadow Lark Pendant","Jewelry · $68 · A slim pendant with a wing-like negative space."],
      ["Fawn Frame Mini","Bag · $148 · A structured mini bag with softly curved hardware."],
      ["Night Finch Silk","Scarf · $86 · Washed silk with an abstract feather-and-fern print."],
      ["Doe Eyes Hoops","Jewelry · $54 · Oval hoops with small reflective stone details."],
      ["Foxglove Shoulder Bag","Bag · $172 · A compact shoulder bag in a warm foxglove rust."],
      ["Woodland Ribbon Silk","Scarf · $92 · A narrow silk ribbon for hair, neck or bag handles."]
    ]
  },
  search: {
    kicker: "Find your little treasure",
    title: "Search the collection",
    intro: "A search surface that keeps fashion discovery visually quiet and product-focused.",
    art: "⌕",
    cards: []
  },
  about: {
    kicker: "Our world",
    title: "Animal inspiration, without the costume.",
    intro: "Fawn & Finch is a fictional accessories house that borrows from movement, markings, habitat and silhouette rather than literal novelty motifs.",
    art: "♧",
    cards: [
      ["Collected, not themed","References stay subtle enough to mix with an everyday wardrobe."],
      ["Material-led","Silk, brushed metal and leather-like textures shape the visual language."],
      ["Small-batch storytelling","Each collection has a tight motif system rather than an endless catalog."],
      ["Giftable details","Packaging, care and return information are part of the design rather than checkout afterthoughts."]
    ]
  },
  journal: {
    kicker: "Field notes",
    title: "Stories from the edge of the path.",
    intro: "An editorial CMS concept used for styling, materials, collection stories and search-friendly brand content.",
    art: "✒",
    cards: [
      ["How to wear a little wilderness","Pair one expressive motif with quiet texture and simple shapes."],
      ["The color of moss after rain","A palette note on muted greens, damp bark and washed metal."],
      ["Why the finch?","Using small birds as a study in lightness, movement and repetition."],
      ["Gift guide: tiny treasures","A merchandising story organized by gesture rather than price alone."]
    ]
  },
  bag: {
    kicker: "Concept bag",
    title: "A calm last look before checkout.",
    intro: "This demonstration bag shows hierarchy for quantity, shipping reassurance, returns and totals without processing a purchase.",
    art: "◌",
    cards: [
      ["Fawn Frame Mini","$148 · Qty 1"],
      ["Complimentary concept shipping","Unlocked over the fictional $125 threshold."],
      ["Estimated total","$148 · No payment will be collected."]
    ]
  },
  checkout: {
    kicker: "Checkout handoff",
    title: "Trust should get clearer as purchase intent gets higher.",
    intro: "A portfolio-only checkout concept for contact, delivery and payment hierarchy. No card fields or transactions are active.",
    art: "◇",
    cards: []
  }
} as const;

type Slug = keyof typeof pages;
export function generateStaticParams(){ return Object.keys(pages).map((slug)=>({slug})); }

export default async function ShopPage({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params; const page=pages[slug as Slug]; if(!page) notFound();
  return <div className="subpage-shell">
    <header className="subpage-header"><a className="wordmark" href="/">FAWN <span>&</span> FINCH</a><nav className="subpage-nav"><a href="/collection">Shop</a><a href="/journal">Journal</a><a href="/about">Our world</a><a href="/search">Search</a></nav><a href="/bag">Bag</a></header>
    <main className="subpage-main">
      <section className="subpage-hero"><div><p className="subpage-kicker">{page.kicker}</p><h1>{page.title}</h1><p>{page.intro}</p></div><div className="subpage-art" aria-hidden="true">{page.art}</div></section>

      {slug==="search" ? <form className="subpage-form" action="/collection"><label>Search accessories<input name="q" type="search" placeholder="Try silk, bag, finch…" /></label><button className="subpage-button" type="submit">Search concept catalog</button></form>
      : slug==="checkout" ? <><form className="subpage-form" onSubmit={(e)=>e.preventDefault()}><label>Email<input type="email" autoComplete="email" required /></label><label>Country<select defaultValue="United States"><option>United States</option><option>Canada</option><option>United Kingdom</option></select></label><label>Delivery note<textarea placeholder="Portfolio demo — no order will be submitted." /></label><button className="subpage-button" type="submit">Preview order review</button></form><p className="subpage-note">No payment, order, or personal information is transmitted.</p></>
      : <section className="subpage-grid">{page.cards.map(([title,copy],i)=><article className="subpage-card" key={title}><h2>{title}</h2><p>{copy}</p>{slug==="collection" && i<3 ? <a href={i===0?"/product/meadow-lark-pendant":i===1?"/product/fawn-frame-mini":"/product/night-finch-silk"}>View piece →</a>:null}</article>)}</section>}
      <aside className="subpage-cta"><div><p className="subpage-kicker">Fawn & Finch</p><h2>Wildly lovely things.</h2></div><a href="/collection">Return to the collection</a></aside>
    </main><footer className="subpage-footer"><span>Fictional portfolio storefront.</span><a href="/">Back home</a></footer>
  </div>;
}
