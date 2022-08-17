const connection = require('./connection');

const queryAllProducts = async () => {
  const [products] = await connection.execute(
    'SELECT id, name FROM StoreManager.products;',
  );
  return products;
};

const queryProductsById = async (id) => {
  const [products] = await connection.execute(
    'SELECT id,name FROM StoreManager.products WHERE id=?;', [id],
  );
  return products[0];
};

module.exports = { queryAllProducts, queryProductsById };