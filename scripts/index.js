const popUpProfile = document.querySelector('.profile-popup');
const buttonEdit = document.querySelector('.profile__btn_type_edit');
const buttonsClose = document.querySelectorAll('.popup__close-btn');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formElement = popUpProfile.querySelector('.form');
const nameInput = formElement.querySelector('.form__input_type_name');
const jobInput = formElement.querySelector('.form__input_type_job');
const buttonSubmit = formElement.querySelector('.form__button');
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
const cardTemplate = document.querySelector('.cardTemplate').content;

const btnSubmitAdd = popUpAdd.querySelector('.form__button');
function resetDisabledinAdd() {   //функция нужна для того, чтобы после валидного ввода в попапе добавления фото при последующем открытии попапа, кнопка была disabled
  btnSubmitAdd.setAttribute('disabled', true);
  btnSubmitAdd.classList.add('form__button_disabled');
}

// закрытие попапа нажатием на клавишу escape 
function closeOnEsc(popup) {
  window.addEventListener('keydown', (evt) => {
    if(evt.key === 'Escape') {
      closePopUp(popup);
      window.removeEventListener('keydown', (evt));
    }
  });
}

function openPopUp(popup) {
  popup.classList.add('popup_opened');
  closeOnEsc(popup);
}

function closePopUp(popup) {
  popup.classList.remove('popup_opened');
}

buttonsClose.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopUp(popup));
});

buttonEdit.addEventListener('click', () => {
  nameInput.value = profileName.innerText;
  jobInput.value = profileJob.innerText;
  openPopUp(popUpProfile);
});

function handleFormSubmit (evt) {
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

function createCard(item) {
  const cardElement = cardTemplate.cloneNode('true');

  const like = cardElement.querySelector('.card__btn-like');
  like.addEventListener('click', () => like.classList.toggle('card__btn-like_active'));

  const buttonDelete = cardElement.querySelector('.card__delete');
  const realCard = cardElement.querySelector('.card');
  buttonDelete.addEventListener('click', () => realCard.remove());

  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');

  cardTitle.textContent = item.name; 
  cardImage.src = item.link; 
  cardImage.alt = `фото публикации: ${item.name}` 
  cardImage.addEventListener('click', () => {
    popUpPhotoImg.src = cardImage.src;
    popUpPhotoImg.alt = `фото публикации: ${cardTitle.textContent}`;
    popUpPhotoText.textContent = cardTitle.textContent;
    openPopUp(popUpPhoto);
  });
  return cardElement;
}

initialCards.forEach(function(elem) {
  const card = createCard(elem);
  cards.append(card);
});

buttonAdd.addEventListener('click', () => openPopUp(popUpAdd));

function addNewCard (evt) {
  evt.preventDefault();
  const cardData = {
    name: placeInput.value,
    link: urlInput.value
  }
  const card = createCard(cardData);
  cards.prepend(card);
  closePopUp(popUpAdd);
  evt.target.reset();
  resetDisabledinAdd();
}
formElementInAdd.addEventListener('submit', addNewCard);

//   6 СПРИНТ 

// закрытие попапа кликом на оверлей
const popUpList = document.querySelectorAll('.popup');
popUpList.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if(evt.target.classList.contains('popup')) {
      closePopUp(popup);
    } 
  });
});