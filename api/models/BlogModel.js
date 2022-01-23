const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter The Title"],
    maxLength: [30, "Title cannot exceed 30 characters"],
    minLength: [2, "Title should have more than 2 characters"],
  },
  subTitle: {
    type: String,
    required: [true, "Please Enter The SubTitle"],
    maxLength: [30, "SubTitle cannot exceed 30 characters"],
    minLength: [2, "SubTitle should have more than 2 characters"],
  },
  url: {
    type: String,
    required: [true, "Please Enter The Custom Url"],
    maxLength: [30, "Url cannot exceed 30 characters"],
    minLength: [2, "Url should have more than 2 characters"],
  },
  metaDescription: {
    type: String,
    required: [true, "Please Enter The Meta Description For SEO Purpose"],
  },
  photo: {
    type: String,
    required: false,
  },
  categories: {
    type: Array,
    required: false,
  },

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required:true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model("Blog", blogSchema);
