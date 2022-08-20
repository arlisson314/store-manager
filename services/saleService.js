const salesModesl = require('../models/salesModel');

const isertSales = async () => {
  const result = await salesModesl.queryInsertSales();
  return { code: 201, data: result };
};

// getAllSales().then((result) => console.log(result));

module.exports = { isertSales };