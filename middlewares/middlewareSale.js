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
  const result = req.body.some((k) => k.quantity === 0 || k.quantity < 1);

  if (result) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

const validatProductId2 = (req, res, next) => {
  const result = req.body.every((k) => k.productId === undefined);

  if (!result) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

// [
//   {
//     "productId": 1,
//     "quantity": 1
//   },
//   {
//     "productId": 2,
//     "quantity": 5
//   }
// ]

module.exports = { validatProductId, validatQuantity, validatQuantityValue, validatProductId2 };
