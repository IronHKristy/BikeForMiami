const express = require('express');
const Product = require('../models/trail-model');
const Review = require('../models/reviews');

const reviewsRoutes = express.Router();


reviewsRoutes.get('/trails/:trailId/reviews/new', (req, res, next) => {
  const trailId = req.params.trailId;

  Trail.findById(trailId, (err, trailDoc) => {
    if(err) {
      next(err);
      return;
    }
    res.render('trail-reviews/new', { trail: trailDoc });
  });
});

reviewsRoutes.post('/trail/:trailId/reviews', (req, res, next) => {
  const trailId = req.params.trailId;

  Trail.findById(trailId, (err, trailDoc) => {
    if(err) {
      next(err);
      return;
    }
    const reviewInfo = {
      content: req.body.content,
      email: req.body.email
    };
console.log(trailDoc);
    const theReview = new Review(reviewInfo);
    trailDoc.reviews.push(theReview);
    trailDoc.save((err) => {
      if(err) {
        next(err);
        return;
      }
      res.redirect(`/trails/${[trailId]}`);
    });
  });
});

module.exports = reviewsRoutes;
