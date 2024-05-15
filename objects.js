// const myKey = 'key';
// const website = {
//   name: 'AlgoExpert',
//   rating: 5,
//   founders: ['Clement', 'Antoine'],
//   isAwesome: true,
//   'multi word key': 0,
//   [myKey]: 1234,
// };

// console.log(website);
// console.log(website.name);
// console.log(website['name']);

// const key = 'name';
// console.log(website[key]);

// const website = {
//   name: 'AlgoExpert',
//   rating: 5,
//   founders: ['Clement', 'Antoine'],
// };

// website.name = 'FrontendExpert';
// website.foo = 'bar';
// delete website.foo;
// console.log(website);

// const website = {
//   name: 'AlgoExpert',
//   rating: 5,
//   founders: ['Clement', 'Antoine'],
// };

// const obj = {};
// console.log(obj == obj);

// const website = {
//   name: 'AlgoExpert',
//   rating: 5,
//   founders: ['Clement', 'Antoine'],
// };

// const obj = new Object();
// obj.name = 'Andrey';
// console.log(obj);

// function Website(name, rating, founders) {
//   this.name = name;
//   this.rating = rating;
//   this.founders = founders;
// }
// const frontendExpert = new Website('FrontendExpert', 5, ['Conner']);
// console.log(frontendExpert);

// const id = Symbol('id');
// const id2 = Symbol('id');
// const id3 = Symbol.for('333');
// const id4 = Symbol.for('333');
// console.log(id3 === id4);
// console.log(id == id2);
// const obj = {
//   [id]: 1234,
//   [id2]: 445,
//   id: 123,
// };
// console.log(obj);

// const website = {
//   name: 'AlgoExpert',
//   rating: 5,
//   founders: ['Clement', 'Antoine'],
// };
// console.log('name' in website);
// console.log(website.hasOwnProperty('name'));
// console.log(website.name !== undefined);

// const website = {
//   name: 'AlgoExpert',
//   rating: 5,
//   founders: ['Clement', 'Antoine'],
//   sayHello: () => console.log('hello'),
//   sayHelloModern() {
//     console.log('hello');
//   },
//   get getRating() {
//     return this.rating;
//   },
//   set setRating(value) {
//     this.rating = value;
//   },
// };
// website.sayHello();
// website.sayHelloModern();
// console.log(website.getRating);
// website.setRating = 10;
// console.log(website);

// const website = {
//   name: 'AlgoExpert',
//   rating: 5,
//   founders: ['Clement', 'Antoine'],
// };
// const obj = {
//   foo: 'bar',
//   hello: 'world',
//   [Symbol('id')]: 0,
//   __proto__: website,
// };
// const obj2 = Object.create(website);
// console.log(obj2);
// console.log(obj2.name);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
// Object.entries(obj).forEach(function ([key, value]) {
//   console.log(key, value);
// });
// for (let key in obj) {
//   console.log(key);
// }

// const obj = {
//   foo: 'bar',
//   hello: 'world',
//   [Symbol('id')]: 0,
//   __proto__: website,
// };
// const myObj = {
//   original: 123,
// };
// Object.assign(myObj, obj);
// console.log(myObj);

// const website = {
//   name: 'AlgoExpert',
//   rating: 5,
//   founders: ['Clement', 'Antoine'],
// };
// Object.freeze(website);
// website.name = 'FrontendExpert';
// website.foo = 'bar';
// console.log(website);
// console.log(Object.isFrozen(website));

// const website = {
//   name: 'AlgoExpert',
//   rating: 5,
//   founders: ['Clement', 'Antoine'],
// };
// Object.seal(website);
// website.name = 'FrontendExpert';
// website.foo = 'bar';
// console.log(website);
// console.log(Object.isSealed(website));

// const website = {
//   name: 'AlgoExpert',
//   rating: 5,
//   founders: ['Clement', 'Antoine'],
//   [Symbol.toPrimitive](hint) {
//     if (hint === 'number') {
//       return 10;
//     } else if (hint === 'string') {
//       return 'hello';
//     }
//     return 100;
//   },
// };
// console.log(website.toString());
// website.toString = function () {
//   return 'hello world';
// };
// console.log(website.toString());
// console.log(website.valueOf());
// website.valueOf = function () {
//   return 2;
// };
// console.log(website.valueOf());
// console.log(String(website));
