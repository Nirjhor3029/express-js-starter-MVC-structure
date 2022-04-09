const express = require("express");
const pageController = require('../controllers/pageController');

const router = express.Router();

router.get('', pageController.home_page);
router.get('/about', pageController.about_page);

module.exports = router;