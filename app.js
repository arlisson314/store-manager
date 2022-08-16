const express = require('express');
const rescue = require('./middlewares/rescue');
const middError = require('./middlewares/middlewareErro');
const prodControl = require('./controllers/productsController');
const validate = require('./middlewares/middlewareProducts');

const app = express();
app.use(express.json());

app.get('/products', rescue(prodControl.getAll));
app.get('/products/:id', validate.validateId, rescue(prodControl.getAllById));

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(middError);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;