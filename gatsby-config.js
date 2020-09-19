require('dotenv').config();

const config = require('./config/site');
module.exports = {
    siteMetadata: {
        siteUrl: config.siteUrl,
        title: config.title,
        description: config.description,
        author: config.author,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'fonts',
                path: `${__dirname}/src/fonts/`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-use-dark-mode`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-remark-emojis`, // <-- this line adds emoji
                ],
                options: {
                    // Deactivate the plugin globally (default: true)
                    active: true,
                    // Add a custom css class
                    class: 'emoji-icon',
                    // In order to avoid pattern mismatch you can specify
                    // an escape character which will be prepended to the
                    // actual pattern (e.g. `#:poop:`).
                    escapeCharacter: '#', // (default: '')
                    // Select the size (available size: 16, 24, 32, 64)
                    size: 64,
                    // Add custom styles
                    styles: {
                        display: 'inline',
                        margin: '0',
                        'margin-top': '1px',
                        position: 'relative',
                        top: '5px',
                        width: '25px',
                    },
                },
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/,
                },
            },
        },
        {
            resolve: `gatsby-source-github-api`,
            options: {
                token: config.githubApiToken,
                graphQLQuery: `
                query { 
                    viewer { 
                      company
                      status {
                        id
                        emoji
                        message
                      }
                      followers {
                        totalCount
                      }
                      following {
                        totalCount
                      }
                      repositories {
                        totalCount
                      }
                      location
                    }
                  }`,
                variables: {},
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
