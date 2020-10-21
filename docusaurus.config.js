module.exports = {
  title: '帮助',
  tagline: '功能说明，接口文档，示例代码',
  organizationName: 'lucky-byte',
  projectName: 'help',
  url: 'https://help.lucky-byte.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.png',
  themeConfig: {
    navbar: {
      title: 'HELP',
      logo: {
        alt: 'Lucky Byte, Inc.',
        src: 'img/lucky-byte.png',
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
        title: '文档',
        items: [{
          label: '写作指南',
          to: 'docs/',
        }, {
          label: 'Second Doc',
          to: 'docs/doc2/',
        }],
      }, {
        title: '社区',
        items: [{
          label: 'Stack Overflow',
          href: 'https://stackoverflow.com/questions/tagged/luckybyte',
        }, {
          label: 'Discord',
          href: 'https://discordapp.com/invite/luckybyte',
        }, {
          label: 'Twitter',
          href: 'https://twitter.com/luckybyte',
        }],
      }, {
        title: '更多',
        items: [{
          label: '博客',
          to: 'blog',
        }, {
          label: 'GitHub',
          href: 'https://github.com/lucky-byte/help',
        }],
      }],
      copyright: `Copyright © ${new Date().getFullYear()} Lucky Byte, Inc.`,
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
