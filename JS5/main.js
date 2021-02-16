var divFC = document.getElementsByClassName("divClass1");
console.log(divFC);
console.log(divFC[1]);
console.log(divFC.length);

for (var i = 0; i < divFC.length; i++) {
  console.log(divFC[i]);
}

var allH1 = document.getElementsByTagName("h1");
console.log(allH1);

console.log(document.body.childNodes);
console.log(document.body.children);

var ul = document.getElementById("ul1");

console.log(ul1.children);
console.log(ul1.innerHTML);
console.log(ul1.firstElementChild.innerText);

console.log(ul1.lastElementChild);

console.log(ul1.parentNode);

console.log(d1.previousElementSibling);
console.log(d1.nextElementSibling);
//создание элемента
var divc = document.createElement("a");
divc.style.fontSize = "24px";
divc.innerHTML = "string";

ul1.children[1].appendChild(divc); //добавление элемента

//замена элемента
document.body.replaceChild(allH1[0], d1);

//удаление элемента
console.log(ul.removeChild(ul1.children[1]));

//Вставка элемента перед указанным элементом
ul1.insertBefore(divc, ul1.children[6]);

divc.className = "class1 class2";
console.log(divc.classList);
console.log(divc.classList.contains("class1"));
console.log(divc.classList.length);

for (i = 0; i < divc.classList.length; i++) {
  console.log(divc.classList.item(i));
}

divc.classList.add("c13");
console.log(divc.classList);

divc.nodeName;
