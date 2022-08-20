const saleService = require('../services/saleService');

const insert = async (req, res) => {
  const { code, data } = await saleService.isertSales();
  data.itemsSold = req.body;
  return res.status(code).json(data);
};

const getAll = async (req, res) => {
  const { code, data } = await saleService.getAllSales();
  return res.status(code).json(data);
};
 
const getById = async (req, res) => {
  const { id } = req.params;
  const { code, data } = await saleService.getSalesById(id);
  return res.status(code).json(data);
};

module.exports = { insert, getAll, getById };