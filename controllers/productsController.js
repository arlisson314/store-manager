const productsService = require('../services/productsService');

const getAll = async (_req, res) => {
  const { code, data } = await productsService.getAllProducts();

  return res.status(code).json(data);
};

const getAllById = async (req, res) => {
  const { id } = req.params;
  const { code, data } = await productsService.getProductsById(id);

  return res.status(code).json(data);
};

const insert = async (req, res) => {
  const { name } = req.body;
  const { code, data } = await productsService.insertProduct(name);
  return res.status(code).json(data);
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { code, data } = await productsService.updateProductsById(name, id);

  return res.status(code).json(data);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const { code, data } = await productsService.deleteProductById(id);

  return res.status(code).json(data);
};

module.exports = { getAll, getAllById, insert, updateById, deleteById };

// getAll().then((result) => console.log(result));
// getProductsById(999).then((result) => console.log(result));