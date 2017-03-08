const express = require('express');

const Trail = require('../models/trail-model.js');


const multer = require('multer');

const trailsRoutes = express.Router();
const upload = multer({ dest: __dirname + '/../public/uploads/'});

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
console.log(req.params.id);
    res.render('trails/show', {
      id: req.params.id,
      trail: prodDoc
    });
  });
});


trailsRoutes.post('/trails/:id', upload.single('photo'), function(req, res){
  const id = req.params.id;

  updatedTrail = {
    trailPhotos: `/uploads/${req.file.filename}`
};

  Trail.findByIdAndUpdate(id, updatedTrail, (err, model) => {
    if (err) {
      console.log("There was an error updating the trail with a picture");
      res.redirect('/');
    } else {

    }
  });
});
//------------------------------------------------------------
// trailsRoutes.post('/trails',
//
//   //single allows them to only be able to upload one photo
//   uploads.single('picture'),
//
//   (req, res, next) => {
//       const filename = req.file.filename;
//
//   const newPhoto = new Photo ({
//     trailPhotos: `/uploads/${filename}`,
//     // owner: req.user._id   // <-- we add the user ID
//   });
//
//   newPhoto.save((err) => {
//     if (err) {
//       next(err);
//       return;
//     } else {
//       req.flash('success', 'Your photo has been uploaded.');
//       res.redirect('/trails:id');
//     }
//   });
// });
//----------------------------------------------------------
module.exports = trailsRoutes;
