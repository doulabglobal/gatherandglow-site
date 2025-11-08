import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Gather & Glow',
  tagline: 'Effortless gatherings. Thoughtfully designed.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Production URL of your site
  url: 'https://gatherandglow.ch',

  // Pathname under which your site is served
  baseUrl: '/',

  // GitHub deployment config (for edit links, etc.)
  // TODO: adjust these to match your actual GitHub org/user + repo
  organizationName: 'doulabglobal', // Your GitHub org/user name
  projectName: 'gatherandglow-site', // Your repo name

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'], // we'll add 'de' later when we enable i18n
  },

  presets: [
    [
      'classic',
      {
        // We’re not using docs/blog as public sections for this marketing site (v1)
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Social sharing image (update when you have a proper OG image)
    image: 'img/social-card.jpg',
    metadata: [
      {name: 'description', content: 'Gather & Glow is a Zurich-based, woman-owned event studio delivering intimate gatherings with modern styling.'},
      {name: 'keywords', content: 'Gather and Glow, Zurich events, bespoke tablescapes, charcuterie boards, seasonal gatherings'},
    ],
   colorMode: {
  defaultMode: 'light',
  respectPrefersColorScheme: false,
  disableSwitch: true,
},
 navbar: {
  title: 'Gather & Glow',
  logo: {
    alt: 'Gather & Glow Logo',
    src: 'img/gg_logo.svg',
  },
  items: [
    // LEFT SIDE OF LOGO
    { to: '/', label: 'Home', position: 'left' },
    { to: '/services', label: 'Services', position: 'left' },

    // RIGHT SIDE OF LOGO
    { to: '/gallery', label: 'Gallery', position: 'right' },
    { to: '/about', label: 'About', position: 'right' },
    { to: '/contact', label: 'Contact', position: 'right' },
  ],
},

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Explore',
          items: [
            {label: 'Home', to: '/'},
            {label: 'Services', to: '/services'},
            {label: 'Gallery', to: '/gallery'},
            {label: 'About', to: '/about'},
            {label: 'Contact', to: '/contact'},
            {label: 'Privacy & GDPR', to: '/privacy'},
          ],
        },
        {
          title: 'Connect',
          items: [
            // Replace with real links as they exist
            {label: 'Email', href: 'mailto:info@gatherandglow.ch'},
            {label: 'Instagram', href: 'https://instagram.com/gatherandglow.ch', rel: 'noreferrer noopener', target: '_blank'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Gather & Glow. All rights reserved. Made with love by <a href="https://doulab.net" target="_blank" rel="noreferrer">Doulab</a> in Switzerland.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
