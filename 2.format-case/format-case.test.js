require('chai/register-should'); 

const formatCase = require('./format-case');

let registers = [
  {
    title: 'Классический регистр предложений',
    method: 'sentence',
    output: 'Hello, world'
  },
  {
    title: 'Каждое слово с большой буквы',
    method: 'word',
    output: 'Hello, World'
  },
  {
    title: 'Альтернация',
    method: 'alternate',
    output: 'HeLlO, wOrLd'
  }
];

let inputCases = [
  {
    title: 'Правильно форматирует строку из прописных букв',
    input: 'hello, world'
  },
  {
    title: 'Правильно форматирует строку из заглавных букв',
    input: 'HELLO, WORLD'
  },
  {
    title: 'Правильно форматирует строку из букв разного регистра',
    input: 'hEllO, wOrlD'
  }
];



describe('Задача #2', () => {

  registers.forEach(register => {
    describe(register.title, () => {
      
      inputCases.forEach(inputCase => {
        it(inputCase.title, () => {
          formatCase[register.method](inputCase.input)
            .should.equals(register.output);
        })
      });

      it('Для пустой строки возвращает пустую строку', () => {
        formatCase[register.method]("")
          .should.equals("");
      });

      it('При отсутствии входного значения или лживом значении возвращает пустую строку', () => {
        formatCase[register.method]()
          .should.equals("");
        formatCase[register.method](undefined)
          .should.equals("");
        formatCase[register.method](false)
          .should.equals("");
        formatCase[register.method](null)
          .should.equals("");
        formatCase[register.method](NaN)
          .should.equals("");
      });

      it('При получении числа преобразует его в строку', () => {
        formatCase[register.method](5)
          .should.equals("5");
      });

      it('При получении объекта возвращает пустую строку', () => {
        formatCase[register.method](['hello', 'world'])
          .should.equals("");
        formatCase[register.method]({hello: 'world'})
          .should.equals("");
      });

    });
  });

});