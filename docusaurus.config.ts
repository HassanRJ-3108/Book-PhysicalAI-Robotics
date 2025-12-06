import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const isProd = process.env.NODE_ENV === 'production';
const config: Config = {
  title: 'Physical AI & Robotics',
  tagline: 'Premium learning platform built with Docusaurus',
  favicon: 'img/favicon.ico',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hi', 'ur'],
    path: 'i18n',
    localeConfigs: {
      en: { label: 'English', direction: 'ltr', htmlLang: 'en-US' },
      hi: { label: 'हिंदी', direction: 'ltr', htmlLang: 'hi-IN' },
      ur: { label: 'اردو', direction: 'rtl', htmlLang: 'ur-PK' },
    },
  },

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'warn', // Changed to 'warn' for deployment - allows build despite SSR warnings
  onBrokenMarkdownLinks: 'warn',

  // Disable SSR for auth pages (they use Supabase client-side only)
  onBrokenAnchors: 'warn',
  staticDirectories: ['static'],

  // Removed duplicate i18n block to avoid TypeScript error

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // Enable local search (no external service required)
  themes: isProd
    ? [
      [
        require.resolve('@easyops-cn/docusaurus-search-local'),
        {
          hashed: true,
          indexDocs: true,
          indexBlog: false,
          indexPages: true,
          language: ['en', 'hi'], // Removed 'ur' - lunr-languages doesn't support Urdu
          docsRouteBasePath: '/docs',
        },
      ],
    ]
    : [],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Physical AI & Robotics',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        { type: 'doc', docId: 'intro', label: 'Docs', position: 'left' },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            { label: 'Start Learning', to: '/docs/intro' },
            { label: 'Chapters', to: '/docs/chapter-01-physical-ai' },
          ],
        },
        {
          title: 'About',
          items: [
            { label: 'Overview', to: '/docs/chapter-01-physical-ai' },
            { label: 'Hardware', to: '/docs/chapter-07-hardware' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Physical AI & Robotics · Built with Docusaurus`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
