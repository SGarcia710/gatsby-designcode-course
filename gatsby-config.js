module.exports = {
  siteMetadata: {
    title: `Sebastián García`,
    description: `24 years old React and React Native Developer from Colombia. Swift Enthusiast.`,
    author: `@sebg96`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
