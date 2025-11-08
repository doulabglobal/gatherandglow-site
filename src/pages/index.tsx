import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import HeroBanner from '../components/HeroBanner';
import Seo from '../components/Seo';

const homeHeroImages = [
  '/img/hero_index.jpg',
  '/img/hero_index_02.jpg',
  '/img/hero_index_03.jpg',
  '/img/hero_index_04.jpg',
  '/img/hero_index_05.jpg',
];

export default function Home() {
  return (
    <Layout
      title="Gather & Glow"
      description="Zurich-based, woman-owned event studio crafting modern, timeless gatherings."
    >
      <Seo
        title="Gather & Glow | Zurich Event Studio"
        description="Gather & Glow crafts intimate, design-led gatherings in Zurich - charcuterie styling, seasonal bars, and bespoke tablescapes."
        slug="/"
        image="/img/hero_index.jpg"
        preloadImage="/img/hero_index.jpg"
        keywords={['Zurich event planner', 'Gather & Glow', 'tablescaping', 'charcuterie boards', 'seasonal events']}
      />
      <HeroBanner
        eyebrow="Zurich | bespoke event studio"
        title="We create gatherings that glow - modern, timeless, and full of heart."
        subtitle="Gather & Glow is a woman-owned atelier crafting intimate, design-led celebrations, so you can simply enjoy the moment."
        cta={{label: 'Plan your gathering - effortlessly', to: '/contact'}}
        note="15+ years curating elevated moments"
        backgroundImages={homeHeroImages}
      />

      <main>
        {/* === SERVICES SECTION === */}
        <section className="container home-section">
          <h2 className="text--center">Our Services</h2>
          <p className="text--center">
            Discover the art of effortless gatherings. Our curated services bring a touch of
            modern elegance to your everyday moments - designed with care, creativity, and heart.
          </p>

          <div className="row" style={{ marginTop: '2.5rem' }}>
            <div className="col col--4">
              <div className="gg-card">
                <img
                  src="/img/charcuterie_borard.jpg"
                  alt="Charcuterie Boards"
                  className="gg-card__img"
                  loading="lazy"
                />
                <h3>Charcuterie Boards</h3>
                <p>
                  Beautifully styled spreads for 5, 10, 15 or more guests - with seasonal
                  ingredients and elegant presentation.
                </p>
                <Link className="button button--outline button--sm" to="/services">
                  Explore services
                </Link>
              </div>
            </div>

            <div className="col col--4">
              <div className="gg-card">
                <img
                  src="/img/seasonal_bar.jpg"
                  alt="Seasonal Bars & Stations"
                  className="gg-card__img"
                  loading="lazy"
                />
                <h3>Seasonal Bars & Stations</h3>
                <p>
                  Add a little magic to your next event - from hot chocolate bars to floral
                  lemonade stations, designed to delight.
                </p>
                <Link className="button button--outline button--sm" to="/services">
                  Explore services
                </Link>
              </div>
            </div>

            <div className="col col--4">
              <div className="gg-card">
                <img
                  src="/img/tablescaping_home.jpg"
                  alt="Tablescaping at Home"
                  className="gg-card__img"
                  loading="lazy"
                />
                <h3>Tablescaping at Home</h3>
                <p>
                  Transform your dining table into an experience - styled for the season or
                  special occasion, intimate and uniquely yours.
                </p>
                <Link className="button button--outline button--sm" to="/services">
                  Explore services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <hr className="section-separator" />

        {/* === ABOUT SECTION === */}
        <section className="container home-section about-section">
          <div className="about-inner">
            <div className="about-text">
              <h2>About Gather & Glow</h2>
              <p>
                We're three women with over 15 years of combined experience in event management
                and hospitality - passionate about transforming the ordinary into the
                extraordinary.
              </p>
              <p>
                We know how busy life can be, which is why we take care of every detail: from
                cozy dinners and birthdays to baby showers, baptisms, and weddings. Because
                there's no better feeling than seeing someone's eyes light up at something more
                beautiful than they imagined.
              </p>
              <Link className="button button--link" to="/about">
                Meet the founders -
              </Link>
            </div>
            <div className="about-image">
              <img
                src="/img/about_card.jpg"
                alt="About Gather & Glow team"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <hr className="section-separator" />

        {/* === CTA SECTION === */}
        <section className="cta-section">
          <div className="container text--center">
            <h2>Your next moment deserves to glow.</h2>
            <p>
              Tell us about your next gathering - we'll handle the details, so you can simply
              enjoy the moment.
            </p>
            <Link className="button button--primary" to="/contact">
              Start planning with us
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
