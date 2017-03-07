const express = require('express');
const ensure = require('connect-ensure-login');
const multer = require('multer');

const Profile = require('../models/profile-model.js');

const profilesRoutes = express.Router();
const uploads = multer({ dest: __dirname + '/../public/uploads'});

profilesRoutes.get('/profiles',
ensure.ensureLoggedIn(), (req, res, next) => {
  Profile.find({ user: req.user._id }, (err, myProfiles) => {
    if (err) {
      next(err);
      return;
    }

    res.render('profiles/profiles-index.ejs', {
      profiles: myProfiles
    });
  });
});

profilesRoutes.get('/profiles/new',
ensure.ensureLoggedIn(), (req, res, next) => {
  res.render('profiles/new.ejs', {
    message: req.flash('success')
  });
});

profilesRoutes.post('/profiles',
  ensure.ensureLoggedIn(),
  uploads.single('picture'),
  (req, res, next) => {
    const filename = req.file.filename;

    const newProfile = new Profile ({
      name: req.body.name,
      picture: `/uploads/${filename}`
    });
  });

  newProfile.save((err) => {
    if (err) {
      next(err);
      return;
    } else {
      req.flash('success', 'Your profile has been created.');
      res.redirect('/profiles/new');
    }
  });


module.exports = profilesRoutes;
