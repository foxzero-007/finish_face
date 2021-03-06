const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const path = require('path');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    https: true,
    contentBase: path.join(__dirname, 'src'),
    hot: true,
    open: true,
    disableHostCheck: true,
  }
});
