const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const profileSchema = newSchema({
//   profilePic: String,
//   myTrails: [populated from where?],
//   trailPhotos: [populated from where?],
//   noteReviews: [populated from where?]
// });

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
