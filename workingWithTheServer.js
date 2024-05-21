import { log } from './log.js';

const JSON_API = 'https://jsonplaceholder.typicode.com/posts';

// async function main() {
//   const url = new URL(JSON_API);
//   url.searchParams.set('userId', 1);
//   // fetch(url)
//   //   .then((response) => {
//   //     log(response.headers.get('content-type'));
//   //     return response.json();
//   //   })
//   //   .then(log)
//   //   .catch((error) => log(error));
//   try {
//     const response = await fetch(url);
//     const obj = await response.json();
//     log(obj);
//   } catch (error) {
//     log(error);
//   }
// }

// async function main() {
//   const url = new URL(JSON_API);
//   const data = {
//     title: 'foo',
//     body: 'bar',
//     // userId: 1,
//   };
//   const headers = new Headers();
//   headers.append('Content-Type', 'application/json charset=UTF-8');

//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers,
//     });
//     const obj = await response.json();
//     log(obj);
//   } catch (error) {
//     log(error);
//   }
// }

// const form = document.querySelector('form');
// form.addEventListener('submit', main);
// async function main(event) {
//   event.preventDefault();
//   const url = new URL(JSON_API);
//   const options = {
//     method: 'POST',
//     body: new FormData(form),
//   };

//   try {
//     const response = await fetch(url, options);
//     const obj = await response.json();
//     log(obj);
//   } catch (error) {
//     log(error);
//   }
// }

async function main() {
  const url = new URL(JSON_API);
  const abortController = new AbortController();
  setTimeout(() => abortController.abort(), 100);

  // const now = Date.now();
  // const delay = 1000;
  // while (now + delay - Date.now() > 0) {}
  const data = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  };
  const headers = new Headers();
  headers.append('Content-Type', 'application/json charset=UTF-8');

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers,
      signal: abortController.signal,
    });
    const obj = await response.json();
    log(obj);
  } catch (error) {
    log(error);
  }
}

main();
