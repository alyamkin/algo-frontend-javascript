const log = function (...values) {
  console.log(...values);
};

// const stack = [];
// stack.push(1);
// stack.push(2);
// log(stack.pop());

// const queue = [];
// queue.push(1);
// queue.push(2);
// log(queue.shift());

const map = new Map();
const map2 = new Map([['number', 10]]);
map.set('test', 123);
map.set(10, 'ten');
// const obj = {};
// const symbol = Symbol();
// map.set(obj, 500);
// map.set(symbol, 600);
// log(map.get(10));
// log(map.has('test'));
// log(map.has(obj));
// log(map.has(symbol));
// map.delete(symbol);
// map.clear();
// log(map);
// log(map.size);

// for (let [key, value] of map) {
//   log(key, value);
// }

// map.forEach((value, key) => log(key, value));

// const iter = map.entries();
// log(iter.next().value);
// log(iter.next().value);
// log(iter.next().value);

// const iter = map.values();
// log(iter.next().value);
// log(iter.next().value);
// log(iter.next().value);

// log(JSON.stringify(map));

// const set = new Set();
// set.add(123);
// set.add(456);
// set.add(456);
// log(set);

// const name = 'Andreeeeey';
// const setName = new Set(name.split(''));
// log(setName);
// log(set.has(123));

// for (let value of set) {
//   log(value);
// }

// set.forEach((value) => log(value));

// const iterator = set.values();
// log(iterator.next().value);

// const arr = [1, 2, 2, 3, 4];
// log(Array.from(new Set(arr)));

// const weakSet = new WeakSet();
// // weakSet.add({ name: 'Andrey' });

// (function () {
//   const obj = {};
//   weakSet.add(obj);
// })();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addStart(value) {
    const node = new Node(value);
    const tempHead = this.head;
    this.head = node;
    node.next = tempHead;
  }

  addEnd(value) {
    const node = new Node(value);
    let curr = this.head;

    if (curr == null) {
      this.head = node;
      return;
    }

    while (curr.next != null) {
      curr = curr.next;
    }

    curr.next = node;
  }
}
const list = new LinkedList();
list.addStart(10);
list.addStart(1);
list.addEnd(500);
log(list.head.next.next.next);
