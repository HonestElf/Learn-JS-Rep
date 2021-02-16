//Задание 1
console.log("Задание 1");

var myObject = {
  сотни: 0,
  десятки: 0,
  единицы: 0,

  loadNumber: function () {
    var number = prompt("Введите число (-1 - Выход");
    var gameIsRunnig = true;
    while (gameIsRunnig) {
      if (parseInt(number) == -1) {
        gameIsRunnig = false;
      } else if (
        parseInt(number) < 0 ||
        isNaN(parseInt(number)) ||
        parseInt(number > 999)
      ) {
        alert("Вы ввели не число/число лежит вне диапазона");
        var number = prompt("Введите число (-1 - Выход");
      } else {
        this.parseNumber(nuыmber);
        gameIsRunnig = false;
      }
    }
    this.showObject();
  },

  parseNumber: function (number) {
    this.единицы = number % 10;
    this.десятки = Math.floor(number / 10) % 10;
    this.сотни = Math.floor(Math.floor(number / 10) / 10) % 10;
  },

  showObject: function () {
    console.log("Сотни: ", this.сотни);
    console.log("Десятки: ", this.десятки);
    console.log("Единицы: ", this.единицы);
  },
};
myObject.loadNumber();
