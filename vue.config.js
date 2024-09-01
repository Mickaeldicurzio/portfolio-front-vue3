const { defineConfig } = require('@vue/cli-service')
const SitemapPlugin = require('sitemap-webpack-plugin').default
// You can write the paths as an array of strings or an array of objects
const paths = [
  {
    path: '/',
    lastmod: '2024-07-01',
    priority: 1.0,
    changefreq: 'yearly'
  },
  {
    path: '/experiences/',
    lastmod: '2024-07-01',
    priority: 0.9,
    changefreq: 'yearly'
  },
  {
    path: '/about-me/',
    lastmod: '2024-07-01',
    priority: 0.8,
    changefreq: 'yearly'
  },
  {
    path: '/projects/',
    lastmod: '2024-07-01',
    priority: 0.7,
    changefreq: 'yearly'
  }
]



module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      new SitemapPlugin({ base: 'https://www.mickaeldicurzio.fr', paths })
    ]
  },
  transpileDependencies: true,
  devServer: {
  allowedHosts: "all"
},
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/styles/globals/variables.scss";
        `
      }
    }
  }
})
