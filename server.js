var express = require('express'),
    bodyParser  = require('body-parser'),
    // requestHandler = require('./server/request_handler.js'),
    session = require('express-session'),  // https://github.com/expressjs/session
    passport = require('passport'),
    util = require('./server/utils'),
    queryRouter = express.Router(),
    TwitterStrategy = require('passport-twitter').Strategy;
    config = require('./server/env/config');
    app = express();


app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));
// app.use(function(req, res, next) {
//     next(requestHandler.handleRequest(req, res));
// });

// trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new TwitterStrategy({
    consumerKey: config.TWITTER_CONSUMER_KEY,
    consumerSecret: config.TWITTER_CONSUMER_SECRET,
    callbackURL: "http://127.0.0.1:8000/auth/twitter/callback"
  },
  function(token, tokenSecret, profile, cb) {
    return cb(null, profile);
  }
));

// app.get('/query', function(req, res, next) {
//     next(requestHandler.handleRequest(req, res));
// });
app.get('/auth/twitter', passport.authenticate('twitter'));
app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/signin' }), function(req, res) {
    // Successful authentication, redirect home.
    // util.sessionLogin(req, res, req.user.username);
    // console.log(req.screen_name)
    util.sessionLogin(req, res, req.screen_name);
    res.redirect('http://127.0.0.1:8000/#/query');
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/query', function(request, response, next) {
  util.sendResponse(response, {result: {}});
  next();
});

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


console.log('App is listening on port 8000');
app.listen(8000);
