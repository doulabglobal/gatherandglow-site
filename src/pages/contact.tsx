import React from 'react';
import Layout from '@theme/Layout';
import HeroBanner from '../components/HeroBanner';

function ContactIntro() {
  return (
    <section className="margin-vert--xl">
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Contact</h1>
            <p style={{fontSize: '1.05rem', lineHeight: 1.8}}>
              Tell us about your next gathering - we'll take care of the rest.
            </p>
            <p style={{fontSize: '1.05rem', lineHeight: 1.8}}>
              Whether it's a cozy dinner at home, a seasonal celebration, or a special milestone,
              we'll help you create an experience that feels as effortless as it looks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactFormSection() {
  return (
    <section className="margin-vert--lg">
      <div className="container">
        <div className="row">
          {/* Text / reassurance */}
          <div className="col col--5">
            <h2>Let's start planning</h2>
            <p>
              Share a few details below and we'll get back to you with next steps and ideas
              tailored to your gathering.
            </p>
            <p>
              <strong>No obligation</strong> - just a friendly conversation to see what's possible.
            </p>
            <p>
              We usually respond within <strong>1-2 business days</strong>.
            </p>
            <p style={{marginTop: '1.5rem'}}>
              Prefer email? You can also reach us at:{' '}
              <a href="mailto:hello@gatherandglow.ch">hello@gatherandglow.ch</a>
            </p>
          </div>

          {/* Form */}
          <div className="col col--7">
            {/* 
              NOTE: For now, the form does not submit anywhere (action="#").
              Later, we can connect this to Formspree, a backend route, or Cloudflare Workers.
            */}
            <form
              id="contact-form"
              action="#"
              method="post"
              style={{display: 'grid', gap: '1rem'}}
            >
              <div>
                <label htmlFor="name" className="margin-bottom--xs">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="input input--block"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="margin-bottom--xs">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="input input--block"
                  required
                />
              </div>

              <div>
                <label htmlFor="eventType" className="margin-bottom--xs">
                  Type of gathering
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  className="input input--block"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="dinner">Intimate dinner</option>
                  <option value="celebration">Birthday / celebration</option>
                  <option value="baby-shower">Baby shower</option>
                  <option value="baptism">Baptism</option>
                  <option value="wedding">Wedding / pre-wedding event</option>
                  <option value="seasonal">Seasonal gathering</option>
                  <option value="corporate">Office / team event</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div style={{display: 'grid', gap: '0.75rem', gridTemplateColumns: '1fr 1fr'}}>
                <div>
                  <label htmlFor="date" className="margin-bottom--xs">
                    Date (or approximate)
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="text"
                    placeholder="e.g. 15 December 2025"
                    className="input input--block"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="margin-bottom--xs">
                    Number of guests (approx.)
                  </label>
                  <input
                    id="guests"
                    name="guests"
                    type="number"
                    min={1}
                    className="input input--block"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="margin-bottom--xs">
                  Tell us a bit about your idea
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="input input--block"
                  placeholder="What are you celebrating? Where will it take place? Any inspiration you'd like to share?"
                />
              </div>

              <div>
                <button type="submit" className="button button--primary button--lg">
                  Send inquiry
                </button>
              </div>

              <p style={{fontSize: '0.85rem', color: 'var(--ifm-color-content-secondary)'}}>
                By sending this form, you agree that we may contact you regarding your request.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <Layout
      title="Contact - Gather & Glow"
      description="Get in touch with Gather & Glow to plan your next intimate gathering, seasonal celebration, or special event in Zurich and surroundings."
    >
      <HeroBanner
        eyebrow="Contact"
        title="Tell us about your next gathering - we&apos;ll take care of the rest."
        subtitle="Share a few details and we&apos;ll send ideas, timelines, and next steps within two business days."
        cta={{label: 'Start the conversation', to: '#contact-form'}}
        note="Zurich + surrounding cantons"
        backgroundImage="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1600&q=80"
      />
      <main>
        <ContactIntro />
        <ContactFormSection />
      </main>
    </Layout>
  );
}



