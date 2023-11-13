const mongoose = require("mongoose");

const tourHistorySchema = mongoose.Schema({
  Country: String,
  name: String,
  url: String,
  description: String,
  cost: Number,
  refundAmount:{
  type: Number,
    default:0,
  },
  title: String,
  heading: String,
  urls: String,
  url1: String,
  url2: String,
  url4: String,
  url3: String,
  guestDetail: String,
  description1: String,
  userId: String,
  status: Boolean,
  bookingDate:String,
  cancelDate:String,
});

const TourHistoryModel = mongoose.model("travelious_tours_history", tourHistorySchema);

module.exports = TourHistoryModel;
