module.exports = {
  title: '文档中心',
  tagline: '系统说明，接口文档，示例代码',
  organizationName: 'lucky-byte',
  projectName: 'help',
  url: 'https://help.lucky-byte.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.png',
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Lucky Byte, Inc.',
        src: 'img/lucky-byte.png',
        srcDark: 'img/lucky-byte-dark.png',
      },
      items: [{
        to: 'docs/',
        activeBasePath: 'docs',
        label: '文档',
        position: 'right',
      }, {
        to: 'blog',
        label: '博客',
        position: 'right',
      }, {
        href: 'https://github.com/lucky-byte/help',
        label: 'GitHub',
        position: 'right',
      }],
    },
    footer: {
      style: 'dark',
      links: [{
        title: '指南',
        items: [{
          label: '星收付指南',
          to: 'docs/mott',
        }, {
          label: 'Markdown',
          to: 'docs/markdown',
        }],
      }, {
        title: '社区',
        items: [{
          label: 'Stack Overflow',
          href: 'https://stackoverflow.com/questions/tagged/luckybyte',
        }, {
          label: 'Slack',
          href: 'https://luckybyte.slack.com/',
        }, {
          label: 'Twitter',
          href: 'https://twitter.com/luckybyteinc',
        }],
      }, {
        title: '更多',
        items: [{
          label: '博客',
          to: 'blog',
        }, {
          label: 'LuckyByte',
          href: 'https://www.lucky-byte.com',
        }, {
          label: 'GitHub',
          href: 'https://github.com/lucky-byte/help',
        }],
      }],
      logo: {
        alt: 'Lucky Byte, Inc.',
        src: 'img/lucky-byte.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Lucky Byte, Inc.`,
    },
    algolia: {
      apiKey: 'YOUR_API_KEY',
      indexName: 'YOUR_INDEX_NAME',
      contextualSearch: true,
      searchParameters: {},
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/lucky-byte/help/edit/main/docs',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/lucky-byte/help/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
