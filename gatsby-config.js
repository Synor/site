module.exports = {
  siteMetadata: {
    title: `Synor`,
    description: `Documentation for Synor - Database Migration Library`,
    author: `MunifTanjim`
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-theme-dox',
      options: {
        basePath: '/',
        contentPath: 'docs'
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
