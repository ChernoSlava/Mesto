const profileOpenBtn = document.querySelector(".profile__button");
const btnAddCard = document.querySelector(".profile__add-button");
const page = document.querySelector(".page");

const closeButtons = document.querySelectorAll(".popup__close-icon");
const popups = document.querySelectorAll(".popup");
const popupImage = document.querySelector(".popup__image");
const popupTitle = document.querySelector(".popup__image-title");
const profileForm = document.querySelector(".profile-form");
const cardForm = document.querySelector(".card-form");
const profilePopup = document.querySelector(".profile-popup");
const cardPopup = document.querySelector(".card-popup");
export const imagePopup = document.querySelector(".image-popup");

const nameInput = document.querySelector(".popup__field_type_name");
const jobInput = document.querySelector(".popup__field_type_job"); // Назначаю переменную и вибираю откуда
const userName = document.querySelector(".profile__title"); // Назначаю переменную userName и job
const job = document.querySelector(".profile__subtitle");

const config = {
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "disabled",
  inputErrorClass: "popup__field_type_error",
  errorClass: "popup__field-error_active",
};

const initialCards = [
  {
    name: "По мосту?",
    link: "https://images.unsplash.com/photo-1647883635719-8debb528c5fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHR1cmtleSUyMGJyaWRnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Погружаемся?",
    link: "https://images.unsplash.com/photo-1596814499955-ca23f3679fe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fHR1cmtleSUyMGRlcnZpc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "На живца?",
    link: "https://images.unsplash.com/photo-1634110985794-433ae37c34e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM1fHxpc3RhbmJ1bCUyMGJyaWRnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Пройдёмся?",
    link: "https://images.unsplash.com/photo-1606580523068-a0a7918c6a24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGlzdGFuYnVsJTIwYnJpZGdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "На шопинг?",
    link: "https://images.unsplash.com/photo-1629212094410-e5bd12fe49c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGlzdGFuYnVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Мясца?",
    link: "https://images.unsplash.com/photo-1596995804697-27d11d43652e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGZvb2QlMjBrZWJhYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const container = document.querySelector(".elements");
const nameTitleValue = cardPopup.querySelector("#title");
const linkTitleValue = cardPopup.querySelector("#url");
