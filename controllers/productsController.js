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

module.exports = { getAll, getAllById };

// getAll().then((result) => console.log(result));
// getProductsById(999).then((result) => console.log(result));