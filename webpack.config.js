const { resolve } = require('path');

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: [ '.js']
  },
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' }
    ]
  }
};