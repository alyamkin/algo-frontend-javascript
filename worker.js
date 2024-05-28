// for (let i = 0; i < 1000000000; i++) {
//   1 + 2;
// }
addEventListener('message', (event) => {
  console.log(event.data);
  postMessage(event.data * 20);
});
console.log('slow operation finished');
