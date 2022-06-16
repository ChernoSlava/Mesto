let popup_open = document.querySelector(".profile__button");
let popup_openAdd = document.querySelector(".profile__add-button");
let popup_close = document.querySelectorAll(".popup__close-icon");
let popup = document.querySelectorAll(".popup");
let popupImage = document.querySelector(".popup__image");
let popupTitle = document.querySelector(".popup__image-title");
const imageArea = document.querySelector(".elements");
let formElement = document.querySelectorAll(".popup__form");
let nameInput = document.querySelector(".popup__field_type_name");
let jobInput = document.querySelector(".popup__field_type_job"); // Назначаю переменную и вибираю откуда
let title = document.querySelector(".popup__field_type_title");
let link = document.querySelector(".popup__field_type_link");
let Name = document.querySelector(".profile__title"); // Назначаю переменную Name и job
let job = document.querySelector(".profile__subtitle");
const initialCards = [
  {
    name: "Через воду?",
    link: "https://images.pexels.com/photos/1836580/pexels-photo-1836580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Станцуем?",
    link: "https://images.pexels.com/photos/10991590/pexels-photo-10991590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "На птичий базар?",
    link: "https://images.pexels.com/photos/10206616/pexels-photo-10206616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Пройдёмся?",
    link: "https://images.pexels.com/photos/7529392/pexels-photo-7529392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "На трамвайчик?",
    link: "https://images.pexels.com/photos/11096872/pexels-photo-11096872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Мясца?",
    link: "https://images.pexels.com/photos/7317525/pexels-photo-7317525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

initialCards.forEach(function (item) {
  //создаёт 6 карточек вначале
  const imageTemplate = document.querySelector("#image");
  let elementCard = imageTemplate.content.cloneNode(true);
  elementCard.querySelector(".element__image").src = item.link;
  elementCard.querySelector(".element__title").textContent = item.name;
  imageArea.append(elementCard);
});

popup_open.addEventListener("click", function (event) {
  //Открывает первый попап
  nameInput.value = Name.textContent; // Говорю, что значение nameInput and jobInput = тому, что вптсано в title and subtitle
  jobInput.value = job.textContent;
  popup[0].classList.add("popup_opened"); // Создаю функцию, которая добавляет модификатор и включает popup
});

popup_openAdd.addEventListener("click", function (event) {
  //открывает второй попап
  popup[1].classList.add("popup_opened");
});

function closePopup(event) {
  //функция закрывающая все попапы по нажатию на крестик
  event.target.parentElement.parentElement.classList.remove("popup_opened");
}

popup_close[0].addEventListener("click", function (event) {
  //закрывает первый попап редактирования профиля
  // Создаю функцию, которая убирает модификатор, закрывает popup и возвращает значения в формах к исходному значению
  closePopup(event);
});
popup_close[1].addEventListener("click", function (event) {
  //Закрывает попап добавления карточек
  closePopup(event);
  link.value = "";
  title.value = "";
});

popup_close[2].addEventListener("click", function (event) {
  //Закрывает попап с картинкой
  closePopup(event);
});

function formSubmitHandler(evt) {
  // Создаю фукнцию для изменения инфы о себе
  evt.preventDefault();

  Name.textContent = nameInput.value; // Выберите элементы, куда должны быть вставлены значения полей
  job.textContent = jobInput.value; // Вставьте новые значения с помощью textContent
  closePopup(evt);
}
formElement[0].addEventListener("submit", formSubmitHandler); // Прикрепляем обработчик к форме:// он будет следить за событием “submit” - «отправка»

function addNewImage() {
  // Создаю функцию, которая добавляет новые картики и проводит с ними операции
  const imageTemplate = document.querySelector("#image");
  let elementCard = imageTemplate.content.cloneNode(true);
  elementCard.querySelector(".element__image").src = link.value;
  elementCard.querySelector(".element__title").textContent = title.value;
  imageArea.prepend(elementCard);

  const buttonHeart = document.querySelector(".element__heart");
  buttonHeart.addEventListener("click", function (evt) {
    evt.target.classList.toggle("element__heart_active");
  });
}

function onCardClick(event) {
  popupImage.src = "";
  const popup = document.getElementById("popupCardView");
  popup.classList.add("popup_opened");
  popup.querySelector(".popup__image-title").textContent =
    event.target.parentElement.querySelector(".element__title").textContent;
  popupImage.src = event.target.src;
}

function formAddNewElement(evt) {
  //Создаю функцию добавляющую новый элемент
  evt.preventDefault();
  addNewImage();
  closePopup(evt);
  link.value = "";
  title.value = "";

  document.querySelectorAll(".element__delete-button").forEach((del) => {
    //делаю кнопку урну для удаления
    del.addEventListener("click", function (evt) {
      const listItem = del.closest("li");
      listItem.remove();
    });
  });

  document.querySelectorAll(".element__image").forEach((open) => {
    // Чтобы открывался 3 попап для новых карточек
    //из создающих карточек
    open.addEventListener("click", onCardClick);
  });
}
formElement[1].addEventListener("submit", formAddNewElement); // Ставлю слушатель на кнопку создания новой карточки

document.querySelectorAll(".element__heart").forEach((heart) => {
  //лайкаю сердца 6 стандартных карточек
  heart.addEventListener("click", function (evt) {
    evt.target.classList.toggle("element__heart_active");
  });
});

document.querySelectorAll(".element__delete-button").forEach((del) => {
  //удаляю стандартные 6 карточек
  del.addEventListener("click", function (evt) {
    const listItem = del.closest("li");
    listItem.remove();
  });
});

let elementImage = document.querySelectorAll(".element__image");

elementImage.forEach((open) => {
  open.addEventListener("click", onCardClick);
});
