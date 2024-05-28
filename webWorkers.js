const log = function (...values) {
  console.log(...values);
};

const slowButton = document.getElementById('slow');
const sayHelloButton = document.getElementById('say-hello');
slowButton.addEventListener('click', slowOperation);
sayHelloButton.addEventListener('click', sayHello);
function sayHello() {
  log('hello world');
}
function slowOperation() {
  worker = new Worker('worker.js');
  worker.postMessage(10);
  worker.addEventListener('message', (event) => {
    log(event.data);
  });
  // worker.terminate();
}
