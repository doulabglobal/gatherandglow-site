import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import HeroBanner from '../../components/HeroBanner';
import Seo from '../../components/Seo';

const galleryHeroImages = [
  '/img/Gallery_Karussell_1.jpg',
  '/img/Gallery_Karussell_2.jpg',
  '/img/Gallery_Karussell_3.jpg',
  '/img/Gallery_Karussell_4.jpg',
];

const galleryEvents = [
  {
    title: 'Autumn Glow Dinner',
    slug: 'autumn-glow-dinner',
    date: 'October 2025',
    location: 'Zurich, Switzerland',
    summary:
      'A cozy harvest-inspired dinner party with layered textiles, warm candlelight, and curated seasonal bites for 18 guests.',
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function GalleryIndex() {
  return (
    <Layout
      title="Gallery - Gather & Glow"
      description="Browse Gather & Glow event galleries featuring intimate dinners, seasonal parties, and bespoke styling."
    >
      <Seo
        title="Gallery | Gather & Glow"
        description="Browse Gather & Glow event galleries featuring intimate dinners, seasonal parties, and bespoke styling."
        slug="/gallery"
        image="/img/Gallery_Karussell_1.jpg"
        keywords={['gather and glow gallery', 'event portfolio', 'zurich gatherings']}
      />
      <HeroBanner
        eyebrow="Gallery"
        title="Every gathering tells a story."
        subtitle="Explore highlights from our favorite events — layered textures, thoughtful tables, and glowing details."
        note="More galleries coming soon"
        backgroundImages={galleryHeroImages}
        cycleIntervalMs={5000}
        respectReducedMotion={false}
      />
      <main className="container margin-vert--xl">
        <div className="row margin-bottom--lg">
          <div className="col col--8 col--offset-2" style={{textAlign: 'center'}}>
            <h1>Event Galleries</h1>
            <p>
              A rotating lookbook of recent projects. Each gallery shares the ambience, palette, and details
              that made the celebration feel uniquely Gather &amp; Glow.
            </p>
          </div>
        </div>
        <div className="row gallery-grid">
          {galleryEvents.map((event) => (
            <div className="col col--4" key={event.slug}>
              <article className="gallery-card">
                <div className="gallery-card__image">
                  <img src={event.image} alt={event.title} loading="lazy" />
                </div>
                <div className="gallery-card__body">
                  <p className="gallery-card__meta">
                    {event.date} · {event.location}
                  </p>
                  <h3>{event.title}</h3>
                  <p>{event.summary}</p>
                  <Link className="button button--secondary button--sm" to={`/gallery/${event.slug}`}>
                    View gallery
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
