module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `My personal website`,
    author: `Domenico Flauto`,
    description: `My site description...`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/domenicoflauto`,
      },
      {
        name: `github`,
        url: `https://github.com/domenicoflauto`,
      },
    ],
  },
}
