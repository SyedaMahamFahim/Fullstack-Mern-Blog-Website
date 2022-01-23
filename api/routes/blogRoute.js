const express = require("express");
const router = express.Router();
const {
    createBlogPost,
    updateBlogPost,
    allBlogPosts,
    deleteBlogPost,
    getBlogDetails
  } = require("../controllers/blogController");
  const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

  //  ======================================= For admin =======================================
  router
  .route("/admin/blog/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"),createBlogPost)
  
  router
  .route("/admin/blogs/all")
  .get(isAuthenticatedUser, authorizeRoles("admin"),allBlogPosts)

  router
  .route("/admin/blog/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"),updateBlogPost)
  .delete(isAuthenticatedUser, authorizeRoles("admin"),deleteBlogPost)
  .get(isAuthenticatedUser, authorizeRoles("admin"),getBlogDetails)


  // =======================================For Users  =======================================
  router
  .route("/all")
  .get(allBlogPosts)

  router
  .route("blog/:slug")
  .get(getBlogDetails)

module.exports = router;