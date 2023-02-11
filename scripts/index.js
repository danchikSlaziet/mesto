// скрипт для ПР4

const popUp = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__btn_type_edit');
const buttonClose = popUp.querySelector('.popup__close-btn');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

const formElement = popUp.querySelector('.form');
const nameInput = formElement.querySelector('.form__input_type_name');
const jobInput = formElement.querySelector('.form__input_type_job');
const buttonSubmit = formElement.querySelector('.form__button');

function openEditPopUp() {
  popUp.classList.add('popup_opened');
  nameInput.value = profileName.innerText;
  jobInput.value = profileJob.innerText;
}

function openPopUp(popup) {
  popup.classList.add('popup_opened');
}

function closePopUp(popup) {
  popup.classList.remove('popup_opened');
}

buttonEdit.addEventListener('click', openEditPopUp);
buttonClose.addEventListener('click', () => closePopUp(popUp));

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopUp(popUp);
}

formElement.addEventListener('submit', handleFormSubmit); 

// скрипт для ПР5

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


// добавление изначальных карточек 
const cards = document.querySelector('.cards');
const cardTemplate = document.querySelector('.cardTemplate').content;
initialCards.forEach(function(elem) {
  const card = cardTemplate.cloneNode('true');
  const cardTitle = card.querySelector('.card__title');
  const cardImage = card.querySelector('.card__image');
  cardTitle.textContent = elem.name;
  cardImage.src = elem.link;
  cardImage.alt = `фото публикации: ${elem.name}`;
  cards.append(card);
});

//лайки для изначального массива карточек(хз как написать рабочую функцию добавления лайков сразу для всех карточек)

function cardLikeForInitialCards() {
  const initialCards = Array.from(document.querySelectorAll('.card'));
  for (elem of initialCards) {
  const cardLike = elem.querySelector('.card__btn-like');
  cardLike.addEventListener('click', () => cardLike.classList.toggle('card__btn-like_active'));
}
}
cardLikeForInitialCards();

// popup добавления постов
const popUpAdd = document.querySelector('.popup_add');
const buttonAdd = document.querySelector('.profile__btn_type_add');
const formElementInAdd = popUpAdd.querySelector('.form');
const placeInput = formElementInAdd.querySelector('.form__input_type_place');
const urlInput = formElementInAdd.querySelector('.form__input_type_url');
const buttonCloseInAdd = popUpAdd.querySelector('.popup__close-btn');

buttonAdd.addEventListener('click', () => openPopUp(popUpAdd));
buttonCloseInAdd.addEventListener('click', () => closePopUp(popUpAdd));

// поле ввода сохраняется в инпутах, если нажал на крестик, как по мне это довольно практично
// к тому же не было явного указания на очистку поля ввода после его закрытия на крестик в конкретно этом попапе

// popup открытия карточек
function openPhoto() {
  const popUpPhoto = document.querySelector('.popup_photo');
  const popUpPhotoText = popUpPhoto.querySelector('.popup__photo-text');
  const popUpPhotoImg = popUpPhoto.querySelector('.popup__photo-img');
  const cardImages = document.querySelectorAll('.card__image');
  const cardTitles = document.querySelectorAll('.card__title');
  const buttonCloseInPhoto = popUpPhoto.querySelector('.popup__close-icon');
  for (let i = 0; i < cardImages.length; i++) {
    cardImages[i].addEventListener('click', function() {
      popUpPhotoImg.src = cardImages[i].src;
      popUpPhotoImg.alt = `фото публикации: ${cardTitles[i].textContent}`;
      popUpPhotoText.textContent = cardTitles[i].textContent;
      openPopUp(popUpPhoto);
    });
  buttonCloseInPhoto.addEventListener('click', () => closePopUp(popUpPhoto));
}
}

// удаление карточек

function deleteCard() {
  const cardsCollection = document.querySelectorAll('.card');
  const buttonsDelete = document.querySelectorAll('.card__delete');
  for (let i = 0; i < cardsCollection.length; i++) {
    buttonsDelete[i].addEventListener('click', () => cardsCollection[i].remove());
  }
}

//добавление новых карточек

function addNewCard (evt) {
  evt.preventDefault();
  const card = cardTemplate.cloneNode('true');
  const cardTitle = card.querySelector('.card__title');
  const cardImage = card.querySelector('.card__image');
  cardTitle.textContent = placeInput.value;
  cardImage.src = urlInput.value;
  cardImage.alt = `фото публикации: ${placeInput.value}`;
  cards.prepend(card);
  closePopUp(popUpAdd);
  placeInput.value = '';
  urlInput.value = '';
  // лайки для добавленных карточек
  function cardLikeForNewCards() {
    const cardLike = document.querySelector('.card__btn-like');
    cardLike.addEventListener('click', () => cardLike.classList.toggle('card__btn-like_active'));
  }
  cardLikeForNewCards();
  deleteCard();
  openPhoto();
}
formElementInAdd.addEventListener('submit', addNewCard);
deleteCard();
openPhoto();








