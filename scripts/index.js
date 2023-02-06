let mainContent = document.querySelector('.main');
let popUp = document.querySelector('.popup');
let buttonEdit = document.querySelector('.profile__btn_type_edit');
let closeIcon = popUp.querySelector('.popup__close-icon');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

let formElement = popUp.querySelector('.form');
let nameInput = formElement.querySelector('.form__name');
let jobInput = formElement.querySelector('.form__job');
let buttonSubmit = formElement.querySelector('.form__button');

buttonEdit.addEventListener('click', function() {
  popUp.classList.add('popup_opened');
  nameInput.value = profileName.innerText;
  jobInput.value = profileJob.innerText;
});

closeIcon.addEventListener('click', function() {
  popUp.classList.remove('popup_opened');
});

function handleFormSubmit (evt) {
  evt.preventDefault();
  let nameInputValue = nameInput.value;
  let jobInputValue = jobInput.value;

  profileName.textContent = nameInputValue;
  profileJob.textContent = jobInputValue;
  popUp.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit); 