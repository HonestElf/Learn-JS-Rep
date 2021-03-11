//Задание 1.1
console.log("Задание 1.1");
("use strict");
console.log("Я - JavaScript!");
console.log("Получим div");
console.log(document.body.firstElementChild);
console.log(document.body.children[0]);
console.log(document.body.childNodes[1]);
console.log("Получим ul");
// console.log(document.body.lastElementChild);
console.log(document.body.children[1]);
console.log("Получим li");
console.log(document.body.children[1].lastElementChild);

//Задание 1.2
console.log("Задание 1.2");
// 1. Таблица с `id="age-table"`.
let table = document.getElementById("age-table");
console.log(table);
// 2. Все label в этой таблице
console.log(document.querySelectorAll("#age-table label"));
// 3. Первый td в этой таблице
console.log(table.querySelector("td"));
// 4. Форма с name="search"
let form = document.querySelector('form[name="search"]');
console.log(form);
// 5. Первый input в этой форме
console.log(form.querySelector("input"));
// 6. Последний input в этой форме
let inputs = form.querySelectorAll("input"); // найти все input
console.log(inputs);
console.log(inputs[inputs.length - 1]); // взять последний

//Задание 2.1
console.log("Задание 2.1");
// получаем элемент
let elem = document.querySelector("[data-widget-name]");
console.log(elem.getAttribute("data-widget-name"));

let links = document.querySelectorAll("a");

for (let link of links) {
  let href = link.getAttribute("href");
  if (!href) continue; // нет атрибута

  if (!href.includes("://")) continue; // нет протокола

  if (href.startsWith("http://internal.com")) continue; // внутренняя

  link.style.color = "orange";
}

//Задание 3.1
console.log("Задание 3.1");
//Удаление содержимого из elem
function clear(elem) {
  elem.innerHTML = "";
}

//Задание 3.2
console.log("Задание 3.2");

function createLi() {
  console.log("createLi start");
  let orig = document.createElement("div");
  document.body.append(orig);

  while (true) {
    let point = prompt("Элемент: ");
    if (point === null || point === "") {
      break;
    }
    let elem = document.createElement("li");
    elem.innerText = point;
    // elem.textContent = point;
    orig.append(elem);

    console.log("createLi end");
  }
}
