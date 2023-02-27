import Card from './Card.js'
import FormValidator from './FormValidator.js';

const popUpProfile = document.querySelector('.profile-popup');
const buttonEdit = document.querySelector('.profile__btn_type_edit');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const profileForm = document.forms['info-Form'];
const photoForm = document.forms['card-info-Form'];
const nameInput = profileForm.querySelector('.form__input_type_name');
const jobInput = profileForm.querySelector('.form__input_type_job');
const popUpPhoto = document.querySelector('.photo-popup');
const popUpPhotoText = popUpPhoto.querySelector('.popup__photo-text');
const popUpPhotoImg = popUpPhoto.querySelector('.popup__photo-img');
// popup добавления постов
const popUpAdd = document.querySelector('.publication-popup');
const buttonAdd = document.querySelector('.profile__btn_type_add');
const formElementInAdd = popUpAdd.querySelector('.form');
const placeInput = formElementInAdd.querySelector('.form__input_type_place');
const urlInput = formElementInAdd.querySelector('.form__input_type_url');

const cards = document.querySelector('.cards');

// const btnSubmitAdd = popUpAdd.querySelector('.form__button');
// function resetDisabledinAdd() {   //функция нужна для того, чтобы после валидного ввода в попапе добавления фото при последующем открытии попапа, кнопка была disabled
//   btnSubmitAdd.setAttribute('disabled', true);
//   btnSubmitAdd.classList.add('form__button_disabled');
// }

// закрытие попапа нажатием на клавишу escape 
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopUp(openedPopup);
  }
}

function openPopUp(popup) {
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

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopUp(popUpProfile);
}
profileForm.addEventListener('submit', handleProfileFormSubmit);

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
  return new Card(name, link, templateSelector, handleCardClick).generateCard();
}

function handleCardClick(name, link) {
  popUpPhotoImg.src = link;
  popUpPhotoImg.alt = `фото публикации: ${name}`;
  popUpPhotoText.textContent = name;
  openPopUp(popUpPhoto);
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
  newCardValidation.disableButton();
  closePopUp(popUpAdd);
  evt.target.reset();
}
formElementInAdd.addEventListener('submit', addNewCard);

const selectorsObj = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_visible'
}

const newCardValidation = new FormValidator(selectorsObj, photoForm);
const profileValidation = new FormValidator(selectorsObj, profileForm);
newCardValidation.enableValidation();
profileValidation.enableValidation();