export default class Card {
  constructor(text, image, templateSelector, handleCardClick) {
    this._text = text;
    this._image = image;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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

  _setPopupListeners() {
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._text, this._image));
  }

  _setEventListeners() {
    this._setLikeListeners();
    this._setDeleteListeners();
    this._setPopupListeners();
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.card__image');
    this._cardImage.src = this._image;
    this._cardImage.alt = `фото публикации: ${this._text}`;
    this._element.querySelector('.card__title').textContent = this._text;
    this._setEventListeners();
    return this._element;
  }
}