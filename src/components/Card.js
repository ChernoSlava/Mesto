export class Card {
  constructor(
    { name, link, likes, _id, owner, userId },
    selector,
    handleCardClick,
    handleCardDeleteClick,
    handleCardLikeClick
  ) {
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._id = _id;
    this._owner = owner;
    this._userId = userId;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._handleCardDeleteClick = handleCardDeleteClick;
    this._handleCardLikeClick = handleCardLikeClick;
  }

  _getElementTemplate() {
    const cardElement = document
      .querySelector(this._selector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  get likes() {
    return this._likes;
  }

  set likes(items) {
    this._likes = items;
    this._likesElement.textContent = this._likes.length;
  }

  generate() {
    this._element = this._getElementTemplate();

    this._element.dataset.id = this._id;

    this._cardImage = this._element.querySelector(".element__image");
    this._likeButton = this._element.querySelector(".element__heart");
    this._likesElement = this._element.querySelector(".element__number");
    this._deleteButton = this._element.querySelector(".element__delete-button");

    if (this._owner._id !== this._userId) {
      this._deleteButton.classList.add("element__delete-button_hidden");
    }

    if (this.likes.find((x) => x._id === this._userId)) {
      this.changeHeartColor();
    }

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector(".element__title").textContent = this._name;
    this._likesElement.textContent = this._likes?.length || 0;

    this._setEventListeners();

    return this._element;
  }

  changeHeartColor() {
    this._likeButton.classList.toggle("element__heart_active");
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleCardLikeClick(this._id, this);
    });

    if (this._owner._id === this._userId) {
      this._element
        .querySelector(".element__delete-button")
        .addEventListener("click", () => {
          this._handleCardDeleteClick(this._id, this);
        });
    }

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._link, this._name);
    });
  }
}
