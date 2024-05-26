const log = function (...values) {
  console.log(...values);
};

// const person = {
//   isHuman: true,
// };
// const child = Object.create(person);
// log(person);
// log(child.isHuman);
// log(child.__proto__);

// const child = Object.assign(Object.create(person), { maxAge: 18 });
// log(child);

// const child = {
//   maxAge: 18,
//   __proto__: person,
// };
// log(child);

// const child = Object.create(person, {
//   maxAge: {
//     value: 18,
//     writable: true,
//     configurable: true,
//     enumerable: true,
//   },
// });
// log(child);

// const child = Object.create(person);
// child.maxAge = 18;
// const john = Object.create(child);
// john.name = 'John';
// log(john);
// log(john.__proto__);
// log(Object.getPrototypeOf(john));

// const funcProto = Object.getPrototypeOf(() => {});
// log(Object.getOwnPropertyNames(funcProto));
// const arrayProto = Object.getPrototypeOf([]);
// log(Object.getOwnPropertyNames(arrayProto));

// function Person(name) {
//   this.name = name;
// }
// Person.prototype = {
//   constructor: Person,
//   isHuman: true,
// };
// const conner = new Person('Conner');
// const andrey = new Person('Andrey');
// const andrey = new conner.constructor('Andrey');
// log(Object.getPrototypeOf(conner) === Object.getPrototypeOf(andrey));
// Person.prototype.test = 'test';
// andrey.__proto__.test = 'test';
// log(conner);
// log(conner.__proto__);
// log(Object.getPrototypeOf(conner));
// log(conner.test);
// log(andrey.test);
// log(conner);
// log(andrey);

// Person.prototype.speak = function () {
//   log(`Hello, this is ${this.name}`);
// };

// conner.speak();
// andrey.speak();

// Object.setPrototypeOf(conner, Array.prototype);
// log(conner instanceof Person);
// log(andrey instanceof Person);

// Array.prototype.myPush = function (value) {
//   this[this.length] = value;
// };

// const arr = [1, 2, 3];
// arr.myPush(50);
// log(arr);

// class Person {
//   static isHuman = true;
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     log(`Hello this is ${this.name}`);
//   }
//   static greet() {
//     log('Hello');
//   }
//   // get name() {
//   //   return this.name;
//   // }
//   // set name(value) {
//   //   this.name = value;
//   // }
// }

// const conner = new Person('Conner');
// const andrey = new Person('Andrey');
// // log(conner);
// // log(conner.__proto__);
// // log(conner.isHuman);
// // log(andrey.isHuman);
// // conner.isHuman = false;
// // log(conner.isHuman);
// log(Person.isHuman);
// log(Person.greet());

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     log(`Hello this is ${this.name}`);
//   }
// }

// class Child extends Person {
//   // #age;
//   constructor(name, age) {
//     super(name), (this.age = age);
//   }
// }

// class GrandChild extends Child {
//   getAGe() {
//     log(this.age);
//   }
// }

// const child = new Child('John');
// log(child, 20);
// log(child instanceof Person);
// log(child.__proto__.__proto__);
// child.speak();
// log(child instanceof Child);
// log(child.age);

// const person = {
//   isHuman: true,
// };
// const andrey = Object.create(person);
// Object.assign(andrey, {
//   name: 'Andrey',
// });

// function Person(name) {
//   this.name = name;
// }
// Person.prototype = {
//   isHuman: true,
//   speak() {
//     log('Hello, my name is: ' + this.name);
//   },
// };
// const andrey = new Person('Andrey');
// log(andrey);
// log(andrey.isHuman);
// log(andrey.speak());

// class Person {
//   static isHuman = true;
//   constructor(name) {
//     this.name = name;
//     this.isHuman = true;
//   }
//   speak() {
//     log('Hello, my name is: ' + this.name);
//   }
// }

// class Child extends Person {
//   constructor(name, age) {
//     super(name);
//     this.age = age;
//   }
// }

// const andrey = new Person('Andrey');
// // log(andrey);
// // log(Person.isHuman);
// // log(andrey.speak());
// const child = new Child(18, 'Petr');
// log(child);
// log(child instanceof Person);
// log(child instanceof Child);
