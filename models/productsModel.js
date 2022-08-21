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

const queryInsertProduct = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?);', [name],
    );
    return { id: insertId, name };
  };
  
const queryUpdateProductsById = async (name, id) => {
 await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id=?;', [name, id],
  );
  return { id, name };
};

const queryDeleteById = async (id) => {
  await connection.execute('DELETE FROM StoreManager.products WHERE id=?;', [id]);
};
// queryUpdateProductsById(1).then((result) => console.log(result));
module.exports = {
  queryAllProducts,
  queryProductsById,
  queryInsertProduct,
  queryUpdateProductsById,
  queryDeleteById,
};