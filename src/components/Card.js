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

  getLikes() {
    return this._likes || [];
  }

  setLikes(items) {
    this._likes = items;
    this._updateLikesCount();
    this._changeHeartColor();
  }

  _updateLikesCount() {
    this._likesElement.textContent = this.getLikes().length;
  }

  hasOwnLikes() {
    return !!this.getLikes().find((x) => x._id === this._userId);
  }

  isOwnCard() {
    return this._owner._id === this._userId;
  }

  generate() {
    this._element = this._getElementTemplate();

    this._element.dataset.id = this._id;

    this._cardImage = this._element.querySelector(".element__image");
    this._likeButton = this._element.querySelector(".element__heart");
    this._likesElement = this._element.querySelector(".element__number");
    this._deleteButton = this._element.querySelector(".element__delete-button");

    if (!this.isOwnCard()) {
      this._deleteButton.classList.add("element__delete-button_hidden");
    }

    this._changeHeartColor();

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector(".element__title").textContent = this._name;
    this._updateLikesCount();

    this._setEventListeners();

    return this._element;
  }

  _changeHeartColor() {
    if (this.hasOwnLikes()) {
      this._likeButton.classList.add("element__heart_active");
    } else {
      this._likeButton.classList.remove("element__heart_active");
    }
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleCardLikeClick(this._id, this);
    });

    if (this.isOwnCard()) {
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
