//Задание 1
console.log("Задание 1");
("use strict");
console.log("Я - JavaScript!");

//Задание 2
console.log("Задание 2");
let admin, thisName;
thisName = "Джон";
admin = thisName;
console.log(admin);

//Задание 3
console.log("Задание 3");
let secName = "Иван";
//вставка переменной
console.log(`Привет, ${secName}!`);
//вставка выражения
console.log(`результат: ${1 + 2}`);

//Задание 3
// console.log('Задание 3');
// let isBoss = confirm("Ты здесь главный?");
// console.log(isBoss); // true, если нажата OK

//Задание 4.1
// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значениsем Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

console.log("Задание 4 - объекты");

let user = {};
user.name = "John";
user.surname = "Smith";
console.log(user);
user.name = "Pete";
console.log(user);
delete user.name;
console.log(user);
//Задание 4.2
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

//Задание 4.3
// Напишите код для суммирования всех зарплат и сохраните результат
//  в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

console.log("Задание 4.3 - объекты");
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function salarySum(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
}
console.log(salaries);
console.log(salarySum(salaries));

//Задание 4.4
// Создайте функцию multiplyNumeric(obj), которая
// умножает все числовые свойства объекта obj на 2.
console.log("Задание 4.4 - объекты");
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
console.log(menu);

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);
console.log(menu);

//Задание 4.5
// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
console.log("Задание 4.5 - объекты");

function MyCalculator() {
  this.lhs;
  this.rhs;

  this.read = function () {
    // this.lhs = parseInt(prompt('Первое значение', 0));
    // this.rhs = parseInt(prompt('Второе значение', 0));
    //альтернатива
    this.lhs = +prompt("Первое значение", 3);
    this.rhs = +prompt("Второе значение", 4);
  };

  this.sum = function () {
    return this.lhs + this.rhs;
  };
  this.mul = function () {
    return this.lhs * this.rhs;
  };
}

let customCalc = new MyCalculator();

// customCalc.read(); //разблокировать для ввода значений
console.log(customCalc);
console.log("Sum = " + customCalc.sum());
console.log("Mul = " + customCalc.mul());

//Задание 4.6
// Напишите функцию-конструктор Accumulator(startingValue).
// Объект, который она создаёт, должен уметь следующее:
// Хранить «текущее значение» в свойстве value.
// Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь
// при вызовах метода read(), с учётом начального значения startingValue.
console.log("Задание 4.6 - объекты");
function Accumulator(initValue) {
  this.value = initValue;

  this.read = function () {
    this.value += +prompt("Введите значение: ", 0);
    console.log(this.value);
  };
}

let accumulator = new Accumulator(1);
console.log(accumulator.value);
// accumulator.read();//разблокировать для ввода значений
// accumulator.read();//разблокировать для ввода значений

//Задание 5
// Создайте функцию readNumber, которая будет запрашивать ввод
// числового значения до тех пор, пока посетитель его не введёт.
// Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода,
//  отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.
console.log("Задание 5.1 - числа");
// console.log('right value: ', readNumber()); //разблокировать для ввода значений
function readNumber() {
  let cont = true;
  while (cont) {
    let value = prompt("Введите число");
    if (isNaN(value)) {
      console.log("wrong value: ", value);
    } else if (value === null || value === "") {
      cont = false;
      return null;
    } else {
      cont = false;
      return +value;
    }
  }
}

//Задание 6
// Создайте функцию readNumber, которая будет запрашивать ввод
// числового значения до тех пор, пока посетитель его не введёт.
// Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода,
//  отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.
console.log("Задание 5.2 - числа");
function MyRand(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(MyRand(1, 5));
console.log(MyRand(1, 5));
console.log(MyRand(1, 5));

console.log("Задание 5.3 - числа");
function MyIntRand(min, max) {
  return Math.round(Math.random() * (max - min + 1) + min - 0.5);
}
console.log(MyIntRand(1, 3));
console.log(MyIntRand(1, 3));
console.log(MyIntRand(1, 3));

//Задание 7
// Напишите функцию ucFirst(str), возвращающую строку str
//  с заглавным первым символом. Например:
console.log("Задание 5.3 - строки");

function ucFirst(str) {
  if (!str) return str; //нужна проверка на нудевую строку
  let newStr = str[0].toUpperCase(); //т.к. у undefined нет метода toUpperCAse
  newStr += str.slice(1);
  return newStr;
}

console.log(ucFirst("blah"));

//Задание 8
// Напишите функцию checkSpam(str), возвращающую true,
// если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:
console.log("Задание 5.4 - строки");

function checkSpam(str) {
  let tmp = str.toLowerCase();
  if (tmp.includes("xxx") || tmp.includes("viagra")) {
    return true;
  } else {
    return false;
  }
}

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));

//Задание 9
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str
// и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется,
//  либо, если необходимо, усечённая строка.
console.log("Задание 5.5 - строки");

function truncate(str, maxLength) {
  if (str.length > maxLength) {
    str = str.substring(0, maxLength - 1) + "\u2026";
  }
  return str;
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));

//Задание 10
// Есть стоимость в виде строки "$120". То есть сначала идёт
// знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет
//  из такой строки выделять числовое значение и возвращать его.
console.log("Задание 5.6 - строки");
function extractCurrencyValue(str) {
  return +str.substring(1);
}

console.log(extractCurrencyValue("$120"));
console.log(extractCurrencyValue("$120") === 120);

//Задание 10
// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для
// поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте «Рэп» и «Регги» в начало массива.
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл
console.log("Задание 6.1 - массивы");

let myStyles = ["Джаз", "Блюз"];
console.log(myStyles);
myStyles.push("Рок-н-Ролл");
console.log(myStyles);
myStyles[Math.floor((myStyles.length - 1) / 2)] = "Классика";
console.log(myStyles.shift());
console.log(myStyles);
myStyles.unshift("Регги");
myStyles.unshift("Рэп");
console.log(myStyles);

//Задание 10
// Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
console.log("Задание 6.2 - массивы");

function sumInput() {
  let myArr = [];
  let cont = true;
  let i = 0;
  let sum = 0;
  while (cont) {
    let newNum = prompt("Введите число");
    if (isNaN(newNum) || newNum == "" || newNum == null) {
      console.log("Ведено не число");
      cont = false;
      // continue;
    } else {
      myArr[i] = +newNum;
      i++;
      console.log("Введено число: ", newNum);
    }
  }
  for (let i = 0; i < myArr.length; i++) {
    sum += myArr[i];
  }
  return sum;
  console.log(myArr);
}

// console.log('Сумма: ' + sumInput());

//Задание 11
// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// Функция getMaxSubSum(arr) должна возвращать эту сумму.
console.log("Задание 6.3 - массивы");

function getMaxSubSum(arr) {
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([1, 2, 3])); // 6
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100

//Задание 12
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
console.log("Задание 6.4 - массивы");

function camelize(str) {
  let arr = str.split("-");
  let myMap = arr.map((word, index) =>
    index == 0 ? word : word[0].toUpperCase() + word.slice(1)
  );
  let arr2 = myMap.join("");
  return arr2;
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

//Задание 13
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
//  ищет в нём элементы между a и b и отдаёт массив этих элементов.
// Функция должна возвращать новый массив и не изменять исходный.
console.log("Задание 6.5 - массивы");

function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered);
console.log(arr);

//Задание 14
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него
//  все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.
console.log("Задание 6.6 - массивы");

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
    }
  }
}

let mySecArr = [5, 3, 8, 1];
filterRangeInPlace(mySecArr, 1, 4);
console.log(mySecArr);

//Задание 15
// Сортировать в порядке по убыванию
console.log("Задание 6.7 - массивы");

let myTharr = [5, 2, 1, -10, 8];
myTharr.sort((a, b) => b - a);
console.log(myTharr);

//Задание 16
// Сортировать в порядке по убыванию
console.log("Задание 6.8 - массивы");
function copySorted(arr) {
  let copiedArr = arr.slice();
  copiedArr.sort();
  return copiedArr;
}

let myStrArray = ["HTML", "JavaScript", "CSS"];
let myStrCopy = copySorted(myStrArray);
console.log(myStrArray);
console.log(myStrCopy);

//Задание 17
// У вас есть массив объектов user, и в каждом из них есть user.name.
// Напишите код, который преобразует их в массив имён.
console.log("Задание 6.9 - массивы");

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

//мой вариант
// function sortArr(arr) {
//     let myNewArr = [];
//     for (let item of arr) {
//         myNewArr.push(item.name);
//     }
//     return myNewArr;
// }

// let names = sortArr(users);

//умный вариант
let names = users.map((item) => item.name);
console.log(names); // Вася, Петя, Маша

//Задание 18
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
console.log("Задание 7.1 - дата");
let todayDate = new Date(2012, 1, 20, 3, 12, 0, 0);
console.log("Дата: ", todayDate);

//Задание 19
// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
console.log("Задание 7.2 - дата");
//мое решение
function getWeekDayMy(date) {
  let strWeekDay = "";
  let day = date.getDay(0);
  switch (day) {
    case 0:
      strWeekDay = "ВС";
      break;
    case 1:
      strWeekDay = "ПН";
      break;
    case 2:
      strWeekDay = "ВТ";
      break;
    case 3:
      strWeekDay = "СР";
      break;
    case 4:
      strWeekDay = "ЧТ";
      break;
    case 5:
      strWeekDay = "ПТ";
      break;
    case 6:
      strWeekDay = "СБ";
      break;
  }
  return strWeekDay;
}

let myDate = new Date(2012, 1, 20, 3, 12, 0, 0);
console.log(getWeekDayMy(myDate));

//Умное решение
function getWeekDay(date) {
  let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  return days[date.getDay()];
}

let date = new Date(2014, 0, 3); // 3 января 2014 года
console.log(getWeekDay(date)); // ПТ

//Задание 20
// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
// Функция должна надёжно работать при значении days=365 и больших значениях:
console.log("Задание 7.3 - дата");

function getDateAgo(date, days) {
  let pstDate = new Date(date);
  pstDate.setDate(date.getDate() - days);
  return pstDate;
}

let secDay = new Date(2015, 0, 2);
console.log(secDay);
console.log(getDateAgo(secDay, 1));
console.log(getDateAgo(secDay, 2));
console.log(getDateAgo(secDay, 365));

//Задание 21
// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
console.log("Задание 7.4 - дата");

function getLastDayOfMonth(year, month) {
  let dateNeeded = new Date(year, month + 1, 0);
  return dateNeeded.getDate();
}

console.log(getLastDayOfMonth(2012, 1));

//Задание 22
// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
console.log("Задание 7.5 - дата");

function getSecondsToday() {
  let today = new Date();
  return (secs =
    today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds());
}

console.log(getSecondsToday());

//Задание 23
// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
// Например, если сейчас 23:00, то:
// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
console.log("Задание 7.6 - дата");

function getSecondsToTomorrow() {
  let todayDate = new Date();
  let tommMidnight = new Date(
    todayDate.getFullYear(),
    todayDate.getMonth(),
    todayDate.getDate() + 1
  );

  return Math.round((tommMidnight - Date.now()) / 1000);
}
console.log(getSecondsToTomorrow());

//Задание 23
// Напишите функцию formatDate(date), форматирующую date по следующему принципу:
// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
// Например:
console.log("Задание 7.7 - дата");

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;

function formatDate(date) {
  let str = "";
  let dateDiff = Date.now() - date;

  console.log("Разница: " + dateDiff);

  if (dateDiff < SECOND) {
    str = "Прямо сейчас";
  } else if (dateDiff < MINUTE) {
    str = `${dateDiff / SECOND}` + " сек. назад";
  } else if (dateDiff < HOUR) {
    str = `${dateDiff / MINUTE}` + " мин. назад";
  } else {
    //мое решение
    // str += date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes();
    str = `${date.getDate()}.${
      date.getMonth() + 1
    }.${date
      .getFullYear()
      .toString()
      .slice(-2)} ${date.getHours()}:${date.getMinutes()}`;

    //умное решение
    // let d = date;
    // d = [
    //     '0' + d.getDate(),
    //     '0' + (d.getMonth() + 1),
    //     '' + d.getFullYear(),
    //     '0' + d.getHours(),
    //     '0' + d.getMinutes()
    // ].map(component => component.slice(-2)); // взять последние 2 цифры из каждой компоненты

    // // соединить компоненты в дату
    // str = d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
  }
  return str;
}

console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"
console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"
console.log(formatDate(new Date(new Date() - 86400 * 1000))); // вчерашняя дата вроде 31.12.2016, 20:00

//Задание 24
// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
console.log("Задание 8.1 - JSON");
let myObjUser = {
  name: "Василий Иванович",
  age: 35,
};

console.log(myObjUser);
let myObj = JSON.stringify(myObjUser);
console.log(myObj);

let mySecUser = JSON.parse(myObj);
console.log(mySecUser);

//Задание 25
// В простых случаях циклических ссылок мы можем исключить свойство,
// из-за которого они возникают, из сериализации по его имени.
// Но иногда мы не можем использовать имя, так как могут быть и другие,
// нужные, свойства с этим именем во вложенных объектах. Поэтому можно проверять свойство по значению.
// Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:
console.log("Задание 8.2 - JSON");

let room = {
  number: 23,
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
  place: room,
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    console.log(`${key} : ${value}`);
    return value == meetup ? undefined : value;
    /* ваш код */
  })
);

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/

//Задание 26
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте три варианта решения:
// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.
// P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?
console.log("Задание 9.1 - Рекурсия");

function sumTo(n) {
  let sum = 0;
  for (let i = 1; i < n + 1; i++) {
    sum += i;
  }
  return sum;
}

function recSumTo(n) {
  if (n == 1) {
    return (sum = n);
  } else {
    return (sum = n + recSumTo(n - 1));
  }
}
function ariphSumTo(n) {
  return (sum = ((1 + n) / 2) * n);
}
console.log("Simple cycle");
for (let i = 1; i < 10; i++) {
  console.log(sumTo(i));
}
console.log("Recursion");
for (let i = 1; i < 10; i++) {
  console.log(recSumTo(i));
}
console.log("Ariphmetic");
for (let i = 1; i < 10; i++) {
  console.log(ariphSumTo(i));
}

//Задание 27
// Факториал натурального числа – это число, умноженное на "себя минус один",
//  затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!
// Определение факториала можно записать как:
// n! = n * (n - 1) * (n - 2) * ...*1
// Примеры значений для разных n:
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
// alert( factorial(5) ); // 120
// P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6
console.log("Задание 9.2 - Рекурсия");

function factorial(n) {
  if (n == 1) return n;
  else return n * factorial(n - 1);
}

for (let i = 1; i < 10; i++) {
  console.log("[", i, "]: ", factorial(i));
}

//Задание 28
// Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2.
// То есть, следующее число получается как сумма двух предыдущих.
// Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и
// так далее: 1, 1, 2, 3, 5, 8, 13, 21....
// Числа Фибоначчи тесно связаны с золотым сечением и
// множеством природных явлений вокруг нас.
// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
console.log("Задание 9.3 - Рекурсия");

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757

//Задание 29
// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
// Напишите функцию printList(list), которая выводит элементы списка по одному.
// Сделайте два варианта решения: используя цикл и через рекурсию.
console.log("Задание 9.4 - Рекурсия");
function printList(list) {
  let tmp = list;
  while (tmp) {
    console.log("element: ", tmp.value);
    tmp = tmp.next;
  }
}

function recPrintList(list) {
  console.log("element: ", list.value);
  if (list.next) {
    recPrintList(list.next);
  }
}

printList(list);
recPrintList(list);

//Задание 30
// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
// Сделайте два решения: с использованием цикла и через рекурсию.
console.log("Задание 9.5 - Рекурсия");
let revList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
function reversePrintList(revList) {
  let listArr = [];
  let tmp = revList;
  while (tmp) {
    listArr.push(tmp.value);
    tmp = tmp.next;
  }
  for (let i = listArr.length - 1; i >= 0; i--) {
    console.log("element: ", listArr[i]);
  }
}

function reverseRecPrintList(list) {
  if (list.next) {
    reverseRecPrintList(list.next);
  }
  console.log("element: ", list.value);
}

reversePrintList(revList);
reverseRecPrintList(revList);

//Задание 31
// Сумма с помощью замыканий
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
// Да, именно таким образом, используя двойные круглые скобки (не опечатка).
// sum(1)(2) = 3
// sum(5)(-1) = 4
console.log("Задание 10.1 - Замыкание");

function mySum(a) {
  return function (b) {
    return a + b;
  };
}
console.log("sum(1)(2): ", mySum(1)(2));
console.log("sum(5)(-1): ", mySum(5)(-1));

//Задание 32
// У нас есть встроенный метод arr.filter(f) для массивов.
// Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.
// Сделайте набор «готовых к употреблению» фильтров:
// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:
// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
// console.log('Задание 10.2 - Замыкание');
console.log("Задание 10.2 - Замыкание");
let myHeckarr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(min, max) {
  return function (member) {
    return member >= 3 && member <= 6;
  };
}

function inArray(newArr) {
  return function (member) {
    for (let el of newArr) {
      if (member == el) {
        return true;
      }
    }
  };
}
console.log(myHeckarr.filter(inBetween(3, 6))); // 3,4,5,6
console.log(myHeckarr.filter(inArray([1, 2, 10]))); // 1,2

//Задание 33
// У нас есть массив объектов, который нужно отсортировать:
let newUsers = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];
// Обычный способ был бы таким:
// // по имени (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);
// // по возрасту (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// Можем ли мы сделать его короче, скажем, вот таким?
// users.sort(byField('name'));
// users.sort(byField('age'));
// То есть, чтобы вместо функции, мы просто писали byField(fieldName).
// Напишите функцию byField, которая может быть использована для этого.
console.log("Задание 10.3 - Замыкание");
//мое решение
function byField(arg) {
  if (arg == "name") {
    return (a, b) => (a.name > b.name ? 1 : -1);
  } else {
    return (a, b) => (a.age > b.age ? 1 : -1);
  }
}

console.log(newUsers.sort(byField("name")));
console.log(newUsers.sort(byField("age")));

//умное решение
function cleverByField(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}

console.log(newUsers.sort(cleverByField("name")));
console.log(newUsers.sort(cleverByField("age")));

//Задание 34
// Напишите функцию printNumbers(from, to), которая
// выводит число каждую секунду, начиная от from и заканчивая to.
// Сделайте два варианта решения.
console.log("Задание 11.1 - Таймеры");

function printNumbers(from, to) {
  let current = from;

  let intervalTimer = setInterval(function () {
    console.log(current);
    if (current == to) {
      clearInterval(intervalTimer);
    }
    current++;
  }, 1000);
}

// printNumbers(5, 10);

function recursivePrintNumbers(from, to) {
  let current = from;

  let recursTimer = setTimeout(function tick() {
    console.log(current);
    if (current == to) {
      clearInterval(intervalTimer);
    } else {
      current++;
      recursTimer = setTimeout(tick, 1000);
    }
  });
}

// recursivePrintNumbers(5, 10);

//Задание 35
console.log("Задание 12.1 - Декораторы - повторить");

//Задание 36
// С помощью свойства __proto__ задайте прототипы так,
// чтобы поиск любого свойства выполнялся по следующему пути:
//  pockets → bed → table → head. Например, pockets.pen должно
//  возвращать значение 3 (найденное в table),
//   а bed.glasses – значение 1 (найденное в head).
//   Ответьте на вопрос: как быстрее получить значение
//   glasses – через pockets.glasses или через head.glasses?
//    При необходимости составьте цепочки поиска и сравните их.
console.log("Задание 13.1 - Прототипное наследование");
let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

console.log("pockets.pen: ", pockets.pen);
console.log("bed.glasses: ", bed.glasses);

//Задание 37
// У нас есть два хомяка: шустрый (speedy) и ленивый (lazy);
//  оба наследуют от общего объекта hamster.
// Когда мы кормим одного хомяка, второй тоже наедается.
//  Почему? Как это исправить?
console.log("Задание 13.2 - Прототипное наследование");
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

// Этот хомяк нашёл еду
speedy.eat("apple");
speedy.eat("porato");
lazy.eat("carrot");
hamster.eat("onion");

console.log("speedy: ", speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log("lazy: ", lazy.stomach); // apple
console.log("hamster: ", hamster.stomach);

//Задание 38
// Добавьте всем функциям в прототип метод defer(ms),
//  который вызывает функции через ms миллисекунд.
// После этого должен работать такой код:
console.log("Задание 13.3 - Прототипное наследование");
Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};

function f() {
  console.log("Hello!");
}

// f.defer(1000); // выведет "Hello!" через 1 секунду

//Задание 39
// Добавьте всем функциям в прототип метод defer(ms),
// который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.
// Например, должно работать так:
console.log("Задание 13.2 - Декораторы - повторить");
Function.prototype.deferSec = function (ms) {
  let f = this;
  return function (...args) {
    setTimeout(() => f.apply(this, args), ms);
  };
};

function f(a, b) {
  console.log(a + b);
}
// f.deferSec(1000)(1, 2); // выведет 3 через 1 секунду.

//Задание 40
// Имеется объект dictionary, созданный с помощью Object.create(null)
// для хранения любых пар ключ/значение.
// Добавьте ему метод dictionary.toString(), который должен возвращать
//  список ключей, разделённых запятой. Ваш toString не должен выводиться
//  при итерации объекта с помощью цикла for..in.
console.log("Задание 13.3 - Декораторы - повторить");

let dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join();
    },
  },
});
// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for (let key in dictionary) {
  console.log(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
console.log(dictionary); // "apple,__proto__"

//Задание 41
// Встроенная функция setTimeout использует колбэк-функции.
//  Создайте альтернативу, использующую промисы.
// Функция delay(ms) должна возвращать промис, который
// перейдёт в состояние «выполнен» через ms миллисекунд,
// так чтобы мы могли добавить к нему .then:

// function delay(ms) {
//   // ваш код
// }

// delay(3000).then(() => alert('выполнилось через 3 секунды'));
console.log("Задание 14.1 - промисы");
// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// delay(3000).then(() => console.log("выполнилось через 3 секунды"));

//Задание 42
// Есть много областей, где нам нужны случайные данные.
// Одной из них является тестирование. Нам могут понадобиться
// случайные данные: текст, числа и т.д., чтобы хорошо всё проверить.
// В JavaScript мы можем использовать Math.random().
//  Но если что-то пойдёт не так, то нам нужно будет перезапустить тест, используя те же самые данные.
// Для этого используются так называемые «сеяные псевдослучайные генераторы».
// Они получают «зерно», как первое значение, и затем генерируют следующее, используя формулу.
// Так что одно и то же зерно даёт одинаковую последовательность, и, следовательно, весь
// поток легко воспроизводим. Нам нужно только запомнить зерно, чтобы воспроизвести последовательность.
// Пример такой формулы, которая генерирует более-менее равномерно распределённые значения:

// next = previous * 16807 % 2147483647
// Если мы используем 1 как зерно, то значения будут:

// 16807
// 282475249
// 1622650073
// …и так далее…
// Задачей является создать функцию-генератор pseudoRandom(seed),
//  которая получает seed и создаёт генератор с указанной формулой.

console.log("Задание 15.1 - Генераторы");
function* pseudoRandom(seed) {
  let previous = seed;
  while (true) {
    previous = (previous * 16807) % 2147483647;
    yield previous;
  }
}

let generator = pseudoRandom(1);

console.log("[1]", generator.next().value); // 16807
console.log("[2]", generator.next().value); // 282475249
console.log("[3]", generator.next().value); // 1622650073

//Задание 43
// Напишите функцию isInteger(num), которая возвращает true,
// если num – целое число, иначе false.
console.log("Задание 16.1 - Побитовые операторы");

function isInteger(num) {
  return (num ^ 0) === num;
}

console.log("isInteger(1): ", isInteger(1)); // true
console.log("isInteger(1.5): ", isInteger(1.5)); // false
console.log("isInteger(-0.5): ", isInteger(-0.5)); // false

//Задание 35
console.log("Задание 12.1 - Декораторы - повторить");
//Задание 35
console.log("Задание 12.1 - Декораторы - повторить");
//Задание 35
console.log("Задание 12.1 - Декораторы - повторить");
//Задание 35
console.log("Задание 12.1 - Декораторы - повторить");
