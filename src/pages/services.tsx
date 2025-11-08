import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import HeroBanner from '../components/HeroBanner';
import Seo from '../components/Seo';

const servicesHeroImages = [
  '/img/hero_services_01.jpg',
  '/img/hero_services_02.jpg',
  '/img/hero_services_03.jpg',
  '/img/hero_services_04.jpg',
  '/img/hero_services_05.jpg',
];

const services = [
  {
    title: 'Charcuterie Boards',
    summary:
      'Beautifully styled charcuterie and grazing boards for 5, 10, 15 or more guests - built with seasonal ingredients and elegant presentation.',
    details: [
      'Perfect for cozy gatherings at home, birthdays, aperitifs, or as a centrepiece for your next celebration.',
      'Each board is tailored to your preferences and the mood of the occasion.',
    ],
    ideal: 'Small get-togethers, birthdays, baby showers, brunches, and intimate celebrations.',
    image: '/img/charcueterie_board_services.jpg',
  },
  {
    title: 'Seasonal Bars & Stations',
    summary:
      'Add a little magic to your next event with themed bars and stations that delight guests of all ages.',
    details: [
      'This season, our Hot Chocolate Bar brings warmth and charm - complete with toppings, decor, and glowing details.',
      'We design, style, and set up everything on site, so your guests can simply enjoy the experience.',
    ],
    ideal: 'Winter events, office gatherings, family celebrations, children\'s parties, and seasonal occasions.',
    image: '/img/seasonal_bar_station.jpg',
  },
  {
    title: 'Tablescaping at Home',
    summary:
      'We transform your dining table into an experience - styled for the season or the occasion, and always uniquely yours.',
    details: [
      'From linens and florals to candles and small details, we design a setting that feels both effortless and thoughtful.',
      'Whether it\'s an intimate dinner for two or a gathering with friends, we create an atmosphere that invites connection.',
    ],
    ideal: 'Intimate dinners, celebrations at home, anniversaries, and special moments with up to 12 guests.',
    image: '/img/tablescaping_services.jpg',
  },
];

const howSteps = [
  {
    title: '1. Share your idea',
    copy: 'Tell us about your gathering - the occasion, date, guest count, and how you want it to feel.',
    image: '/img/event_idea.jpg',
  },
  {
    title: '2. We design the details',
    copy: 'We curate a concept tailored to your space, style, and budget, and fine-tune it together with you.',
    image: '/img/design_detail.jpg',
  },
  {
    title: '3. Enjoy the glow',
    copy: 'On the day itself, we style and set everything up - so you can simply welcome your guests and enjoy.',
    image: '/img/enjoy_glow.jpg',
  },
];

function ServicesGrid() {
  return (
    <section className="margin-vert--xl services-grid-section">
      <div className="container">
        <div className="row margin-bottom--lg">
          <div className="col col--8 col--offset-2" style={{textAlign: 'center'}}>
            <h2>Our Services</h2>
            <p>
              Discover the art of effortless gatherings. Our curated services bring a touch of modern elegance to your
              moments - designed with care, creativity, and heart.
            </p>
          </div>
        </div>
        <div className="row services-grid">
          {services.map((service) => (
            <div className="col col--4" key={service.title}>
              <div className="gg-card gg-card--service">
                <img
                  src={service.image}
                  alt={service.title}
                  className="gg-card__img gg-card__img--wide"
                  loading="lazy"
                />
                <div className="gg-card__body">
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  {service.details.map((detail, idx) => (
                    <p key={`${service.title}-${idx}`}>{detail}</p>
                  ))}
                  <p className="gg-card__tag">
                    <strong>Ideal for:</strong> {service.ideal}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="margin-vert--xl" style={{background: 'var(--ifm-color-emphasis-0)', padding: '3rem 0'}}>
      <div className="container">
        <div className="row margin-bottom--lg">
          <div className="col col--8 col--offset-2" style={{textAlign: 'center'}}>
            <h2>How it works</h2>
            <p>We keep the process simple, so you can focus on what matters most: being present with your guests.</p>
          </div>
        </div>
        <div className="row how-grid">
          {howSteps.map((step) => (
            <div className="col col--4" key={step.title}>
              <div className="gg-card gg-card--how">
                <img
                  src={step.image}
                  alt={step.title}
                  className="gg-card__img gg-card__img--how"
                  loading="lazy"
                />
                <div className="gg-card__body">
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesCTA() {
  return (
    <section className="margin-vert--xl">
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2" style={{textAlign: 'center'}}>
            <h2>Ready to plan your next gathering?</h2>
            <p>
              Whether you&apos;re hosting at home, celebrating a milestone, or planning a seasonal event, we&apos;ll help
              you create a setting that feels as effortless as it looks.
            </p>
            <Link className="button button--primary button--lg margin-top--md" to="/contact">
              Request a proposal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <Layout
      title="Services - Gather & Glow"
      description="Explore Gather & Glow's services: charcuterie boards, seasonal bars & stations, and tablescaping at home for intimate gatherings in Zurich and surroundings."
    >
      <Seo
        title="Services | Gather & Glow"
        description="Discover Gather & Glow services: luxe charcuterie boards, seasonal beverage stations, and bespoke tablescaping in Zurich."
        slug="/services"
        image="/img/hero_services_01.jpg"
        keywords={['Zurich services', 'charcuterie Zurich', 'tablescaping', 'event styling', 'seasonal bars']}
      />
      <HeroBanner
        eyebrow="Services"
        title="From charcuterie spreads to full tablescapes, we curate gatherings that glow."
        subtitle="Choose a signature service or mix-and-match. Every detail is tailored to your guests, space, and story."
        cta={{label: 'Request a proposal', to: '/contact'}}
        note="Serving Zurich & surrounding cantons"
        backgroundImages={servicesHeroImages}
      />
      <main>
        <ServicesGrid />
        <hr className="section-separator" />
        <HowItWorks />
        <hr className="section-separator" />
        <ServicesCTA />
      </main>
    </Layout>
  );
}
