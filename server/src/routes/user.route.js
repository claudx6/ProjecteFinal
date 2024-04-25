const express = require("express");
const router = express.Router();

// usuario controller
const user = require('../controller/user.controller');


router.post('/login',user.auth);
router.post('/register',user.register);
router.post('/contact-us',user.contactUs);
router.get('/weather',user.getWeatherByCity);
router.post('/subscribe',user.subscribe);

module.exports = router;