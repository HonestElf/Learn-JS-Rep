console.log('task');

const MAX = 10000;
const n = 100000; //строки
const m = 100000; //столбцы

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(MAX));
console.log(11);

// function createUniqGetter() {
//   const values = [];

//   function getUniq() {
//     if (values.length >= MAX) {
//       return -1;
//     }

//     let value = getRandomInt(MAX);
//     if (values.includes(value)) {
//       value = getUniq(values);
//     }

//     values.push(value);
//     return value;
//   }

//   return getUniq;
// }

const values = [];
function getUniq() {
  if (values.length >= MAX) {
    return -1;
  }

  let value = getRandomInt(MAX);
  if (values.includes(value)) {
    value = getUniq(values);
  }

  values.push(value);
  return value;
}

function getMatrix(rows, cols, max) {
  let num;
  let arr = Array(rows).fill(null);

  for (let i = 0; i < rows; i++) {
    let subArr = Array(cols).fill(null);
    for (let j = 0; j < cols; j++) {
      num = getUniq();

      if (num === -1) {
        break;
      }

      subArr[j] = num;
    }

    if (num === -1) {
      break;
    }

    arr[i] = subArr;
  }

  return arr;
}

const average = (array) => {
  const sum = array.reduce((acc, val) => (acc += val), 0);
  return sum / array.length;
};

const launches = [];
for (let i = 0; i < 1000; i++) {
  const start = Date.now();
  const matrix = getMatrix(n, m, MAX);
  launches.push(Date.now() - start);
}

console.log('Execution time', average(launches));

// console.time('Execution time');
// const matrix = getMatrix(n, m, MAX);
// console.timeEnd('Execution time');

// console.log(matrix);

// file:///C:/Users/v.prokudin/Learn/Learn-JS/LearnJS/index3.html
