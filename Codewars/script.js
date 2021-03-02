//Задача 1
/*Write a function that accepts an array of 10 integers(between 0 and 9),
 that returns a string of those numbers in the form of a phone number.
 createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
 */
console.log("Задача 1");
function createPhoneNumber(numbers) {
  return numbers.reduce((acc, currentValue, i) => {
    switch (i) {
      case 0:
        acc += "(";
        break;

      case 3:
        acc += ") ";
        break;

      case 6:
        acc += "-";
        break;
    }

    return acc + currentValue.toString();
  }, "");
}

//Задача 2
// This kata is about converting numbers to their binary or hexadecimal representation:
// If a number is even, convert it to binary.
// If a number is odd, convert it to hex.
console.log("Задача 2");
function evensAndOdds(num) {
  return num % 2 == 0 ? num.toString(2) : num.toString(16);
}

// Задача 3
//     Write a function that returns only    the decimal part of the given number.

// You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part.

// Examples
// getDecimal(2.4)  === 0.4
// getDecimal(-0.2) === 0.2
console.log("Задача 3");

function getDecimal(n) {
  return ((Math.abs(n) * 10) % 10) / 10; // fix me
}

// Задача 4
//   A hero is on his way to the castle to complete his mission.
//   However, he's been told that the castle is surrounded with a
//   couple of powerful dragons! each dragon takes 2 bullets to be
//   defeated, our hero has no idea how many bullets he should carry..
//    Assuming he's gonna grab a specific given number of bullets and
//    move forward to fight another specific given number of dragons,
//    will he survive?

// Return True if yes, False otherwise :)
console.log("Задача 4");
function hero(bullets, dragons) {
  return bullets / dragons >= 2;
}

// Задача 5
// A person's Life Path Number is calculated by adding each individual
// number in that person's date of birth, untill it is reduced to a single digit number.
// For example, Albert Einstein's birthday is March 14, 1879.
// The calculation of his Life Path Number would look like this:

// year: 1 + 8 + 7 + 9 = 25; 2 + 5 = 7
// month: 0 + 3 = 3
// day: 1 + 4 = 5
// final result: 7 + 3 + 5 = 15; 1 + 5 = 6
// Einstein's Life Path Number is therefore: 6

// Write the function lifePathNumber(dateOfBirth) that accepts a date of birth (as a string)
//  on the following format: "yyyy-mm-dd". Where "y" is year, "m" is month and "d" is day.
//  The function shall return a one digit integer between 1 and 9 which represents the Life Path Number of the given date of birth.
// You do not need to check that the input to the lifePathNumber()-function is correct format.
// You can assume that the input to the function will always be a valid date (as a string) with the format: "yyyy-mm-dd".
// Note: If the month or day is a single digit number, then it shall be preceeded by a 0 (zero).
// For example, in Einstein's case the month of March is 3; which is a single digit number.
// The function shall in this case be called with the following parameter: lifePathNumber("1879-03-14").
console.log("Задача 5");
function lifePathNumber(dateOfBirth) {
  let calculateDigitsSum = (number) => {
    let sum = 0;
    let num = number;

    do {
      sum += num % 10;
      num = Math.floor(num / 10);
    } while (num > 0);

    return Math.floor(sum / 10) > 0 ? calculateDigitsSum(sum) : sum;
  };

  const [yearSum, monthSum, dateSum] = dateOfBirth
    .split("-")
    .map((numStr) => calculateDigitsSum(parseInt(numStr)));

  return calculateDigitsSum(yearSum + monthSum + dateSum);
}

console.log(lifePathNumber("1879-03-14"));

// Задача 6
// Thanks to the effects of El Nino this year my holiday
// snorkelling trip was akin to being in a washing machine...
// Not fun at all.
// Given a string made up of '~' and '_' representing waves
//  and calm respectively, your job is to check whether a person
//  would become seasick.
// Remember, only the process of change from wave to calm will add to
// the effect (really wave peak to trough but this will do). Find out how many
// changes in level the string has and if that figure is more than 20% of the array,
//  return "Throw Up", if less, return "No Problem".
console.log("Задача 6");
function seaSick(x) {
  let str = x.split("");
  let counter = 0;

  for (i = 0; i < str.length; i++) {
    str[i] != str[i + 1] ? counter++ : "";
  }
  return counter - 1 > str.length * 0.2 ? "Throw Up" : "No Problem";
}

console.log(seaSick("~"));
console.log(seaSick("_~~~~~~~_~__~______~~__~~_~~"));
console.log(seaSick("______~___~_"));

// Задача 7
// Wolves have been reintroduced to Great Britain.
//  You are a sheep farmer, and are now plagued by wolves
//   which pretend to be sheep. Fortunately, you are good at spotting them.
// Warn the sheep in front of the wolf that it is about to be eaten.
//  Remember that you are standing at the front of the queue which is at the end of the array:
console.log("Задача 7");

function warnTheSheep(queue) {
  let wolfnum = queue.length - queue.indexOf("wolf");
  return wolfnum == 1
    ? "Pls go away and stop eating my sheep"
    : "Oi! Sheep number " +
        (wolfnum - 1).toString() +
        "! You are about to be eaten by a wolf!";
}

console.log(
  warnTheSheep([
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "wolf",
    "sheep",
    "sheep",
  ])
);
console.log(
  warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"])
);
console.log(
  warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"])
);
console.log(warnTheSheep(["sheep", "wolf", "sheep"]));
console.log(warnTheSheep(["sheep", "sheep", "wolf"]));

//Задача 8
// It's the academic year's end, fateful moment of your school report.
// The averages must be calculated. All the students come to you and
// entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.
console.log("Задача 8");
//мое
function getAverage(marks) {
  let marksSum = 0;
  for (let el of marks) {
    marksSum = marksSum + el;
  }
  awerageNumber = Math.floor(marksSum / marks.length);
  return awerageNumber;
}
//короткое
// function getAverage(marks){
//     return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
//   }

console.log(getAverage([2, 2, 2, 2]));
console.log(getAverage([1, 2, 3, 4, 5]));
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));

//Задача 9
// In order to prove it's success and gain funding, the wilderness
// zoo needs to prove to environmentalists that it has x number of mating pairs of bears.
// You must check within string (s) to find all of the mating pairs,
//  and return a string containing only them. Line them up for inspection.
// Rules: Bears are either 'B' (male) or '8' (female), Bears must
//  be together in male/female pairs 'B8' or '8B', Mating pairs must
//   involve two distinct bears each ('B8B' may look fun, but does not count as two pairs).
// Return an array containing a string of only the mating pairs available. e.g:
// 'EvHB8KN8ik8BiyxfeyKBmiCMj' ---> 'B88B' (empty string if there are no pairs)
// and true if the number is more than or equal to x, false if not:
// (6, 'EvHB8KN8ik8BiyxfeyKBmiCMj') ---> ['B88B', false];
// x will always be a positive integer, and s will never be empty
console.log("Задача 9");
function bears(x, str) {
  let answArr = ["", false];
  for (let i = 0; i < str.length; ) {
    if (str.slice(i, i + 2) == "B8" || str.slice(i, i + 2) == "8B") {
      answArr[0] = answArr[0] + str.slice(i, i + 2);
      i += 2;
    } else {
      i++;
    }
  }

  if (answArr[0].length / 2 >= x) {
    answArr[1] = true;
  } else answArr[1] = false;
  return answArr;
}

console.log(bears(7, "8j8mBliB8gimjB8B8jlB"));
console.log(bears(3, "88Bifk8hB8BB8BBBB888chl8BhBfd"));
console.log(bears(8, "8"));

//Задача 10
// Move the first letter of each word to the end of it,
// then add "ay" to the end of the word. Leave punctuation marks untouched.
console.log("Задача 10");

function pigIt(str) {
  let strWitnNoSeps = str.split(" ");
  let newSrting = [];
  console.log(strWitnNoSeps);
  for (let word of strWitnNoSeps) {
    if (word.match(/[a-zA-Z]/)) {
      word = word.split("");
      word.push(word.shift());
      word = word.join("") + "ay";
    }
    newSrting.push(word);
  }
  let finStr = newSrting.join(" ");
  return finStr;
}

console.log(pigIt("Pig latin is cool"));
console.log(pigIt("This is my string"));

//Задача 11
// Imagine you are in a universe where you can just perform the
// following arithematic operations. Addition(+), Subtraction(-),
// Multiplication(*), Division(/). You are given given a postfix expression.
// Postfix expression is where operands come after operator.
//  Each operator and operand are seperated by a space. You need to evaluate the expression.

// For example: 25 45 + is equivalent of 25 + 45, hence the answer would be 70.
//  Instead if you are given 20 40 + 60 *, it is equivalent of (20+40) * 60, hence
//  the answer should be 3600. 20 40 60 + * is equivalent of 20 * (40 + 60) = 2000.

// Create a method 'evaluate' that takes a string as input and returns a long resulted
// in the evaluation. Just concentrate on happy paths.
//  Assume that expression is always valid and division is always an integer division.
console.log("Задача 11");
//получилось громоздко, зато читабельно
function postfixEvaluator(str) {
  console.log("str: ", str);
  let strArr = str.split(" ");
  console.log("strArr: ", strArr);
  let newArr = [];
  for (let i = 0; i < strArr.length; i++) {
    console.log("strArr[i]:", strArr[i]);

    console.log(isFinite(strArr[i]));
    if (isFinite(strArr[i])) {
      newArr.push(+strArr[i]);
    } else if (strArr[i] == "+") {
      newArr[newArr.length - 2] = +newArr[newArr.length - 2] + +newArr.pop();
    } else if (strArr[i] == "-") {
      newArr[newArr.length - 2] = newArr[newArr.length - 2] - newArr.pop();
    } else if (strArr[i] == "/") {
      newArr[newArr.length - 2] = ~~(newArr[newArr.length - 2] / newArr.pop()); //битовые операции округляют до целого
    } else if (strArr[i] == "*") {
      newArr[newArr.length - 2] = ~~(newArr[newArr.length - 2] * newArr.pop()); //поэтому можно сделать два раза НЕ ~~
    }
    console.log("fin:", newArr);
  }
  return newArr[0];
}
console.log(postfixEvaluator("2 3 +"));

//Задача 12
// A bookseller has lots of books classified in 26 categories labeled A, B, ... Z.
//  Each book has a code c of 3, 4, 5 or more characters.
//  The 1st character of a code is a capital letter which defines the book category.

// In the bookseller's stocklist each code c is followed by a
// space and by a positive integer n (int n >= 0) which indicates
// the quantity of books of this code in stock.

// For example an extract of a stocklist could be:

// L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
// L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
// You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

// M = {"A", "B", "C", "W"}

// M = ["A", "B", "C", "W"]
// and your task is to find all the books of L with codes
// belonging to each category of M and to sum their quantity according to each category.

// For the lists L and M of example you have to return the
// string (in Haskell/Clojure/Racket a list of pairs):

// (A : 20) - (B : 114) - (C : 50) - (W : 0)
// where A, B, C, W are the categories, 20 is the sum of
// the unique book of category A, 114 the sum corresponding to
// "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category
// 'W' since there are no code beginning with W.

// If L or M are empty return string is "" (Clojure and Racket should
//      return an empty array/list instead).

// Note:
// In the result codes and their values are in the same order as in M.
console.log("Задача 12");

function stockList(listOfArt, listOfCat) {
  if (listOfArt.length == 0 || listOfCat == 0) return "";
  let finStr = "";
  let tempStr = "";
  for (let literal of listOfCat) {
    let tempRes = 0;
    for (let point of listOfArt) {
      if (point.startsWith(literal)) {
        let newVar = +point.match(/\d+/g);
        tempRes += newVar;
      }
    }
    tempStr = "(" + literal + " : " + tempRes + ")";
    if (finStr.length == 0) finStr += tempStr;
    else finStr += " - " + tempStr;
  }
  return finStr;
}

let b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"];
let c = ["A", "B"];
console.log(stockList(b, c)); //"(A : 200) - (B : 1140)"

let e = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"];
let f = ["A", "B", "C", "W"];
console.log(stockList(e, f)); //"(A : 0) - (B : 114) - (C : 70) - (W : 0)"

//Задача 12

// The situation...

// The fastest penguins in the world have just swum for the ultimate prize in professional penguin swimming.
// The cameras that were capturing the race stopped recording half way through.
// The athletes, and the fans are in disarray waiting for the results.
// The challenge...

// Given the last recorded frame of the race, and an array of penguin athletes, work out the gold, silver and bronze medal positions.

// The rules...

// Assume all penguins swim at the same speed.
// Waves (~) take twice as long to swim through as smooth water (-).
// Penguins (p or P) are racing from left to right.
// There can be any number of lanes, and the race can be any length.
// All Lanes in a single race will be the same length.
// Penguin names are in the same order as the lanes.
// Return a string in this format: "GOLD: <name-1>, SILVER: <name-2>, BRONZE: <name-3>"
// There will always be an equal amount of penguins and lanes.
// There will always be a top three (no draws).
console.log("Задача 12");

function calculateWinners(snapshot, penguins) {
  let places = ["GOLD", "SILVER", "BRONZE"];
  let MyfinStr = "";
  //   let  pools = snapshot.match(/|/g)
  console.log(snapshot.match(/\|-.-|/g));

  MyfinStr.length ? (MyfinStr += myAddStr) : MyfinStr;

  return MyfinStr;
}

const snapshot = `|----p---~---------|
|----p---~~--------|
|----p---~~~-------|`;

const penguins = ["Derek", "Francis", "Bob"];

console.log(calculateWinners(snapshot, penguins));
//=================================недоделана=================================

//Задача 12
// The function must return the truncated version of the given string
// up to the given limit followed by "..." if the result is shorter
// than the original. Return the same string if nothing was truncated.
console.log("Задача 12");
function solution(string, limit) {
  return string.length > limit ? string.slice(0, limit) + "..." : string;
}

console.log(solution("Testing String", 3)); //--> 'Tes...'
console.log(solution("Testing String", 8)); //--> 'Testing ...'
console.log(solution("Test", 8)); //--> 'Test'

//Задача 13
// If　a = 1, b = 2, c = 3 ... z = 26
// Then l + o + v + e = 54
// and f + r + i + e + n + d + s + h + i + p = 108
// So friendship is twice stronger than love :-)
// The input will always be in lowercase and never be empty.
console.log("Задача 13");
//мое
function wordsToMarks(string) {
  let i = 0;
  for (let j = 0; j < string.length; j++) {
    i += string.charCodeAt(j) - 96;
  }
  return i;
}

//красивое
// const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)

// console.log("a".charCodeAt(0));
// console.log("b".charCodeAt(0));

console.log(wordsToMarks("attitude"));
console.log(wordsToMarks("friends"));
console.log(wordsToMarks("family"));
console.log(wordsToMarks("selfness"));
console.log(wordsToMarks("knowledge"));

//Задача 14
// The code provided is supposed replace all the dots .
// in the specified String str with dashes -
console.log("Задача 14");

function replaceDots(str) {
  return str.split(".").join("-");
}
//можно так
// const replaceDots = (str) => str.replace(/\./g, '-');

console.log(replaceDots("one.two.three"));

//Задача 15
// Take 2 strings s1 and s2 including only letters from a to z.
// Return a new sorted string, the longest possible, containing distinct letters
// each taken only once - coming from s1 or s2.
console.log("Задача 15");

function longest(s1, s2) {
  newFinStr = "";
  s = s1 + s2;
  let start = "a".charCodeAt();
  let end = "z".charCodeAt();
  for (let i = start; i < end + 1; i++) {
    s.includes(String.fromCharCode(i))
      ? (newFinStr += String.fromCharCode(i))
      : "";
  }
  return newFinStr;
}

console.log(longest("aretheyhere", "yestheyarehere"));
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
console.log(longest("inmanylanguages", "theresapairoffunctions"));
//более короткое решение, но я не понимаю, как оно убирает повторения
// function longest(s1, s2) {
// return Array.from(new Set(s1 + s2)).sort().join('');
// }
// console.log("==========");
// console.log(("aretheyhere" + "yestheyarehere").split(""));
// console.log(("aretheyhere" + "yestheyarehere").split("").sort());
// console.log(("aretheyhere" + "yestheyarehere").split("").sort().join());
// console.log("==========");
// console.log(
//   ("aretheyhere" + "yestheyarehere")
//     .split("")
//     .sort()
//     .join()
//     .replace(/(.)\1+/g, "$1")
// );

//Задача 16
// Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.
// Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.
// Obviously the words should be Caps,
//  Every word should end with '!!!!',
//  Any letter 'a' or 'A' should become '@',
//  Any other vowel should become '*'.
console.log("Задача 16");
function gordon(a) {
  let newArr = a.split(" ");
  let finArr = [];
  let vowelArr = [
    "a",
    "e",
    "i",
    "o",
    // "q",
    "u",
    // "y",
    "A",
    "E",
    "I",
    "O",
    // "Q",
    "U",
    // "Y",
  ];
  const reducer = (currentValue) => {
    if (currentValue == "a" || currentValue == "A") currentValue = "@";
    else if (~vowelArr.indexOf(currentValue) != 0) currentValue = "*";
    return currentValue;
  };
  for (let el of newArr) {
    el = el.split("").map(reducer).join("") + "!!!!";
    finArr.push(el);
  }
  let finStr = finArr.join(" ").toUpperCase();
  return finStr;
}

console.log(gordon("What feck damn cake")); // 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!');
console.log(gordon("are you stu pid")); //'@R*!!!! Y**!!!! ST*!!!! P*D!!!!');
console.log(gordon("i am a chef")); //'*!!!! @M!!!! @!!!! CH*F!!!!');

//решения гораздо короче
// const gordon = a => a.slice().toUpperCase().replace(/A/g, '@').replace(/[EIOU]/g, '*').replace(/\ /g, '!!!! ')+'!!!!';
// function gordon(a){
//   return a.toUpperCase().replace(/(\w+)/g, '$1!!!!').replace(/A/g, '@').replace(/E|I|O|U/g, '*')
//  }

//Задача 17
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
console.log("Задача 17");

function generateHashtag(str) {
  let newArr = str.split(/\s+/);
  let littleArr = [];

  for (let el of newArr) {
    if (!el) return false;
    littleArr.push(el[0].toUpperCase() + el.slice(1));
  }

  myFinStr = "#" + littleArr.join("");
  if (myFinStr.length > 140) return false;
  return myFinStr;
}

console.log("finstr is: ", generateHashtag(" ".repeat(200))); //, false, "Still an empty string")
console.log("finstr is: ", generateHashtag("Do We have A Hashtag")); //, "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
console.log("finstr is: ", generateHashtag("Codewars")); //, "#Codewars", "Should handle a single word.")
console.log("finstr is: ", generateHashtag("Codewars is nice")); //, "#CodewarsIsNice", "Should remove spaces.")

//Задача 18
// Pete likes to bake some cakes. He has some recipes and ingredients.
// Unfortunately he is not good in maths. Can you help him to find out,
//  how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the
// available ingredients (also an object) and returns the maximum number of
// cakes Pete can bake (integer). For simplicity there are no units for the
// amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200).
// Ingredients that are not present in the objects, can be considered as 0.
console.log("Задача 18");
function cakes(recipeObj, haveObj) {
  let cakeAmount = 100000; //костыль, но мне не стыдно
  for (let el in recipeObj) {
    if (!haveObj.hasOwnProperty(el)) {
      return 0;
    } else {
      let tmp = Math.floor(haveObj[el] / recipeObj[el]);
      cakeAmount >= tmp ? (cakeAmount = tmp) : "";
    }
  }
  return cakeAmount;
}

console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
); // must return 2
console.log(
  cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  )
); // must return 0

// гораздо проще и быстрее, чем у меня
// const cakes = (needs, has) => Math.min(
//   ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
// )

//Задача 19
// Implement a function which convert the given boolean
// value into its string representation.
console.log("Задача 19");

booleanToString = (b) => (b ? "true" : "false");

console.log("result: ", booleanToString(true));
console.log("result: ", booleanToString(false));

//Задача 20
// Write a program that finds the summation of every number from 1 to num.
// The number will always be a positive integer greater than 0.
console.log("Задача 20");
summation = function (n) {
  if (n == 1) return n;
  else return n + summation(n - 1);
};

console.log("sum: ", summation(1));
console.log("sum: ", summation(8));

//Задача 21
// Simple enough this one - you will be given an array.
// The values in the array will either be numbers or strings,
//  or a mix of both. You will not get an empty array, nor a sparse one.

// Your job is to return a single array that has first the
//  numbers sorted in ascending order, followed by the strings sorted in alphabetic order.
//   The values must maintain their original type.

// Note that numbers written as strings are strings and must
//  be sorted with the other strings.
console.log("Задача 21");
function dbSort(a) {
  return a.sort(sortThis);
}

let sortThis = (a, b) => {
  if (typeof a == String && typeof b == String) {
    if (a > b) {
      return 1;
    } else {
      return -1;
    }
  } else if (typeof a !== typeof b) {
    return 1;
  } else {
    return a - b;
  }
};

console.log(dbSort([6, 2, 3, 4, 5]));
console.log(dbSort([14, 32, 3, 5, 5]));
console.log(dbSort([1, 2, 3, 4, 5]));
console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]));
console.log(dbSort(["C", "W", "W", "W", 1, 2, 0]));

//=====================================недоделана==================

//Задача 22
// Time to win the lottery!
// Given a lottery ticket (ticket), represented by an
// array of 2-value arrays, you must find out if you've won the jackpot.

// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
// To do this, you must first count the 'mini-wins' on your ticket.
//  Each subarray has both a string and a number within it. If the character code
//  of any of the characters in the string matches the number, you get a mini win.
//  Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number
// to the other input provided (win). If your total is more than or equal to (win),
//  return 'Winner!'. Else return 'Loser!'.

// All inputs will be in the correct format. Strings on tickets are not always the same length.
console.log("Задача 22");
function bingo(ticket, win) {
  let winCount = 0;
  for (let el of ticket) {
    let [str, num] = el;
    str.includes(String.fromCharCode(num)) ? winCount++ : "";
  }
  return winCount >= win ? "Winner!" : "Loser!";
}

console.log(
  bingo(
    [
      ["ABC", 65],
      ["HGR", 74],
      ["BYHT", 74],
    ],
    2
  )
); // Loser!
console.log(
  bingo(
    [
      ["ABC", 65],
      ["HGR", 74],
      ["BYHT", 74],
    ],
    1
  )
); //Winner!
console.log(
  bingo(
    [
      ["HGTYRE", 74],
      ["BE", 66],
      ["JKTY", 74],
    ],
    3
  )
); // Loser!
