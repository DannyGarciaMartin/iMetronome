const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: 'localhost',
    port: '9000',
    open: true,
    compress: true,
    hotOnly: true,
    inline: true,
    lazy: true,
    filename: 'main.js'
  }
};
