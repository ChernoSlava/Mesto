import { Popup } from "./Popup";

export class PopupWithImage extends Popup {
  constructor({ popupSelector, imageSelector, titleSelector }) {
    super(popupSelector);

    this._popupImage = this._popupElement.querySelector(imageSelector);
    this._popupTitle = this._popupElement.querySelector(titleSelector);
  }

  open(src, title) {
    this._popupImage.src = src;
    this._popupImage.alt = title;

    this._popupTitle.textContent = title;

    super.open();
  }
}
