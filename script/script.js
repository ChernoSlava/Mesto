const popupOpen = document.querySelector(".profile__button");
const popupOpenAdd = document.querySelector(".profile__add-button");

const popupCloses = document.querySelectorAll(".popup__close-icon");
const popups = document.querySelectorAll(".popup");
const popupImage = document.querySelector(".popup__image");
const popupTitle = document.querySelector(".popup__image-title");
const formElements = document.querySelectorAll(".popup__form");
const profileForm = document.querySelector(".profile-form");
const cardForm = document.querySelector(".card-form");
const profilePopup = document.querySelector(".profile-popup");
const cardPopup = document.querySelector(".card-popup");
const imagePopup = document.querySelector(".image-popup");

const imageArea = document.querySelector(".elements");
let nameInput = document.querySelector(".popup__field_type_name");
let jobInput = document.querySelector(".popup__field_type_job"); // Назначаю переменную и вибираю откуда
let title = document.querySelector(".popup__field_type_title");
let link = document.querySelector(".popup__field_type_link");
let userName = document.querySelector(".profile__title"); // Назначаю переменную userName и job
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

//СОЗДАТЬ КАРТОЧКИ--------------------------------------------------------------------------------------
function createCard(item) {
  //функция создания карточки
  const imageTemplate = document.querySelector("#image");
  let elementCard = imageTemplate.content.cloneNode(true);
  elementCard.querySelector(".element__image").src = item.link;
  elementCard.querySelector(".element__image").alt = item.name;
  elementCard.querySelector(".element__title").textContent = item.name;
  return elementCard;
}
initialCards.forEach(function (item) {
  //создаёт 6 карточек вначале
  const elementCard = createCard(item);
  imageArea.append(elementCard);
});

//СЕРДЦА--------------------------------------------------------------------------------------
const buttonHeart = document.querySelectorAll(".element__heart");

function changeHeartColor(heart) {
  heart.classList.toggle("element__heart_active");
}
buttonHeart.forEach((button) => {
  const heart = button.closest(".element__heart");
  button.addEventListener("click", () => changeHeartColor(heart));
});
//УРНА--------------------------------------------------------------------------------------

const buttonDeleteCard = document.querySelectorAll(".element__delete-button");

function deleteCard(item) {
  item.remove();
}

buttonDeleteCard.forEach((button) => {
  button.addEventListener("click", function (evt) {
    const item = button.closest("li");
    deleteCard(item);
  });
});

//ОТКРЫТИЕ--------------------------------------------------------------------------------------

function openPopup(popup) {
  // создаём функцию открытия попапа
  popup.classList.add("popup_opened");
}

popupOpen.addEventListener("click", function (event) {
  //Открывает первый попап
  nameInput.value = userName.textContent; // Говорю, что значение nameInput and jobInput = тому, что вптсано в title and subtitle
  jobInput.value = job.textContent; // Создаю функцию, которая добавляет модификатор и включает popup
  openPopup(profilePopup); //функция открыть (здесь имя первого попапа )
});

popupOpenAdd.addEventListener("click", function (event) {
  //открывает второй попап
  openPopup(cardPopup); //функция открыть (здесь имя второго попапа )
});

//ПРОСМОТР ОПЕРЕДЕЛЁННОЙ КАРТОЧКИ--------------------------------------------------------------------------------------
function handleCardClick(event) {
  //функция увеличивает фотки = handleCardClick
  popupImage.src = "";
  imagePopup.classList.add("popup_opened");
  const thisImage = event.target.closest(".element");
  imagePopup.querySelector(".popup__image-title").textContent =
    thisImage.querySelector(".element__title").textContent;
  popupImage.src = thisImage.querySelector(".element__image").src;
  popupImage.alt = thisImage.querySelector(".element__title").textContent;
}
const popupImagesOpen = document.querySelectorAll(".element__image");
popupImagesOpen.forEach((open) => {
  open.addEventListener("click", handleCardClick);
});

//ЗАКРЫТИЕ--------------------------------------------------------------------------------------

function closePopup(popup) {
  //функция закрытия общая
  popup.classList.remove("popup_opened");
}
popupCloses.forEach((button) => {
  //закрытие для всех крестиков
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

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

function createNewCard() {
  const imageTemplate = document.querySelector("#image");
  let elementCard = imageTemplate.content.cloneNode(true);
  elementCard.querySelector(".element__image").src = link.value;
  elementCard.querySelector(".element__image").alt = title.value;
  elementCard.querySelector(".element__title").textContent = title.value;

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

function handleCardFormSubmit(evt) {
  //Создаю функцию добавляющую новый элемент
  evt.preventDefault();
  const elementCard = createNewCard(link, title);
  imageArea.prepend(elementCard);
  closePopup(cardPopup);
  evt.target.reset();
}
cardForm.addEventListener("submit", handleCardFormSubmit); // Ставлю слушатель на кнопку создания новой карточки
