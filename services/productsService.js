const productsModel = require('../models/productsModel');

const getAllProducts = async () => productsModel.queryAllProducts();

const getProductsById = async (id) => productsModel.queryProductsById(id);

module.exports = { getAllProducts, getProductsById };