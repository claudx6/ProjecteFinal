const express = require("express");
const router = express.Router();
// usuario routes
const userRoutes = require('./src/routes/user.route');
// productos routes
const productRoutes = require('./src/routes/product.route')
// stripe routes
const stripeRoutes = require('./src/routes/stripe.route')

router.use("/user", userRoutes);
router.use("/product",productRoutes)
router.use("/stripe",stripeRoutes)
module.exports = router;