import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import HeroBanner from '../../components/HeroBanner';
import Seo from '../../components/Seo';

const heroImages = [
  '/img/gallery/dolce-vita-birthday/Dolce_Vita_Birthday_9.jpg',
  '/img/gallery/dolce-vita-birthday/Dolce_Vita_Birthday_10.jpg',
  '/img/gallery/dolce-vita-birthday/Dolce_Vita_Birthday_11.jpg',
  '/img/gallery/dolce-vita-birthday/Dolce_Vita_Birthday_13.jpg',
];

const galleryImages = [
  '/img/gallery/dolce-vita-birthday/Dolce_Vita_Birthday_1.jpg',
  '/img/gallery/dolce-vita-birthday/Dolce_Vita_Birthday_2.jpg',
  '/img/gallery/dolce-vita-birthday/Dolce_Vita_Birthday_3.jpg',
  '/img/gallery/dolce-vita-birthday/Dolce_Vita_Birthday_4.jpg',
  '/img/gallery/dolce-vita-birthday/Dolce_Vita_Birthday_5.jpg',
  '/img/gallery/dolce-vita-birthday/Dolce_Vita_Birthday_6.jpg',
  '/img/gallery/dolce-vita-birthday/Dolce_Vita_Birthday_8.jpg',
  '/img/gallery/dolce-vita-birthday/Dolce_Vita_Birthday_9.jpg',
  '/img/gallery/dolce-vita-birthday/Dolce_Vita_Birthday_10.jpg',
  '/img/gallery/dolce-vita-birthday/Dolce_Vita_Birthday_11.jpg',
  '/img/gallery/dolce-vita-birthday/Dolce_Vita_Birthday_12.jpg',
  '/img/gallery/dolce-vita-birthday/Dolce_Vita_Birthday_13.jpg',
];

const galleryVideos = [
  {
    mp4: '/img/gallery/dolce-vita-birthday/Dolce_Vita_Birthday_7.mp4',
    webm: '/img/gallery/dolce-vita-birthday/Dolce_Vita_Birthday_7.webm',
    poster: '/img/gallery/dolce-vita-birthday/Dolce_Vita_Birthday_10.jpg',
  },
];

export default function DolceVitaBirthdayGallery() {
  return (
    <Layout
      title="Gallery: Dolce Vita Birthday"
      description="An Amalfi Coast–inspired dinner party featuring vibrant colors, rich aromas, signature flavors, and a Spritz bar."
    >
      <Seo
        title="Gallery: Dolce Vita Birthday | Gather & Glow"
        description="See highlights from Dolce Vita Birthday in Eglisau — Amalfi Coast colors, citrus details, and a Limoncello & Aperol Spritz bar."
        slug="/gallery/dolce-vita-birthday"
        image="/img/gallery/dolce-vita-birthday/Dolce_Vita_Birthday_9.jpg"
        keywords={['dolce vita birthday', 'amalfi dinner party', 'gather and glow gallery']}
        type="article"
      />
      <HeroBanner
        eyebrow="Gallery"
        title="Dolce Vita Birthday"
        subtitle="Eglisau · July 2025"
        note="Vibrant Amalfi colors, citrus details, and a spritz bar"
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
              An Amalfi Coast–inspired dinner party featuring vibrant colors, rich aromas, signature flavors, curated
              crafts, and a Limoncello and Aperol Spritz bar.
            </p>
            <p>
              <strong>DE</strong>
              <br />
              Ein vom Amalfi-Küstenstil inspiriertes Dinner mit lebendigen Farben, reichen Aromen, typischen
              Geschmacksnoten, kuratierten Bastelstationen sowie einer Limoncello- und Aperol-Spritz-Bar.
            </p>
          </div>
        </div>
        <div className="gallery-detail__grid">
          {galleryImages.map((src, index) => (
            <div key={src} className="gallery-detail__item">
              <img src={src} alt={`Dolce Vita Birthday photo ${index + 1}`} loading="lazy" />
            </div>
          ))}
          {galleryVideos.map((video, index) => (
            <div key={video.mp4} className="gallery-detail__item">
              <video
                controls
                playsInline
                preload="metadata"
                poster={video.poster}
                aria-label={`Dolce Vita Birthday video ${index + 1}`}
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
