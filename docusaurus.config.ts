import {themes as prismThemes} from 'prism-react-renderer';
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
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Gather & Glow',
      logo: {
        alt: 'Gather & Glow Logo',
        src: 'img/logo.svg', // placeholder; update when you have the final logo
      },
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {to: '/services', label: 'Services', position: 'left'},
        {to: '/about', label: 'About', position: 'left'},
        {to: '/contact', label: 'Contact', position: 'left'},
        // Language switcher and external links can be added later
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
            {label: 'About', to: '/about'},
            {label: 'Contact', to: '/contact'},
          ],
        },
        {
          title: 'Connect',
          items: [
            // Replace with real links as they exist
            {label: 'Email', href: 'mailto:hello@gatherandglow.ch'},
            // {label: 'Instagram', href: 'https://instagram.com/...' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Gather & Glow. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
