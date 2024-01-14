// Import controllers for blog-related actions
const { createBlog, getBlogs, getBlogsById, deleteBlogsById, updateBlog } = require("../controllers/blogController.js");

// Import the Express router module
const router = require("express").Router();

// Create a new Express router instance
router

// Define routes and their associated controller functions:

// POST request to /create to create a new blog
router.post("/create", createBlog);

// GET request to /get to retrieve all blogs
router.get("/get", getBlogs);

// GET request to /get/:id to retrieve a blog by its ID
router.get("/get/:id", getBlogsById);

// DELETE request to /delete/:id to delete a blog by its ID
router.delete("/delete/:id", deleteBlogsById);

router.post("/update/:id", updateBlog);

// Export the router for use in the main application
module.exports = router;




/*
const {createBlog,getBlogs,getBlogsById,deleteBlogsById}=require("../controllers/blogController.js");
const router = require('express').Router();

router

router.post("/create",createBlog);
router.get("/get",getBlogs);
router.get("/get/:id",getBlogsById);
router.delete("/delete/:id",deleteBlogsById);

module.exports=router;
*/