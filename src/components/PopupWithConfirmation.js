import { Popup } from "./Popup";

export class PopupWithConfirmation extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);

    this._submitButton = this._popupElement.querySelector(
      ".popup__submit-button"
    );
  }

  setSubmitHandler(callback) {
    this._submitHandler = callback;
  }
  setEventListeners() {
    super.setEventListeners();

    this._submitButton.addEventListener("click", () => {
      this._submitHandler();
    });
  }
}
