export class Card {
  constructor({ name, link }, selector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
  }

  _getElementTemplate() {
    const cardElement = document
      .querySelector(this._selector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  generate() {
    this._element = this._getElementTemplate();
    this._cardImage = this._element.querySelector(".element__image");
    this._likeButton = this._element.querySelector(".element__heart");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector(".element__title").textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

  _changeHeartColor() {
    this._likeButton.classList.toggle("element__heart_active");
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._changeHeartColor();
    });

    this._element
      .querySelector(".element__delete-button")
      .addEventListener("click", () => {
        this._deleteCard();
      });

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._link, this._name);
    });
  }
}
