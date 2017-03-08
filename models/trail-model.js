const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//file in models
const Review = require('./reviews.js');

const trailSchema = new Schema({
  trailName: String,
  trailLength: String,
  trailMap: String,
  trailPhotos: String
  //reviews: [Review.schema]
});

const Trail = mongoose.model("Trail", trailSchema);

module.exports = Trail;
