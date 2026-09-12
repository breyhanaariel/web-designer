"use client";

import { useMemo, useState } from "react";

type Category = "All" | "Jewelry" | "Bags" | "Scarves";

const products = [
  { id: 1, name: "Meadow Lark Pendant", category: "Jewelry", price: 68, motif: "♢", tone: "rose" },
  { id: 2, name: "Fawn Frame Mini", category: "Bags", price: 148, motif: "✦", tone: "moss" },
  { id: 3, name: "Night Finch Silk", category: "Scarves", price: 86, motif: "❦", tone: "plum" },
  { id: 4, name: "Doe Eyes Hoops", category: "Jewelry", price: 54, motif: "◌", tone: "cream" },
  { id: 5, name: "Foxglove Shoulder Bag", category: "Bags", price: 172, motif: "✧", tone: "rust" },
  { id: 6, name: "Woodland Ribbon Silk", category: "Scarves", price: 92, motif: "⌁", tone: "blue" }
] as const;

export default function Home() {
  const [category, setCategory] = useState<Category>("All");
  const [bagCount, setBagCount] = useState(0);
  const [saved, setSaved] = useState<number[]>([]);
  const visible = useMemo(() => category === "All" ? products : products.filter((p) => p.category === category), [category]);

  const toggleSaved = (id: number) => setSaved((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);

  return (
    <main id="top">
      <div className="announcement">Complimentary concept shipping on orders over $125 · Portfolio demo</div>
      <header>
        <button className="menu-button" aria-label="Open menu">☰</button>
        <a href="#top" className="wordmark">FAWN <span>&</span> FINCH</a>
        <nav aria-label="Primary navigation">
          <a href="/collection">New</a><a href="/collection">Shop</a><a href="/about">Our world</a>
        </nav>
        <button className="bag" aria-label={`Shopping bag with ${bagCount} concept items`}>Bag <span>{bagCount}</span></button>
      </header>

      <section className="hero">
        <div className="hero-art" aria-label="Abstract editorial illustration representing woodland-inspired accessories">
          <span className="moon">☾</span>
          <span className="deer">♢</span>
          <div className="arch arch-one"/>
          <div className="arch arch-two"/>
          <p>Collection No. 01</p>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">The Woodland Edit · 2026</p>
          <h1>Wildly<br/><em>lovely</em> things.</h1>
          <p>Small luxuries shaped by feathers, fawns, foxglove and the strange little treasures found just off the path.</p>
          <a className="shop-link" href="/collection">Shop the edit <span>↗</span></a>
        </div>
      </section>

      <section className="manifesto" id="story">
        <p className="eyebrow">Fawn & Finch</p>
        <h2>Animal inspiration,<br/>without the costume.</h2>
        <p>Our concept collection borrows from movement, markings, silhouette and habitat—translated into accessories meant to feel collected, not novelty.</p>
      </section>

      <section className="shop-section" id="shop">
        <div className="shop-heading">
          <div><p className="eyebrow">The collection</p><h2>Objects of affection</h2></div>
          <div className="filters" role="group" aria-label="Filter products by category">
            {(["All","Jewelry","Bags","Scarves"] as Category[]).map((item) => (
              <button key={item} className={category === item ? "active" : ""} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>
            ))}
          </div>
        </div>

        <div className="product-grid" aria-live="polite">
          {visible.map((product) => (
            <article className="product-card" key={product.id}>
              <div className={`product-image ${product.tone}`}>
                <span aria-hidden="true">{product.motif}</span>
                <button className="save" onClick={() => toggleSaved(product.id)} aria-label={saved.includes(product.id) ? `Remove ${product.name} from saved items` : `Save ${product.name}`}>
                  {saved.includes(product.id) ? "♥" : "♡"}
                </button>
              </div>
              <div className="product-meta">
                <div><h3>{product.name}</h3><p>{product.category}</p></div>
                <strong>${product.price}</strong>
              </div>
              <button className="add" onClick={() => setBagCount((count) => count + 1)}>Add to concept bag</button>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial">
        <div className="editorial-copy">
          <p className="eyebrow">Field Notes No. 04</p>
          <h2>How to wear a little wilderness.</h2>
          <p>Pair one expressive motif with quiet texture: brushed metal, soft leather, washed silk, a ribbon tied imperfectly. Let the reference whisper.</p>
          <a href="/journal">Explore the styling edit →</a>
        </div>
        <div className="editorial-art" aria-hidden="true"><span>❦</span><i>finch / fern / fawn</i></div>
      </section>

      <section className="service-strip">
        <div><b>♧</b><span><strong>Considered materials</strong>Concept sourcing notes included</span></div>
        <div><b>✉</b><span><strong>Gift-ready details</strong>Packaging moments designed in</span></div>
        <div><b>↺</b><span><strong>Clear returns</strong>Trust copy before checkout</span></div>
      </section>

      <footer>
        <div><a href="#top" className="wordmark">FAWN <span>&</span> FINCH</a><p>Wildly lovely things.</p></div>
        <div><p className="eyebrow">Portfolio note</p><p>This storefront, products and prices are fictional and exist to demonstrate web-design, merchandising and interaction patterns.</p></div>
        <div><p className="eyebrow">Follow the path</p><a href="/collection">Shop concept</a><a href="/about">Our world</a></div>
      </footer>
    </main>
  );
}
