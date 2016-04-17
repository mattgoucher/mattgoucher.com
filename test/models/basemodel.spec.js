import {expect, should} from 'chai';
import BaseModel from '../../app/models/basemodel';

describe('BaseModel', () => {

  describe('Set', () => {
    it('Should set a cache item', () => {
      BaseModel.set('foo', 'bar');
      expect(
        BaseModel.cache.foo.payload
      ).to.equal('bar');
    });
  });

  describe('Get', () => {
    it('Should get a cache item', () => {
      BaseModel.cache.foo = {payload: 'bar'};

      expect(
        BaseModel.get('foo')
      ).to.equal('bar');
    });
  });

  describe('isValid', () => {
    it('Should return false for `undefined` cache items', () => {
      expect(
        BaseModel.isValid('jones')
      ).to.equal(false);
    });
    it('Should return `true` for valid cache items', () => {
      BaseModel.cache.foo = {payload: 'bar', date: new Date(+new Date() + 10000)};
      expect(
        BaseModel.isValid('foo')
      ).to.equal(true);
    });
    it('Should return `false` for invalid cache items', () => {
      BaseModel.cache.foo = {payload: 'bar', date: new Date(+new Date() - 10000)};
      expect(
        BaseModel.isValid('foo')
      ).to.equal(false);
    });
  });
});
