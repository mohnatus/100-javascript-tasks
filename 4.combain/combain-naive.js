/**
 * Наивное решение:
 * Комбайн начинает по горизонтали (M) и идет до конца поля. 
 * Тут он может повернуть, но только в том случае, если есть место по вертикали (N).
 * Возможность можно проверить, отняв от N единицу (только что пройденный ряд) и сравнив в нулем.
 * Далее комбайн едет по вертикали до конца поля.
 * Тут он снова может повернуть, но только если есть место по горизонтали (M). 
 * Проверяем аналогично.
 * Когда по какому-либо измерению не останется места, увеличение счетчика останавливается.
 */

const countCombineRotationsNaive = (width, length) => {
  if (width <= 0 || length <= 0) throw new Error('Field sizes must be positive numbers');

  let counter = 0;
  while(true) {
    if (counter % 2) {
      width--;
    } else {
      length--;
    }
    if (width <= 0 || length <= 0) break;
    counter++;
  }
  return counter;
}

module.exports = countCombineRotationsNaive;