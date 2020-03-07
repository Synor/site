module.exports = {
  title: "Synor",
  tagline: "Database Schema Migration Library",
  url: "https://synor.netlify.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "Synor",
  projectName: "site",
  themeConfig: {
    navbar: {
      title: "Synor",
      // logo: {
      //   alt: "Synor Logo",
      //   src: "img/logo.svg"
      // },
      links: [
        { to: "docs/introduction", label: "Docs", position: "left" },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/Synor",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "docs/introduction"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/synor"
            }
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "blog"
            },
            {
              label: "GitHub",
              href: "https://github.com/Synor"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Synor. Built with Docusaurus.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/Synor/site/edit/master/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
