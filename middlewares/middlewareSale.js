const productModel = require('../models/productsModel');

const validatProductId = (req, res, next) => {
  const result = req.body.find((k) => k.productId);

  if (!result) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  next();
};

const validatQuantity = (req, res, next) => {
  const result = req.body.find((k) => k.quantity);
  if (!result) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  next();
};

const validatQuantityValue = (req, res, next) => {
  const result = req.body.find((k) => k.quantity <= 0);

  if (result) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  next();
};

const validatProductId2 = async (req, res, next) => {
  const allProducts = await productModel.queryAllProducts();

  const product = req.body.every((k) => allProducts.find((p) => p.id === k.productId));

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

module.exports = { validatProductId, validatQuantity, validatQuantityValue, validatProductId2 };
