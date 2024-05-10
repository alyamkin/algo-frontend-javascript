// Hoisting example
// console.log('varNum', varNum);
// console.log('letNum', letNum);
// var varNum = 0;
// let letNum = 0;

// Scoping example
function test() {
  const constNum = 0;
  let letNum = 0;

  const arr = [1, 2, 3];
  arr.push(4);

  letNum = 5;
  // constNum = 4;
  // if (true) {
  //   var varNum = 0;
  //   let letNum = 0;
  // }
  // console.log('varNum', varNum);
  console.log('letNum', letNum);
  console.log('constNum', constNum);
}

test();
