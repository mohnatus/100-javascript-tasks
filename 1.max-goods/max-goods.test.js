require('chai/register-should'); 

let maxRecursive = require('./recursive');
let maxSort = require('./sort');

describe('Задача #1', () => {
  describe('Рекурсивное решение', () => {
    it('Считает максимальное количество товаров', () => {
      maxRecursive([1,2], 7).should.equal(2);
      maxRecursive([1, 2, 10, 1], 2).should.equal(2);
      maxRecursive([1, 2, 3, 4], 7).should.equal(3);
      maxRecursive([3, 7, 2, 9, 4], 15).should.equal(3);
    });
    it('Возвращает 0 для пустого массива товаров', () => {
      maxRecursive([], 7).should.equal(0);
    });
    it('Выбрасывает ошибку при отрицательном балансе', () => {
      (() => maxRecursive([1,2], -5)).should.throw(Error, /Balance less than zero!/);
    });
  });

  describe('Решение с сортировкой', () => {
    it('Считает максимальное количество товаров', () => {
      maxSort([1,2], 7).should.equal(2);
      maxSort([1, 2, 10, 1], 2).should.equal(2);
      maxSort([1, 2, 3, 4], 7).should.equal(3);
      maxSort([3, 7, 2, 9, 4], 15).should.equal(3);
    });
    it('Возвращает 0 для пустого массива товаров', () => {
      maxSort([], 7).should.equal(0);
    });
    it('Выбрасывает ошибку при отрицательном балансе', () => {
      (() => maxSort([1,2], -5)).should.throw(Error, /Balance less than zero!/);
    });
  });
});