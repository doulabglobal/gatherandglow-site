import React from 'react';
import Layout from '@theme/Layout';
import HeroBanner from '../components/HeroBanner';
import Seo from '../components/Seo';

const contactHeroImages = [
  '/img/Contact_Karusell_1.jpg',
  '/img/Contact_Karusell_2.jpg',
  '/img/Contact_Karusell_3.jpg',
  '/img/Contact_Karusell_4.jpg',
];

const CONTACT_ENDPOINT = 'https://formsubmit.co/ajax/info@gatherandglow.ch';

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
  const [status, setStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = React.useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload: Record<string, string> = {};
    formData.forEach((value, key) => {
      payload[key] = String(value);
    });

    payload._subject = `New inquiry from ${payload.name || 'Gather & Glow website'}`;
    if (payload.email) {
      payload._cc = payload.email;
    }

    try {
      setIsSubmitting(true);
      setStatus('idle');
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to send');
      }

      setStatus('success');
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return (
    <section className="margin-vert--lg contact-section">
      <div className="container">
        <div className="row">
          {/* Text / reassurance */}
          <div className="col col--5 contact-card">
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
              <a href="mailto:info@gatherandglow.ch">info@gatherandglow.ch</a>
            </p>
            <p className="contact-note">
              We treat your information with care. Learn more in our{' '}
              <a href="/privacy">GDPR & Privacy Notice</a>.
            </p>
          </div>

          {/* Form */}
          <div className="col col--7 contact-card contact-card--form">
            <form id="contact-form" onSubmit={handleSubmit} className="contact-form">
              <div>
                <label htmlFor="name" className="margin-bottom--xs">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="input input--block"
                  autoComplete="name"
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
                  autoComplete="email"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="margin-bottom--xs">
                  Phone (optional)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="input input--block"
                  autoComplete="tel"
                  placeholder="+41 79 123 45 67"
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
                    type="date"
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
                <button type="submit" className="button button--primary button--lg" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send inquiry'}
                </button>
              </div>

              <p style={{fontSize: '0.85rem', color: 'var(--ifm-color-content-secondary)'}}>
                By sending this form, you agree that we may contact you regarding your request and
                that a copy will be sent to your email for your records.
              </p>

              {status === 'success' && (
                <p className="contact-status contact-status--success">
                  Thank you! Your message has been sent. A copy is on its way to your inbox.
                </p>
              )}
              {status === 'error' && (
                <p className="contact-status contact-status--error">
                  Something went wrong while sending your message. Please try again or email us directly at{' '}
                  <a href="mailto:info@gatherandglow.ch">info@gatherandglow.ch</a>.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  const handleContactScroll = React.useCallback(() => {
    const target = document.getElementById('contact-form');
    if (target) {
      target.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }, []);

  return (
    <Layout
      title="Contact - Gather & Glow"
      description="Get in touch with Gather & Glow to plan your next intimate gathering, seasonal celebration, or special event in Zurich and surroundings."
    >
      <Seo
        title="Contact Gather & Glow"
        description="Ready to plan your next gathering? Contact Gather & Glow in Zurich for bespoke styling and thoughtful event details."
        slug="/contact"
        image="/img/Contact_Karusell_1.jpg"
        keywords={['contact Gather & Glow', 'Zurich events contact', 'book event stylist']}
      />
      <HeroBanner
        eyebrow="Contact"
        title="Tell us about your next gathering - we&apos;ll take care of the rest."
        subtitle="Share a few details and we&apos;ll send ideas, timelines, and next steps within two business days."
        cta={{label: 'Start the conversation', to: '/contact'}}
        ctaOnClick={handleContactScroll}
        note="Zurich + surrounding cantons"
        backgroundImages={contactHeroImages}
        cycleIntervalMs={5000}
        respectReducedMotion={false}
      />
      <main>
        <ContactIntro />
        <hr className="section-separator" />
        <a id="contact-form" />
        <ContactFormSection />
      </main>
    </Layout>
  );
}



