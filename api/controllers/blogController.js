const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");
const Blog = require("../models/BlogModel");

// Create Blog Post
exports.createBlogPost = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user.id;
 
  const blogPost = await Blog.create(req.body);
  
  res.status(201).json({
    success: true,
    blogPost,
  });
});

// Update Blog Post
exports.updateBlogPost = catchAsyncErrors(async (req, res, next) => {

  let blogPost = await Blog.findById(req.params.id);

  if (!blogPost) {
    return next(new ErrorHander("Post not found", 404));
  }

  blogPost = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });


  res.status(200).json({
    success: true,
    blogPost,
  });
});

// Get All Blog Post

exports.allBlogPosts = catchAsyncErrors(async (req, res, next) => {

  const blogPosts = await Blog.find()


  res.status(200).json({
    success: true,
    blogPosts,
  });
});

// Delete Blog Post
exports.deleteBlogPost = catchAsyncErrors(async (req, res, next) => {
  const blogPost = await Blog.findById(req.params.id);

  if (!blogPost) {
    return next(new ErrorHander("Blog Post not found", 404));
  }

  await blogPost.remove();

  res.status(200).json({
    success: true,
    message: "Post Deleted Successfully",
  });
})

// Get Blog Details
exports.getBlogDetails = catchAsyncErrors(async (req, res, next) => {
  const blogPost = await Blog.findById(req.params.id);

  if (!blogPost) {
    return next(new ErrorHander("Blog Post not found", 404));
  }

  res.status(200).json({
    success: true,
    blogPost,
  });
});