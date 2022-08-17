const productsModel = require('../models/productsModel');

const getAllProducts = async () => {
  const products = await productsModel.queryAllProducts();
  if (!products.length) {
    return { code: 404, message: { message: 'Product not found' } };
  }
  return { code: 200, data: products };
};

const getProductsById = async (id) => {
  const product = await productsModel.queryProductsById(id);
  if (!product) {
    return { code: 404, message: { message: 'Product not found' } };
  }
  return { code: 200, data: product };
};

// const getProductsById = async (id) => productsModel.queryProductsById(id);

// getProductsById(999).then((result) => console.log(result));

module.exports = { getAllProducts, getProductsById };
