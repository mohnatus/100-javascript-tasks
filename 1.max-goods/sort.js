/**
 * Решение с сортировкой массива
 * 
 * Нужно отсортировать массив цен по возрастанию
 * и последовательно складывать цены, пока общая сумма не превысит баланс
 */

const maxSort = (prices, balance) => {
  if (balance < 0) throw new Error('Balance less than zero!');

  let sortedPrices = [...prices];
  sortedPrices.sort((a, b) => a - b);

  let sum = 0;
  let counter = -1;
  let index = 0;

  while(sum <= balance) {
    counter++;
    sum += sortedPrices[index];
    index++;
  }
  return counter;
}

module.exports = maxSort;


