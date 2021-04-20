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

// Задание 4.1
console.log("Задание 4.1");
let menuElem = document.getElementById("sweeties");
let titleElem = menuElem.querySelector(".task-title");

titleElem.onclick = function () {
  menuElem.classList.toggle("open");
};

// Задание 4.2
console.log("Задание 4.2");
/* этот код помечает картинки, для удобства разработки */
let i = 1;
for (let li of carousel.querySelectorAll("li")) {
  li.style.position = "relative";
  li.insertAdjacentHTML(
    "beforeend",
    `<span style="position:absolute;left:0;top:0">${i}</span>`
  );
  i++;
}

/* конфигурация */
let width = 130; // ширина картинки
let count = 3; // видимое количество изображений

let list = carousel.querySelector("ul");
let listElems = carousel.querySelectorAll("li");

let position = 0; // положение ленты прокрутки

carousel.querySelector(".prev").onclick = function () {
  // сдвиг влево
  position += width * count;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0);
  list.style.marginLeft = position + "px";
};

carousel.querySelector(".next").onclick = function () {
  // сдвиг вправо
  position -= width * count;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + "px";
};

// Задание 4.3
console.log("Задание 4.3");

// поместить все текстовые узлы в элемент <span>
// он занимает только то место, которое необходимо для текста
for (let li of tree.querySelectorAll("li")) {
  let span = document.createElement("span");
  li.prepend(span);
  span.append(span.nextSibling); // поместить текстовый узел внутрь элемента <span>
}

//  ловим клики на всём дереве
tree.onclick = function (event) {
  if (event.target.tagName != "SPAN") {
    return;
  }

  let childrenContainer = event.target.parentNode.querySelector("ul");
  if (!childrenContainer) return; // нет детей

  childrenContainer.hidden = !childrenContainer.hidden;
};

// Задание 4.4
console.log("Задание 4.4");
let tooltipElem;

document.onmouseover = function (event) {
  let target = event.target;

  // если у нас есть подсказка...
  let tooltipHtml = target.dataset.tooltip;
  if (!tooltipHtml) return;

  // ...создадим элемент для подсказки

  tooltipElem = document.createElement("div");
  tooltipElem.className = "tooltip";
  tooltipElem.innerHTML = tooltipHtml;
  document.body.append(tooltipElem);

  // спозиционируем его сверху от аннотируемого элемента (top-center)
  let coords = target.getBoundingClientRect();

  let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0; // не заезжать за левый край окна

  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) {
    // если подсказка не помещается сверху, то отображать её снизу
    top = coords.top + target.offsetHeight + 5;
  }

  tooltipElem.style.left = left + "px";
  tooltipElem.style.top = top + "px";
};

document.onmouseout = function (e) {
  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }
};

// Задание 4.5
console.log("Задание 4.5");

contents.onclick = function (event) {
  function handleLink(href) {
    let isLeaving = confirm(`Leave for ${href}?`);
    if (!isLeaving) return false;
  }

  let target = event.target.closest("a");

  if (target && contents.contains(target)) {
    return handleLink(target.getAttribute("href"));
  }
};

// Задание 4.6
console.log("Задание 4.6");
thumbs.onclick = function (event) {
  let thumbnail = event.target.closest("a");

  if (!thumbnail) return;
  showThumbnail(thumbnail.href, thumbnail.title);
  event.preventDefault();
};

function showThumbnail(href, title) {
  largeImg.src = href;
  largeImg.alt = title;
}

// Задание 4.7
console.log("Задание 4.7");
let ul = document.getElementById("ul-list");

ul.onclick = function (event) {
  if (event.target.tagName != "LI") return;

  if (event.ctrlKey || event.metaKey) {
    toggleSelect(event.target);
  } else {
    singleSelect(event.target);
  }
};

// предотвращает ненужное выделение элементов списка при клике
ul.onmousedown = function () {
  return false;
};

function toggleSelect(li) {
  li.classList.toggle("selected");
}

function singleSelect(li) {
  let selected = ul.querySelectorAll(".selected");
  for (let elem of selected) {
    elem.classList.remove("selected");
  }
  li.classList.add("selected");
}
// Задание 4.8
console.log("Задание 4.8");

let thumb = slider.querySelector(".slider-thumb");

thumb.onmousedown = function (event) {
  event.preventDefault(); // предотвратить запуск выделения (действие браузера)

  let shiftX = event.clientX - thumb.getBoundingClientRect().left;
  // shiftY здесь не нужен, слайдер двигается только по горизонтали

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);

  function onMouseMove(event) {
    let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

    // курсор вышел из слайдера => оставить бегунок в его границах.
    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = slider.offsetWidth - thumb.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    thumb.style.left = newLeft + "px";
  }

  function onMouseUp() {
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("mousemove", onMouseMove);
  }
};

thumb.ondragstart = function () {
  return false;
};

// Задание 4.9
console.log("Задание 4.9");

// Показать полупрозрачный DIV, чтобы затенить страницу
// (форма располагается не внутри него, а рядом, потому что она не должна быть полупрозрачной)
function showCover() {
  let coverDiv = document.createElement("div");
  coverDiv.id = "cover-div";

  // убираем возможность прокрутки страницы во время показа модального окна с формой
  document.body.style.overflowY = "hidden";

  document.body.append(coverDiv);
}

function hideCover() {
  document.getElementById("cover-div").remove();
  document.body.style.overflowY = "";
}

function showPrompt(text, callback) {
  showCover();
  let form = document.getElementById("prompt-form");
  let container = document.getElementById("prompt-form-container");
  document.getElementById("prompt-message").innerHTML = text;
  form.text.value = "";

  function complete(value) {
    hideCover();
    container.style.display = "none";
    document.onkeydown = null;
    callback(value);
  }

  form.onsubmit = function () {
    let value = form.text.value;
    if (value == "") return false; // игнорируем отправку пустой формы

    complete(value);
    return false;
  };

  form.cancel.onclick = function () {
    complete(null);
  };

  document.onkeydown = function (e) {
    if (e.key == "Escape") {
      complete(null);
    }
  };

  let lastElem = form.elements[form.elements.length - 1];
  let firstElem = form.elements[0];

  lastElem.onkeydown = function (e) {
    if (e.key == "Tab" && !e.shiftKey) {
      firstElem.focus();
      return false;
    }
  };

  firstElem.onkeydown = function (e) {
    if (e.key == "Tab" && e.shiftKey) {
      lastElem.focus();
      return false;
    }
  };

  container.style.display = "block";
  form.elements.text.focus();
}

document.getElementById("show-button").onclick = function () {
  showPrompt("Введите что-нибудь<br>...умное :)", function (value) {
    alert("Вы ввели: " + value);
  });
};
