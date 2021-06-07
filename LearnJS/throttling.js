// console.log('throttle test');

// function throttle(fn, timeout) {
//   let allowToLaunch = true;

//   return function (...arg) {
//     if (allowToLaunch) {
//       fn(...arg);
//       allowToLaunch = false;

//       setTimeout(() => {
//         allowToLaunch = true;
//       }, timeout);
//     }
//   };
// }

// const throttledLog = throttle(console.log, 2000);

// let value = 0;
// setInterval(() => {
//   throttledLog(value);
//   value++;
// }, 500);
