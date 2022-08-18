const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const productsModel = require('../../../models/productsModel');
const productsService = require('../../../services/productsService');


describe('Testa a camada productServices', () => {
  describe('Testa se a busca retorna todos os produtos,', () => {

    const products = {
      code: 200,
      data: { id: 1, name: 'Martelo de Thor' }
    };

    afterEach(() => { sinon.restore() });

    it('Verifica se o retorna um objeto', async () => {
      sinon.stub(productsModel, 'queryAllProducts').resolves(products);
      const response = await productsService.getAllProducts();
      expect(response).to.be.an('object');
    });

    it('Verifica se retorna as chaves code e data', async () => {
      sinon.stub(productsModel, 'queryAllProducts').resolves(products);
      const response = await productsService.getAllProducts();
      expect(response).to.have.keys('code', 'data');
    });
  });


  describe('Verifica o retorno da busca de um produto através do seu Id', () => {
    describe('Testa em caso de sucesso no retorno', () => {

      const product = { code: 200, data: { id: 1, name: 'Martelo de Thor' } };
      
      afterEach(() => { sinon.restore() });

      it('Verifica se o retorna um objeto', async () => {
        sinon.stub(productsModel, 'queryProductsById').resolves(product);
        const response = await productsService.getProductsById(1);
        expect(response).to.be.an('object');
      });

      it('Verifica se retorna as chaves code e data', async () => {
        sinon.stub(productsModel, 'queryProductsById').resolves(product);
        const response = await productsService.getProductsById(1);
        expect(response).to.have.keys('code', 'data');
      });

      it('Verifica se a chave data é um objeto', async () => {
        sinon.stub(productsModel, 'queryProductsById').resolves(product);
        const response = await productsService.getProductsById(1);
        expect(response.data).to.be.an('object');
      });
    });


    describe('Testa em caso de falha no retorno', () => {
      afterEach(() => { sinon.restore() });
    
      it('Verifivca se retorna um objeto', async () => {
        sinon.stub(productsModel, 'queryProductsById').resolves(undefined);
        const response = await productsService.getProductsById(314);
        expect(response).to.be.an('object');
      });
      
      it('Verifica se retorna as chaves code e data', async () => {
        sinon.stub(productsModel, 'queryProductsById').resolves(undefined);
        const response = await productsService.getProductsById(314);
        expect(response).to.have.keys('code', 'data');
      });

      it('Verifica se retorna as chave data.message', async () => {
        sinon.stub(productsModel, 'queryProductsById').resolves(undefined);
        const response = await productsService.getProductsById(999);
        expect(response.data).to.have.key('any');
      });
    });

  });

});