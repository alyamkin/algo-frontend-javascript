import { log } from './log.js';

// const button = document.querySelector('button');
// const abortController = new AbortController();
// button.addEventListener('click', onClick, {
//   capture: true,
//   once: true,
//   passive: true,
//   signal: AbortController.signal,
// });
// button.removeEventListener('click', onClick);
// abortController.abort();
// document.body.addEventListener('click', onClick, true);
// function onClick(event) {
//   // event.stopPropagation();
//   // event.preventDefault();
//   // log(event);
//   // log(event.type);
//   log(event.target);
//   log(this);
//   // log('You clicked the button');
// }

// button.addEventListener('dblclick', onClick);
// button.addEventListener('mousedown', onClick);
// button.addEventListener('mouseup', onClick);
// function onClick(event) {
//   log(event.target);
//   log(this);
// }

// window.addEventListener('keydown', (event) => {
//   log(event.code);
// });
// window.addEventListener('keyup', (event) => {
//   log(event.code);
// });

// const scrollable = document.getElementById('scrollable');
// scrollable.addEventListener('scroll', (event) => {
//   log(event.target.scrollTop);
// });
// scrollable.addEventListener('mouseenter', (event) => {
//   log(event.pageX, event.pageY);
// });
// scrollable.addEventListener('mousemove', (event) => {
//   log(event.pageX, event.pageY);
// });

// const scrollable = document.getElementById('scrollable');
// const button = document.querySelector('button');
// // button.addEventListener('dragstart', (event) => {
// //   log(event);
// // });
// scrollable.addEventListener('drop', (event) => {
//   scrollable.prepend(button);
// });
// scrollable.addEventListener('dragover', (event) => {
//   log('Hover');
//   event.preventDefault();
// });

const scrollable = document.getElementById('scrollable');
const button = document.querySelector('button');
scrollable.addEventListener('click', onClick);
function onClick(event) {
  log(this);
  log(event.target);
  if (event.target !== this) {
    event.target.textContent = 'clicked';
  }
}
