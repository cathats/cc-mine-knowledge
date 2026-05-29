import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const gaTrackingId = process.env.GA_TRACKING_ID;

const config: Config = {
  title: 'CC Mine Knowledge',
  tagline: '文档沉淀与面试 QA',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },
  url: 'https://cathats.github.io',
  baseUrl: '/cc-mine-knowledge/',
  organizationName: 'cathats',
  projectName: 'cc-mine-knowledge',
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/cathats/cc-mine-knowledge/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/cathats/cc-mine-knowledge/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        ...(gaTrackingId
          ? {
              gtag: {
                trackingID: gaTrackingId,
                anonymizeIP: true,
              },
            }
          : {}),
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'CC Mine Knowledge',
      logo: {
        alt: 'CC Mine Knowledge Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档',
        },
        {to: '/blog', label: '博客', position: 'left'},
        {
          href: 'https://github.com/cathats/cc-mine-knowledge',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '内容',
          items: [
            {
              label: '文档',
              to: '/docs/intro',
            },
            {
              label: '博客',
              to: '/blog',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/cathats/cc-mine-knowledge',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} cathats. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
