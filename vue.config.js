module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3306',
        ws: true,
        changeOrigin: true
      },

    }
  }
}