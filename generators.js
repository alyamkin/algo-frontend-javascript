const log = function (...values) {
  console.log(...values);
};

// function* genNumbers() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// function* genNumbers(count) {
//   for (let i = 0; i < count; i++) {
//     yield i;
//   }
// }

// const generator = genNumbers(10);
// let terminate = false;

// while (!terminate) {
//   const { value, done } = generator.next();
//   log(value);
//   terminate = done;
// }

// function* genNumbers(count) {
//   const value = yield 0;
//   yield value + 4;
// }

// const generator = genNumbers(3);
// log(generator.next());
// // log(generator.return(100));
// log(generator.throw(new Error('Error')));
// log(generator.next(5));
// log(generator.next(5));

function* generator1() {
  yield 1;
  yield 2;
}

function* generator2() {
  yield 3;
  yield 4;
}

function* genNumbers() {
  yield* generator1();
  yield 1000;
  yield* generator2();
}

const generator = genNumbers();
for (let value of generator) {
  log(value);
}
