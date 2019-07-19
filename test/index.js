const { expect } = require('chai');
const { parse } = require('querystring');
const querystringConverter = require('../');

describe('convert', () => {
  describe('query string limit', () => {
    const queryString = 'limit=5';
    const result = querystringConverter.convert({ query: parse(queryString) });

    it('object should have limit property only', () => {
      expect(result).to.be.instanceOf(Object);
      expect(result).to.have.property('limit');
    });
    it('limit value should be instance of number', () => {
      expect(result).to.be.instanceOf(Object);
      expect(result).to.have.property('limit');
      expect(result.limit).to.be.a('number');
    });
  });

  describe('query string offset', () => {
    const queryString = 'offset=5';
    const result = querystringConverter.convert({ query: parse(queryString) });

    it('object should have offset property only', () => {
      expect(result).to.be.instanceOf(Object);
      expect(result).to.have.property('offset');
    });
    it('offset value should be instance of number', () => {
      expect(result).to.be.instanceOf(Object);
      expect(result).to.have.property('offset');
      expect(result.offset).to.be.a('number');
    });
  });

  describe('query string offset and limit / pagination', () => {
    const queryString = 'offset=5&limit=5';
    const result = querystringConverter.convert({ query: parse(queryString) });

    it('object should have offset and limit property', () => {
      expect(result).to.be.instanceOf(Object);
      expect(result).to.have.property('limit');
      expect(result).to.have.property('offset');
    });
    it('offset value should be instance of number', () => {
      expect(result).to.be.instanceOf(Object);
      expect(result).to.have.property('offset');
      expect(result.offset).to.be.a('number');
    });
    it('limit value should be instance of number', () => {
      expect(result).to.be.instanceOf(Object);
      expect(result).to.have.property('limit');
      expect(result.limit).to.be.a('number');
    });
  });

  describe('query string sort / order by', () => {
    describe('single item sort', () => {
      const queryString = 'sort=createdAt';
      const result = querystringConverter.convert({ query: parse(queryString) });

      it('object should have order property only', () => {
        expect(result).to.be.instanceOf(Object);
        expect(result).to.have.property('order');
      });
      it('order value should be instance of array', () => {
        expect(result).to.be.instanceOf(Object);
        expect(result).to.have.property('order');
        expect(result.order).to.be.a('array');
      });

      it('order length should be 1', () => {
        expect(result).to.be.instanceOf(Object);
        expect(result).to.have.property('order');
        expect(result.order).to.be.a('array');
        expect(result.order).lengthOf(1);
      });
    });

    describe('multiple item sort', () => {
      const queryString = 'sort=createdAt,-priority';
      const result = querystringConverter.convert({ query: parse(queryString) });

      it('object should have order property only', () => {
        expect(result).to.be.instanceOf(Object);
        expect(result).to.have.property('order');
      });
      it('order value should be instance of array', () => {
        expect(result).to.be.instanceOf(Object);
        expect(result).to.have.property('order');
        expect(result.order).to.be.a('array');
      });
      it('order length should be 2', () => {
        expect(result).to.be.instanceOf(Object);
        expect(result).to.have.property('order');
        expect(result.order).to.be.a('array');
        expect(result.order).lengthOf(2);
      });
    });

    describe('ASCENDING', () => {
      const queryString = 'sort=createdAt';
      const result = querystringConverter.convert({ query: parse(queryString) });

      it('order second element value should be ASC', () => {
        expect(result).to.be.instanceOf(Object);
        expect(result).to.have.property('order');
        expect(result.order[0][1]).to.be.a('string');
        expect(result.order[0][1]).to.be.equal('ASC');
      });
    });

    describe('DESCENDING', () => {
      const queryString = 'sort=-createdAt';
      const result = querystringConverter.convert({ query: parse(queryString) });

      it('order second element value should be DESC', () => {
        expect(result).to.be.instanceOf(Object);
        expect(result).to.have.property('order');
        expect(result.order[0][1]).to.be.a('string');
        expect(result.order[0][1]).to.be.equal('DESC');
      });
    });
  });
});
