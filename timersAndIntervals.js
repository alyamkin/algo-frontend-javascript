import { log } from './log.js';

// const start = document.getElementById('start');
// const stop = document.getElementById('stop');
// const count = document.getElementById('count');
// const setBackground = document.getElementById('setBackground');

// start.addEventListener('click', startTimer);
// stop.addEventListener('click', stopTimer);
// setBackground.addEventListener('click', changeBackground);

// const timeoutID = setTimeout(() => {
//   log('timeout');
// }, 1000);
// clearTimeout(timeoutID);

// let timerID;
// let animationFrameID;
// function startTimer() {
//   // timerID = setInterval(() => {
//   //   count.textContent++;
//   // }, 500);
//   count.textContent++;
//   animationFrameID = requestAnimationFrame(startTimer);
// }

// function stopTimer() {
//   // clearInterval(timerID);
//   cancelAnimationFrame(animationFrameID);
// }

// function changeBackground() {
//   count.style.backgroundColor = 'salmon';
//   requestAnimationFrame(callAnimation);
// }

// function callAnimation(timeStamp) {
//   log(timeStamp);
//   log('Animation frame');
// }

// log(performance.now());

// log(new Date(2025, 1, 9, 10, 40, 30, 40));

function createSquare(width, height, color) {
  const element = document.createElement('div');
  element.style.width = `${width}px`;
  element.style.height = `${height}px`;
  element.style.backgroundColor = color;

  return element;
}

function appendElement(element, parent) {
  parent.append(element);
}

function init() {
  const element = createSquare(50, 50, 'salmon');
  appendElement(element, document.body);
}

init();
