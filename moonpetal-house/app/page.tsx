"use client";

import { FormEvent, useState } from "react";

type Escape = "Stay" | "Wellness" | "Table";

const experiences = {
  Stay: { title: "Sleep under a quieter sky.", copy: "Garden rooms, moonlit suites and little rituals left waiting at turndown.", detail: "12 rooms · breakfast included" },
  Wellness: { title: "Return to your own rhythm.", copy: "Herbal bathing, slow massage and private treatments shaped around rest rather than schedules.", detail: "Private rituals · 60–120 min" },
  Table: { title: "Dinner moves with the garden.", copy: "A small seasonal menu, candlelight, local growers and a table that never needs to rush.", detail: "Thursday–Sunday · reservations" }
} as const;

export default function Home() {
  const [escape, setEscape] = useState<Escape>("Stay");
  const [message, setMessage] = useState("");
  const current = experiences[escape];

  const checkAvailability = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("Demo interaction: a live property would now query real room inventory.");
  };

  return (
    <main id="top">
      <header>
        <a className="mark" href="#top" aria-label="Moonpetal House home"><span>☾</span> MOONPETAL HOUSE</a>
        <nav aria-label="Primary navigation"><a href="#stay">Stay</a><a href="#rituals">Rituals</a><a href="#table">Table</a><a href="#journal">Journal</a></nav>
        <a className="book-link" href="#book">Book your stay</a>
      </header>

      <section className="hero">
        <div className="hero-image" aria-label="Abstract moonlit garden artwork representing Moonpetal House">
          <span className="big-moon">☽</span>
          <div className="garden-line g1"/><div className="garden-line g2"/><div className="garden-line g3"/>
          <p>Somewhere between the garden<br/>and the stars.</p>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">A country house for slower days</p>
          <h1>Stay<br/>somewhere<br/><em>softer.</em></h1>
          <p>Moonpetal House is a fictional twelve-room retreat imagined around deep rest, garden suppers, warm water and the luxury of nowhere else to be.</p>
          <a href="#book">Find a room <span>↓</span></a>
        </div>
      </section>

      <section className="booking-bar" id="book">
        <form onSubmit={checkAvailability}>
          <label><span>Arrival</span><input type="date" name="arrival" required/></label>
          <label><span>Departure</span><input type="date" name="departure" required/></label>
          <label><span>Guests</span><select name="guests" defaultValue="2"><option value="1">1 guest</option><option value="2">2 guests</option><option value="3">3 guests</option><option value="4">4 guests</option></select></label>
          <button type="submit">Check availability</button>
        </form>
        {message && <p role="status">{message}</p>}
      </section>

      <section className="intro" id="stay">
        <p className="eyebrow">Welcome home, for a little while</p>
        <h2>Twelve rooms.<br/>One old garden.<br/>No reason to hurry.</h2>
        <p>Designed as an editorial hospitality concept, Moonpetal House pairs quiet luxury with a booking journey that stays clear even when the brand experience becomes immersive.</p>
      </section>

      <section className="escape-section" id="rituals">
        <div className="escape-tabs" role="tablist" aria-label="Explore Moonpetal House">
          {(Object.keys(experiences) as Escape[]).map((item) => (
            <button key={item} role="tab" aria-selected={escape === item} className={escape === item ? "active" : ""} onClick={() => setEscape(item)}>{item}</button>
          ))}
        </div>
        <div className="escape-content">
          <div>
            <p className="eyebrow">{escape} at Moonpetal</p>
            <h2>{current.title}</h2>
            <p>{current.copy}</p>
            <small>{current.detail}</small>
          </div>
          <div className={`escape-art art-${escape.toLowerCase()}`} aria-hidden="true"><span>{escape === "Stay" ? "☾" : escape === "Wellness" ? "≈" : "✿"}</span></div>
        </div>
      </section>

      <section className="rooms">
        <article><div className="room-art room-one"><span>01</span></div><p className="eyebrow">Garden Room</p><h3>The Fern</h3><p>Quiet greens, linen layers and a window seat turned toward the old orchard.</p><a href="#book">View room →</a></article>
        <article><div className="room-art room-two"><span>02</span></div><p className="eyebrow">House Suite</p><h3>The Blue Moon</h3><p>A deep-blue sitting room, soaking bath and the house&apos;s widest view of the night garden.</p><a href="#book">View suite →</a></article>
        <article><div className="room-art room-three"><span>03</span></div><p className="eyebrow">Private Cottage</p><h3>The Dahlia</h3><p>A tiny cottage at the garden edge with its own terrace and outdoor copper tub.</p><a href="#book">View cottage →</a></article>
      </section>

      <section className="table-section" id="table">
        <div className="table-art" aria-hidden="true"><span>✿</span><i>garden supper / 8:14 pm</i></div>
        <div className="table-copy"><p className="eyebrow">At the table</p><h2>What the garden gives us.</h2><p>Fictional menus follow the season: leaves, roots, orchard fruit, local dairy and small plates meant to keep conversation going long after the candles shorten.</p><a href="#book">Reserve a table →</a></div>
      </section>

      <section className="journal" id="journal">
        <p className="eyebrow">Notes from the house</p>
        <div className="journal-grid">
          <article><span>01 / Garden</span><h3>What blooms after dark?</h3><a href="#journal">Read the note →</a></article>
          <article><span>02 / Ritual</span><h3>The case for doing almost nothing.</h3><a href="#journal">Read the note →</a></article>
          <article><span>03 / Table</span><h3>A late-summer supper in three bowls.</h3><a href="#journal">Read the note →</a></article>
        </div>
      </section>

      <footer>
        <div><a className="mark" href="#top"><span>☾</span> MOONPETAL HOUSE</a><h2>Stay somewhere softer.</h2></div>
        <div><p className="eyebrow">Portfolio disclosure</p><p>Moonpetal House is a fictional self-directed concept. The property, rooms, availability, restaurant and experiences are not real bookings.</p></div>
      </footer>
    </main>
  );
}
