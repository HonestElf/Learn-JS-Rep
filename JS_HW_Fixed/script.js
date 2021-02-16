"use strict";

//Контейнер
var container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);
//=================================================

//Навигация
var navigation = document.createElement("nav");
container.appendChild(navigation);

//Меню навигации
var nav__ul = document.createElement("ul");
navigation.appendChild(nav__ul);

//ссылки в меню навигации
for (var i = 0; i < 6; i++) {
  let nav__ul_li = document.createElement("li");
  nav__ul.appendChild(nav__ul_li);
}

var arr = ["About", "Pluses", "Scrinshots", "Review", "Buy", "Contacts"];

for (var i = 0; i < 6; i++) {
  var nav__ul_a = document.createElement("a");
  nav__ul_a.innerText = arr[i];
  nav__ul_a.href = "#" + arr[i];
  nav__ul.children[i].appendChild(nav__ul_a);
}
//=================================================

//Хедер
var header = document.createElement("div");
header.className = "header";
container.appendChild(header);

//Хедер-Контент
var header__content = document.createElement("div");
header__content.className = "content";
header.appendChild(header__content);

//хедер-текст
var header__text = document.createElement("div");
header__text.className = "text";
header__content.appendChild(header__text);

//Хедер-текст-внутренний текст
var header__text_h2 = document.createElement("h2");
header__text_h2.innerText = "Product name";
header__text.appendChild(header__text_h2);

var header__text_ul = document.createElement("ul");
header__text.appendChild(header__text_ul);

var li_arr = [
  "Put on this page information about your product",
  "A detailed description of your product",
  "Tell us about the advantages and merits",
  "Associate the page with the payment system",
];

for (var i = 0; i < 4; i++) {
  var header__text_li = document.createElement("li");
  header__text_li.innerText = li_arr[i];
  header__text_ul.appendChild(header__text_li);
}

// //хедер - прямоугольник
var header__rectShape = document.createElement("div");
header__rectShape.className = "rectShape";
header__content.appendChild(header__rectShape);

//хедер - clr
var header__clr = document.createElement("div");
header__clr.className = "clr";
header__content.appendChild(header__clr);
//=================================================
//Тельцо
var main = document.createElement("div");
main.className = "main";
container.appendChild(main);

var main__li_arr = [
  "aboutZone",
  "pluses",
  "scrinShots",
  "reviews",
  "buy",
  "contacts",
];
//Тельцо - подзаголовки
for (var i = 0; i < 6; i++) {
  var main__section = document.createElement("div");
  main__section.className = main__li_arr[i];
  main.appendChild(main__section);
}
//Тельцо - подзаголовки - контенты
for (var i = 0; i < 6; i++) {
  var main__section_content = document.createElement("div");
  main__section_content.className = "content";
  main.children[i].appendChild(main__section_content);
}
//выбираем aboutZone - content
var aboutZone__content = main
  .querySelector(".aboutZone")
  .querySelector(".content");

//aboutZone - text
var aboutZone__content_text = document.createElement("div");
aboutZone__content_text.className = "text";
aboutZone__content.appendChild(aboutZone__content_text);

//aboutZone - text - h2
var aboutZone__content_h2 = document.createElement("h2");
aboutZone__content_h2.innerText = "About your product";
aboutZone__content_h2.id = "About";
aboutZone__content_text.appendChild(aboutZone__content_h2);

//aboutZone - text - p
var aboutZone__content_p1 = document.createElement("p");
aboutZone__content_p1.innerText =
  "Lorem ipsum dolor sit amet" +
  "consectetur adipisicing elit. Nobis facilis fuga, illo at." +
  "Natus eos, eligendi illum rerum omnis porro ex, magni," +
  "explicabo veniam incidunt in quam sapiente ut ipsum.";
aboutZone__content_text.appendChild(aboutZone__content_p1);

var aboutZone__content_p2 = document.createElement("p");
aboutZone__content_p2.innerText =
  "Pariatur iure ab sunt nesciunt, quibusdam odio iste cumque itaque," +
  "ipsa vel exercitationem ullam quos aut nostrum" +
  "cupiditate fuga quaerat quam animi dolores." +
  "Sequi itaque, unde perferendis nemo debitis dolor.";
aboutZone__content_text.appendChild(aboutZone__content_p2);

// aboutZone - rectShape
var aboutZone__rectShape = document.createElement("div");
aboutZone__rectShape.className = "rectShape";
aboutZone__content.appendChild(aboutZone__rectShape);

//Выбираем pluses - content
var pluses__content = main.querySelector(".pluses").querySelector(".content");

//Плюсы - заголовок
var pluses__header = document.createElement("div");
pluses__header.className = "blueHeaders";
pluses__header.innerText = "Dignity and pluses product";
pluses__content.appendChild(pluses__header);

//Плюсы - разделы
var pluses__points = document.createElement("div");
pluses__points.className = "points";
pluses__content.appendChild(pluses__points);
//Плюсы - буллетпоинты
for (var i = 0; i < 6; i++) {
  var pluspoint = document.createElement("div");
  pluspoint.className = "pluspoint";
  pluspoint.innerText =
    "Delectus dolorem vero quae beatae quasi dolor deserunt iste amet atque," +
    "impedit iure placeat, ullam. Reprehenderit aliquam, nemo cum velit ratione perferendis" +
    "quas, maxime, quaerat porro totam, dolore minus inventore.";
  pluses__points.appendChild(pluspoint);
}

//Выбираем скриншоты - контент
var scrinShots__content = main
  .querySelector(".scrinShots")
  .querySelector(".content");

//Скриншоты - заголовок
var scrinShots__header = document.createElement("div");
scrinShots__header.className = "blueHeaders";
scrinShots__header.innerText = "Scrinshots";
scrinShots__content.appendChild(scrinShots__header);

//Скриншоты - разделы
var scrinContainer = document.createElement("div");
scrinContainer.className = "scrinContainer";
scrinShots__content.appendChild(scrinContainer);

//скриншоты - буллетпоинты
for (var i = 0; i < 4; i++) {
  //сам буллетпоинт
  var scrinPoint = document.createElement("div");
  scrinPoint.className = "scrinPoint";

  // Скриншоты - изображение
  var scrinImg = document.createElement("img");
  scrinImg.src = "#";
  scrinImg.alt = "photo";
  scrinPoint.appendChild(scrinImg);

  //Скриншоты - h3
  var scrinShots__h3 = document.createElement("h3");
  scrinShots__h3.innerText = "The description for the image";
  scrinPoint.appendChild(scrinShots__h3);

  //Скриншоты - p
  var scrinSots__p = document.createElement("p");
  if (i < 2) {
    scrinSots__p.innerText =
      "Pariatur iure ab sunt nesciunt, quibusdam odio iste cumque itaque, ipsa vel" +
      "exercitationem ullam quos aut nostrum cupiditate fuga quaerat quam animi dolores. Sequi itaque, unde" +
      "perferendis nemo debitis dolor.";
  } else {
    scrinSots__p.innerText =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis facilis fuga, illo at." +
      "Natus eos, eligendi illum rerum omnis porro ex, magni, explicabo veniam incidunt in quam sapiente ut ipsum.";
  }
  scrinPoint.appendChild(scrinSots__p);

  //сформированный поинт кидаем в конец детей
  scrinContainer.appendChild(scrinPoint);
}

//Выбираем Отзывы - контент
var reviews__content = main.querySelector(".reviews").querySelector(".content");

//Отзывы - заголовок
var reviews__header = document.createElement("div");
reviews__header.className = "blueHeaders";
reviews__header.innerText = "Reviews";
reviews__content.appendChild(reviews__header);

//Отзывы - разделы
var reviewContainer = document.createElement("div");
reviewContainer.className = "reviewContainer";
reviews__content.appendChild(reviewContainer);

//Отзывы - буллетпоинты
for (var i = 0; i < 4; i++) {
  //сам буллетпоинт
  var reviewNote = document.createElement("div");
  reviewNote.className = "reviewNote";

  // Отзывы - изображение
  var review__Img = document.createElement("img");
  review__Img.src = "image/listRect.png";
  review__Img.alt = "photo";
  reviewNote.appendChild(review__Img);

  //Отзывы - поле с текстом
  var review__text = document.createElement("div");
  review__text.className = "text";
  reviewNote.appendChild(review__text);

  //Отзывы - p
  var review__p = document.createElement("p");
  review__p.innerText =
    "Porro officia cumque sint deleniti nemo facere rem vitae odit inventore cum odio," +
    "iste quia doloribus autem aperiam nulla ea neque reprehenderit. Libero doloribus, possimus" +
    "officiis sapiente necessitatibus commodi consectetur?";
  review__text.appendChild(review__p);

  //Отзывы - h3
  var review__h4 = document.createElement("h4");
  review__h4.innerText = "Lourens S.";
  review__text.appendChild(review__h4);

  //сформированный поинт кидаем в конец детей
  reviewContainer.appendChild(reviewNote);
}

//Выбираем Купить - контент
var buy__content = main.querySelector(".buy").querySelector(".content");

//купить - заголовок
var buy__header = document.createElement("div");
buy__header.className = "blueHeaders";
buy__header.innerText = "Buy it now";
buy__content.appendChild(buy__header);

//Купить - варианты
for (var i = 0; i < 3; i++) {
  //сам буллетпоинт
  var buy__option = document.createElement("div");
  buy__option.className = "option";

  //Купить - h3
  var buy__option_h3 = document.createElement("h3");
  switch (i) {
    case 0:
      buy__option_h3.innerText = "Standart";
      break;
    case 1:
      buy__option_h3.innerText = "Premium";
      break;
    case 2:
      buy__option_h3.innerText = "Lux";
      break;
  }
  buy__option.appendChild(buy__option_h3);

  //Купить - цена
  var buy__price = document.createElement("div");
  buy__price.className = "price";
  switch (i) {
    case 0:
      buy__price.innerHTML = "<h4>&#36;100</h4>";
      break;
    case 1:
      buy__price.innerHTML = "<h4>&#36;150</h4>";
      break;
    case 2:
      buy__price.innerHTML = "<h4>&#36;200</h4>";
      break;
  }
  buy__option.appendChild(buy__price);

  //купить - список
  var buy__list = document.createElement("ol");
  var n = 0;
  var buy__list_arr = [
    "Porro officia cumque sint deleniti",
    "Тemo facere rem vitae odit",
    "Cum odio, iste quia doloribus autem",
    "Aperiam nulla ea neque",
    "Porro officia cumque sint deleniti",
    "Тemo facere rem vitae odit",
    "Cum odio, iste quia doloribus autem",
    "Aperiam nulla ea neque",
    "Porro officia cumque sint deleniti",
    "Тemo facere rem vitae odit",
    "Cum odio, iste quia doloribus autem",
    "Aperiam nulla ea neque",
  ];

  //купить - пункт списка
  switch (i) {
    case 0:
      n = 4;
      break;
    case 1:
      n = 8;
      break;
    case 2:
      n = 12;
      break;
  }

  for (var j = 0; j < n; j++) {
    var buy__list_li = document.createElement("li");
    buy__list_li.innerText = buy__list_arr[j];
    buy__list.appendChild(buy__list_li);
  }

  buy__option.appendChild(buy__list);

  //купить - кнопка
  var buy__button = document.createElement("div");
  buy__button.className = "button";
  buy__button.innerHTML = '<a href="#!">Buy</a>';
  buy__option.appendChild(buy__button);

  //сформированный поинт кидаем в конец детей
  buy__content.appendChild(buy__option);
}

//купить - clr
var buy__clr = document.createElement("div");
buy__clr.className = "clr";
buy__content.appendChild(buy__clr);

//Выбираем Контакты - контент
var contacts__content = main
  .querySelector(".contacts")
  .querySelector(".content");

//контакты - заголовок
var contacts__header = document.createElement("div");
contacts__header.className = "whiteHeaders";
contacts__header.innerText = "Contacts";
contacts__content.appendChild(contacts__header);

//контакты - форма
//сама форма
var contacts__form = document.createElement("form");
contacts__form.action = "#";

var contacts__input_name = document.createElement("input");
contacts__input_name.type = "text";
contacts__input_name.placeholder = "Your name:";
contacts__input_name.className = "name";
contacts__form.appendChild(contacts__input_name);

var contacts__input_mail = document.createElement("input");
contacts__input_mail.type = "text";
contacts__input_mail.placeholder = "Your mail:";
contacts__input_mail.className = "mail";
contacts__form.appendChild(contacts__input_mail);

var contacts__textarea = document.createElement("textarea");
contacts__textarea.rows = 5;
contacts__textarea.cols = 5;
contacts__textarea.placeholder = "Your message:";
contacts__form.appendChild(contacts__textarea);

var contacts__input_button = document.createElement("input");
contacts__input_button.type = "button";
contacts__input_button.value = "SEND";
contacts__form.appendChild(contacts__input_button);

contacts__content.appendChild(contacts__form);

//контакты - наши контакты
//зона с контактами
var contacts__ourContacts = document.createElement("div");
contacts__ourContacts.className = "ourContacts";

var contacts__map = new Map([
  ["skype", "here_your_login_skype"],
  ["icq", "279679659"],
  ["ourMail", "psdhtmlcss@mail.ru"],
  ["phone", "80 00 4568 55 55"],
]);

for (var key of contacts__map.keys()) {
  // console.log(key, contacts__map.get(key));
  var contacts__note = document.createElement("p");
  contacts__note.className = key;
  contacts__note.innerText = contacts__map.get(key);
  contacts__ourContacts.appendChild(contacts__note);
}

//Контакты - иконки
//зона с иконками
var contacts__icons = document.createElement("div");
contacts__icons.className = "icons";
//сами иконки
var contacts__icons_arr = [
  "twitter",
  "facebook",
  "linkedin",
  "google",
  "youtube",
];
for (var val of contacts__icons_arr) {
  var contacts__icons_a = document.createElement("a");
  contacts__icons_a.href = "#!";
  contacts__icons_a.className = val;
  contacts__icons.appendChild(contacts__icons_a);
}
//закидываем зону иконок в конец детей зоны контактов
contacts__ourContacts.appendChild(contacts__icons);

//закидываем зону контактов в конец детей контента
contacts__content.appendChild(contacts__ourContacts);

//=================================================
//Футер
var footer = document.createElement("div");
footer.className = "footer";
container.appendChild(footer);
//Футер - текст
var footer__h3 = document.createElement("h3");
footer__h3.innerText = "Copyright &copy; 2014 Product name · PSD HTML CSS";
footer.appendChild(footer__h3);
