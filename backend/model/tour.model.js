const mongoose = require("mongoose");

const tourSchema = mongoose.Schema({
  Country: String,
  name: String,
  url: String,
  description: String,
  cost: Number,
  title: String,
  heading: String,
  urls: String,
  url1: String,
  url2: String,
  url4: String,
  url3: String,
  guestDetail: String,
  description1: String,
 
});

const TourModel = mongoose.model("travelious_tours", tourSchema);

module.exports = TourModel;
