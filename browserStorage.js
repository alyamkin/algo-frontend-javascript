const log = function (...values) {
  console.log(...values);
};

// document.cookie = `user=Andrey; expires=${new Date().toUTCString()}`;
// document.cookie = `user=Andrey; max-age=10`;
// document.cookie = 'user=Andrey';
// document.cookie = 'user=Andrey; path=/';
// document.cookie = 'user=Andrey; secure';
// document.cookie = 'user=Andrey; secure; samesite=strict';
// document.cookie = 'course=Frontend Expert';
// log(document.cookie);

// const course = document.cookie
//   .split('; ')
//   .find((cookie) => cookie.startsWith('course='))
//   .split('=')[1];

// log(course);

// localStorage.setItem('user', 'Conner');
// localStorage.setItem('course', 'FrontendExpert');
// log(localStorage.getItem('user'));
// localStorage.removeItem('user');
// log(localStorage.getItem('user'));
// localStorage.clear();
