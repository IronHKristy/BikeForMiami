const express    = require("express");
const authRoutes = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');

// User model
const User       = require("../models/user-model.js");

// Bcrypt to encrypt passwords
const bcrypt     = require("bcrypt");

authRoutes.get("/", (req, res, next) => {
  res.render("index");
});

authRoutes.post("/", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username === "" || password === "") {
    res.render("index", { message: "Indicate username and password" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.render("index", { message: "The username already exists" });
      return;
    }

    const salt     = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: username,
      encryptedPassword: hashPass
    });

    newUser.save((err) => {
      if (err) {
        res.render("index", { message: "Something went wrong" });
      } else {
        req.flash('success', 'You have been registered. Try logging in.');
        res.redirect("/");
      }
    });
  });
});


const passport = require('passport');

authRoutes.get('/login', (req, res, next) => {
  res.render('auth/login-view.ejs', {
    errorMessage: req.flash('error')
  });
});


authRoutes.post('/login',
  passport.authenticate('local', {
    successReturnToOrRedirect: '/trails',
    failureRedirect: '/login',
    failureFlash: true,
    successFlash: 'You have been logged in, user!',
    passReqToCallback: true
  })
);

authRoutes.get("/logout", (req, res) => {
  req.logout();
  req.flash('success', 'You have logged out.');
  res.redirect("/");
});


authRoutes.get("/auth/facebook", passport.authenticate("facebook"));
authRoutes.get("/auth/facebook/callback", passport.authenticate("facebook", {
  successRedirect: "/",
  failureRedirect: "/login"
}));

authRoutes.get("/auth/google", passport.authenticate("google", {
  scope: ["https://www.googleapis.com/auth/plus.login",
          "https://www.googleapis.com/auth/plus.profile.emails.read"]
}));
authRoutes.get("/auth/google/callback", passport.authenticate("google", {
  successRedirect: "/",
  failureRedirect: "/login",
}));


module.exports = authRoutes;
