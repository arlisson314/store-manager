const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const productsService = require('../../../services/productsService');
const productsController = require('../../../controllers/productsController');

describe('Testa a camada productsControllers', () => {
  describe('Testa se a busca retorna todos os produtos,', () => {
  
    afterEach(() => { sinon.restore() });

    it('Verifica se retorna um array', async () => {
      code = 200;
      const request = {};
      const response = {};
      const products = [{ id: 1, name: 'Martelo de Thor' }];

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productsService, 'getAllProducts').resolves(products);

      await productsController.getAll(request, response)
      expect(response.status.calledWith(code)).to.be.false;
    });
  });
  
});