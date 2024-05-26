const log = function (...values) {
  console.log(...values);
};

function sum(a, b, c) {
  return a + b + c;
}

// function curriedSum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// function curry(func) {
//   return function (a) {
//     return function (b) {
//       return function (c) {
//         return func(a, b, c);
//       };
//     };
//   };
// }

// function curry(func) {
//   return (a) => (b) => (c) => func(a, b, c);
// }

// const curriedSum = curry(sum);
// // log(sum(1, 4, 10));
// // log(curriedSum(1)(4)(10));

// const addFour = curriedSum(4);
// log(addFour(5)(6));

function sum(x, y) {
  return x + y;
}

function substract(x, y) {
  return x - y;
}

function curry(func) {
  return (x) => (y) => func(x, y);
}

const sumTwo = curry(sum);
const substrTwo = curry(substract);
const sumWithFive = curry(sum)(5);
const substrWithTen = curry(substract)(10);

// log(sumTwo(5)(10));
// log(substrTwo(5)(10));
log(sumWithFive(20));
log(substrWithTen(20));
