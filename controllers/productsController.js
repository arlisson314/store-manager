const productsService = require('../services/productsService');

const getAll = async (_req, res) => {
  const { code, data, message } = await productsService.getAllProducts();
  if (message) {
    return res.status(code).json(message);
  }
  return res.status(code).json(data);
};

const getAllById = async (req, res) => {
  const { id } = req.params;
  const { code, data, message } = await productsService.getProductsById(id);

  if (message) {
    return res.status(code).json(message);
  }
  return res.status(code).json(data);
};

module.exports = { getAll, getAllById };