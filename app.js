const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

const port = ENV.port || 3000;
// use sessions for tracking logins
app.use(session({
  secret: 'something secret',
  resave: true,
  saveUninitialized: false,
  
}));

// make user ID available in templates
app.use(function (req, res, next) {
  res.locals.currentUser = req.session.userId;
  next();
});

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// serve static files from /public
app.use('/', express.static(__dirname + '/public'));

// view engine setup
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// listen on port 3000
app.listen(port, function () {
  console.log('Express app listening on port 'port);
});

