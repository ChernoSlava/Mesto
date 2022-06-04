let popup_open = document.querySelector(".profile-info__button");
let popup_close = document.querySelector(".popup__close-icon");
let popup = document.querySelector(".popup");

let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__name-input"); //
let jobInput = document.querySelector(".popup__job-input"); // Назначаю переменную и вибираю откуда

let Name = document.querySelector(".profile-info__title"); // Назначаю переменную Name и job
let job = document.querySelector(".profile-info__subtitle");
nameInput.value = Name.textContent; // Говорю, что значение nameInput and jobInput = тому, что вптсано в title and subtitle
jobInput.value = job.textContent;

popup_open.addEventListener("click", function (event) {
  // Создаю функцию, которая добавляет модификатор и включает popup
  event.preventDefault();
  popup.classList.add("popup_opened");
});

popup_close.addEventListener("click", function (event) {
  // Создаю функцию, которая убирает модификатор, закрывает popup и возвращает значения в формах к исходному значению
  popup.classList.remove("popup_opened");
  nameInput.value = Name.textContent;
  jobInput.value = job.textContent;
});

function formSubmitHandler(evt) {
  evt.preventDefault();

  Name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  // Выберите элементы, куда должны быть вставлены значения полей
  popup.classList.remove("popup_opened");
  // Вставьте новые значения с помощью textContent
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", formSubmitHandler);
