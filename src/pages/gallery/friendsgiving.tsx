import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import HeroBanner from '../../components/HeroBanner';
import Seo from '../../components/Seo';

const heroImages = [
  '/img/gallery/friendsgiving/Friendsgiving_1.jpg',
  '/img/gallery/friendsgiving/Friendsgiving_3.jpg',
  '/img/gallery/friendsgiving/Friendsgiving_4.jpg',
  '/img/gallery/friendsgiving/Friendsgiving_5.jpg',
];

const galleryImages = [
  '/img/gallery/friendsgiving/Friendsgiving_1.jpg',
  '/img/gallery/friendsgiving/Friendsgiving_3.jpg',
  '/img/gallery/friendsgiving/Friendsgiving_4.jpg',
  '/img/gallery/friendsgiving/Friendsgiving_5.jpg',
];

const galleryVideos = [
  {
    mp4: '/img/gallery/friendsgiving/Friendsgiving_2.mp4',
    webm: '/img/gallery/friendsgiving/Friendsgiving_2.webm',
    poster: '/img/gallery/friendsgiving/Friendsgiving_3.jpg',
  },
];

export default function FriendsgivingGallery() {
  return (
    <Layout
      title="Gallery: Friendsgiving"
      description="An elegant Friendsgiving table in warm autumn hues, celebrating connection and meaningful moments."
    >
      <Seo
        title="Gallery: Friendsgiving | Gather & Glow"
        description="See highlights from Friendsgiving in Eglisau — warm autumn hues, elegant details, and meaningful togetherness."
        slug="/gallery/friendsgiving"
        image="/img/gallery/friendsgiving/Friendsgiving_1.jpg"
        keywords={['friendsgiving table', 'gather and glow gallery', 'autumn celebration']}
        type="article"
      />
      <HeroBanner
        eyebrow="Gallery"
        title="Friendsgiving"
        subtitle="Eglisau · November 2025"
        note="Warm autumn hues, elegant tablescape, heartfelt connection"
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
              An elegant Friendsgiving table in warm autumn hues, bringing friends together to celebrate connection and
              meaningful moments.
            </p>
            <p>
              <strong>DE</strong>
              <br />
              Eine elegante Friendsgiving-Tafel in warmen Herbsttönen, an der Freunde zusammenkommen, um Verbundenheit
              und bedeutungsvolle Momente zu feiern.
            </p>
          </div>
        </div>
        <div className="gallery-detail__grid">
          {galleryImages.map((src, index) => (
            <div key={src} className="gallery-detail__item">
              <img src={src} alt={`Friendsgiving photo ${index + 1}`} loading="lazy" />
            </div>
          ))}
          {galleryVideos.map((video, index) => (
            <div key={video.mp4} className="gallery-detail__item">
              <video
                controls
                playsInline
                preload="metadata"
                poster={video.poster}
                aria-label={`Friendsgiving video ${index + 1}`}
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
