// кнопки профиля
export const buttonEdit = document.querySelector('.profile__btn_type_edit');
export const buttonAdd = document.querySelector('.profile__btn_type_add');
export const buttonChangeAvatar = document.querySelector('.avatar-btn');
// формы
export const profileForm = document.forms['info-Form'];
export const photoForm = document.forms['card-info-Form'];
export const avatarForm = document.forms['avatar-Form'];
// кнопки сабмита в формах
export const buttonConfirmUpdateAvatar = avatarForm.querySelector('.form__button');
export const buttonConfirmUpdateProfile = profileForm.querySelector('.form__button');
export const buttonConfirmAddCard = photoForm.querySelector('.form__button');
// селекторы формы
export const selectorsObj = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_visible'
}