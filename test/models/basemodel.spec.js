import {expect, should} from 'chai';
import BM from '../../app/models/basemodel';

describe('BaseModel', () => {
  const BaseModel = new BM();

  describe('Cache Set', () => {
    it('Should set a cache item', () => {
      BaseModel.cacheSet('foo', 'bar');
      expect(
        BaseModel.cache.foo.payload
      ).to.equal('bar');
    });
  });

  describe('Cache Get', () => {
    it('Should get a cache item', () => {
      BaseModel.cache.foo = {payload: 'bar'};

      expect(
        BaseModel.cacheGet('foo')
      ).to.equal('bar');
    });
  });

  describe('Cache Is Valid', () => {
    it('Should return false for `undefined` cache items', () => {
      expect(
        BaseModel.cacheIsValid('jones')
      ).to.equal(false);
    });
    it('Should return `true` for valid cache items', () => {
      BaseModel.cache.foo = {payload: 'bar', date: new Date(+new Date() + (1000 * 60 * 60))};
      expect(
        BaseModel.cacheIsValid('foo')
      ).to.equal(true);
    });
    it('Should return `false` for invalid cache items', () => {
      BaseModel.cache.foo = {payload: 'bar', date: new Date(+new Date() - (1000 * 60 * 60))};
      expect(
        BaseModel.cacheIsValid('foo')
      ).to.equal(false);
    });
  });
});
