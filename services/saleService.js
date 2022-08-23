const salesModesl = require('../models/salesModel');

const isertSales = async () => {
  const result = await salesModesl.queryInsertSales();
  return { code: 201, data: result };
};

const getAllSales = async () => {
  const result = await salesModesl.queryAllSales();
  if (!result.length) {
    return { code: 404, data: { message: 'Sale not found' } };
  }
  return { code: 200, data: result };
};

const getSalesById = async (id) => {
  const result = await salesModesl.querySalesById(id);
  if (!result.length) {
    return { code: 404, data: { message: 'Sale not found' } };
  }
  return { code: 200, data: result };
};
// isertSales().then((result) => console.log(result));

module.exports = { isertSales, getAllSales, getSalesById };