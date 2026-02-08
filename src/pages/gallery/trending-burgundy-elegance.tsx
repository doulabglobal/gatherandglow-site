import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import HeroBanner from '../../components/HeroBanner';
import Seo from '../../components/Seo';

const heroImages = [
  '/img/gallery/trending-burgundy-elegance/Trending_Burgundy_Elegance_1.jpg',
  '/img/gallery/trending-burgundy-elegance/Trending_Burgundy_Elegance_3.jpg',
  '/img/gallery/trending-burgundy-elegance/Trending_Burgundy_Elegance_4.jpg',
  '/img/gallery/trending-burgundy-elegance/Trending_Burgundy_Elegance_5.jpg',
];

const galleryImages = [
  '/img/gallery/trending-burgundy-elegance/Trending_Burgundy_Elegance_1.jpg',
  '/img/gallery/trending-burgundy-elegance/Trending_Burgundy_Elegance_3.jpg',
  '/img/gallery/trending-burgundy-elegance/Trending_Burgundy_Elegance_4.jpg',
  '/img/gallery/trending-burgundy-elegance/Trending_Burgundy_Elegance_5.jpg',
];

const galleryVideos = [
  {
    mp4: '/img/gallery/trending-burgundy-elegance/Trending_Burgundy_Elegance_2.mp4',
    webm: '/img/gallery/trending-burgundy-elegance/Trending_Burgundy_Elegance_2.webm',
    poster: '/img/gallery/trending-burgundy-elegance/Trending_Burgundy_Elegance_3.jpg',
  },
  {
    mp4: '/img/gallery/trending-burgundy-elegance/Trending_Burgundy_Elegance_6.mp4',
    webm: '/img/gallery/trending-burgundy-elegance/Trending_Burgundy_Elegance_6.webm',
    poster: '/img/gallery/trending-burgundy-elegance/Trending_Burgundy_Elegance_4.jpg',
  },
];

export default function TrendingBurgundyEleganceGallery() {
  return (
    <Layout
      title="Gallery: Trending Burgundy Elegance"
      description="An elegant at-home dinner table featuring the trending burgundy color and a rich display of fruits."
    >
      <Seo
        title="Gallery: Trending Burgundy Elegance | Gather & Glow"
        description="See highlights from Trending Burgundy Elegance in Kloten — burgundy tones, lush fruit styling, and an inviting dinner table."
        slug="/gallery/trending-burgundy-elegance"
        image="/img/gallery/trending-burgundy-elegance/Trending_Burgundy_Elegance_1.jpg"
        keywords={['burgundy dinner table', 'gather and glow gallery', 'luxury tablescape']}
        type="article"
      />
      <HeroBanner
        eyebrow="Gallery"
        title="Trending Burgundy Elegance"
        subtitle="Kloten · November 2025"
        note="Burgundy tones, lush fruit styling, elegant at-home dinner"
        backgroundImages={heroImages}
      />
      <main className="container margin-vert--xl gallery-detail">
        <div className="row margin-bottom--lg">
          <div className="col col--8 col--offset-2">
            <Link to="/gallery" className="button button--secondary button--sm">
              Return to gallery
            </Link>
          </div>
        </div>
        <div className="row margin-bottom--lg">
          <div className="col col--8 col--offset-2">
            <p>
              <strong>EN</strong>
              <br />
              An elegant at-home dinner table with friends, featuring the trending burgundy color and a rich display of
              fruits for a luxurious and inviting ambiance.
            </p>
            <p>
              <strong>DE</strong>
              <br />
              Ein eleganter Dinner-Tisch zu Hause, bei dem die angesagte Trendfarbe Burgunder und eine üppige
              Früchteauswahl eine luxuriöse und einladende Atmosphäre schaffen.
            </p>
          </div>
        </div>
        <div className="gallery-detail__grid">
          {galleryImages.map((src, index) => (
            <div key={src} className="gallery-detail__item">
              <img src={src} alt={`Trending Burgundy Elegance photo ${index + 1}`} loading="lazy" />
            </div>
          ))}
          {galleryVideos.map((video, index) => (
            <div key={video.mp4} className="gallery-detail__item">
              <video
                controls
                playsInline
                preload="metadata"
                poster={video.poster}
                aria-label={`Trending Burgundy Elegance video ${index + 1}`}
              >
                <source src={video.webm} type="video/webm" />
                <source src={video.mp4} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
