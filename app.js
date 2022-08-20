const express = require('express');
const rescue = require('./middlewares/rescue');
const middError = require('./middlewares/middlewareErro');
const prodControl = require('./controllers/productsController');
const salesController = require('./controllers/salesControlller');

const middProdVal = require('./middlewares/middlewareProductsValidation');
const middSalesVal = require('./middlewares/middlewareSale');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', rescue(prodControl.getAll));
app.post('/products', middProdVal.validatName, rescue(prodControl.insert));
app.get('/products/:id', rescue(prodControl.getAllById));

app.post('/sales',
  middSalesVal.validatProductId,
  middSalesVal.validatQuantityValue,
  middSalesVal.validatQuantity,
  middSalesVal.validatProductId2,
  rescue(salesController.insert));
app.use(middError);

app.get('/sales', rescue(salesController.getAll));
app.get('/sales/:id', rescue(salesController.getById));

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;