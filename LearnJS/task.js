const string = 'ккккошшкаааа зззапрыыыггнула   наа зззаабборррр';

// function prune(str) {
//   return str
//     .split('')
//     .filter((item, index, arr) => {
//       return index === 0 || item.toLowerCase() !== arr[index - 1].toLowerCase();
//     })
//     .map((element, index, arr) => {
//       return index === 0 || arr[index - 1] === ' '
//         ? element.toUpperCase()
//         : element.toLowerCase();
//     })
//     .join('');
// }

function prune(str) {
  let inputStr = str.split('');

  let outSubArray = [inputStr[0].toUpperCase()];

  for (let i = 1; i < inputStr.length; i++) {
    if (inputStr[i].toLowerCase() !== inputStr[i - 1].toLowerCase()) {
      outSubArray.push(
        inputStr[i - 1] === ' ' ? inputStr[i].toUpperCase() : inputStr[i]
      );
    }
  }

  return outSubArray.join('');
}

console.log(prune(string)); // "Кошка запрыгнула на забор"
