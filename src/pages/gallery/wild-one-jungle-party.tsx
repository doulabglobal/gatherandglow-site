import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import HeroBanner from '../../components/HeroBanner';
import Seo from '../../components/Seo';

const heroImages = [
  '/img/gallery/wild-one-jungle-party/Wild_One_Jungle_Party_1.jpg',
  '/img/gallery/wild-one-jungle-party/Wild_One_Jungle_Party_2.jpg',
  '/img/gallery/wild-one-jungle-party/Wild_One_Jungle_Party_5.jpg',
];

const galleryImages = [
  '/img/gallery/wild-one-jungle-party/Wild_One_Jungle_Party_1.jpg',
  '/img/gallery/wild-one-jungle-party/Wild_One_Jungle_Party_2.jpg',
  '/img/gallery/wild-one-jungle-party/Wild_One_Jungle_Party_5.jpg',
];

const galleryVideos = [
  {
    mp4: '/img/gallery/wild-one-jungle-party/Wild_One_Jungle_Party_3_repeat.mp4',
    webm: '/img/gallery/wild-one-jungle-party/Wild_One_Jungle_Party_3_repeat.webm',
    poster: '/img/gallery/wild-one-jungle-party/Wild_One_Jungle_Party_2.jpg',
  },
  {
    mp4: '/img/gallery/wild-one-jungle-party/Wild_One_Jungle_Party_4.mp4',
    webm: '/img/gallery/wild-one-jungle-party/Wild_One_Jungle_Party_4.webm',
    poster: '/img/gallery/wild-one-jungle-party/Wild_One_Jungle_Party_5.jpg',
  },
];

export default function WildOneJunglePartyGallery() {
  return (
    <Layout
      title="Gallery: Wild One Jungle Party"
      description="A playful yet gentle jungle-themed first birthday celebration with lush greenery and soft green tones."
    >
      <Seo
        title="Gallery: Wild One Jungle Party | Gather & Glow"
        description="See highlights from Wild One Jungle Party in Zurich — lush greenery, friendly wild animals, and soft green tones."
        slug="/gallery/wild-one-jungle-party"
        image="/img/gallery/wild-one-jungle-party/Wild_One_Jungle_Party_1.jpg"
        keywords={['jungle party', 'first birthday styling', 'gather and glow gallery']}
        type="article"
      />
      <HeroBanner
        eyebrow="Gallery"
        title="Wild One Jungle Party"
        subtitle="Zurich · December 2025"
        note="Lush greenery, friendly wild animals, soft green tones"
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
              A playful yet gentle jungle-themed first birthday celebration with lush greenery, friendly wild animals,
              and a child-friendly design in soft green tones.
            </p>
            <p>
              <strong>DE</strong>
              <br />
              Eine verspielte Dschungel-Mottoparty zum ersten Geburtstag mit freundlichen wilden Tieren und
              kindgerechtem Design in sanften Grüntönen.
            </p>
          </div>
        </div>
        <div className="gallery-detail__grid">
          {galleryImages.map((src, index) => (
            <div key={src} className="gallery-detail__item">
              <img src={src} alt={`Wild One Jungle Party photo ${index + 1}`} loading="lazy" />
            </div>
          ))}
          {galleryVideos.map((video, index) => (
            <div key={video.mp4} className="gallery-detail__item">
              <video
                controls
                playsInline
                preload="metadata"
                poster={video.poster}
                aria-label={`Wild One Jungle Party video ${index + 1}`}
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
