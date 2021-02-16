//Задача 1
/*Write a function that accepts an array of 10 integers(between 0 and 9),
 that returns a string of those numbers in the form of a phone number.
 createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
 */
console.log('Задача 1');
function createPhoneNumber(numbers) {

    return numbers.reduce((acc, currentValue, i) => {
        switch (i) {
            case 0:
                acc += '('
                break;

            case 3:
                acc += ') ';
                break;

            case 6:
                acc += '-';
                break;
        }

        return acc + currentValue.toString();
    }, '');
}

//Задача 2
// This kata is about converting numbers to their binary or hexadecimal representation:
// If a number is even, convert it to binary.
// If a number is odd, convert it to hex.
console.log('Задача 2');
function evensAndOdds(num) {
    return (num % 2) == 0 ? num.toString(2) : num.toString(16);
}

// Задача 3
//     Write a function that returns only    the decimal part of the given number.

// You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part.

// Examples
// getDecimal(2.4)  === 0.4
// getDecimal(-0.2) === 0.2
console.log('Задача 3');

function getDecimal(n) {
    return (Math.abs(n) * 10) % 10 / 10 // fix me 
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
console.log('Задача 4');
function hero(bullets, dragons) {
    return (bullets / dragons) >= 2;
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
console.log('Задача 5');
function lifePathNumber(dateOfBirth) {

    let calculateDigitsSum = number => {
        let sum = 0;
        let num = number;

        do {
            sum += num % 10;
            num = Math.floor(num / 10);
        } while (num > 0);

        return Math.floor(sum / 10) > 0 ? calculateDigitsSum(sum) : sum;
    }

    const [yearSum, monthSum, dateSum] = dateOfBirth.split('-').map(numStr => calculateDigitsSum(parseInt(numStr)));

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
console.log('Задача 6');

function seaSick(x) {
    // let str = /~_/;
    // let arr = x.match(str);
    // console.log("Arr: ",arr);
    // console.log("Length: ",arr.length || []);
    let myStr = x;
    let str = myStr.split("~_");
    console.log("str: ", str);
    console.log("str.length: ", str.length - 1);

    console.log("x: ", x);
    console.log("x.length: ", x.length);
    console.log("x.length2: ", x.length * 0.2 * 0.5);


    return (str.length - 1 >= x.length * 0.2 * 0.5) ? "Throw Up" : "No Problem";
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
console.log('Задача 7');

function warnTheSheep(queue) {
    let wolfnum = queue.length - queue.indexOf("wolf");
    return (wolfnum == 1) ? "Pls go away and stop eating my sheep" : ("Oi! Sheep number " + (wolfnum - 1).toString() + "! You are about to be eaten by a wolf!")
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));
console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]));
console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]));
console.log(warnTheSheep(["sheep", "wolf", "sheep"]));
console.log(warnTheSheep(["sheep", "sheep", "wolf"]));


//Задача 8
// It's the academic year's end, fateful moment of your school report. 
// The averages must be calculated. All the students come to you and 
// entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.
console.log('Задача 8');
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
console.log(getAverage([1, 2, 3, 4, 5,]));
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
console.log('Задача 9');
function bears(x, str) {
    let answArr = ['', false];
    for (let i = 0; i < str.length;) {
        if (str.slice(i, i + 2) == "B8" || str.slice(i, i + 2) == "8B") {
            answArr[0] = answArr[0] + (str.slice(i, i + 2));
            i += 2;
        }
        else {
            i++;
        }
    }

    if (answArr[0].length / 2 >= x) { answArr[1] = true; }
    else answArr[1] = false;
    return answArr;
}

console.log(bears(7, '8j8mBliB8gimjB8B8jlB'));
console.log(bears(3, '88Bifk8hB8BB8BBBB888chl8BhBfd'));
console.log(bears(8, '8'));


//Задача 10
// Move the first letter of each word to the end of it, 
// then add "ay" to the end of the word. Leave punctuation marks untouched.
console.log('Задача 10');

function pigIt(str) {
    let strWitnNoSeps = str.split(' ');
    let newSrting = [];
    console.log(strWitnNoSeps);
    for (let word of strWitnNoSeps) {
        if (word.match(/[a-zA-Z]/)) {
            word = word.split('');
            word.push(word.shift());
            word = word.join('') + "ay";
        }
        newSrting.push(word);
    }
    let finStr = newSrting.join(' ');
    return finStr;
}

console.log(pigIt('Pig latin is cool'));
console.log(pigIt('This is my string'));


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
console.log('Задача 11');

function postfixEvaluator(str) {
    console.log(str);
    let newArr = str.split(" ");
    console.log(newArr);
    for (let i = 0; i < newArr.length; i++) {
        if (isFinite(newArr[i])) {

        }
    }
    return result;
}


console.log(postfixEvaluator("2 3 +"));