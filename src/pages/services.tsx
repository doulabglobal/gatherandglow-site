import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import HeroBanner from '../components/HeroBanner';

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
    image:
      'https://images.unsplash.com/photo-1481839546006-3228c5bfa635?auto=format&fit=crop&w=1200&q=80',
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
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
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
    image:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
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
        <div className="row">
          <div className="col col--4">
            <h3>1. Share your idea</h3>
            <p>Tell us about your gathering - the occasion, date, guest count, and how you want it to feel.</p>
          </div>
          <div className="col col--4">
            <h3>2. We design the details</h3>
            <p>We curate a concept tailored to your space, style, and budget, and fine-tune it together with you.</p>
          </div>
          <div className="col col--4">
            <h3>3. Enjoy the glow</h3>
            <p>On the day itself, we style and set everything up - so you can simply welcome your guests and enjoy.</p>
          </div>
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
      <HeroBanner
        eyebrow="Services"
        title="From charcuterie spreads to full tablescapes, we curate gatherings that glow."
        subtitle="Choose a signature service or mix-and-match. Every detail is tailored to your guests, space, and story."
        cta={{label: 'Request a proposal', to: '/contact'}}
        note="Serving Zurich & surrounding cantons"
        backgroundImage="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80"
      />
      <main>
        <ServicesGrid />
        <HowItWorks />
        <ServicesCTA />
      </main>
    </Layout>
  );
}
