const express = require("express");
const app = express();
const dotenv=require('dotenv')
dotenv.config()
const blogRoute=require('./routes/blogRoute')
const userRoute=require('./routes/userRoute')
const errorMiddleware=require('./middleware/error')
const cookieParser = require("cookie-parser");
const cloudinary = require("cloudinary");
const fileUpload = require("express-fileupload");

// App Methods
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({useTempFiles: true}));


// Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Routes
app.use('/api/v1/blogs',blogRoute);
app.use('/api/v1/users',userRoute);


// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
