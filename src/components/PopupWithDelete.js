import Popup from "./Popup.js";
export default class PopupWithDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.form');
    this._buttonConfirm = this._form.querySelector('.form__button');
  }

  close() {
    super.close();
    this._buttonConfirm.removeEventListener("click", this.deleteCard);
  }
  deleteCard = () => {
    this._buttonConfirm.textContent = 'Удаление...';
    this._buttonConfirm.disabled = true;
    this._apiDeleteCard()
      .then(() => {
        this._cardEl.remove();
        this._cardEl = null;
        this.close();
      })
      .catch(err => console.log(err))
      .finally(() => {
        this._buttonConfirm.textContent = 'Да';
        this._buttonConfirm.disabled = false;
      });
  }
  open = ({apiDeleteCard, cardEl}) => {
    this._cardEl = cardEl;
    this._apiDeleteCard = apiDeleteCard;
    this._buttonConfirm.addEventListener('click', this.deleteCard);
    super.open(); 
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
  }
}