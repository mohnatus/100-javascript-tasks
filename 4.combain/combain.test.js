require('chai/register-should'); 

const countCombineRotationsNaive = require('./combain-naive');
const countCombineRotationsLogic = require('./combain-logic');

const tests = [
  {
    function: countCombineRotationsNaive,
    title: 'Наивная реализация'
  },{
    function: countCombineRotationsLogic,
    title: 'Логическая реализация'
  }
];

const errorCases = [
  {
    m: 0,
    n: 4
  },{
    m: 4,
    n: 0
  },{
    m: -5,
    n: 5
  },{
    m: 5,
    n: -5
  }
];

describe('Задача # 4. Комбайн', () => {
  tests.forEach(test => {
    describe(test.title, () => {
      it('Правильно считает количество поворотов, если ширина больше длины (M>N)', () => {
        test.function(5, 4).should.equal(6);
        test.function(4, 3).should.equal(4);
      });
      it('Правильно считает количество поворотов, если ширина меньше длины (M<N)', () => {
        test.function(3, 4).should.equal(5);
      });
      it('Правильно считает количество поворотов, если ширина равна длине (M=N)', () => {
        test.function(4, 4).should.equal(6);
      });
      it('Выбрасывает ошибку для отрицательных чисел и ноля', () => {
        errorCases.forEach(caseData => {
          (() => test.function(caseData.m, caseData.n)).should.throw(Error);
        });
      });
    });
  })
});