/**
 * Рекурсивное решение
 * 
 * Каждый товар можно взять или не взять
 * Если его взять, уменьшается остаток и увеличивается счетчик
 * Если не взять, остаток и счетчик не изменяются
 * Массив товаров в любом случае уменьшается
 * Нужно рассмотреть эти два варианта и выбрать максимум.
 * 
 * Предел рекурсии - в массиве не осталось товаров
 */

const maxRecursive = (prices, balance) => {
  if (balance < 0) throw new Error('Balance less than zero!');
  if (prices.length == 0) return 0;

  let firstPrice = prices[0];
  let newPrices = prices.slice(1);

  if (firstPrice > balance) return maxRecursive(newPrices, balance)
  return Math.max(
    1 + maxRecursive(newPrices, balance - firstPrice),
    maxRecursive(newPrices, balance)
  );
}

module.exports = maxRecursive;