class FormValidator {
  constructor(selectorsObj, formElement) {
    this._formSelector = selectorsObj.formSelector;
    [
      this._formSelector,
      this._inputSelector,
      this._submitButtonSelector,
      this._inactiveButtonClass,
      this._inputErrorClass,
      this._errorClass,
    ] = Object.values(selectorsObj);
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }

  _showInputError = (inputElement, errorMessage) => {
    inputElement.classList.add(this._inputErrorClass);
    this._inputError.textContent = errorMessage;
    this._inputError.classList.add(this._errorClass);
  }

  _hideInputError = (inputElement) => {
    inputElement.classList.remove(this._inputErrorClass);
    this._inputError.classList.remove(this._inputErrorClass);
    this._inputError.classList.remove(this._errorClass);
    this._inputError.textContent = '';
  }

  _checkInputValidity = (inputElement) => {
    this._inputError = this._formElement.querySelector(`.${inputElement.id}-error`);
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.disableButton();
    }
    else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled', true);
    }
  }

  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      })
    });
  }

  disableButton() {
    //функция нужна для того, чтобы после валидного ввода в попапе добавления фото при последующем открытии попапа, кнопка была disabled
    this._buttonElement.setAttribute('disabled', true);
    this._buttonElement.classList.add(this._inactiveButtonClass);
  }

  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
    this._setEventListeners();
  }
}

export default FormValidator;