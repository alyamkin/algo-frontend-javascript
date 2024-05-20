import { log } from './log.js';

// pending, fulfilled, reject

// const promise = new Promise((resolve, reject) => {
//   // resolve(2);
//   // reject(10);
//   setTimeout(() => resolve(100), 1000);
// });
// log(promise);
// setTimeout(() => {
//   log(promise);
// }, 1500);

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(100), 1000);
//   // setTimeout(() => reject(new Error('Something wrong')), 1000);
// });
// promise.then(
//   (value) => log(value),
//   (error) => log(error)
// );
// promise
// .then((value) => log(value))
// .catch((error) => {
//   log(error);
// });

// const promise = Promise.resolve(200);
// promise
//   .then((value) => value * 3)
//   .then((value) => value + 1)
//   .then((value) => {
//     throw new Error('Something went wrong');
//   })
//   .then(log)
//   .catch((error) => {
//     log(`Oh no ${error.message}`);
//     return 1000;
//   })
//   .then(log)
//   .finally(() => log('Done'));

// Promise.all([
//   Promise.resolve(10),
//   // Promise.reject(3),
//   Promise.resolve(3),
//   new Promise((res, rej) => setTimeout(() => res(500), 2000)),
// ])
//   .then(log)
//   .catch(log);

// Promise.race([
//   new Promise((res, rej) => setTimeout(() => res(3), 3000)),
//   new Promise((res, rej) => setTimeout(() => res(2), 2000)),
//   new Promise((res, rej) => setTimeout(() => res(1), 1000)),
// ])
//   .then(log)
//   .catch(log);

// Promise.any([
//   new Promise((res, rej) => setTimeout(() => res(3), 3000)),
//   new Promise((res, rej) => setTimeout(() => rej(2), 2000)),
//   new Promise((res, rej) => setTimeout(() => rej(1), 1000)),
// ])
//   .then(log)
//   .catch(log);

// async function tester() {
//   try {
//     const value = await new Promise((res, rej) => {
//       // setTimeout(() => res(10), 2000);
//       setTimeout(() => rej(new Error('Something went wrong')), 2000);
//     });
//     log(value);
//   } catch (error) {
//     log(`Oh no ${error.message}`);
//   }
// }
// tester();

async function tester() {
  return await new Promise((res, rej) => {
    // setTimeout(() => rej(new Error('Something went wrong')), 2000);
    setTimeout(() => res(500), 2000);
  });
}
tester()
  .then(log)
  .catch((error) => log(`Oh no ${error.message}`));
