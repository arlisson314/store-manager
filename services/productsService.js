const productsModel = require('../models/productsModel');

const getAllProducts = async () => {
  const products = await productsModel.queryAllProducts();
  if (!products.length) {
    return { code: 404, data: { message: 'Product not found' } };
  }
  return { code: 200, data: products };
};

const getProductsById = async (id) => {
  const product = await productsModel.queryProductsById(id);
  if (!product) {
    return { code: 404, data: { message: 'Product not found' } };
  }
  return { code: 200, data: product };
};

const insertProduct = async (name) => {
  const product = await productsModel.queryInsertProduct(name);
  return { code: 201, data: product };
};

const updateProductsById = async (name, id) => {
  const product = await productsModel.queryProductsById(id);
  const result = await productsModel.queryUpdateProductsById(name, id);
  if (!product || !result) {
    return { code: 404, data: { message: 'Product not found' } };
  }
  return { code: 200, data: result };
};
const deleteProductById = async (id) => {
  const product = await productsModel.queryProductsById(id);
  if ([product].includes(undefined)) {
    return { code: 404, data: { message: 'Product not found' } };
  }
  await productsModel.queryDeleteById(id);
  return { code: 204 };
};

// insertProduct('arlisson').then((result) => console.log(result));
// getAllProducts().then((result) => console.log(result));

module.exports = {
  getAllProducts,
  getProductsById,
  insertProduct,
  updateProductsById,
  deleteProductById,
};
