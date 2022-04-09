const express = require("express");
const blogController = require('../controllers/blogController');

const router = express.Router();

router.get('/add-blog', blogController.blog_create_get);
// router.get('/about', blogController.blog_create_post);

module.exports = router;