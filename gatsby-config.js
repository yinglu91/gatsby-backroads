module.exports = {
  siteMetadata: {
    title: 'Backroads',
    description:
      'Explore awesome worldwie tours & discover what makes each of them unique. forget your     daily routine& say yes to the adventure',
    author: '@johndoe',
    data: {
      name: 'john',
      age: 24,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`, 
    `gatsby-plugin-styled-components`
  ],
}
