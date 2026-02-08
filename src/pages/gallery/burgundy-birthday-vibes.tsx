import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import HeroBanner from '../../components/HeroBanner';
import Seo from '../../components/Seo';

const heroImages = [
  '/img/gallery/burgundy-birthday-vibes/Burgundy_Birthday_Vibes_1.jpg',
  '/img/gallery/burgundy-birthday-vibes/Burgundy_Birthday_Vibes_4.jpg',
  '/img/gallery/burgundy-birthday-vibes/Burgundy_Birthday_Vibes_6.jpg',
];

const galleryImages = [
  '/img/gallery/burgundy-birthday-vibes/Burgundy_Birthday_Vibes_1.jpg',
  '/img/gallery/burgundy-birthday-vibes/Burgundy_Birthday_Vibes_4.jpg',
  '/img/gallery/burgundy-birthday-vibes/Burgundy_Birthday_Vibes_6.jpg',
];

const galleryVideos = [
  {
    mp4: '/img/gallery/burgundy-birthday-vibes/Burgundy_Birthday_Vibes_2.mp4',
    webm: '/img/gallery/burgundy-birthday-vibes/Burgundy_Birthday_Vibes_2.webm',
    poster: '/img/gallery/burgundy-birthday-vibes/Burgundy_Birthday_Vibes_4.jpg',
  },
  {
    mp4: '/img/gallery/burgundy-birthday-vibes/Burgundy_Birthday_Vibes_5.mp4',
    webm: '/img/gallery/burgundy-birthday-vibes/Burgundy_Birthday_Vibes_5.webm',
    poster: '/img/gallery/burgundy-birthday-vibes/Burgundy_Birthday_Vibes_4.jpg',
  },
  {
    mp4: '/img/gallery/burgundy-birthday-vibes/Burgundy_Birthday_Vibes_7_Repeat.mp4',
    webm: '/img/gallery/burgundy-birthday-vibes/Burgundy_Birthday_Vibes_7_Repeat.webm',
    poster: '/img/gallery/burgundy-birthday-vibes/Burgundy_Birthday_Vibes_6.jpg',
  },
];

export default function BurgundyBirthdayVibesGallery() {
  return (
    <Layout
      title="Gallery: Burgundy Birthday Vibes"
      description="A cozy autumn birthday apéro in rich burgundy tones with fruit-forward details and a sweet candy bar."
    >
      <Seo
        title="Gallery: Burgundy Birthday Vibes | Gather & Glow"
        description="See highlights from Burgundy Birthday Vibes in Zug — rich burgundy hues, seasonal fruit, and a sweet candy bar."
        slug="/gallery/burgundy-birthday-vibes"
        image="/img/gallery/burgundy-birthday-vibes/Burgundy_Birthday_Vibes_1.jpg"
        keywords={['burgundy birthday', 'gather and glow gallery', 'autumn apero']}
        type="article"
      />
      <HeroBanner
        eyebrow="Gallery"
        title="Burgundy Birthday Vibes"
        subtitle="Zug · October 2025"
        note="Rich burgundy tones, fruit-forward details, and a sweet candy bar"
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
              A cozy autumn birthday apéro in rich burgundy tones, featuring fresh fruit, charcuterie boards, and a
              sweet little candy bar.
            </p>
            <p>
              <strong>DE</strong>
              <br />
              Ein gemütlicher Herbst-Geburtstagsapéro in satten Burgundertönen mit frischem Obst,
              Charcuterie-Boards und einer süßen kleinen Candy Bar.
            </p>
          </div>
        </div>
        <div className="gallery-detail__grid">
          {galleryImages.map((src, index) => (
            <div key={src} className="gallery-detail__item">
              <img src={src} alt={`Burgundy Birthday Vibes photo ${index + 1}`} loading="lazy" />
            </div>
          ))}
          {galleryVideos.map((video, index) => (
            <div key={video.mp4} className="gallery-detail__item">
              <video
                controls
                playsInline
                preload="metadata"
                poster={video.poster}
                aria-label={`Burgundy Birthday Vibes video ${index + 1}`}
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
