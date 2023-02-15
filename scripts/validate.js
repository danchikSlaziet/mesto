const btnSumbitProfile = popUpProfile.querySelector('.form__button'); /* эта функция нужна для активной кнопки сабмита в попапе профиля при первоначальном открытии этого попапа(иначе она неактивна) */
function resetDisabledinProfile() {
  btnSumbitProfile.removeAttribute('disabled', true);
  btnSumbitProfile.classList.remove('form__button_disabled');
}


function enableValidation(selectorsObj) {
  const formList = Array.from(document.querySelectorAll(selectorsObj.formSelector));  //выбрали все формы

  // вверху объявлю заранее все функции
  const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(selectorsObj.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(selectorsObj.errorClass);
  };
  
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(selectorsObj.inputErrorClass);
    errorElement.classList.remove(selectorsObj.errorClass);
    errorElement.textContent = '';
  };
  
  function checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  }

  function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  function toggleButtonState(inputList, buttonElement) {
    if(hasInvalidInput(inputList)) {
      buttonElement.classList.add(selectorsObj.inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
    }
    else {
      buttonElement.classList.remove(selectorsObj.inactiveButtonClass);
      buttonElement.removeAttribute('disabled', true);
    }
  }

  function setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(selectorsObj.inputSelector)); 
    const buttonElement = formElement.querySelector(selectorsObj.submitButtonSelector);
    resetDisabledinProfile();
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function() {
        checkInputValidity(formElement, inputElement); 
        toggleButtonState(inputList, buttonElement); 
      })
    });
  }

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function(evt) {
      evt.preventDefault();
    })
    setEventListeners(formElement);
  }); 
}



enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_visible'
});