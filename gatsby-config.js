module.exports = {
    siteMetadata: {
        title: 'View-Source Tabs Auto Close'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'View-Source Tabs Auto Close',
                short_name: 'View-Source Tabs Auto Close',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/images/icons8-close-all-tabs-128.png' // This path is relative to the root of the site.
            }
        },
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/src/pages`
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/static/images`
            }
        },
        'gatsby-transformer-remark',
        'gatsby-plugin-offline'
    ]
};
