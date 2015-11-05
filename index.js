'use strict';
/**
 * Created by andywalpole on 03/11/2015.
 */
let express = require('express');
let http = require('http');
let path = require('path');
let bodyParser = require('body-parser');
let compress = require('compression');
let favicon = require('serve-favicon');
let cookieParser = require('cookie-parser');
let methodOverride = require('method-override');
let helmet = require('helmet');
let csp = require('helmet-csp');

const app = express();
const sixMonths = 14515200;

if (app.get('env') === 'production') {

  app.use(helmet.frameguard('deny'));
  app.use(helmet.xssFilter());
  app.use(helmet.nosniff());
  app.use(helmet.hidePoweredBy());
  app.use(helmet.hsts({maxAge: 15552000}));

  app.use(csp({
    // Specify directives as normal
    defaultSrc: [
      '\'self\''
    ],
    scriptSrc: [
      '\'self\''
    ],
    styleSrc: [
      '\'self\'',
      'https://fonts.googleapis.com'
    ],
    imgSrc: [
      '\'self\'',
      'data:'
    ],
    fontSrc: [
      '\'self\'',
      'https://fonts.gstatic.com'
    ],
    frameSrc: [
      '\'self\''
    ],
    sandbox: [
      'allow-forms',
      'allow-scripts',
      'allow-same-origin'
    ],
    // Set to an empty array to allow nothing through
    objectSrc: [
      '\'self\''
    ],
    connectSrc: [
      '\'self\''
    ],

    // Set to true if you only want browsers to report errors, not block them
    reportOnly: false,

    // Set to true if you want to blindly set all headers: Content-Security-Policy,
    // X-WebKit-CSP, and X-Content-Security-Policy.
    setAllHeaders: false,

    // Set to true if you want to disable CSP on Android.
    disableAndroid: true,

    // Set to true if you want to force buggy CSP in Safari 5.1 and below.
    safari5: false
  }));

  app.use(compress());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(methodOverride());// simulate DELETE and PUT
  app.use(cookieParser());

  app.set('port', process.env.PORT || 3000);

  app.use(favicon(path.join(__dirname, './build/favicon.ico')));

  app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
  });

  app.all('*', function(req, res, next) {
    res.header('Cache-Control', 'no-cache');
    next();
  });

  app.all('/css/!*', function(req, res, next) {
    res.header('Cache-Control', 'public, max-age=' + sixMonths);
    next();
  });

  app.all('/js/!*', function(req, res, next) {
    res.header('Cache-Control', 'public, max-age=' + sixMonths);
    next();
  });

  app.use(express.static(path.join(__dirname, './build')));

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });

  app.listen(app.get('port'), () => {
  });

}