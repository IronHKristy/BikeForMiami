const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const layouts      = require('express-ejs-layouts');
const mongoose     = require('mongoose');
const session      = require('express-session');
const passport     = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FbStrategy    = require('passport-facebook').Strategy;
// const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const bcrypt        = require('bcrypt');
const flash         = require('connect-flash');

// require('dotenv').config();

const User          = require('./models/user-model.js');
const Trail = require('./models/trail-model.js');

//uncomment line below when testing locally
mongoose.connect('mongodb://localhost/bike-for-miami');
//and comment out this line. This is is for deploying in Heroku
// mongoose.connect(process.env.MONGODB_URI);


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// default value for title local
// app.locals.title = 'Express - Generated with IronGenerator';

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(layouts);

// const index = require('./routes/index.js');
// const authRoutes = require('./routes/auth-routes.js');
// app.use('/', index);
// // app.use('/users', users);
// app.use('/', authRoutes);


app.use(session({
  secret: 'our passport local strategy app',
  resave: true,
  saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy((username, password, next) => {
  User.findOne({ username }, (err, user) => {
    if (err) {
      next(err);
    } else if (!user) {
      next(null, false, { message: "Incorrect username" });
    } else if (!bcrypt.compareSync(password, user.encryptedPassword)) {
      next(null, false, { message: "Incorrect password" });
    } else {
      next(null, user);
    }
  });
}));

passport.use(new FbStrategy({
  //erase credentials before pushing
  //change the 2 below to correct credentials from Facebook Development when testing locally
  clientID: "1391610447578300",
  clientSecret: "68140cb2188d480a229e8c84c8f7b1e5",
  //.......................................................................
  //uncomment out the two below after deployment
  // clientID: process.env.FB_CLIENT_ID,
  // clientSecret: process.env.FB_CLIENT_SECRET,
  //........................................................................
  //uncomment out line below when testing locally
  callbackURL: 'http://localhost:3000/auth/facebook/callback'

  //and comment this line out. For deploying on Heroku
  // callbackURL: process.env.HOST_ADDRESS + '/auth/facebook/callback'
  //........................................................................
}, (accessToken, refreshToken, profile, done) => {
  done(null, profile);
}));

// passport.use(new GoogleStrategy({
//   clientID: "712495193970-pvip1ap9uppri5r8mpqurhu4vou527qg.apps.googleusercontent.com",
//   clientSecret: '...',
//   callbackURL: 'http://localhost:3000/auth/google/callback'
// }, (accessToken, refreshToken, profile, next) => {
//   next(null, profile);
// }));

passport.serializeUser((user, cb) => {
  if (user.provider) {
    cb(null, user);
  } else {
    cb(null, user._id);
  }
});

passport.deserializeUser((id, cb) => {
  if (id.provider) {
    cb(null, id);
    return;
  }

  User.findOne({ "_id": id }, (err, user) => {
    if (err) { return cb(err); }
    cb(null, user);
  });
});


// ---------------_ROUTES GO HERE ---------------
const index = require('./routes/index.js');
app.use('/', index);

const authRoutes = require('./routes/auth-routes.js');
app.use('/', authRoutes);

const trailsRoutes = require('./routes/trails-routes.js');
app.use('/', trailsRoutes);



// // catch 404 and forward to error handler
// app.use((req, res, next) => {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
