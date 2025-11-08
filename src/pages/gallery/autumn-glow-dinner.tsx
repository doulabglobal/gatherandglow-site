import React from 'react';
import Layout from '@theme/Layout';
import HeroBanner from '../../components/HeroBanner';
import Seo from '../../components/Seo';

const heroImages = [
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80&sat=-30',
  'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80&exp=-10',
];

const galleryImages = [
  'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=80&sat=-25',
  'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80&exp=-5',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80&sat=-60',
];

export default function AutumnGlowDinnerGallery() {
  return (
    <Layout
      title="Gallery: Autumn Glow Dinner"
      description="A harvest-inspired dinner party with layered textiles, candlelight, and curated seasonal bites."
    >
      <Seo
        title="Gallery: Autumn Glow Dinner | Gather & Glow"
        description="See highlights from our Autumn Glow Dinner in Zurich — layered linens, bespoke florals, and seasonal bites."
        slug="/gallery/autumn-glow-dinner"
        image="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1600&q=80"
        keywords={['autumn dinner party', 'gather and glow gallery', 'harvest tablescape']}
        type="article"
      />
      <HeroBanner
        eyebrow="Gallery"
        title="Autumn Glow Dinner"
        subtitle="Zurich · October 2025 · 18 guests"
        note="Warm neutrals, hand-tied florals, glowing candle clusters"
        backgroundImages={heroImages}
      />
      <main className="container margin-vert--xl gallery-detail">
        <div className="row margin-bottom--lg">
          <div className="col col--8 col--offset-2">
            <p>
              We transformed a private dining loft into an intimate harvest celebration. Layers of linen, terracotta,
              and brushed brass created a tonal canvas for delicate blooms, seasonal fruit, and candlelight that lasted
              long after dessert.
            </p>
          </div>
        </div>
        <div className="gallery-detail__grid">
          {galleryImages.map((src, index) => (
            <div key={src} className="gallery-detail__item">
              <img src={src} alt={`Autumn Glow Dinner photo ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
