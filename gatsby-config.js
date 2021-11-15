module.exports = {
  siteMetadata: {
    siteUrl: "https://myfirstgatsbysitemain83314.gatsbyjs.io/",
    title: "My First Gatsby Site",
  },
  plugins: [
          'gatsby-plugin-image',
          'gatsby-plugin-sharp',
          'gatsby-source-filesystem',
          'gatsby-transformer-sharp',
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `pages`,
              path: `${__dirname}/src/pages/`,
            },
          },

          {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
              path: `${__dirname}/src/images/`,
            },
          },
    ],
}
