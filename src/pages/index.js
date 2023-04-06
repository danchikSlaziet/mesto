import './index.css';
import Api from '../components/Api.js'
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithDelete from '../components/PopupWithDelete';

import {buttonEdit, buttonAdd, buttonChangeAvatar, profileForm, photoForm, avatarForm, buttonConfirmUpdateProfile, buttonConfirmAddCard, buttonConfirmUpdateAvatar, selectorsObj } from '../utils/constants.js';

let userId;

function createCard(name, link, ownerId, cardId, likesArray) {
  return new Card(name, link, ownerId, cardId, likesArray,'cardTemplate', 
                  () => { imagePopup.open({ imageLink: link, imageText: name }) }, 
                  (cardId, cardElement) => {confirmDeletePopup.open({apiDeleteCard: () => {return api.deleteCard(cardId)}, cardEl: cardElement})}, 
                  (cardId, isLiked) => api.toggleLike(cardId, isLiked),
                  () => {return userId}).generateCard();
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-63/',
  headers: {
    authorization: '3b0f9781-3d6e-4778-b136-c77e50919461',
    'Content-Type': 'application/json'
  }
});

Promise.all([api.getInfoAboutMe(), api.getInitialCards()])
  .then(([aboutMeData, cardsData]) => {
    userId = aboutMeData._id;
    const cardList = new Section({items: cardsData, renderer: createCard }, () => {return api.getInitialCards()}, 'cards');
    cardList.renderItems();
    userInfo.setUserInfo(aboutMeData.name, aboutMeData.about);
    userInfo.setAvatar(aboutMeData.avatar);

    const formPublicPopup = new PopupWithForm('publication-popup', (valuesObject) => {
      const { 'url-input': link, 'place-input': name } = valuesObject;
      buttonConfirmAddCard.disabled = true;
      buttonConfirmAddCard.textContent = 'Сохранение...';
      api.addCard(name, link)
        .then((data) => {
          addItem(createCard(name, link, data.owner._id, data._id, data.likes));
          formPublicPopup.close();
        })
        .catch((err) => console.log(err))
        .finally(() => {
          buttonConfirmAddCard.disabled = false;
          buttonConfirmAddCard.textContent = 'Создать';
        });
      ;
    });
    formPublicPopup.setEventListeners();
    buttonAdd.addEventListener('click', () => {
      newCardValidation.disableButton();
      formPublicPopup.open();
    });

  })
  .catch((err) => {console.log(err)});

const imagePopup = new PopupWithImage('photo-popup');
imagePopup.setEventListeners(); 



const userInfo = new UserInfo({ nameSelector: 'profile__name', jobSelector: 'profile__job', avatarSelector: 'profile__img' });

const formProfilePopup = new PopupWithForm('profile-popup', (valuesObject) => {
  const { 'name-input': name, 'job-input': job } = valuesObject;

  buttonConfirmUpdateProfile.disabled = true;
  buttonConfirmUpdateProfile.textContent = 'Сохранение...';
  api.updateProfileInfo(name, job)
    .then(() => {
      userInfo.setUserInfo(name, job);
      formProfilePopup.close();
    })
    .catch((err) => {console.log(err)})
    .finally(() => {
      buttonConfirmUpdateProfile.disabled = false;
      buttonConfirmUpdateProfile.textContent = 'Сохранить';
    });
});
formProfilePopup.setEventListeners();

const formUpdateAvatar = new PopupWithForm('avatar-popup', (valuesObject) => {
  const {'avatar-url-input': inputValues} = valuesObject;
  buttonConfirmUpdateAvatar.disabled = true;
  buttonConfirmUpdateAvatar.textContent = 'Сохранение...';
  api.updateAvatar(inputValues)
    .then(() => {
      userInfo.setAvatar(inputValues);
      formUpdateAvatar.close();
    })
    .catch(err => console.log(err))
    .finally(() => {
      buttonConfirmUpdateAvatar.disabled = false;
      buttonConfirmUpdateAvatar.textContent = 'Сохранить';
    });
});
formUpdateAvatar.setEventListeners();

const confirmDeletePopup = new PopupWithDelete('delete-popup');
confirmDeletePopup.setEventListeners();

buttonEdit.addEventListener('click', () => {
  const { profileName, profileJob } = userInfo.getUserInfo();
  formProfilePopup.setInputValues({'name-input': profileName, 'job-input': profileJob});
  formProfilePopup.open();
});

buttonChangeAvatar.addEventListener('click', () => {
  formUpdateAvatar.open();
  avatarValidation.disableButton();
});

const newCardValidation = new FormValidator(selectorsObj, photoForm);
const profileValidation = new FormValidator(selectorsObj, profileForm);
const avatarValidation = new FormValidator(selectorsObj, avatarForm);
newCardValidation.enableValidation();
profileValidation.enableValidation();
avatarValidation.enableValidation();

