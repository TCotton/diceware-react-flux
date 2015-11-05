'use strict';
let path = require('path');
let pkg = require('../package.json');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let DEBUG = process.env.NODE_ENV === 'development';
let TEST = process.env.NODE_ENV === 'test';

let jsxLoader;
let sassLoader;
let cssLoader;
let fileLoader = 'file-loader?name=[path][name].[ext]';
let htmlLoader = [
  'file-loader?name=[path][name].[ext]',
  'template-html-loader?' + [
    'raw=true',
    'engine=lodash',
    'version=' + pkg.version,
    'title=' + pkg.name,
    'debug=' + DEBUG
  ].join('&')
].join('!');
let jsonLoader = ['json-loader'];

let sassParams = [
  'outputStyle=expanded',
  'includePaths[]=' + path.resolve(__dirname, '../app/scss'),
  'includePaths[]=' + path.resolve(__dirname, '../node_modules')
];

if (DEBUG || TEST) {
  jsxLoader = [];
  if (!TEST) {
    jsxLoader.push('react-hot');
  }
  jsxLoader.push('babel-loader?optional[]=runtime&stage=0&plugins=rewire');
  sassParams.push('sourceMap', 'sourceMapContents=true');
  sassLoader = [
    'style-loader',
    'css-loader?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]',
    'postcss-loader',
    'sass-loader?' + sassParams.join('&')
  ].join('!');
  cssLoader = [
    'style-loader',
    'css-loader?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]',
    'postcss-loader'
  ].join('!');
} else {
  jsxLoader = ['babel-loader?optional[]=runtime&stage=0&plugins=rewire'];
  sassLoader = ExtractTextPlugin.extract('style-loader', [
    'css-loader?modules&localIdentName=[hash:base64:5]',
    'postcss-loader',
    'sass-loader?' + sassParams.join('&')
  ].join('!'));
  cssLoader = ExtractTextPlugin.extract('style-loader', [
    'css-loader?modules&localIdentName=[hash:base64:5]',
    'postcss-loader'
  ].join('!'));
}

let loaders = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loaders: jsxLoader
  },
  {
    test: /\.css$/,
    loader: cssLoader
  },
  {
    test: /\.jpe?g$|\.gif$|\.png$|\.ico|\.svg$|\.woff$|\.ttf$/,
    loader: fileLoader
  },
  {
    test: /\.json$/,
    exclude: /node_modules/,
    loaders: jsonLoader
  },
  {
    test: /\.html$/,
    loader: htmlLoader
  },
  {
    test: /\.scss$/,
    loader: sassLoader
  }
];

module.exports = loaders;
