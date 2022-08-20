const connection = require('./connection');

const queryInsertSales = async () => {
  const date = '2022-01-01';
  // const date = new Date();
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (?);', [date],
  );
  return { id: insertId };
};

// querySalesById().then((result) => console.log(result));

module.exports = { queryInsertSales };
