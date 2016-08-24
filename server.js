var express = require('express'),
    // session = require('express-session'),
    // passport = require('passport'),
    // util = require('./server/utils'),
    // TwitterStrategy = require('passport-twitter').Strategy,
    // Twitter = require('./server/twitterAPI'),
    app = express();

require('./server/middleware.js')(app, express);
console.log('Server now listening on port ' + port);

var port = process.env.PORT || 8000;
app.listen(port);

// app.use(session({
//   secret: 'keyboard cat',
//   resave: true,
//   saveUninitialized: true
// }));
//
// app.use(passport.initialize());
// app.use(passport.session());
//
// passport.use(new TwitterStrategy({
//     consumerKey: config.TWITTER_CONSUMER_KEY,
//     consumerSecret: config.TWITTER_CONSUMER_SECRET,
//     callbackURL: "http://127.0.0.1:8000/auth/twitter/callback"
//   },
//   function(token, tokenSecret, profile, cb) {
//     return cb(null, profile);
//   }
// ));


// app.get('/auth/twitter', passport.authenticate('twitter'));
// app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/signin' }), function(req, res) {
//   console.log(req);
//     util.sessionLogin(req, res, req.screen_name);
//     res.redirect('http://127.0.0.1:8000/#/query');
// });


// passport.serializeUser(function(user, done) {
//   done(null, user);
// });
//
// passport.deserializeUser(function(user, done) {
//   done(null, user);
// });
