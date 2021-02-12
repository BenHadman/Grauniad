module.exports = {
  siteMetadata: {
    title: `Grauniad Food Blog`,
    author: {
      name: ``,
      summary: ``,
    },
    description: ``,
    siteUrl: `https://relaxed-cray-aba0ec.netlify.app/`,
    social: {
      twitter: ``,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-rudderstack`,
      options: {
        // your rudderstack write key for your production environment
        // when process.env.NODE_ENV === 'production'
        // required; non-empty string
        //NOTE: Do not commit this to git. Process from env.
        prodKey: `1nhhlzdOvwNhkfoNZEtQnjGjKp1`,
  
        // if you have a development env for your rudderstack account, paste that key here
        // when process.env.NODE_ENV === 'development'
        // optional; non-empty string
        //NOTE: Do not commit this to git. Process from env.
        devKey: `RUDDERSTACK_DEV_WRITE_KEY`,
  
        // boolean (defaults to false) on whether you want
        // to include analytics.page() automatically
        // if false, see below on how to track pageviews manually
        trackPage: true,
  
        // number (defaults to 50); time to wait after a route update before it should
        // track the page change, to implement this, make sure your `trackPage` property is set to `true`
        trackPageDelay: 50,
  
        // If you need to proxy events through a custom endpoint,
        // add a `host` property (defaults to https://hosted.rudderlabs.com )
        // Rudderstack docs:
        //   - https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#2-1-minified-code
        host: `https://hosted.rudderlabs.com`,
  
        // boolean (defaults to false); whether to delay load Rudderstack
        // ADVANCED FEATURE: only use if you leverage client-side routing (ie, Gatsby <Link>)
        // This feature will force Rudderstack to load _after_ either a page routing change
        // or user scroll, whichever comes first. This delay time is controlled by
        // `delayLoadTime` setting. This feature is used to help improve your website's
        // TTI (for SEO, UX, etc).  See links below for more info.
        // NOTE: But if you are using server-side routing and enable this feature,
        // Rudderstack will never load (because although client-side routing does not do
        // a full page refresh, server-side routing does, thereby preventing Rudderstack
        // from ever loading).
        // See here for more context:
        // GIF: https://github.com/benjaminhoffman/gatsby-plugin-segment/pull/19#issuecomment-559569483
        // TTI: https://github.com/GoogleChrome/lighthouse/blob/master/docs/scoring.md#performance
        // Problem/solution: https://marketingexamples.com/seo/performance
        delayLoad: false,
  
        // number (default to 1000); time to wait after scroll or route change
        // To be used when `delayLoad` is set to `true`
        //delayLoadTime: 1000
  
        // Whether to completely skip calling `analytics.load()`.
        // ADVANCED FEATURE: only use if you are calling `analytics.load()` manually
        // elsewhere in your code or are using a library
        // that will call it for you.
        // Useful for only loading the tracking script once a user has opted in to being tracked, for example.
        manualLoad: false
      }
    }
,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Grauniad Food Blog`,
        short_name: `Grauniad`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
