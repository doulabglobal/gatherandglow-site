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
    title: 'Burgundy Birthday Vibes',
    slug: 'burgundy-birthday-vibes',
    date: 'October 2025',
    location: 'Zug, Switzerland',
    summary:
      'A cozy autumn birthday apéro in rich burgundy tones, featuring fresh fruit, charcuterie boards, and a sweet little candy bar.',
    image: '/img/gallery/burgundy-birthday-vibes/Burgundy_Birthday_Vibes_1.jpg',
  },
  {
    title: 'Friendsgiving',
    slug: 'friendsgiving',
    date: 'November 2025',
    location: 'Eglisau, Switzerland',
    summary:
      'An elegant Friendsgiving table in warm autumn hues, bringing friends together to celebrate connection and meaningful moments.',
    image: '/img/gallery/friendsgiving/Friendsgiving_1.jpg',
  },
  {
    title: 'Trending Burgundy Elegance',
    slug: 'trending-burgundy-elegance',
    date: 'November 2025',
    location: 'Kloten, Switzerland',
    summary:
      'An elegant at-home dinner table with friends, featuring the trending burgundy color and a rich display of fruits for a luxurious and inviting ambiance.',
    image: '/img/gallery/trending-burgundy-elegance/Trending_Burgundy_Elegance_1.jpg',
  },
  {
    title: 'Wild One Jungle Party',
    slug: 'wild-one-jungle-party',
    date: 'December 2025',
    location: 'Zurich, Switzerland',
    summary:
      'A playful yet gentle jungle-themed first birthday celebration with lush greenery, friendly wild animals, and a child-friendly design in soft green tones.',
    image: '/img/gallery/wild-one-jungle-party/Wild_One_Jungle_Party_1.jpg',
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
