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

  Trail.findById(id, (err, theTrail) => {
    if (err) {
      next(err);
      return;
    }
    console.log(theTrail);
    res.render('trails/show', {
      id: req.params.id,
      trail: theTrail
    });
  });
});


trailsRoutes.post('/trails/:id', upload.single('picture'), function(req, res){
  const id = req.params.id;

  updatedTrail = {
    trailPhotos: `/uploads/${req.file.filename}`
};

  Trail.findByIdAndUpdate(id, {$push:updatedTrail}, {safe: true, upsert: true, new: true}, (err, model) => {
    if (err) {
      console.log(err);
      console.log("There was an error updating the trail with a picture");
      res.redirect('/');
    } else {
      res.redirect('/trails');
      // window.location.reload();
    }
  });
});


// --------------------------------------------
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
