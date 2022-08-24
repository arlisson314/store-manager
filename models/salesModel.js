const connection = require('./connection');

const queryInsertSales = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW());',
  );
  return { id: insertId };
};

const queryAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT sp.sale_id AS saleId, s.date, 
    sp.product_id AS productId, sp.quantity
    FROM StoreManager.sales_products AS sp
    INNER JOIN StoreManager.sales AS s
    ON sp.sale_id = s.id
    ORDER BY sp.sale_id, sp.product_id`,
  );
  return result;
};

const querySalesById = async (id) => {
  const [result] = await connection.execute(
    `SELECT s.date, sp.product_id AS productId, sp.quantity
    FROM StoreManager.sales_products AS sp
    INNER JOIN StoreManager.sales AS s
    ON sp.sale_id = s.id
    AND s.id = ?
    ORDER BY sp.sale_id, sp.product_id;`, [id],
  );
  return result;
};

// querySalesById().then((result) => console.log(result));

module.exports = { queryInsertSales, queryAllSales, querySalesById };
