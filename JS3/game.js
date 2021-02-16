var number; //Число
var attempts = 0; //Количество попыток

generateNumber();
guessNumber();

//Генератор чисел
function generateNumber() {
  number = [];
  var min = 0,
    max = 9;
  //Заполняем массив
  for (var i = 0; i < 4; i++) {
    var part = Math.round(Math.random() * (max - min) + min);

    if (i == 0) {
      number[i] = part;
    } else {
      while (number.indexOf(part) != -1);
      part = Math.round(Math.random() * (max - min) + min);
    }
    number[i] = part;
    console.log("Генерация завершена");
  }
}

function guessNumber() {
  var result = prompt("Введите число (-1 - выход)", 0);
  var gameIsRunning = true;
  while (gameIsRunning) {
    if (parseInt(result) == -1) {
      gameIsRunning = false;
    }
    //Проверка
    else if (parseInt(result) == 0 || isNaN(parseInt(result))) {
      alert("Вы не ввели число");
      result = prompt("Введите число (-1 - выход)", 0);
    } else {
      var answer = checkNumber(result);

      if (answer[0]) {
        alert("Поздравляем! Вы угадали число. Число попыток: " + attempts);
        gameIsRunning = false;
      } else {
        result = prompt(
          "Быки: " +
            answer[1] +
            "Коровы: " +
            answer[2] +
            "Введите число (-1 - выход)",
          0
        );
      }
    }
  }
}
function checkNumber(myResult) {
  attempts++;
  var answer = [false, 0, 0];
  /*
    Индексы массива
    0 - результат
    1 - быки
    2 - коровы
    */
  console.log(myResult);
  console.log(number);

  var ranks = myResult.split("");
  for (var i = 0; i < ranks.length; i++) {
    if (parseInt(ranks[i]) == number[i]) {
      answer[1]++;
    } else if (number.indexOf(parseInt(ranks[i])) != -1) {
      answer[2]++;
    }
  }
  if (answer[1] == 4) {
    answer[0] = true;
    return answer;
  }
}
