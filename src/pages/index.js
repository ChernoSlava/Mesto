import "./index.css";

import { Card } from "../components/Card";
import { Section } from "../components/Section";
import { PopupWithImage } from "../components/PopupWithImage";
import { PopupWithForm } from "../components/PopupWithForm";

import { UserInfo } from "../components/UserInfo";

import {
  FormValidator,
  disableSubmitButton,
} from "../components/FormValidator";

import {
  initialCards,
  profileOpenBtn,
  btnAddCard,
  nameInput,
  jobInput,
  profileForm,
  cardForm,
  config,
  profilePopupElement,
  nameTitleValue,
  linkTitleValue,
} from "../utils/constants";

const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, "#image", () => {
        imagePopup.open(item.link, item.name);
      });
      const cardElement = card.generate();

      return cardElement;
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
  formSubmitHandler: (evt) => {
    evt.preventDefault();

    userInfo.setUserInfo({
      name: nameInput.value,
      desc: jobInput.value,
    });

    profilePopup.close();
  },
});

const cardPopup = new PopupWithForm({
  popupSelector: ".card-popup",
  formSelector: ".card-form",
  formSubmitHandler: (e) => {
    e.preventDefault();

    const card = new Card(
      {
        link: linkTitleValue.value,
        name: nameTitleValue.value,
      },
      "#image",
      (link, name) => {
        imagePopup.open(link, name);
      }
    ).generate();

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

profileOpenBtn.addEventListener("click", () => {
  const { name, desc } = userInfo.getUserInfo();

  nameInput.value = name;
  jobInput.value = desc;

  disableSubmitButton(profilePopupElement, config.inactiveButtonClass);

  profilePopup.open();
});

btnAddCard.addEventListener("click", () => {
  cardPopup.open();
});

new FormValidator(config, profileForm).enableValidation();
new FormValidator(config, cardForm).enableValidation();
