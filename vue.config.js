const path = require('path')
module.exports = {
  chainWebpack: (config) => {
    config
      .module
      .rule('scss')
      .use('sass-resources-loader')
      .loader('sass-resources-loader')
      .options({
        resources: [
          path.resolve('./src/assets/_variables.scss'),
        ]
      })
  }
}
