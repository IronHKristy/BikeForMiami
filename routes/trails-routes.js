const express = require('express');

const Trail = require('../models/trail-model.js');

const trailsRoutes = express.Router();

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

module.exports = trailsRoutes;
