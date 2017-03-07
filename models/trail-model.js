const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Review = require('./reviews.js');

const trailSchema = new Schema({
  trailName: String,
  trailLength: String,
  trailMap: String,
  reviews: [Review.schema]
  // userPhotos: {},
  // userNotes: {}
});

const Trail = mongoose.model("Trail", trailSchema);

module.exports = Trail;
