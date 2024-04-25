const mongoose = require("mongoose");

const products = new mongoose.Schema({
  // Udise Code slno
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image_url : {
    type : String,
    required: true
  },
  category_type : {
    type : String,
    required: true
  },
  type : {
    type : String,
    required: true
  },
  short_title : {
    type : String,
    required: true
  },
  createdAt : {
    type: Date,
    default : new Date()
  }
});

module.exports = mongoose.model("product", products);
