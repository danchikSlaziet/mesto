

// хз как так выходит, ведь у меня popUp адаптивный и всегда с крестиком влезает даже
// на разрешении 200-300px. может быть github pages чудил немного. В images приложил скрины
// с popUp на мобильных разрешениях, в том числе на 399px как у вас. С медиа-запросами всё в порядке.
// проверил в я.браузере, хроме, microsoft edge, даже в Internet Expllorer пашет (реально проверял :D)

let mainContent = document.querySelector('.main');
let popUp = document.querySelector('.popup');
let buttonEdit = document.querySelector('.profile__btn_type_edit');
let closeBtn = popUp.querySelector('.popup__close-btn');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

let formElement = popUp.querySelector('.form');
let nameInput = formElement.querySelector('.form__input_type_name');
let jobInput = formElement.querySelector('.form__input_type_job');
let buttonSubmit = formElement.querySelector('.form__button');

function popUpOpen() {
  popUp.classList.add('popup_opened');
  nameInput.value = profileName.innerText;
  jobInput.value = profileJob.innerText;
}

function popUpClose() {
  popUp.classList.remove('popup_opened');
}

buttonEdit.addEventListener('click', popUpOpen);
closeBtn.addEventListener('click', popUpClose);

function handleFormSubmit (evt) {
  evt.preventDefault();
  let nameInputValue = nameInput.value;
  let jobInputValue = jobInput.value;

  profileName.textContent = nameInputValue;
  profileJob.textContent = jobInputValue;
  popUpClose();
}

formElement.addEventListener('submit', handleFormSubmit); 