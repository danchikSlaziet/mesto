import { openPopUp, popUpPhoto, popUpPhotoImg, popUpPhotoText } from './index.js';

class Card {
  constructor(text, image, templateSelector) {
    this._text = text;
    this._image = image;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(`.${this._templateSelector}`).content;
    const cardElement = cardTemplate.cloneNode('true');
    return cardElement;
  }

  _toggleLike(evt) {
    evt.target.classList.toggle('card__btn-like_active');
  }

  _setLikeListeners() {
    this._element.querySelector('.card__btn-like').addEventListener('click', this._toggleLike);
  }

  _deleteCard(evt) {
    evt.target.closest('.card').remove();
  }

  _setDeleteListeners() {
    this._element.querySelector('.card__delete').addEventListener('click', this._deleteCard);
  }

  _tunePopup() {
    popUpPhotoImg.src = this._image;
    popUpPhotoImg.alt = `фото публикации: ${this._text}`;
    popUpPhotoText.textContent = this._text;
    openPopUp(popUpPhoto);
  }

  _setPopupListeners() {
    this._element.querySelector('.card__image').addEventListener('click', () => this._tunePopup());
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.card__image').src = this._image;
    this._element.querySelector('.card__image').alt = `фото публикации: ${this._text}`;
    this._element.querySelector('.card__title').textContent = this._text;
    this._setLikeListeners();
    this._setDeleteListeners();
    this._setPopupListeners();
    return this._element;
  }
}

export default Card;