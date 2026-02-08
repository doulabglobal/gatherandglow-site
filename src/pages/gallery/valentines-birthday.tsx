import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import HeroBanner from '../../components/HeroBanner';
import Seo from '../../components/Seo';

const heroImages = [
  '/img/gallery/valentines-birthday/Valentines_Birthday_6.jpg',
  '/img/gallery/valentines-birthday/Valentines_Birthday_9.jpg',
  '/img/gallery/valentines-birthday/Valentines_Birthday_12.jpg',
];

const galleryImages = [
  '/img/gallery/valentines-birthday/Valentines_Birthday_1.jpg',
  '/img/gallery/valentines-birthday/Valentines_Birthday_3.jpg',
  '/img/gallery/valentines-birthday/Valentines_Birthday_4.jpg',
  '/img/gallery/valentines-birthday/Valentines_Birthday_5.jpg',
  '/img/gallery/valentines-birthday/Valentines_Birthday_6.jpg',
  '/img/gallery/valentines-birthday/Valentines_Birthday_8.jpg',
  '/img/gallery/valentines-birthday/Valentines_Birthday_9.jpg',
  '/img/gallery/valentines-birthday/Valentines_Birthday_12.jpg',
];

const galleryVideos = [
  {
    mp4: '/img/gallery/valentines-birthday/Valentines_Birthday_7.mp4',
    webm: '/img/gallery/valentines-birthday/Valentines_Birthday_7.webm',
    poster: '/img/gallery/valentines-birthday/Valentines_Birthday_6.jpg',
  },
  {
    mp4: '/img/gallery/valentines-birthday/Valentines_Birthday_10.mp4',
    webm: '/img/gallery/valentines-birthday/Valentines_Birthday_10.webm',
    poster: '/img/gallery/valentines-birthday/Valentines_Birthday_9.jpg',
  },
  {
    mp4: '/img/gallery/valentines-birthday/Valentines_Birthday_11.mp4',
    webm: '/img/gallery/valentines-birthday/Valentines_Birthday_11.webm',
    poster: '/img/gallery/valentines-birthday/Valentines_Birthday_12.jpg',
  },
  {
    mp4: '/img/gallery/valentines-birthday/Valentines_Birthday_13.mp4',
    webm: '/img/gallery/valentines-birthday/Valentines_Birthday_13.webm',
    poster: '/img/gallery/valentines-birthday/Valentines_Birthday_9.jpg',
  },
];

export default function ValentinesBirthdayGallery() {
  return (
    <Layout
      title="Gallery: Valentines Birthday"
      description="A Valentine-inspired 14th birthday celebration with creative stations, glitter drinks, and playful décor."
    >
      <Seo
        title="Gallery: Valentines Birthday | Gather & Glow"
        description="See highlights from Valentines Birthday in Affoltern — creative stations, glitter drinks, and whimsical pink-and-red décor."
        slug="/gallery/valentines-birthday"
        image="/img/gallery/valentines-birthday/Valentines_Birthday_9.jpg"
        keywords={['valentines birthday', 'teen birthday party', 'gather and glow gallery']}
        type="article"
      />
      <HeroBanner
        eyebrow="Gallery"
        title="Valentines Birthday"
        subtitle="Affoltern · February 2025"
        note="Creative stations, glitter drinks, pink-and-red décor"
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
              A Valentine-inspired 14th birthday celebration featuring flower-making, pizza and glass-painting
              stations, custom glitter drinks, a chocolate fountain, and whimsical pink-and-red décor filled with bows
              and hearts.
            </p>
            <p>
              <strong>DE</strong>
              <br />
              Eine vom Valentinstag inspirierte 14.-Geburtstagsfeier mit Blumenbinden, Pizza- und Glasmal-Stationen,
              individuellen Glitzerdrinks, einem Schokoladenbrunnen und verspielter Rosa-Rot-Deko voller Schleifen und
              Herzen.
            </p>
          </div>
        </div>
        <div className="gallery-detail__grid">
          {galleryImages.map((src, index) => (
            <div key={src} className="gallery-detail__item">
              <img src={src} alt={`Valentines Birthday photo ${index + 1}`} loading="lazy" />
            </div>
          ))}
          {galleryVideos.map((video, index) => (
            <div key={video.mp4} className="gallery-detail__item">
              <video
                controls
                playsInline
                preload="metadata"
                poster={video.poster}
                aria-label={`Valentines Birthday video ${index + 1}`}
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
