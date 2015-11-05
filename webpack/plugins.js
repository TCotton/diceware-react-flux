var path = require('path');
let util = require('util');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let webpack = require('webpack');
let pkg = require('../package.json');

let DEBUG = process.env.NODE_ENV === 'development';
let TEST = process.env.NODE_ENV === 'test';

let cssBundle = path.join('css', util.format('[name].%s.css', pkg.version));

let plugins = [
  new webpack.optimize.OccurenceOrderPlugin()
];

if (DEBUG) {
  plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
} else if (!TEST) {
  plugins.push(
    new ExtractTextPlugin(cssBundle, {
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.NoErrorsPlugin()
  );
}

module.exports = plugins;
