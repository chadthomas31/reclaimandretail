const categories = [
  { code: "01", name: "Electronics", detail: "Audio, smart-home gear, accessories and connected devices" },
  { code: "02", name: "Appliances", detail: "Small appliances, floor care and practical home equipment" },
  { code: "03", name: "Home & Kitchen", detail: "Cookware, décor, storage and everyday household essentials" },
  { code: "04", name: "Furniture", detail: "Accent pieces, office furniture, seating and home organization" },
  { code: "05", name: "Clothing", detail: "Seasonal apparel, basics, footwear and accessories" },
  { code: "06", name: "Outdoor & Patio", detail: "Outdoor living, garden supplies, recreation and seasonal gear" },
  { code: "07", name: "Toys & Games", detail: "Family games, kids’ toys, activities and entertainment" },
  { code: "08", name: "General Merchandise", detail: "Unexpected finds and useful products across every department" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Reclaim and Retail home">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span>RECLAIM <b>&amp;</b> RETAIL</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#shop">Shop</a><a href="#process">How it works</a><a href="#about">Our story</a>
        </nav>
        <a className="header-cta" href="#shop">Browse the latest <span>→</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span>New finds. Better prices.</span></p>
          <h1>Give great goods<br />a <em>second story.</em></h1>
          <p className="hero-lede">Quality wholesale and liquidation finds—from electronics and clothing to home goods and more—carefully selected and priced to move.</p>
          <div className="hero-actions">
            <a className="button primary" href="#shop">Shop the latest drop <span>↗</span></a>
            <a className="text-link" href="#process">See how it works <span>↓</span></a>
          </div>
          <div className="trust-row" aria-label="Shopping benefits">
            <span><b>✓</b> Fresh inventory</span><span><b>✓</b> Honest condition notes</span><span><b>✓</b> Direct-to-you pricing</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="A curated mix of reclaimed retail goods">
          <div className="sun" /><div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="product-card headphones"><span className="mini-tag">OPEN BOX</span><div className="headphone-art">◖<i />◗</div><b>Sound find</b><small>Premium audio, reclaimed</small></div>
          <div className="product-card home"><span className="mini-tag">LIKE NEW</span><div className="lamp-art"><i /><b /></div><strong>Home refresh</strong><small>Useful pieces, less waste</small></div>
          <div className="product-card apparel"><span className="mini-tag">NEW DROP</span><div className="shirt-art">♢</div><strong>Wear it again</strong><small>Everyday finds, fair prices</small></div>
          <div className="deal-sticker"><span>GOOD DEALS</span><b>GREAT FINDS</b></div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true"><div>FRESH FINDS <span>✦</span> LIMITED QUANTITIES <span>✦</span> NEW CATEGORIES OFTEN <span>✦</span> LESS WASTE, MORE VALUE <span>✦</span></div></div>

      <section className="section categories" id="shop">
        <div className="section-heading">
          <div><p className="eyebrow dark">Explore the mix</p><h2>You never know what<br /><em>you’ll find.</em></h2></div>
          <p>Our inventory changes with every shipment. That’s the fun of it—useful goods, surprising finds, and standout value all in one place.</p>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <article className="category-card" key={category.name}>
              <span className="category-code" aria-hidden="true">{category.code}</span>
              <div><h3>{category.name}</h3><p>{category.detail}</p></div>
              <a href="mailto:hello@reclaimandretail.online?subject=Inventory%20question" aria-label={`Ask about ${category.name}`}>↗</a>
            </article>
          ))}
        </div>
        <p className="availability-note">Inventory is limited and changes frequently. Items shown represent the types of products we carry, not guaranteed current stock.</p>
      </section>

      <section className="process" id="process">
        <div className="process-intro">
          <p className="eyebrow light">The smarter second chance</p><h2>From return<br />to <em>remarkable.</em></h2>
          <p>We source wholesale and liquidation merchandise—including retailer returns—then make it easy for shoppers to discover its value again.</p>
        </div>
        <ol className="steps">
          <li><span>01</span><div><h3>We source</h3><p>Mixed wholesale and liquidation inventory from trusted channels.</p></div></li>
          <li><span>02</span><div><h3>We sort</h3><p>Products are organized and described so you know what you’re considering.</p></div></li>
          <li><span>03</span><div><h3>You discover</h3><p>Shop changing finds directly online before limited quantities are gone.</p></div></li>
        </ol>
      </section>

      <section className="story" id="about">
        <div className="story-badge"><span>RECLAIM</span><b>REUSE</b><span>REDISCOVER</span></div>
        <div className="story-copy">
          <p className="eyebrow dark">Why we do it</p><h2>More value.<br /><em>Less waste.</em></h2>
          <p>Perfectly useful products deserve more than one chance. Reclaim &amp; Retail connects changing liquidation inventory with people who appreciate a smart buy—keeping more goods in use and more money in your pocket.</p>
          <a className="button ink" href="mailto:hello@reclaimandretail.online?subject=Hello%20Reclaim%20%26%20Retail">Get in touch <span>→</span></a>
        </div>
      </section>

      <section className="newsletter">
        <div><p className="eyebrow light">Don’t miss the good stuff</p><h2>New finds move <em>fast.</em></h2></div>
        <div><p>Want to know when fresh inventory lands? Send us a note and we’ll keep you in the loop.</p><a href="mailto:hello@reclaimandretail.online?subject=Add%20me%20to%20new%20finds">Join the finders list <span>→</span></a></div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><span>RECLAIM <b>&amp;</b> RETAIL</span></a>
        <p>Wholesale finds. Retail joy.<br />Online, direct to you.</p>
        <div><a href="#shop">Shop</a><a href="#process">How it works</a><a href="#about">Our story</a><a href="mailto:hello@reclaimandretail.online">Contact</a></div>
        <small>© 2026 Reclaim &amp; Retail. All rights reserved. Independent reseller; not affiliated with or endorsed by Costco Wholesale Corporation.</small>
      </footer>
    </main>
  );
}
