const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(
    `.popup__field-error_field_${inputElement.name}`
  );
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};

function clearErrors(popup) {
  //Обущая функция, убирающая ошибки
  const form = popup.querySelector(config.formSelector);

  popup.querySelectorAll(config.inputSelector).forEach((inputElement) => {
    hideInputError(form, inputElement);
  });
}

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(
    `.popup__field-error_field_${inputElement.name}`
  );
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = "";
};

//отдельная функци
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((formElement) => {
    const fieldsetList = Array.from(
      formElement.querySelectorAll(config.fieldSet)
    );

    fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet);
    });
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

//Отдельная функц
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute(config.inactiveButtonClass, true);
  } else {
    buttonElement.removeAttribute(config.inactiveButtonClass);
  }
};

enableValidation(config);
