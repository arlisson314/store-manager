const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const productsModel = require('../../../models/productsModel');
const productsService = require('../../../services/productsService');


describe('Testa a camada productServices', () => {
  describe('Testa se a busca retorna todos os produtos em caso de sucesso,', () => {

    const products = [{ id: 1, name: 'Martelo de Thor' }];

    afterEach(() => { sinon.restore() });

    it('Verifica se retorna as chaves code e data', async () => {
      sinon.stub(productsModel, 'queryAllProducts').resolves(products);
      const response = await productsService.getAllProducts();
      expect(response).to.have.keys('code', 'data');
    });

    it('Verifica se retorna um objeto', async () => {
      sinon.stub(productsModel, 'queryAllProducts').resolves(products);
      const response = await productsService.getAllProducts();
      expect(response.data).to.be.an('array');
    });
  
  });

  describe('Testa o retorna de todos os produtos em caso de falha,', () => {

    const products = [];
    afterEach(() => { sinon.restore() });

    it('Verifica se retorna a chave message no caso de falha', async () => {
      sinon.stub(productsModel, 'queryAllProducts').resolves(products);
      const response = await productsService.getAllProducts();
      expect(response.data).to.have.key('message');
    });
  });


  describe('Verifica o retorno da busca de um produto através do seu Id', () => {
    describe('Testa em caso de sucesso no retorno', () => {

      const product = { id: 1, name: 'Martelo de Thor' };
      
      afterEach(() => { sinon.restore() });

      it('Verifica se retorna um objeto', async () => {
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

      it('Verifica se a chave data é um objeto', async () => {
        sinon.stub(productsModel, 'queryProductsById').resolves(product);
        const response = await productsService.getProductsById(1);
        expect(response.data).to.all.keys('id', 'name');
      });

       it('Verifica se a chave data é um objeto', async () => {
        sinon.stub(productsModel, 'queryProductsById').resolves(product);
        const response = await productsService.getProductsById(1);
        expect(response.code).to.be.an('number');
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

      it('Verifica se chave data contem a chave message', async () => {
        sinon.stub(productsModel, 'queryProductsById').resolves(undefined);
        const response = await productsService.getProductsById(314);
        expect(response.data).to.have.key('message');
      });
    });

    describe('Testa o resultado da inserção de um produto', () => {
      describe('Verifica o retorno em caso de sucesso', () => {
        product = {
          id: 1,
          name: 'xabalu'
        };

        afterEach(() => { sinon.restore() });

        it('Verifica se retorna um objeto', async () => {
          sinon.stub(productsModel, 'queryInsertProduct').resolves(product);
          const response = await productsService.insertProduct(product.name)
          expect(response).to.be.an('object');
        });

        it('Verifica se retorna as chaves code e data', async () => {
          sinon.stub(productsModel, 'queryProductsById').resolves(product);
          const response = await productsService.getProductsById(product.name);
          expect(response).to.have.keys('code', 'data');
        });
      });

    });

  });

});