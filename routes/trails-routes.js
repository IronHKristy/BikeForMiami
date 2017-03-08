const express = require('express');

const Trail = require('../models/trail-model.js');
const Photo = require('../models/trail-model.js');

const multer = require('multer');

const trailsRoutes = express.Router();
const uploads = multer({ dest: __dirname + '/../public/uploads/'});

trailsRoutes.get('/trails', (req, res) => {
  Trail.find({}, (err, trails) => {
    if (err) {
      next(err);
      return;
    }

    res.render('trails/index.ejs', {
      trails: trails
    });
  });
});





trailsRoutes.get('/trails/:id', (req, res, next) => {
  const id = req.params.id;

  Trail.findById(id, (err, prodDoc) => {
    if (err) {
      next(err);
      return;
    }

    res.render('trails/show', {
      trail: prodDoc
    });
  });
});

trailsRoutes.post('/trails',
  // (req, res, next) => {
  // const id = req.params.id;
  // Trail.findById(id, (err, prodDoc) => {
  // if (err) {
  //   next(err);
  //   return;
  // }

  //single allows them to only be able to upload one photo
  uploads.single('picture'),

  (req, res, next) => {
      const filename = req.file.filename;

  const newPhoto = new Photo ({
    trailMap: `/uploads/${filename}`,
    // owner: req.user._id   // <-- we add the user ID
  });

  newPhoto.save((err) => {
    if (err) {
      next(err);
      return;
    } else {
      req.flash('success', 'Your photo has been uploaded.');
      res.redirect('/trails:id');
    }
  });
});

module.exports = trailsRoutes;
