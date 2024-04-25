const express = require("express");
const router = express.Router();

// product controller
const product = require('../controller/product.controller');

router.post('/',product.getProducts);
router.get('/:id',product.getProductById);

module.exports = router;