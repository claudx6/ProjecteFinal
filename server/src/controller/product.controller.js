// model
const product = require("../model/products.model");

// productos
const getProducts = async (req,res) => {
  try {
    const {category_type,type,sortBy} = req.body;
    let products = await product.find({category_type: category_type,type : type});
    if (sortBy === 'high_price') {
      products.sort((a, b) => {
          return b.price - a.price;
      });
  } else if (sortBy === 'low_price') {
      products.sort((a, b) => {
          return a.price - b.price;
      });
  }
    return res.send({
        status : true,
        message : 'Products founded',
        data : products
    })
  } catch (error) {
    res.status(403).send(error)
  }
}

const getProductById = async (req,res) => {
  try {
    const {id} = req.params;
    const products = await product.findOne({_id : id});
    if(products) {
      return res.send({
        status : true,
        message : 'Product founded',
        data : products
    })
    } else {
      return res.send({
        status : false,
        message : 'Product Not founded',
        data : []
    })
    }

  } catch (error) {
    res.status(403).send(error)
  }
}

module.exports = {
    getProducts,
    getProductById
}