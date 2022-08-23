const productModel = require('../models/productsModel');

const validatProductId = (req, res, next) => {
  const result = req.body.every((k) => k.productId);

  if (!result) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  next();
};

const validatQuantity = (req, res, next) => {
  const result = req.body.every((k) => k.quantity);
  if (!result) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  next();
};

const validatQuantityValue = (req, res, next) => {
  // let quantity = true;
  const result = req.body.every((k) => k.quantity <= 0);

  if (result) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  // req.body.forEach((element) => {
  //   if (element.quantity <= 0) quantity = false;
  // });
  // if (!quantity) {
  //   return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  // }
  next();
};

const validatProductId2 = async (req, res, next) => {
  let product = true;
  const allProducts = await productModel.queryAllProducts();
  // const result = req.body.every(async ({ productId }) => productModel
  //   .queryProductsById(productId).id);

  req.body.forEach(async ({ productId }) => {
    const result = allProducts.some(({ id }) => Number(productId) === Number(id));
    if (!result) product = false;
  });

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

module.exports = { validatProductId, validatQuantity, validatQuantityValue, validatProductId2 };
