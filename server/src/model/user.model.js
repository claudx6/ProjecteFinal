const mongoose = require("mongoose");

const users = new mongoose.Schema({
  // Udise Code slno
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone : {
    type : String,
    required: true
  },
  password : {
    type : String,
    required: true
  },
  status : {
    type : String,
    default : 'Active'
  },
  createdAt : {
    type: Date,
    default : new Date()
  }
});

module.exports = mongoose.model("user", users);
