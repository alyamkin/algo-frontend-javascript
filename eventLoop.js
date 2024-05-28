const log = function (...values) {
  console.log(...values);
};

// function mystery() {
//   log('first');
//   setTimeout(() => log('second'), 2000);
//   setTimeout(() => log('third'), 0);
//   log('fouth');
// }

// mystery();

function logOne() {
  log('1');
}

// function main() {
//   setTimeout(logOne, 0);
//   Promise.resolve(3)
//     .then((val) => val * 2)
//     .then(log);
//   superSlowFunction(2000);
//   Promise.resolve(2)
//     .then((val) => val * 2)
//     .then(log);
//   setTimeout(logOne, 0);
//   log('3');
// }

// function superSlowFunction(delay) {
//   const now = Date.now();
//   while (now + delay > Date.now()) {}
// }

// main();

function chunkedSlowFunction() {
  setTimeout(processChunk, 0, 0);
}

function processChunk(start) {
  const end = start + 1000;
  for (let i = start; i < end; i++) {
    log(i);
  }
  if (end < 10000) {
    setTimeout(processChunk, 0, end + 1);
  }
}
chunkedSlowFunction();
setTimeout(() => {
  log('INTERMEDIATE');
}, 0);
