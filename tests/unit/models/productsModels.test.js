const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const productsModel = require('../../../models/productsModel');

describe('Testa a camada de prodoctsModel', () => {
  describe('Testa a busca de todos os produtos', () => {
    // before(() => {
    //   sinon.stub(connection, 'execute').resolves([Products]);
    // })
    
    // after(() => connection.execute.restore());
    const Products = [
      {
        id: 1,
        name: "Martelo de Thor"
      },
      {
        id: 2,
        name: "Traje de encolhimento"
      },
      {
        id: 3,
        name: "Escudo do Capitão América"
      }
    ];
    
    afterEach(() => sinon.restore());
    
    it('Verifica se retorna um array', async () => {

      sinon.stub(connection, 'execute').resolves([Products]);

      const result = await productsModel.queryAllProducts();
      expect(result).to.be.an('array');
    });

    it('Verifica so o array possui 3 itens', async () => {

      sinon.stub(connection, 'execute').resolves([Products]);
      
      const result = await productsModel.queryAllProducts();
      expect(result).to.have.lengthOf(3);
    });

  });


  describe('verifica o retorno da busca de um produto através do seu Id', async () => {
    const Product ={
      id: 1,
      name: "Martelo de Thor"
    };

    afterEach(() => sinon.restore());

    it('verifica se retorna um objeto', async () => {
      sinon.stub(connection, 'execute').resolves([[Product]]);
      const result = await productsModel.queryProductsById(1);
      expect(result).to.be.an('object');
    });

  });


});