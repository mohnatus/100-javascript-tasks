require('chai/register-should'); 

const { specialSum, getMinNumber, getMaxNumber } = require('./special-sum');

const data = [
    {
        input: 413,
        output: 565,
        min: 134, 
        max: 431
    },{
        input: 250,
        output: 725,
        min: 205,
        max: 520,
    },{
        input: 702,
        output: 927,
        min: 207,
        max: 720,
    },{
        input: 100,
        output: 200,
        min: 100,
        max: 100,
    }
];



describe('Задача #5', () => {
    describe('Нахождение максимального числа', () => {
        data.forEach(({input, max}) => {
            it(`Максимальное число для ${input} = ${max}`, () => {
                getMaxNumber(input).should.equal(max);
            });
        })
    });

    describe('Нахождение минимального числа', () => {
        data.forEach(({input, min}) => {
            it(`Минимальное число для ${input} = ${min}`, () => {
                getMinNumber(input).should.equal(min);
            });
        })
    });

    describe('Нахождение специальной суммы', () => {
        data.forEach(({input, output}) => {
            it(`Специальная сумма для ${input} = ${output}`, () => {
                specialSum(input).should.equal(output);
            });
        })
    });
    
    
   
});