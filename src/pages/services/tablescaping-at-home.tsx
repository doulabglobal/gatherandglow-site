import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import HeroBanner from '../../components/HeroBanner';
import Seo from '../../components/Seo';

export default function TablescapingAtHomePage() {
  return (
    <Layout
      title="Tablescaping at Home - Gather & Glow"
      description="Transform your dining table into an experience styled for the season or occasion."
    >
      <Seo
        title="Tablescaping at Home | Gather & Glow"
        description="Bespoke tablescaping that transforms your dining table into a seasonal, intimate experience."
        slug="/services/tablescaping-at-home"
        image="/img/home/tablescaping-home.jpg"
        keywords={['tablescaping Zurich', 'tablescape styling', 'Gather & Glow services']}
      />
      <HeroBanner
        eyebrow="Service"
        title="Tablescaping at Home"
        subtitle="A dining table that feels like a destination."
        note="Styled for intimate dinners, celebrations, and milestones"
        backgroundImage="/img/home/tablescaping-home.jpg"
      />
      <main className="container margin-vert--xl">
        <div className="row margin-bottom--lg">
          <div className="col col--8 col--offset-2">
            <p>
              We transform your table into a thoughtful, immersive setting — layered linens, curated place settings,
              seasonal accents, and soft candlelight. Every detail is tailored to the season, your home, and your
              celebration.
            </p>
            <p>
              Whether you&apos;re hosting an intimate dinner or a special milestone, our tablescaping brings warmth,
              intention, and effortless elegance to the moment.
            </p>
            <p><strong>What&apos;s included</strong></p>
            <p>Curated tabletop styling with linens, florals, and accents.</p>
            <p>Place settings, candles, and seasonal details.</p>
            <p>Optional add-ons: menu cards, favors, or themed décor.</p>
            <div style={{marginTop: '1.5rem'}}>
              <Link className="button button--primary" to="/contact">
                Plan a tablescape
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
