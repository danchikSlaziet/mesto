import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector('.form');
    this._button = this._form.querySelector('.form__button');
    this._initialButtonText = this._button.textContent;
    this._inputsArray = this._popup.querySelectorAll('.form__input');
  }
  _getInputValues() {
    this._valuesObject = {};
    this._inputsArray.forEach((elem) => {this._valuesObject[elem.id] = elem.value});
    return this._valuesObject;
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._getInputValues());
      this.close();
    });
  }
  setInputValues(obj) {
    this._inputsArray.forEach((elem) => {elem.value = obj[elem.id]});
  }
  close() {
    super.close();
    this._form.reset();
  }
}