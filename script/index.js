const profileOpenBtn = document.querySelector(".profile__button");
const popupOpenAddBtn = document.querySelector(".profile__add-button");
const page = document.querySelector(".page");

const closeButtons = document.querySelectorAll(".popup__close-icon");
const popups = document.querySelectorAll(".popup");
const popupImage = document.querySelector(".popup__image");
const popupTitle = document.querySelector(".popup__image-title");
const profileForm = document.querySelector(".profile-form");
const cardForm = document.querySelector(".card-form");
const profilePopup = document.querySelector(".profile-popup");
const cardPopup = document.querySelector(".card-popup");
const imagePopup = document.querySelector(".image-popup");

const buttons = page.querySelectorAll(".popup__submit-button");
const imageArea = document.querySelector(".elements");
const nameInput = document.querySelector(".popup__field_type_name");
const jobInput = document.querySelector(".popup__field_type_job"); // Назначаю переменную и вибираю откуда
const title = document.querySelector(".popup__field_type_title");
const link = document.querySelector(".popup__field_type_link");
const userName = document.querySelector(".profile__title"); // Назначаю переменную userName и job
const job = document.querySelector(".profile__subtitle");
const imageTemplate = document.querySelector("#image");

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "disabled",
  inputErrorClass: "popup__field_type_error",
  errorClass: "popup__field-error_active",
  fieldSet: ".popup__set",
};

//СОЗДАТЬ КАРТОЧКИ--------------------------------------------------------------------------------------
function createCard(item) {
  //функция создания карточки

  const elementCard = imageTemplate.content.cloneNode(true);
  const elementImage = elementCard.querySelector(".element__image");
  const elementTitle = elementCard.querySelector(".element__title");
  elementImage.src = item.link;
  elementImage.alt = item.name;
  elementTitle.textContent = item.name;

  const buttonHeart = elementCard.querySelector(".element__heart");
  buttonHeart.addEventListener("click", () => changeHeartColor(buttonHeart));

  const buttonDeleteCard = elementCard.querySelector(".element__delete-button");
  buttonDeleteCard.addEventListener("click", () => {
    const item = buttonDeleteCard.closest("li");
    deleteCard(item);
  });

  const popupImagesOpen = elementCard.querySelector(".element__image");
  popupImagesOpen.addEventListener("click", handleCardClick);

  return elementCard;
}
initialCards.forEach(function (item) {
  //создаёт 6 карточек вначале
  const elementCard = createCard(item);
  imageArea.append(elementCard);
});

//СЕРДЦА--------------------------------------------------------------------------------------

function changeHeartColor(heart) {
  heart.classList.toggle("element__heart_active");
}

//УРНА--------------------------------------------------------------------------------------

function deleteCard(item) {
  item.remove();
}

//ОТКРЫТИЕ--------------------------------------------------------------------------------------

function openPopup(popup) {
  // создаём функцию открытия попапа
  popup.classList.add("popup_opened");
  page.addEventListener("keyup", closePopupPushEsc);
  buttons.forEach((buttonElement) => {
    buttonElement.setAttribute(config.inactiveButtonClass, true);
  }); //кнопка submit включается, только после валидации
  removeWarning(); //убирает прошлые ошибки при открытии
}

profileOpenBtn.addEventListener("click", function (event) {
  //Открывает первый попап
  nameInput.value = userName.textContent; // Говорю, что значение nameInput and jobInput = тому, что вптсано в title and subtitle
  jobInput.value = job.textContent; // Создаю функцию, которая добавляет модификатор и включает popup
  openPopup(profilePopup); //функция открыть (здесь имя первого попапа )
});

popupOpenAddBtn.addEventListener("click", function (event) {
  //открывает второй попап
  openPopup(cardPopup); //функция открыть (здесь имя второго попапа )
});

//ПРОСМОТР ОПЕРЕДЕЛЁННОЙ КАРТОЧКИ--------------------------------------------------------------------------------------
function handleCardClick(event) {
  //функция увеличивает фотки = handleCardClick
  openPopup(imagePopup); //Открывает третий попап
  popupTitle.textContent = event.target.alt;
  popupImage.src = event.target.src;
  popupImage.alt = event.target.alt;
}

//ЗАКРЫТИЕ--------------------------------------------------------------------------------------

function closePopup(popup) {
  //функция закрытия общая
  popup.classList.remove("popup_opened");
  page.removeEventListener("keyup", closePopupPushEsc);
}

function removeWarning() {
  //убирает ошибки
  const errorRedLine = page.querySelectorAll(".popup__field_type_error");
  const errorText = page.querySelectorAll(".popup__field-error_active");
  errorRedLine.forEach((line) => {
    line.classList.remove(config.inputErrorClass);
  });
  errorText.forEach((text) => {
    text.classList.remove(config.errorClass);
  });
}

closeButtons.forEach((button) => {
  //закрытие для всех крестиков
  const popup = button.closest(".popup");
  button.addEventListener("click", () => {
    closePopup(popup);
  });
});

function closePopupPushEsc(evt) {
  // при нажатии на esc popup закрывается
  if (evt.key === "Escape") {
    popups.forEach((popup) => {
      closePopup(popup);
    });
  }
}

popups.forEach((click) => {
  click.addEventListener("mousedown", (evt) => {
    if ((evt.target = "popup_opened")) {
      closePopup(evt.target);
    }
  });
});

/*
popups.forEach((e) => {
  e.addEventListener("mousedown", () => {
    popups.forEach((e) => {
      closePopup(e);
    });
  });
  e.querySelector(".container").addEventListener("mousedown", (evt) => {
    evt.stopPropagation();
  });
});
*/

// ИЗМЕНЕНИЕ ИНФЫ О СЕБЕ--------------------------------------------------------------------------------------

function handleProfileFormSubmit(evt) {
  // Создаю фукнцию для изменения инфы о себе
  evt.preventDefault();

  userName.textContent = nameInput.value; // Выберите элементы, куда должны быть вставлены значения полей
  job.textContent = jobInput.value; // Вставьте новые значения с помощью textContent
  closePopup(profilePopup);
}
profileForm.addEventListener("submit", handleProfileFormSubmit); // Прикрепляем обработчик к форме:// он будет следить за событием “submit” - «отправка»

//ДОБАВЛЕНИЕ НОВЫХ КАРТИНОК--------------------------------------------------------------------------------------

function handleCardFormSubmit(evt) {
  //Создаю функцию добавляющую новый элемент
  evt.preventDefault();
  const newCard = {
    name: title.value,
    link: link.value,
  };

  const elementCard = createCard(newCard);
  imageArea.prepend(elementCard);
  closePopup(cardPopup);
  evt.target.reset();
}
cardForm.addEventListener("submit", handleCardFormSubmit); // Ставлю слушатель на кнопку создания новой карточки

//--------------------------------------------------------------

// Вызовем функцию isValid на каждый ввод символа
