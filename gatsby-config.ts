import type { GatsbyConfig } from "gatsby"

const path = require('path');

const config: GatsbyConfig = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: '@builder.io/gatsby',
      options: {
        // Replace with your Public API Key
        publicAPIKey: '0b40f8c2653041ee8c624e0da406c86c',
        templates: {
          // Render every `page` model as a new page using the
          // src/templates/page.jsx template based on the URL provided in Builder.io
          page: path.resolve('src/templates/page.jsx'),
        },
      },
    },
  ],
}

export default config
