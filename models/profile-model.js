const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const profileSchema = newSchema({
//   profilePic: String,
//   myTrails: [populated from where?],
//   trailPhotos: [populated from where?],
//   noteReviews: [populated from where?]
// });

//delete after testing
const profileSchema = new Schema({
  trailName: String,
  trailLength: String,
  trailMap: String
  // reviews: [Review.schema]
  // userPhotos: {},
  // userNotes: {}
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
