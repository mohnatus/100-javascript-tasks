let bench = require('../bench');

let maxRecursive = require('./recursive');
let maxSort = require('./sort');

let counts = [0, 5, 20];

let minPrice = 5;
let maxPrice = 400;
let balance = 1500;

let getPrices = (count) => {
  return Array.apply(null, Array(count))
    .map((val, i) => {
      return Math.floor(Math.random() * (maxPrice - minPrice)) + minPrice;
    });
}

counts.forEach(count => {

  let prices = getPrices(count);
  let recursiveFn = () => maxRecursive(prices, balance);
  let sortFn = () => maxSort(prices, balance);

  console.log(`\nBenchmark for ${count} goods:`);

  let sortBench = bench(sortFn);
  console.log(`\tsort: ${sortBench}`);

  let recursiveBench = bench(recursiveFn);
  console.log(`\trecursive: ${recursiveBench}`);
})




