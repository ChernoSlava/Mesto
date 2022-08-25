import "./index.css";

import { Api } from "../components/Api";
import { Card } from "../components/Card";
import { Section } from "../components/Section";
import { PopupWithImage } from "../components/PopupWithImage";
import { PopupWithForm } from "../components/PopupWithForm";
import { PopupWithConfirmation } from "../components/popupWithConfirmation";
import { UserInfo } from "../components/UserInfo";
import { FormValidator } from "../components/FormValidator";

import {
  profileOpenBtn,
  btnAddCard,
  nameInput,
  jobInput,
  config,
  avatarElement,
  handlerSubmitBtn,
  profileTitle,
  profileSubTitle,
  avatarFormSubmitBtn,
  profileFormSubmitBtn,
  cardFormSubmitBtn,
} from "../utils/constants";

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-48",
  headers: {
    authorization: "1b4bc79c-4655-4b7c-ab14-ef593343b332",
    "Content-Type": "application/json",
  },
});

const section = new Section(
  {
    renderer: (item) => {
      return createNewCard(item);
    },
  },
  ".elements"
);

let userId = null;

api.getUserInfoFromServer().then((res) => {
  profileTitle.textContent = res.name;
  profileSubTitle.textContent = res.about;
  avatarElement.src = res.avatar;

  userId = res._id;

  api.getInitialCards().then((cards) => {
    section.renderItems(
      cards.map((x) => ({
        ...x,
        userId,
      }))
    );
  });
});

const handleCardClick = (link, name) => {
  imagePopup.open(link, name);
};

const handleCardLikeClick = (id, card) => {
  if (card.likes.find((x) => x._id === userId)) {
    api.deleteLike(id).then((res) => {
      card.changeHeartColor();
      card.likes = res.likes;
    });
  } else {
    api.doLike(id).then((res) => {
      card.changeHeartColor();
      card.likes = res.likes;
    });
  }
};

const handleCardDeleteClick = (id, card) => {
  cardDeletePopup.open();

  cardDeletePopup.setSubmitHandler(() => {
    api.deleteCard(id).then(() => {
      card.deleteCard();
      cardDeletePopup.close();
    });
  });
};

const createNewCard = (item) => {
  return new Card(
    item,
    "#image",
    handleCardClick,
    handleCardDeleteClick,
    handleCardLikeClick
  ).generate();
};

const imagePopup = new PopupWithImage({
  popupSelector: ".image-popup",
  imageSelector: ".popup__image",
  titleSelector: ".popup__image-title",
});

const profilePopup = new PopupWithForm({
  popupSelector: ".profile-popup",
  formSelector: ".profile-form",
  formSubmitHandler: ({ name, job }) => {
    profileFormSubmitBtn.textContent = "Сохранение...";

    api
      .setUserInfoToServer({
        name,
        about: job,
      })
      .then(() => {
        userInfo.setUserInfo({
          name,
          desc: job,
        });

        profilePopup.close();

        profileFormSubmitBtn.textContent = "Сохранить";
      });
  },
});

const cardPopup = new PopupWithForm({
  popupSelector: ".card-popup",
  formSelector: ".card-form",
  formSubmitHandler: ({ link, title }) => {
    cardFormSubmitBtn.textContent = "Сохранение...";

    api
      .postCard({
        link,
        name: title,
      })
      .then(({ _id, owner }) => {
        const card = createNewCard({ link, name: title, _id, owner, userId });

        section.addItemToTop(card);
        cardPopup.close();

        cardFormSubmitBtn.textContent = "Сохранить";
      });
  },
});

const cardDeletePopup = new PopupWithForm({
  popupSelector: ".delete-card-popup",
  formSelector: ".popup__form",
});

const avatarPopup = new PopupWithForm({
  popupSelector: ".avatar-popup",
  formSelector: ".popup__avatar-form",
  formSubmitHandler: ({ avatar }) => {
    avatarFormSubmitBtn.textContent = "Сохранение...";

    api
      .setUserAvatarToServer({
        avatar,
      })
      .then(() => {
        avatarElement.src = avatar;

        avatarPopup.close();

        avatarFormSubmitBtn.textContent = "Сохранить";
      });
  },
});

const userInfo = new UserInfo({
  selectorName: ".profile__title",
  selectorDesc: ".profile__subtitle",
});

imagePopup.setEventListeners();
profilePopup.setEventListeners();
cardPopup.setEventListeners();
cardDeletePopup.setEventListeners();
avatarPopup.setEventListeners();

const profileFormValidator = new FormValidator(config, profilePopup.form);
profileFormValidator.enableValidation();

const cardFormValidator = new FormValidator(config, cardPopup.form);
cardFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(config, avatarPopup.form);
avatarFormValidator.enableValidation();

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

const btnChangeAvatar = document.querySelector(".profile__avatar-btn");
btnChangeAvatar.addEventListener("click", () => {
  avatarFormValidator.disableSubmitButton();
  avatarPopup.open();
});
