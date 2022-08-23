const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const salesModel = require('../../../models/salesModel');

describe('Testa a camada salesModels', () => {
  describe('Verfica se retorna o id da ultima venda cadastrada', () => {
    const salesId = { id: 4 };
    afterEach(() => sinon.restore());

    it('verifica se retorna um objeto', async () => {
      sinon.stub(connection, 'execute').resolves([salesId]);
      const result = await salesModel.queryInsertSales();
      expect(result).to.be.an('object');
    });
  });

  describe('Verfica se retorna todas as vendas que foram cadastradas no banco de dados', () => {
    const sales = [{
      saleId: 1,
      date: "2022-08-21T00:05:02.000Z",
      productId: 2,
      quantity: 10
    }];
    
    afterEach(() => sinon.restore());

    it('verifica se retorna um um array com todas as vendas', async () => {
      sinon.stub(connection, 'execute').resolves([sales]);
      const result = await salesModel.queryAllSales();
      expect(result).to.be.an('array');
    });
  });

  describe('Verfica se retorna uma vendas expecifica atráves do seu Id', () => {

    const sales = [{
      date: "2022-08-21T00:05:02.000Z",
      productId: 2,
      quantity: 10
    }];
    
    afterEach(() => sinon.restore());

    it('Verifica se retorna um array', async () => {
      sinon.stub(connection, 'execute').resolves([sales]);
      const result = await salesModel.querySalesById(1);
      expect(result).to.be.an('array');
    });

     it('Verifica se o array retornado tem length 1', async () => {
      sinon.stub(connection, 'execute').resolves([sales]);
      const result = await salesModel.querySalesById(1);
      expect(result).to.have.lengthOf(1);
    });

  });

});