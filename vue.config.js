// vue.config.js
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  chainWebpack (config) {
    config.plugins.delete('prefetch')
    config.plugin('CompressionPlugin').use(CompressionPlugin)
  }
}
