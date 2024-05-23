// import { log } from './log.js';
'use strict';

const log = function (...values) {
  console.log(...values);
};
// function logThis() {
//   log(this);
// }

// log(this);
// function logThis() {
//   log(this);
// }
// logThis();

// function logThis() {
//   log(this);
// }
// const obj = {
//   num: 10,
//   logThis,
// };
// obj.logThis();

// function logThis() {
//     log(this);
//   }
// const logThis = () => {
//   log(this);
// };
// const button = document.querySelector('button');
// button.addEventListener('click', logThis);

// function logThis() {
//   log(this);
// }
// function logThis(x, y) {
//   log(this);
//   log(x, y);
// }
// // logThis();
// const obj = {
//   num: 10,
// };
// // const boundLogThis = logThis.bind(obj);
// // boundLogThis();
// // boundLogThis(10, 30);
// // logThis.call(obj, 10, 40);
// logThis.apply(obj, [10, 40]);

// [1, 2, 3].forEach(
//   function (num) {
//     log(this);
//     log(num);
//   },
//   { num: 10 }
// );

class Person {
  constructor(name) {
    log(this);
    this.name = name;
  }

  speak() {
    log(`Hello I am ${this.name}`);
  }
}

const andrey = new Person('Andrey');
andrey.speak();
