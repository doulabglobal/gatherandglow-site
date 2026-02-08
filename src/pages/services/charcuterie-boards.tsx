import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import HeroBanner from '../../components/HeroBanner';
import Seo from '../../components/Seo';

export default function CharcuterieBoardsPage() {
  return (
    <Layout
      title="Charcuterie Boards - Gather & Glow"
      description="Beautifully styled charcuterie boards with seasonal ingredients and elegant presentation."
    >
      <Seo
        title="Charcuterie Boards | Gather & Glow"
        description="Beautifully styled charcuterie boards for intimate gatherings, crafted with seasonal ingredients."
        slug="/services/charcuterie-boards"
        image="/img/home/charcuterie-home.jpg"
        keywords={['charcuterie boards Zurich', 'grazing boards', 'Gather & Glow services']}
      />
      <HeroBanner
        eyebrow="Service"
        title="Charcuterie Boards"
        subtitle="Seasonal spreads styled for effortless hosting."
        note="Perfect for cozy dinners, birthdays, and celebrations"
        backgroundImage="/img/home/charcuterie-home.jpg"
      />
      <main className="container margin-vert--xl">
        <div className="row margin-bottom--lg">
          <div className="col col--8 col--offset-2">
            <p>
              Our charcuterie boards are thoughtfully composed for 5, 10, 15, or more guests. Each spread is curated
              with seasonal ingredients, balanced textures, and elegant presentation — designed to feel abundant without
              feeling heavy.
            </p>
            <p>
              Choose a board as a beautiful welcome moment, the centerpiece of your gathering, or a grazing addition to
              a styled table. We adapt the styling to your palette and the occasion.
            </p>
            <p><strong>What&apos;s included</strong></p>
            <p>Seasonal ingredient selection and styling.</p>
            <p>Scaled for intimate dinners or larger gatherings.</p>
            <p>Optional add-ons: florals, candles, or table accents.</p>
            <div style={{marginTop: '1.5rem'}}>
              <Link className="button button--primary" to="/contact">
                Inquire about boards
              </Link>
              <Link className="button button--link" to="/services" style={{marginLeft: '1rem'}}>
                View all services
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
