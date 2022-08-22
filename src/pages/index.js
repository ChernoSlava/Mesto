import "./index.css";

import { Card } from "../components/Card";
import { Section } from "../components/Section";
import { PopupWithImage } from "../components/PopupWithImage";
import { PopupWithForm } from "../components/PopupWithForm";
import { UserInfo } from "../components/UserInfo";
import { FormValidator } from "../components/FormValidator";

import {
  initialCards,
  profileOpenBtn,
  btnAddCard,
  nameInput,
  jobInput,
  config,
} from "../utils/constants";

const handleCardClick = (link, name) => {
  imagePopup.open(link, name);
};

const createNewCard = (item) => {
  return new Card(item, "#image", handleCardClick).generate();
};

const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      return createNewCard(item);
    },
  },
  ".elements"
);

const imagePopup = new PopupWithImage({
  popupSelector: ".image-popup",
  imageSelector: ".popup__image",
  titleSelector: ".popup__image-title",
});

const profilePopup = new PopupWithForm({
  popupSelector: ".profile-popup",
  formSelector: ".profile-form",
  formSubmitHandler: ({ name, job }) => {
    userInfo.setUserInfo({
      name,
      desc: job,
    });

    profilePopup.close();
  },
});

const cardPopup = new PopupWithForm({
  popupSelector: ".card-popup",
  formSelector: ".card-form",
  formSubmitHandler: ({ link, title }) => {
    const card = createNewCard({ link, name: title });

    section.addItemToTop(card);
    cardPopup.close();
  },
});

const userInfo = new UserInfo({
  selectorName: ".profile__title",
  selectorDesc: ".profile__subtitle",
});

section.renderItems();

imagePopup.setEventListeners();
profilePopup.setEventListeners();
cardPopup.setEventListeners();

const profileFormValidator = new FormValidator(config, profilePopup.form);
profileFormValidator.enableValidation();

const cardFormValidator = new FormValidator(config, cardPopup.form);
cardFormValidator.enableValidation();

profileOpenBtn.addEventListener("click", () => {
  const { name, desc } = userInfo.getUserInfo();

  nameInput.value = name;
  jobInput.value = desc;

  profileFormValidator.disableSubmitButton();

  profilePopup.open();
});

btnAddCard.addEventListener("click", () => {
  cardFormValidator.disableSubmitButton();
  cardPopup.open();
});
