var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'lib/sidenav.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'sidenav.js',
    library: 'sidenav',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    'jquery': 'jQuery'
  },
  devtool: 'source-map'
};
