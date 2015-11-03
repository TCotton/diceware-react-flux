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

const app = express();
const sixMonths = 14515200;

if (app.get('env') === 'production') {

  app.use(compress());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(methodOverride()); 						// simulate DELETE and PUT
  app.use(cookieParser());

  app.set('port', process.env.PORT || 3000);

  app.use(favicon(path.join(__dirname, 'dist/favicon.ico')));

  app.all('*', function(req, res, next) {
    res.header('Cache-Control', 'no-cache');
    next();
  });

/*
  app.all('/css/!*', function(req, res, next) {
    res.header('Cache-Control', 'public, max-age=' + sixMonths);
    next();
  });

  app.all('/js/!*', function(req, res, next) {
    res.header('Cache-Control', 'public, max-age=' + sixMonths);
    next();
  });
*/

  app.use(express.static(path.join(__dirname, 'build')));

  // set the static files location /public/img will be /img for users

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });

}

