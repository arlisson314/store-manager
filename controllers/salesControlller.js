const saleService = require('../services/saleService');

const insert = async (req, res) => {
  const { code, data } = await saleService.isertSales();
  data.itemsSold = req.body;
  return res.status(code).json(data);
};

module.exports = { insert };