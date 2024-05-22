import { log } from './log.js';

// const globalNum = 5;
// function logNum() {
//   const localNum = 1;
//   log(globalNum + localNum);
// }

// logNum();

// function example() {
//   const num = 5;
//   function logNum() {
//     log(num);
//   }
//   logNum();
// }

// example();

// function example() {
//   const num = 5;
//   return function () {
//     log(num);
//   };
// }

// const innerFunction = example();
// innerFunction();

// function makeFunctions() {
//   let privateNum = 0;
//   function privateIncrement() {
//     privateNum++;
//   }
//   return {
//     logNum: () => log(privateNum),
//     increment: () => {
//       privateIncrement();
//       log('Incremented');
//     },
//   };
// }

// const { logNum, increment } = makeFunctions();
// const { logNum: logNum2, increment: increment2 } = makeFunctions();
// logNum();
// increment();
// logNum();

// logNum2();
// increment2();
// logNum2();

for (let i = 0; i < 3; i++) {
  // log(i);
  setTimeout(() => log(i), 1);
}
