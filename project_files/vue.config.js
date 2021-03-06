module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/nigeria-page/'
      : '/',
    chainWebpack: config => {
      config.module
        .rule('raw')
        .test(/\.txt$/)
        .use('raw-loader')
        .loader('raw-loader')
        .end()
    }
  }