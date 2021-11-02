// создаем переменную в которую положим кнопку меню
let menuTogglee = document.querySelector("#menu-toggle");
// Создаем переменную по кнопке меню и запускаем функцию
let menu = document.querySelector(".sidebar");
// отслеживаем клик по кнопке меню и запускаем функцию
menuTogglee.addEventListener("click", function (event) {
  // отменяем стандартное поведение ссылки
  event.preventDefault();
  //   вешаем класс на меню когда клинули по кнопке меню
  menu.classList.toggle("visable");
});
