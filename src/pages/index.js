import './index.css';
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import {buttonEdit, buttonAdd, profileForm, photoForm, initialCards, selectorsObj} from '../utils/constants.js';

function createCard(name, link, templateSelector) {
  return new Card(name, link, templateSelector, () => { imagePopup.open({ imageLink: link, imageText: name }) }).generateCard();
}

const cardList = new Section({ items: initialCards, renderer: createCard }, 'cards');
cardList.setItem();
cardList.renderedCards.forEach((elem) => {
  cardList.addItem(elem);
});

const imagePopup = new PopupWithImage('photo-popup');
imagePopup.setEventListeners();

const userInfo = new UserInfo({ nameSelector: 'profile__name', jobSelector: 'profile__job' });
const formPublicPopup = new PopupWithForm('publication-popup', (valuesObject) => {
  const { 'url-input': link, 'place-input': name } = valuesObject;
  newCardValidation.disableButton();
  cardList.addItem(createCard(name, link, 'cardTemplate'));
});
formPublicPopup.setEventListeners();

const formProfilePopup = new PopupWithForm('profile-popup', (valuesObject) => {
  const { 'name-input': name, 'job-input': job } = valuesObject;
  userInfo.setUserInfo(name, job);
});
formProfilePopup.setEventListeners();

buttonEdit.addEventListener('click', () => {
  const { profileName, profileJob } = userInfo.getUserInfo();
  formProfilePopup.setInputValues({'name-input': profileName, 'job-input': profileJob});
  formProfilePopup.open();
});

buttonAdd.addEventListener('click', () => {
  formPublicPopup.open();
});

const newCardValidation = new FormValidator(selectorsObj, photoForm);
const profileValidation = new FormValidator(selectorsObj, profileForm);
newCardValidation.enableValidation();
profileValidation.enableValidation();