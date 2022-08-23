const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const salesModel = require('../../../models/salesModel');
const saleService = require('../../../services/saleService');

describe('Testa a camada salesService', () => {
  describe('Testa a criação e inserção de uma venda na tabela sales', () => {
    const fakeId = { id: 1 };

    response = [{
      productId: 2,
      quantity: 7,
    }];

    afterEach(() => { sinon.restore() });

    it('Testa se retorna um objeto', async () => {
      sinon.stub(salesModel, 'queryInsertSales').resolves(fakeId);
      const result = await saleService.isertSales([response]);
      expect(result).to.be.an('object');
    }); 
  });

  describe('Testa ser retorna todas as vendas da tabela sales', () => {
    describe('Testa em casa de sucesso', () => {
       response = [
        {
          "saleId": 1,
          "date": "2022-08-21T17:00:04.000Z",
          "productId": 1,
          "quantity": 5
        }
      ];

      afterEach(() => { sinon.restore() });

      it('Testa se retorna um objeto', async () => {
        sinon.stub(salesModel, 'queryAllSales').resolves(response);
        const result = await saleService.getAllSales();
        expect(result).to.be.an('object');
      });

      describe('Testa em casa de falha', () => {
        response = []
        afterEach(() => { sinon.restore() });

        it('Testa se retorna um objeto', async () => {
          sinon.stub(salesModel, 'queryAllSales').resolves(response);
          const result = await saleService.getAllSales();
          expect(result).to.be.an('object');
        });
      });

      describe('Testa ser retorna uma venda da tabela sales atrráves do seu id', () => {
        describe('Testa em casa de sucesso', () => {
          
        });
      });
        
    });
  });
});
