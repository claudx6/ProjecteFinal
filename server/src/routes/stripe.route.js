const express = require("express");
const router = express.Router();

// stripe controller
const stripe = require("../controller/stripe.controller");

router.post('/create-payment-intent',stripe.createPaymentIntend);

module.exports = router;