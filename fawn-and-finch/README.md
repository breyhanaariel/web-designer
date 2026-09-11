# 🦌 Fawn & Finch — Animal-Inspired Fashion & Accessories

> **Self-Directed Concept Project** — Fawn & Finch is fictional. Products, materials, pricing, shipping details, brand claims, and commerce behavior are created for portfolio demonstration and are not real retail offers.

**Website type:** DTC fashion/accessories e-commerce  
**Role:** Web Designer + Front-End Implementation  
**Stack:** Next.js · React · TypeScript · CSS  
**Status:** Interactive coded concept  
🌐 **Live Site:** Coming Soon  
🎨 **Design:** Coming Soon

## 🌷 Concept

**Fawn & Finch** is an elevated accessories label inspired by animals through **movement, markings, silhouette, habitat, and material**, rather than literal novelty merchandise.

The first collection blends woodland references with editorial styling: jewelry, small bags, and silk scarves.

## 💭 The Design Problem

Animal-inspired fashion can quickly become costume-like or juvenile. This concept explores how a brand can preserve whimsy while presenting itself with enough restraint, art direction, and commercial clarity to feel fashion-led.

## 🎯 Goals

- Build a memorable editorial identity that still supports product discovery.
- Demonstrate merchandising, filtering, wishlist/saved behavior, and cart feedback.
- Keep shopping interactions obvious even when layouts are expressive.
- Give mobile commerce equal design attention.
- Demonstrate CRO thinking without inventing sales results.

## 👥 Intended Audience

A style-conscious shopper attracted to romantic accessories, collectible details, botanical/animal motifs, giftable objects, and independent boutique branding.

This audience is a design assumption, not a researched persona.

## 🗺 Information Architecture

Implemented homepage:
1. Announcement / trust strip
2. Sticky global navigation
3. Editorial collection hero
4. Brand manifesto
5. Filterable product grid
6. Editorial styling story
7. Service/trust strip
8. Brand footer

**Planned expansion:** New Arrivals · Collection · Product Detail · Journal · About · Search · Bag · Checkout handoff.

## 🎨 Art Direction

**Personality:** romantic · curious · collected · editorial · slightly strange  
**Palette:** faded rose · moss · ivory · plum · rust · antique-gold accents  
**Typography:** classic editorial serif + restrained sans-serif metadata  
**Imagery direction:** tactile still life, close crops, shadow play, botanical/animal references without literal costume styling  
**Layout:** magazine-inspired hierarchy balanced by predictable commerce controls

## ✨ Current Interactions

- Filter products by category
- Add concept items to bag count
- Save/unsave favorites
- Sticky navigation
- Responsive product-grid behavior
- Keyboard-operable buttons and links

All product imagery is currently represented by coded abstract art so the site remains functional before final concept photography is produced.

## ♿ Accessibility Approach

- Semantic product articles and headings
- Real buttons for filter, save, and add-to-bag actions
- `aria-pressed` on selected filters
- Dynamic bag control has an accessible label
- Saved controls announce add/remove intent
- Product grid uses `aria-live` when filters change
- Commerce information is not conveyed by color alone
- Reduced-motion preference respected

Target: **WCAG 2.2-informed AA design**, to be audited before final publication.

## 💌 CRO / Merchandising Hypotheses

Potential items to validate with real customers in a real project:
- Editorial storytelling may raise brand desirability, but purchase controls must remain visually predictable.
- Category filtering on the collection surface may reduce product-discovery friction.
- Save/favorite behavior may support consideration for higher-priced accessories.
- Shipping/returns/materials trust messaging near shopping content may reduce uncertainty.

No revenue or conversion improvement is claimed.

## 💻 Run Locally

```bash
cd fawn-and-finch
npm install
npm run dev
```

Open `http://localhost:3002`.

## 🖼 Visuals To Add

- [ ] Editorial campaign hero photography
- [ ] Desktop storefront mockup from the coded site
- [ ] Mobile shopping-flow mockup
- [ ] Product-detail page
- [ ] Bag interaction
- [ ] Fawn & Finch packaging/brand board
- [ ] Component and typography board
- [ ] Final design link
- [ ] Live deployment

## 🌱 Next Iteration

1. Add full product-detail and bag flows.
2. Replace coded placeholder art with original concept campaign imagery.
3. Add product-search and empty/error states.
4. Run responsive, keyboard, accessibility, and Lighthouse QA after deployment.
