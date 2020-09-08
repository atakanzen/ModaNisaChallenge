module.exports = {
  devServer: {
    proxy: {
      '/api/todos': {
        target: 'http://localhost:5000'
      }
    }
  }
};
