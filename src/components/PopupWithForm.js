import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({ popupSelector, formSubmitHandler, formSelector }) {
    super(popupSelector);

    this._formSubmitHandler = formSubmitHandler;
    this._form = this._popupElement.querySelector(formSelector);
    this._inputList = this._form.querySelectorAll(".popup__field");
  }

  _getInputValues() {
    this._formValues = {};

    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      this._formSubmitHandler(this._getInputValues());
    });
  }

  get form() {
    return this._form;
  }

  close() {
    super.close();

    this._form.reset();
  }
}
