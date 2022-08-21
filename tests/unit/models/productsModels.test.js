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
    const products = [
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

      sinon.stub(connection, 'execute').resolves([products]);

      const result = await productsModel.queryAllProducts();
      expect(result).to.be.an('array');
    });

    it('Verifica so o array possui 3 itens', async () => {

      sinon.stub(connection, 'execute').resolves([products]);
      
      const result = await productsModel.queryAllProducts();
      expect(result).to.have.lengthOf(3);
    });

  });


  describe('Verifica o retorno da busca de um produto através do seu Id', async () => {
    describe('Verifica em caso de sucesso', () => {
       const product ={
        id: 1,
        name: "Martelo de Thor"
      };

      afterEach(() => sinon.restore());

      it('Verifica se retorna um objeto', async () => {
        sinon.stub(connection, 'execute').resolves([[product]]);
        const result = await productsModel.queryProductsById(1);
        expect(result).to.be.an('object');
      });

      it('Verifica se o objeto retornado possui as chaves id e name', async () => {
        sinon.stub(connection, 'execute').resolves([[product]]);
        const result = await productsModel.queryProductsById(1);
        expect(result).to.have.keys('id', 'name');
      });

    });

    describe('Verifica em caso de falha', () => {
      afterEach(() => sinon.restore());

      it('Verifica se retorna um objeto vazio em caso de falha', async () => {
        sinon.stub(connection, 'execute').resolves([[]]);
        const result = await productsModel.queryProductsById(314);
        expect(result).to.be.undefined;
      });
    });
      
  });

  describe('Verifica se é possivel inserir um produto no banco de dados', () => {
    const name = {
      name: 'pong'
    }

    afterEach(() => { sinon.restore() });

    it('Verifica se retorna um objeto', async () => {
      sinon.stub().resolves([{ name }]);
      const result = await productsModel.queryInsertProduct('pong');
      expect(result).to.be.an('object');
    });

    it('Verifica se retorna o objeto retornado possui as chaves id, name', async () => {
      sinon.stub().resolves([{ name }]);
      const result = await productsModel.queryInsertProduct('pong');
      expect(result).to.have.keys('id', 'name');
    });
  });

  describe('Verifica o produto que foj atualizado no banco de dados', () => {
    const product = {
      id: 1,
      name: "sdewfsd"
    }

    afterEach(() => { sinon.restore() });

    it('Verifica se retorna um objeto', async () => {
      sinon.stub().resolves(product);
      const result = await productsModel.queryUpdateProductsById(product.name, 1);
      expect(result).to.be.an('object');
    });
  });

  describe('Verifica se a query é executada', () => {

    afterEach(() => { sinon.restore() });

    it('Verifica se retorna um objeto', async () => {
      sinon.stub().resolves(product);
      const result = await productsModel.queryDeleteById(1);
      expect(result).to.be.an('object');
    });
  });

});
