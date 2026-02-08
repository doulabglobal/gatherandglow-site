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
    title: 'Wild One',
    slug: 'wild-one-jungle-party',
    date: 'December 2025',
    location: 'Zurich, Switzerland',
    summary:
      'A playful jungle-themed first birthday with lush greenery, friendly wild animals, and soft green tones.',
    image: '/img/gallery/wild-one-jungle-party/Wild_One_Jungle_Party_1.jpg',
  },
  {
    title: 'Friendsgiving Table',
    slug: 'friendsgiving',
    date: 'November 2025',
    location: 'Eglisau, Switzerland',
    summary:
      'An elegant Friendsgiving table in warm autumn hues, bringing friends together to celebrate connection.',
    image: '/img/gallery/friendsgiving/Friendsgiving_1.jpg',
  },
  {
    title: 'Burgundy Dream',
    slug: 'trending-burgundy-elegance',
    date: 'November 2025',
    location: 'Kloten, Switzerland',
    summary:
      'An elegant at-home dinner with friends, featuring burgundy tones and a rich display of fruit.',
    image: '/img/gallery/trending-burgundy-elegance/Trending_Burgundy_Elegance_1.jpg',
  },
  {
    title: 'Burgundy Birthday',
    slug: 'burgundy-birthday-vibes',
    date: 'October 2025',
    location: 'Zug, Switzerland',
    summary:
      'A cozy autumn birthday apéro in rich burgundy tones with fresh fruit, boards, and a sweet candy bar.',
    image: '/img/gallery/burgundy-birthday-vibes/Burgundy_Birthday_Vibes_1.jpg',
  },
  {
    title: 'Dolce Vita',
    slug: 'dolce-vita-birthday',
    date: 'July 2025',
    location: 'Eglisau, Switzerland',
    summary:
      'An Amalfi Coast–inspired dinner with vibrant colors, signature flavors, curated crafts, and a spritz bar.',
    image: '/img/gallery/dolce-vita-birthday/Dolce_Vita_Birthday_6.jpg',
  },
  {
    title: 'Valentines Birthday',
    slug: 'valentines-birthday',
    date: 'February 2025',
    location: 'Affoltern, Switzerland',
    summary:
      'A Valentine-inspired 14th birthday with creative stations, glitter drinks, a chocolate fountain, and bows.',
    image: '/img/gallery/valentines-birthday/Valentines_Birthday_8.jpg',
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
