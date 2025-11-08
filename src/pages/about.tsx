import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import HeroBanner from '../components/HeroBanner';
import Seo from '../components/Seo';

const aboutHeroImages = [
  '/img/hero_about_01.jpg',
  '/img/hero_about_02.jpg',
  '/img/hero_about_03.jpg',
  '/img/hero_about_04.jpg',
  '/img/hero_about_05.jpg',
];

const founders = [
  {
    name: 'Vanessa',
    title: 'The Culinary Explorer',
    bio: 'Our creative force in the kitchen. Vanessa always has a new recipe up her sleeve and a vision for how food can tell a story. She believes every gathering deserves flavours that delight as much as the setting does.',
    image:
      'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Christina',
    title: 'The Organizer',
    bio: 'The steady hand and clear mind behind the scenes. Christina keeps us grounded and focused, making sure every detail flows seamlessly - from concept to celebration.',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Luz',
    title: 'The Dreamer',
    bio: 'Always imagining the next enchanting setup, Luz sees the magic in the small details - the lighting, the colours, the textures - that turn ordinary spaces into glowing experiences.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
];

function AboutIntro() {
  return (
    <section className="margin-vert--xl about-hero">
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <h1>About Gather &amp; Glow</h1>
            <p style={{fontSize: '1.05rem', lineHeight: 1.8}}>
              We create gatherings that glow - modern, timeless, and full of heart.
            </p>
            <p style={{fontSize: '1.05rem', lineHeight: 1.8}}>
              We met where many great collaborations begin - at work. What started as colleagues
              in event planning soon turned into friendship, late-night brainstorming, and the
              shared dream of creating something more meaningful.
            </p>
            <p style={{fontSize: '1.05rem', lineHeight: 1.8}}>
              With a deep passion for connection, beauty, and memorable experiences, we decided to
              take a leap of faith - and so, Gather &amp; Glow was born.
            </p>
          </div>
          <div className="col col--6 about-hero__image">
            <img
              src="/img/about_about_GatherAndGlow.jpg"
              alt="Gather & Glow founders working together"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="margin-vert--lg">
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <p style={{fontSize: '1.05rem', lineHeight: 1.8}}>
              Together, we bring over 15 years of experience in event management and hospitality
              to every project we take on. But more than that, we bring heart, creativity, and the
              belief that the most beautiful moments are often the ones shared around a table, a
              toast, or a laugh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FoundersSection() {
  return (
    <section className="margin-vert--xl founders-section">
      <div className="container">
        <div className="row margin-bottom--lg">
          <div className="col col--8 col--offset-2" style={{textAlign: 'center'}}>
            <h2>Meet the founders</h2>
            <p>
              Three women, one shared vision: creating gatherings that feel as effortless as they
              look - and that stay in your guests&apos; memories long after the last candle is blown out.
            </p>
          </div>
        </div>
        <div className="row founders-grid">
          {founders.map((founder) => (
            <div className="col col--4" key={founder.name}>
              <div className="gg-card gg-card--founder">
                <img
                  src={founder.image}
                  alt={`${founder.name} - ${founder.title}`}
                  className="gg-card__img gg-card__img--portrait"
                  loading="lazy"
                />
                <div className="gg-card__body">
                  <h3>
                    {founder.name} <span>{founder.title}</span>
                  </h3>
                  <p>{founder.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section className="margin-vert--xl">
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <p style={{fontSize: '1.05rem', lineHeight: 1.8}}>
              At Gather &amp; Glow, we&apos;re more than event planners - we&apos;re creators of
              atmosphere and emotion. Whether it&apos;s an intimate dinner, a seasonal gathering,
              or a milestone celebration, we design each experience with modern elegance, timeless
              warmth, and a touch of wonder.
            </p>
            <p style={{fontSize: '1.05rem', lineHeight: 1.8}}>
              <em>Because life&apos;s best moments deserve to glow.</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section className="margin-vert--xl" style={{padding: '3rem 0', textAlign: 'center'}}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h2>Let&apos;s create something beautiful together</h2>
            <p>
              If you&apos;re planning a gathering and want it to feel warm, thoughtful, and
              beautifully styled, we&apos;d love to hear from you.
            </p>
            <Link className="button button--primary button--lg margin-top--md" to="/contact">
              Plan with us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <Layout
      title="About - Gather & Glow"
      description="Learn more about Gather & Glow, a Zurich-based, woman-owned event studio founded by three women with over 15 years of experience in event management and hospitality."
    >
      <Seo
        title="About Gather & Glow"
        description="Meet the women behind Gather & Glow — a Zurich studio combining hospitality expertise with heartfelt styling."
        slug="/about"
        image="/img/hero_about_01.jpg"
        keywords={['about Gather & Glow', 'Zurich women-owned business', 'event stylists', 'founders']}
      />
      <HeroBanner
        eyebrow="Our story"
        title="Gather & Glow was born from friendship, creativity, and countless candlelit nights."
        subtitle="We&apos;re three women turning heartfelt ideas into luminous gatherings across Zurich and beyond."
        cta={{label: 'Plan with us', to: '/contact'}}
        note="Woman-founded | 15+ years of hospitality experience"
        backgroundImages={aboutHeroImages}
      />
      <main>
        <AboutIntro />
        <hr className="section-separator" />
        <ExperienceSection />
        <hr className="section-separator" />
        <FoundersSection />
        <hr className="section-separator" />
        <PhilosophySection />
        <hr className="section-separator" />
        <AboutCTA />
      </main>
    </Layout>
  );
}

