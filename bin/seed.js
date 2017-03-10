const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
mongoose.connect(process.env.MONGODB_URI);
const Trail = require('../models/trail-model');
const Schema = mongoose.Schema;

// const trailSchema = new Schema({

  const trails = [
{
  trailName: "A.D. Barnes Park",
  trailLength: "4 miles",
  trailMap: "/images/AD-Barnes-Park.jpg",
  trailType: "Paved/Innerconnecting Trails",
  trailFees: "Free",
  trailDiff: "Moderate",
  trailDesc: "Amid the pine flatwoods, the Sense of Wonder Nature Center is a gateway to this urban trail system. Along the paths you’ll find an observation deck set under the forest canopy, where strangler figs and oaks compete for light. Other highlights include man-made waterfalls over native oolite boulders and a butterfly garden."
},
{
  trailName: "Anhinga Trail",
  trailLength: "4 miles",
  trailMap: "/images/AD-Barnes-Park.jpg",
  trailType: "Paved/Innerconnecting Trails",
  trailFees: "Free",
  trailDiff: "Moderate",
  trailDesc: "Amid the pine flatwoods, the Sense of Wonder Nature Center is a gateway to this urban trail system. Along the paths you’ll find an observation deck set under the forest canopy, where strangler figs and oaks compete for light. Other highlights include man-made waterfalls over native oolite boulders and a butterfly garden."
},
{
  trailName: "Arch Creek Park",
  trailLength: "4 miles",
  trailMap: "/images/AD-Barnes-Park.jpg",
  trailType: "Paved/Innerconnecting Trails",
  trailFees: "Free",
  trailDiff: "Moderate",
  trailDesc: "Amid the pine flatwoods, the Sense of Wonder Nature Center is a gateway to this urban trail system. Along the paths you’ll find an observation deck set under the forest canopy, where strangler figs and oaks compete for light. Other highlights include man-made waterfalls over native oolite boulders and a butterfly garden."
},
{
  trailName: "Bayshore Loop",
  trailLength: "4 miles",
  trailMap: "/images/AD-Barnes-Park.jpg",
  trailType: "Paved/Innerconnecting Trails",
  trailFees: "Free",
  trailDiff: "Moderate",
  trailDesc: "Amid the pine flatwoods, the Sense of Wonder Nature Center is a gateway to this urban trail system. Along the paths you’ll find an observation deck set under the forest canopy, where strangler figs and oaks compete for light. Other highlights include man-made waterfalls over native oolite boulders and a butterfly garden."
},
{
  trailName: "Bear Cut Preserve",
  trailLength: "4 miles",
  trailMap: "/images/AD-Barnes-Park.jpg",
  trailType: "Paved/Innerconnecting Trails",
  trailFees: "Free",
  trailDiff: "Moderate",
  trailDesc: "Amid the pine flatwoods, the Sense of Wonder Nature Center is a gateway to this urban trail system. Along the paths you’ll find an observation deck set under the forest canopy, where strangler figs and oaks compete for light. Other highlights include man-made waterfalls over native oolite boulders and a butterfly garden."
},
{
  trailName: "Bear Lake Trail",
  trailLength: "4 miles",
  trailMap: "/images/AD-Barnes-Park.jpg",
  trailType: "Paved/Innerconnecting Trails",
  trailFees: "Free",
  trailDiff: "Moderate",
  trailDesc: "Amid the pine flatwoods, the Sense of Wonder Nature Center is a gateway to this urban trail system. Along the paths you’ll find an observation deck set under the forest canopy, where strangler figs and oaks compete for light. Other highlights include man-made waterfalls over native oolite boulders and a butterfly garden."
},
{
  trailName: "Big Cypress National Preserve",
  trailLength: "4 miles",
  trailMap: "/images/AD-Barnes-Park.jpg",
  trailType: "Paved/Innerconnecting Trails",
  trailFees: "Free",
  trailDiff: "Moderate",
  trailDesc: "Amid the pine flatwoods, the Sense of Wonder Nature Center is a gateway to this urban trail system. Along the paths you’ll find an observation deck set under the forest canopy, where strangler figs and oaks compete for light. Other highlights include man-made waterfalls over native oolite boulders and a butterfly garden."
},
{
  trailName: "Bill Sadowski Park",
  trailLength: "4 miles",
  trailMap: "/images/AD-Barnes-Park.jpg",
  trailType: "Paved/Innerconnecting Trails",
  trailFees: "Free",
  trailDiff: "Moderate",
  trailDesc: "Amid the pine flatwoods, the Sense of Wonder Nature Center is a gateway to this urban trail system. Along the paths you’ll find an observation deck set under the forest canopy, where strangler figs and oaks compete for light. Other highlights include man-made waterfalls over native oolite boulders and a butterfly garden."
},
{
  trailName: "Biscayne National Park",
  trailLength: "4 miles",
  trailMap: "/images/AD-Barnes-Park.jpg",
  trailType: "Paved/Innerconnecting Trails",
  trailFees: "Free",
  trailDiff: "Moderate",
  trailDesc: "Amid the pine flatwoods, the Sense of Wonder Nature Center is a gateway to this urban trail system. Along the paths you’ll find an observation deck set under the forest canopy, where strangler figs and oaks compete for light. Other highlights include man-made waterfalls over native oolite boulders and a butterfly garden."
},
{
  trailName: "Bobcat Boardwalk",
  trailLength: "4 miles",
  trailMap: "/images/AD-Barnes-Park.jpg",
  trailType: "Paved/Innerconnecting Trails",
  trailFees: "Free",
  trailDiff: "Moderate",
  trailDesc: "Amid the pine flatwoods, the Sense of Wonder Nature Center is a gateway to this urban trail system. Along the paths you’ll find an observation deck set under the forest canopy, where strangler figs and oaks compete for light. Other highlights include man-made waterfalls over native oolite boulders and a butterfly garden."
},
{
  trailName: "Cape Florida Natural Trail",
  trailLength: "4 miles",
  trailMap: "/images/AD-Barnes-Park.jpg",
  trailType: "Paved/Innerconnecting Trails",
  trailFees: "Free",
  trailDiff: "Moderate",
  trailDesc: "Amid the pine flatwoods, the Sense of Wonder Nature Center is a gateway to this urban trail system. Along the paths you’ll find an observation deck set under the forest canopy, where strangler figs and oaks compete for light. Other highlights include man-made waterfalls over native oolite boulders and a butterfly garden."
},
{
  trailName: "Castellow Hammock Preserve",
  trailLength: "4 miles",
  trailMap: "/images/AD-Barnes-Park.jpg",
  trailType: "Paved/Innerconnecting Trails",
  trailFees: "Free",
  trailDiff: "Moderate",
  trailDesc: "Amid the pine flatwoods, the Sense of Wonder Nature Center is a gateway to this urban trail system. Along the paths you’ll find an observation deck set under the forest canopy, where strangler figs and oaks compete for light. Other highlights include man-made waterfalls over native oolite boulders and a butterfly garden."
}
];


Trail.create(trails, (err,docs) => {
  // if (err) {
  //   throw err;
  // }
  docs.forEach((oneTrail) => {
    console.log(`${oneTrail.trailName} ${oneTrail._id}`);
  });
});

setTimeout(() => mongoose.connection.close(), 2000);
