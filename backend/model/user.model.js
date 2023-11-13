const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: String,
  email: String,
  password: String,
}, {
    timestamps:true
});

const UserModel = mongoose.model("travelious_users", userSchema);

module.exports = UserModel;
