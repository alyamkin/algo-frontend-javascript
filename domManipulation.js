import { log } from './log.js';

// const secondLi = document.getElementById('second-li');
// const firstLi = document.querySelector('li');
// const listItems = document.querySelectorAll('li');
// const itemsByClass = document.getElementsByClassName('list-item');
// const itemsByTag = document.getElementsByTagName('li');
// log(secondLi);
// log(firstLi);
// log(listItems);
// log(itemsByClass);
// log(itemsByTag);

// log(listItems.length);
// listItems.forEach((li) => log(li));
// Array.from(listItems).map((li) => log(li));

const listItems = document.querySelectorAll('li');
// listItems[0].style.color = 'red';
// listItems[0].style.backgroundColor = 'red';
// listItems[0].textContent = 'Changed!';
// listItems[0].value = 10;
// listItems[0].setAttribute('value', 5);
// listItems[0].setAttribute('class', 'blue big');
// listItems[0].classList.remove('big');
// listItems[0].classList.add('blue', 'big');
// listItems[0].classList.toggle('big');
// listItems[0].className = 'blue';

// const p = document.createElement('p');
// p.textContent = 'Hello World';
// document.body.appendChild(p);
// document.body.append(p, 'Some text');
// document.body.prepend(p, 'Some Text');
// const text = (document.createTextNode = 'Hello Andrey');
// p.append(text);
// document.body.append(p);
// document.body.innerHTML += '<p>Some Paragraph</p>'; // don't do that

// const parent = document.querySelector('ol');
// // const listToAdd = [];
// const fragment = document.createDocumentFragment();
// for (let i = 0; i < 3; i++) {
//   const li = document.createElement('li');
//   li.textContent = `List item with i=${i}`;
//   // parent.append(li); // expensive
//   // listToAdd.push(li);
//   fragment.append(li);
// }
// parent.append(fragment);
// // parent.append(...listToAdd);
// // listItems[0].parentNode.removeChild(listItems[0]);
// listItems[0].remove();

// log(window.innerWidth);
// log(window.innerHeight);
// log(listItems[0].style.fontSize);
// log(window.getComputedStyle(listItems[0]));

const scrollable = document.getElementById('scrollable');
log(scrollable.clientHeight); // content + padding
log(scrollable.offsetHeight); // content + padding + border
log(scrollable.scrollHeight); // hidden scrollable content
log(scrollable.offsetTop);

// scrollable.querySelectorAll('p')[5].scrollIntoView();
scrollable.scrollTo({
  top: scrollable.querySelectorAll('p')[2].offsetTop,
  behavior: 'smooth',
});
