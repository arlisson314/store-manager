const productsService = require('../services/productsService');

const getAll = async (_req, res) => {
  const products = await productsService.getAllProducts();
  return res.status(200).json(products);
};

const getAllById = async (req, res) => {
  const { id } = req.params;
  const products = await productsService.getProductsById(id);
  // console.log(products);
  if (!products.length) { return res.status(404).json({ message: 'Product not found' }); }
  return res.status(200).json(...products);
};

module.exports = { getAll, getAllById };