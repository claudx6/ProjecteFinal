const mongoose = require("mongoose");

const newslater = new mongoose.Schema({
  // Udise Code slno
  email: {
    type: String,
    required: true
  },
  createdAt : {
    type: Date,
    default : new Date()
  }
});

module.exports = mongoose.model("newslateruser", newslater);
