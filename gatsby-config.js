/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins:[
    'gatsby-plugin-postcss',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options:{
        name: 'data',
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Eliezfer',
        short_name: 'Eliezfer',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/imgs/crown-icon.png',
      }
    }
  ]
}
