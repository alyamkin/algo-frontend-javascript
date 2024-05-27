import { log } from './log.js';
// import * as helpers from './helpers.js';
// import { frontendExpert, algoExpert as algo } from './helpers.js';
// import * as person from './Person.js';
// import Person from './Person.js';

// helpers.frontendExpert();
// frontendExpert();
// algo();
// const conner = new person.Person('Conner');
// const conner = new Person('Conner');
// conner.sayHello();

// function myModule() {
//   frontendExpert();

//   const conner = new Person('Conner');
//   conner.sayHello();
// }
// myModule();

// (function () {
//   frontendExpert();
//   const conner = new Person('Conner');
//   conner.sayHello();
// })();

log(this);
const shouldSayFrontend = true;
if (shouldSayFrontend) {
  const { frontendExpert } = await import('./helpers.js');
  frontendExpert();
}
