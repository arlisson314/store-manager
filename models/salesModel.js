const connection = require('./connection');

const queryInsertSales = async () => {
  const date = '2022-01-01';
  // const date = new Date();
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (?);', [date],
  );
  return { id: insertId };
};

const queryAllSales = async () => {
  const query = `SELECT sp.sale_id AS saleId, s.date, 
    sp.product_id AS productId, sp.quantity
    FROM StoreManager.sales_products AS sp
    INNER JOIN StoreManager.sales AS s
    ON sp.sale_id = s.id
    ORDER BY sp.sale_id, sp.product_id`;
  const [result] = await connection.execute(query);
  return result;
};

const querySalesById = async (id) => {
  const queryById = `SELECT s.date, sp.product_id AS productId, sp.quantity
  FROM StoreManager.sales_products AS sp
  INNER JOIN StoreManager.sales AS s
  ON sp.sale_id = s.id
  AND s.id = ?
  ORDER BY sp.sale_id, sp.product_id`;
  const [result] = await connection.execute(queryById, [id]);
  return result;
};

// querySalesById().then((result) => console.log(result));

module.exports = { queryInsertSales, queryAllSales, querySalesById };
