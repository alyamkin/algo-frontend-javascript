const log = function (...values) {
  console.log(...values);
};

const button = document.querySelector('button');
button.addEventListener('click', moveRight);

function moveRight() {
  const circle = document.querySelector('.circle');
  const { left } = getComputedStyle(circle);
  circle.style.left = `${parseInt(left) + 10}px`;
}
