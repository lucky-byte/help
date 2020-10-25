module.exports = {
  title: 'LUCKYBYTE 文档站',
  tagline: '用户手册，接口文档，示例代码',
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
        position: 'left',
      }, {
        to: 'blog',
        label: '博客',
        position: 'left',
      }, {
        href: 'https://www.lucky-byte.com',
        label: 'LuckyByte',
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
        title: '星收付',
        items: [{
          label: '小程序移动收款',
          to: 'docs/star/mott',
        }, {
          label: '公众号菜单收款',
          to: 'docs/star/menu',
        }, {
          label: '推送通知收款',
          to: 'docs/star/push',
        }, {
          label: '业务组件配置',
          to: 'docs/star/busidata',
        }],
      }, {
        title: '品牌商城',
        items: [{
          label: '产品介绍',
          to: 'docs/merin',
        }],
      }, {
        title: '业务拓展',
        items: [{
          label: '商户进件指南',
          to: 'docs/merin',
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
          label: 'Markdown',
          to: 'docs/markdown',
        }, {
          label: 'Docusaurus',
          href: 'https://v2.docusaurus.io/',
        }, {
          label: 'GitHub',
          href: 'https://github.com/lucky-byte/help',
        }],
      }],
      logo: {
        alt: 'Lucky Byte, Inc.',
        src: 'img/lucky-byte-dark.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Lucky Byte, Inc.`,
    },
    algolia: {
      apiKey: 'f6db6f28047cb0a8afc1ab16b6a2e8da',
      indexName: 'lucky-byte',
      contextualSearch: true,
      searchParameters: {},
      placeholder: '搜索',
    },
    gtag: {
      trackingID: 'G-H8S64E6W0N',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/lucky-byte/help/edit/main',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/lucky-byte/help/edit/main',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Lucky Byte, Inc.`,
          },
          blogTitle: '博客',
          blogSidebarCount: 10,
          blogSidebarTitle: '最近发布',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ]
  ],
};
