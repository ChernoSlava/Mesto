let popup_open = document.querySelector(".profile__button");
let popup_close = document.querySelector(".popup__close-icon");
let popup = document.querySelector(".popup");

let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__field_type_name"); //
let jobInput = document.querySelector(".popup__field_type_job"); // Назначаю переменную и вибираю откуда

let Name = document.querySelector(".profile__title"); // Назначаю переменную Name и job
let job = document.querySelector(".profile__subtitle");

popup_open.addEventListener("click", function (event) {
  nameInput.value = Name.textContent; // Говорю, что значение nameInput and jobInput = тому, что вптсано в title and subtitle
  jobInput.value = job.textContent;

  // Создаю функцию, которая добавляет модификатор и включает popup
  popup.classList.add("popup_opened");
});

function closePopup() {
  popup.classList.remove("popup_opened");
}

popup_close.addEventListener("click", function (event) {
  // Создаю функцию, которая убирает модификатор, закрывает popup и возвращает значения в формах к исходному значению
  closePopup();
});

function formSubmitHandler(evt) {
  evt.preventDefault();

  Name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  // Выберите элементы, куда должны быть вставлены значения полей
  closePopup();
  // Вставьте новые значения с помощью textContent
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", formSubmitHandler);
