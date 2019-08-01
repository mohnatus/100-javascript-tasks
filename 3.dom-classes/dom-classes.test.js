require('chai/register-should'); 
const { JSDOM } = require('jsdom');
const { addClass, removeClass, toggleClass } = require('./dom-classes');

const dom = new JSDOM(`
  <div class="block" id="block-1"></div>
  <div class="block class-to-remove" id="block-2"></div>
  <div class="block class-to-toggle" id="block-3"></div>
`);
const document = dom.window.document;

const block1 = document.getElementById('block-1');
const block2 = document.getElementById('block-2');
const block3 = document.getElementById('block-3');


describe('Задача #3', () => {
  describe('Функция addClass', () => {
    it('Добавляет элементу указанный класс', () => {
      addClass(block1, 'class-to-add');
      block1.classList.contains('class-to-add').should.equal(true);
    });
    it('При добавлении существующего класса ничего не меняется', () => {
      addClass(block1, 'block');
      block1.classList.contains('block').should.equal(true);
    })
  });

  describe('Функция removeClass', () => {
    it('Удаляет у элемента указанный класс', () => {
      removeClass(block2, 'class-to-remove');
      block2.classList.contains('class-to-remove').should.equal(false);
    });
    it('При удалении несуществующего класса ничего не меняется', () => {
      removeClass(block2, 'no-class');
      block2.classList.contains('no-class').should.equal(false);
    })
  });

  describe('Функция toggleClass', () => {
    it('Удаляет у элемента указанный класс, если он есть', () => {
      toggleClass(block3, 'class-to-toggle');
      block3.classList.contains('class-to-toggle').should.equal(false);
    });
    it('Добавляет элементу указанный класс, если его нет', () => {
      toggleClass(block3, 'no-class');
      block3.classList.contains('no-class').should.equal(true);
    });
  });
});


