import Card from './Card.js'
import FormValidator from './FormValidator.js';

const popUpProfile = document.querySelector('.profile-popup');
const buttonEdit = document.querySelector('.profile__btn_type_edit');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formElement = popUpProfile.querySelector('.form');
const nameInput = formElement.querySelector('.form__input_type_name');
const jobInput = formElement.querySelector('.form__input_type_job');
export const popUpPhoto = document.querySelector('.photo-popup');
export const popUpPhotoText = popUpPhoto.querySelector('.popup__photo-text');
export const popUpPhotoImg = popUpPhoto.querySelector('.popup__photo-img');
// popup добавления постов
const popUpAdd = document.querySelector('.publication-popup');
const buttonAdd = document.querySelector('.profile__btn_type_add');
const formElementInAdd = popUpAdd.querySelector('.form');
const placeInput = formElementInAdd.querySelector('.form__input_type_place');
const urlInput = formElementInAdd.querySelector('.form__input_type_url');

const cards = document.querySelector('.cards');

const btnSubmitAdd = popUpAdd.querySelector('.form__button');
function resetDisabledinAdd() {   //функция нужна для того, чтобы после валидного ввода в попапе добавления фото при последующем открытии попапа, кнопка была disabled
  btnSubmitAdd.setAttribute('disabled', true);
  btnSubmitAdd.classList.add('form__button_disabled');
}

// закрытие попапа нажатием на клавишу escape 
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopUp(openedPopup);
  }
}

export function openPopUp(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

function closePopUp(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

const popups = document.querySelectorAll('.popup')
// при помощи всплывания можно было наверное и лайки гораздо проще прописать 
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopUp(popup)
    }
    if (evt.target.classList.contains('popup__close-icon')) {
      closePopUp(popup)
    }
  })
})


buttonEdit.addEventListener('click', () => {
  nameInput.value = profileName.innerText;
  jobInput.value = profileJob.innerText;
  openPopUp(popUpProfile);
});

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopUp(popUpProfile);
}
formElement.addEventListener('submit', handleFormSubmit);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function createCard(name, link, templateSelector) {
  return new Card(name, link, templateSelector).generateCard();
}

initialCards.forEach(function (elem) {
  const card = createCard(elem.name, elem.link, 'cardTemplate');
  cards.append(card);
});

buttonAdd.addEventListener('click', () => openPopUp(popUpAdd));

function addNewCard(evt) {
  evt.preventDefault();
  const cardData = {
    name: placeInput.value,
    link: urlInput.value
  }
  const card = createCard(cardData.name, cardData.link, 'cardTemplate');
  cards.prepend(card);
  closePopUp(popUpAdd);
  evt.target.reset();
  resetDisabledinAdd();
}
formElementInAdd.addEventListener('submit', addNewCard);

const btnSumbitProfile = popUpProfile.querySelector('.form__button'); /* эта функция нужна для активной кнопки сабмита в попапе профиля при первоначальном открытии этого попапа(иначе она неактивна) */
function resetDisabledinProfile() {
  btnSumbitProfile.removeAttribute('disabled', true);
  btnSumbitProfile.classList.remove('form__button_disabled');
};

const selectorsObj = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_visible'
}

const newCardValidation = new FormValidator(selectorsObj, document.forms['card-info-Form']);
const profileValidation = new FormValidator(selectorsObj, document.forms['info-Form']);
newCardValidation.enableValidation();
profileValidation.enableValidation();

resetDisabledinProfile();