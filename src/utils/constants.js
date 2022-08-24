export const profileOpenBtn = document.querySelector(".profile__button");
export const btnAddCard = document.querySelector(".profile__add-button");
export const nameInput = document.querySelector(".popup__field_type_name");
export const jobInput = document.querySelector(".popup__field_type_job");
export const deletePopupCard = document.querySelector(".delete-popup");
export const avatar = document.querySelector(".profile__avatar-element");
export const handlerSubmitBtn = document.querySelector(".popup__submit-button");

export const config = {
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "disabled",
  inputErrorClass: "popup__field_type_error",
  errorClass: "popup__field-error_active",
};

export const initialCards = [
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
