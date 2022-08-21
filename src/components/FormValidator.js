export class FormValidator {
  constructor(config, formElement) {
    this._formElement = formElement;
    this._config = config;
    this._inputs = formElement.querySelectorAll(config.inputSelector);
    this._button = formElement.querySelector(config.submitButtonSelector);
  }

  enableValidation() {
    this._setEventListeners();
    this._toggleButtonState();
  }

  _setEventListeners() {
    this._inputs.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput(Array.from(this._inputs))) {
      this._button.setAttribute(this._config.inactiveButtonClass, true);
    } else {
      this._button.removeAttribute(this._config.inactiveButtonClass);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.popup__field-error_field_${inputElement.name}`
    );

    inputElement.classList.add(this._config.inputErrorClass);

    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._config.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.popup__field-error_field_${inputElement.name}`
    );

    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = "";
  }

  disableSubmitButton() {
    this._button.setAttribute(this._config.inactiveButtonClass, true);
  }
}
