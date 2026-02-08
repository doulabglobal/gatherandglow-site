import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import HeroBanner from '../../components/HeroBanner';
import Seo from '../../components/Seo';

export default function SeasonalBarsStationsPage() {
  return (
    <Layout
      title="Seasonal Bars & Stations - Gather & Glow"
      description="Playful, styled beverage and snack stations that bring instant delight."
    >
      <Seo
        title="Seasonal Bars & Stations | Gather & Glow"
        description="Seasonal bars and stations designed to delight — from hot chocolate to floral lemonade."
        slug="/services/seasonal-bars-stations"
        image="/img/home/seasonal-bars-home.jpg"
        keywords={['seasonal bar stations', 'event styling Zurich', 'Gather & Glow services']}
      />
      <HeroBanner
        eyebrow="Service"
        title="Seasonal Bars & Stations"
        subtitle="Interactive moments that turn gathering into memory."
        note="Designed around the season and your celebration"
        backgroundImage="/img/home/seasonal-bars-home.jpg"
      />
      <main className="container margin-vert--xl">
        <div className="row margin-bottom--lg">
          <div className="col col--8 col--offset-2">
            <p>
              From hot chocolate bars and mulled wine moments to floral lemonade and spritz stations, we create
              interactive corners that invite guests to pause, pour, and enjoy. Each station is styled to match your
              palette and the feeling you want to set.
            </p>
            <p>
              These setups work beautifully for birthdays, seasonal gatherings, baby showers, and corporate events —
              adding a playful touch without overwhelming the space.
            </p>
            <p><strong>What&apos;s included</strong></p>
            <p>Seasonal beverage and garnish styling.</p>
            <p>Custom signage, vessels, and serving details.</p>
            <p>Optional add-ons: florals, candles, or themed décor.</p>
            <div style={{marginTop: '1.5rem'}}>
              <Link className="button button--primary" to="/contact">
                Plan a station
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
