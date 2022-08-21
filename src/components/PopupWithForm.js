import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({ popupSelector, formSubmitHandler, formSelector }) {
    super(popupSelector);

    this._formSubmitHandler = formSubmitHandler;
    this._form = this._popupElement.querySelector(formSelector);
  }

  _getInputValues() {}

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", this._formSubmitHandler);
  }

  close() {
    super.close();

    this._form.reset();
  }
}
