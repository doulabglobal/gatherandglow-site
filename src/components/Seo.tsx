import React from 'react';
import Head from '@docusaurus/Head';

type SeoProps = {
  title: string;
  description: string;
  slug?: string;
  image?: string;
  type?: 'website' | 'article';
  keywords?: string[];
  preloadImage?: string;
};

const SITE_URL = 'https://gatherandglow.ch';
const DEFAULT_IMAGE = '/img/hero_index.jpg';
const FONT_STYLESHEET =
  'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Cormorant+Garamond:wght@500;600;700&display=swap';

export default function Seo({
  title,
  description,
  slug = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  keywords = ['gather and glow', 'event planning', 'zurich event studio', 'tablescaping', 'charcuterie'],
  preloadImage,
}: SeoProps) {
  const pageUrl = `${SITE_URL}${slug === '/' ? '' : slug}`;
  const absoluteImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;
  const preloadTarget = preloadImage
    ? preloadImage.startsWith('http')
      ? preloadImage
      : `${SITE_URL}${preloadImage}`
    : null;

  return (
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preload" as="style" href={FONT_STYLESHEET} />
      <link
        rel="stylesheet"
        href={FONT_STYLESHEET}
        media="print"
        onLoad={(event) => {
          (event.currentTarget as HTMLLinkElement).media = 'all';
        }}
      />
      <noscript dangerouslySetInnerHTML={{__html: `<link rel="stylesheet" href="${FONT_STYLESHEET}" />`}} />
      {preloadTarget && (
        <link rel="preload" as="image" href={preloadTarget} fetchPriority="high" />
      )}
      <meta name="description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={absoluteImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={pageUrl} />
      <script type="application/ld+json">{JSON.stringify(getOrganizationJsonLd())}</script>
    </Head>
  );
}

function getOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Gather & Glow',
    url: SITE_URL,
    logo: `${SITE_URL}/img/gg_logo.svg`,
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'info@gatherandglow.ch',
      areaServed: 'CH',
      availableLanguage: ['en', 'de'],
    },
  };
}
