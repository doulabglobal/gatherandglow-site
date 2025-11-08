import React from 'react';
import Layout from '@theme/Layout';
import HeroBanner from '../components/HeroBanner';
import Seo from '../components/Seo';

const privacyHeroImages = [
  '/img/hero_privacy.jpg',
];

export default function PrivacyPage() {
  return (
    <Layout
      title="Privacy & GDPR"
      description="How Gather & Glow handles personal data in line with GDPR requirements."
    >
      <Seo
        title="Privacy & GDPR | Gather & Glow"
        description="Learn how Gather & Glow handles personal data in line with Swiss regulations and the EU GDPR."
        slug="/privacy"
        image="/img/hero_privacy.jpg"
        keywords={['GDPR', 'privacy policy', 'data protection', 'Gather & Glow']}
      />
      <HeroBanner
        eyebrow="Privacy & GDPR"
        title="Your trust matters. Here's how we handle your data."
        subtitle="We follow Swiss data protection laws and the EU GDPR, keeping your event details safe and private."
        note="Questions? info@gatherandglow.ch"
        backgroundImages={privacyHeroImages}
      />
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Privacy &amp; GDPR Notice</h1>
            <p>
              We take your privacy seriously. This page outlines how Gather &amp; Glow processes personal
              data in accordance with the EU General Data Protection Regulation (GDPR) and Swiss data
              protection law.
            </p>

            <section>
              <h2>Who we are</h2>
              <p>
                Gather &amp; Glow, based in Zurich, Switzerland, is responsible for the personal data you
                share with us. You can contact us at <a href="mailto:info@gatherandglow.ch">info@gatherandglow.ch</a>.
              </p>
            </section>

            <section>
              <h2>What data we collect</h2>
              <p>
                When you submit the inquiry form, we collect the information you provide such as your name,
                email address, phone number, event details, and any additional notes you decide to share.
              </p>
            </section>

            <section>
              <h2>Why we collect it</h2>
              <p>
                We use this information to respond to your inquiry, plan your gathering, and send relevant
                proposals. We may also send you a copy of your submission so you have a record of the
                details you provided.
              </p>
            </section>

            <section>
              <h2>How long we keep your data</h2>
              <p>
                We retain inquiry information for as long as needed to respond and for a reasonable period
                afterwards for administrative purposes, unless you request deletion sooner.
              </p>
            </section>

            <section>
              <h2>Your rights</h2>
              <ul>
                <li>Request access to the personal data we hold about you.</li>
                <li>Ask us to correct, update, or delete your information.</li>
                <li>Withdraw consent at any time and request that we stop contacting you.</li>
                <li>File a complaint with your local data protection authority.</li>
              </ul>
              <p>
                To exercise any of these rights, email us at <a href="mailto:info@gatherandglow.ch">info@gatherandglow.ch</a>.
              </p>
            </section>

            <section>
              <h2>Data security</h2>
              <p>
                We use industry-standard measures to protect the information you share, and we only grant
                access to team members who need it to plan your event.
              </p>
            </section>

            <section>
              <h2>Third parties</h2>
              <p>
                We do not sell your data. We only share it with trusted partners (such as venues or florists)
                when it is necessary to deliver the services you request, and only with your consent.
              </p>
            </section>

            <section>
              <h2>Updates</h2>
              <p>
                This notice may be updated from time to time. We will post the latest version on this page
                and encourage you to review it periodically.
              </p>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
