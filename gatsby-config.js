module.exports = {
  siteMetadata: {
    siteUrl: "https://myfirstgatsbysitemain83314.gatsbyjs.io/",
    title: "My First Gatsby Site",
  },
  plugins: [
          'gatsby-plugin-image',
          'gatsby-plugin-sharp',
          'gatsby-transformer-sharp',
          'gatsby-plugin-netlify',
          {
            resolve: "gatsby-source-filesystem",
            options: {
              name: `blog`,
              path: `${__dirname}/src/blog`,
            }
          },
          "gatsby-plugin-mdx",
  ],
            
}
