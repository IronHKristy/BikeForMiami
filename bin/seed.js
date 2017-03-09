const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bike-for-miami');
const Trail = require('../models/trail-model');
const Schema = mongoose.Schema;

// const trailSchema = new Schema({

  const trails = [
{
  trailName: "Brickell Key Trail",
  trailLength: "4 miles",
  trailMap: "https://gaiavectortilerendering.global.ssl.fastly.net/feet-raster/12/716/1642.png",
  // userPhotos: {},
  // userNotes: {}
},
{
  trailName: "Key Biscayne Trail",
  trailLength: "8 miles",
  trailMap: "https://gaiavectortilerendering.global.ssl.fastly.net/feet-raster/12/716/1642.png",
  // userPhotos: {},
  // userNotes: {}
},
{
  trailName: "Bayshore Dr Trail",
  trailLength: "6 miles",
  trailMap: "https://gaiavectortilerendering.global.ssl.fastly.net/feet-raster/12/716/1642.png",
  // userPhotos: {},
  // userNotes: {}
}
];


Trail.create(trails, (err,docs) => {
  // if (err) {
  //   throw err;
  // }
  docs.forEach((oneTrail) => {
    console.log(`${oneTrail.trailName} ${oneTrail._id}`);
  });

  mongoose.disconnect();
});
