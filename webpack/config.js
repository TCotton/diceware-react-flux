let path = require('path');
let util = require('util');
let autoprefixer = require('autoprefixer-core');
let pkg = require('../package.json');

let loaders = require('./loaders');
let plugins = require('./plugins');

let DEBUG = process.env.NODE_ENV === 'development';
let TEST = process.env.NODE_ENV === 'test';

let jsBundle = path.join('js', util.format('[name].%s.js', pkg.version));

let entry = {
  app: ['./app.jsx']
};

if (DEBUG) {
  entry.app.push(
    util.format(
      'webpack-dev-server/client?http://%s:%d',
      pkg.config.devHost,
      pkg.config.devPort
    )
  );
  entry.app.push('webpack/hot/dev-server');
}

let config = {
  context: path.join(__dirname, '../app'),
  cache: DEBUG,
  debug: DEBUG,
  target: 'web',
  devtool: DEBUG || TEST ? 'inline-source-map' : false,
  entry: entry,
  output: {
    path: path.resolve(pkg.config.buildDir),
    publicPath: '/',
    filename: jsBundle,
    pathinfo: false
  },
  module: {
    loaders: loaders
  },
  postcss: [
    autoprefixer,
    require('postcss-focus')
  ],
  plugins: plugins,
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  },
  devServer: {
    contentBase: path.resolve(pkg.config.buildDir),
    hot: true,
    noInfo: false,
    inline: true,
    stats: { colors: true }
  }
};

module.exports = config;
