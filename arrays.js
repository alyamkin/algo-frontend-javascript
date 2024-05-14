// const arr = [1, 2, 3];
// const arr = new Array(1, 2, 3);
// const arr = new Array(5).fill(0);

// const arr = new Array();
// arr.length = 10;
// arr.fill(10);

// const arr = [1, 2, 3];
// arr.length = 1;

// const arr = [1, 2, 3];
// arr[1] = 10;

// console.log(arr[1]);
// console.log(arr.includes(3));
// console.log(arr.indexOf(3));
// console.l4og(arr.lastIndexOf(3));

// arr.push(4, 5, 6);
// arr.pop();
// arr.unshift(4);
// arr.shift();
// console.log(arr);

// console.log(typeof arr);
// console.log(Array.isArray(arr));
// console.log(arr instanceof Array);

// arr.splice(1, 2);
// arr.splice(1, 1, 100);
// const newArr = arr.slice(1, 2);
// const newArr = arr.concat([4, 5]);

// arr.reverse();

// console.log(arr);
// console.log(arr.join(' | '));

// for (let i = 0; i < arr.length; i++) {
//   console.log(i);
// }

// for (const value of arr) {
//   console.log(value);
// }

// arr.forEach(
//   function (value, index, array) {
//     console.log(value, index, array, this);
//   },
//   { num: 10 }
// );

// const mappedArray = arr.map(
//   function (value, index) {
//     return value + index + this.num;
//   },
//   { num: 10 }
// );

// console.log(mappedArray);

// const filteredArray = arr.filter(
//   function (value, index) {
//     return value > this.num;
//   },
//   { num: 1 }
// );

// console.log(filteredArray);

// const fioundValue = arr.find(
//   function (value, index) {
//     return value > this.num;
//   },
//   { num: 1 }
// );

// console.log(fioundValue);

// const fioundIndex = arr.findIndex(
//   function (value, index) {
//     return value > this.num;
//   },
//   { num: 1 }
// );

// console.log(fioundIndex);

// const every = arr.every(
//   function (value, index) {
//     return value >= this.num;
//   },
//   { num: 1 }
// );

// console.log(every);

// const some = arr.some(
//   function (value, index) {
//     return value > this.num;
//   },
//   { num: 1 }
// );

// console.log(some);

// const sum = arr.reduce(function (accumulator, currValue, index) {
//   return accumulator + currValue;
// });

// console.log(sum);

// const difference = arr.reduceRight(function (accumulator, currValue, index) {
//   return accumulator - currValue;
// }, 0);

// console.log(difference);

const arr = [5, 7, 3, 0];

arr.sort(compareNumbers);

function compareNumbers(firstNumber, secondNumber) {
  if (firstNumber === 3) {
    return -1;
  }
  if (secondNumber === 3) {
    return 1;
  }
  return firstNumber - secondNumber;
}
console.log(arr);
