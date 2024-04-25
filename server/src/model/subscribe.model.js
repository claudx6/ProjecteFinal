const mongoose = require("mongoose");

const newsletter = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  createdAt : {
    type: Date,
    default : new Date()
  }
});

module.exports = mongoose.model("newsletteruser", newsletter);