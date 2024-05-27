import { log } from './log.js';

export default class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    log(`Hi, this is ${this.name}`);
  }
}
