const mongoose = require("mongoose");

const contactUs = new mongoose.Schema({
  // Udise Code slno
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  message : {
    type : String,
    required: true
  },
  createdAt : {
    type: Date,
    default : new Date()
  }
});

module.exports = mongoose.model("contactus", contactUs);
