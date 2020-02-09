/**
 * Решение
 *
 * Максимальное трехзначное число можно найти, отсортировав цифры в N в порядке убывания.
 * Минимальное - в порядке возрастания.
 * Но тут важно учитывать нули, которые не могу стоять в самом старшем разряде.
 */

const sortInDesc = input => {
    let arr = [...input];
    arr.sort((a, b) => b - a);
    return arr;
}

const getMaxNumber = (input) => {
    let arr = ("" + input).split("");
    return parseInt(sortInDesc(arr).join(""));
}


const getMinNumber = (input) => {
    let arr = ("" + input).split("");
    arr = sortInDesc(arr);
    let index = arr.length - 1;
    while(arr[index] == '0') {
        index = index - 1;
    }
    // переставить ее в конец
    let digit = arr[index];
    arr.splice(index, 1);
    arr.push(digit);
    return parseInt(arr.reverse().join(""));
}

const specialSum = (input) => {
    let maxNumber = getMaxNumber(input);
    let minNumber = getMinNumber(input);

    return maxNumber + minNumber;
}

module.exports.specialSum = specialSum;
module.exports.getMinNumber = getMinNumber;
module.exports.getMaxNumber = getMaxNumber;
