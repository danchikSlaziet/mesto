export default class Card {
  constructor(text, image, ownerId, cardId, likesArray, templateSelector, handleCardClick, handlerDelete, handlerLike, getUserId) {
    this._text = text;
    this._image = image;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._ownerId = ownerId;
    this._getUserId = getUserId;
    this._userId = this._getUserId();
    this._cardId = cardId;
    this._likesArray = likesArray;
    this._handlerDelete = handlerDelete;
    this._handlerLike = handlerLike;
    this._element = this._getTemplate();
    this._btnLike = this._element.querySelector('.card__btn-like');
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(`.${this._templateSelector}`).content.querySelector('.card');
    const cardElement = cardTemplate.cloneNode('true');
    return cardElement;
  }

  _checkLiked() {
    let myLike = false;
    this._likesArray.forEach((elem) => {
      if (elem._id === this._userId) {
        myLike = true;
      }
    });
    return myLike;
  }
  _setInitialLikes() {
    if (this._checkLiked()) {
      this._btnLike.classList.add('card__btn-like_active');
    }
  }

  _toggleLike(evt) {
    evt.target.classList.toggle('card__btn-like_active');
  }

  _setLikeListeners() {
    this._element.querySelector('.card__btn-like').addEventListener('click', (evt) => {
      if (!evt.target.classList.contains('card__btn-like_active')) {
        this._handlerLike(this._cardId, true)
          .then((data) => {
            this._toggleLike(evt);
            this._likesCounter.textContent = data.likes.length;
          })
          .catch(err => console.log(err));
      }
      else {
        this._handlerLike(this._cardId, false)
          .then((data) => {
            this._toggleLike(evt);
            this._likesCounter.textContent = data.likes.length;
          })
          .catch(err => console.log(err));
      }
    });
  }

  _setDeleteListeners() {
      this._element.querySelector('.card__delete').addEventListener('click', () => {
        this._handlerDelete(this._cardId, this._element);
    });
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
    this._likesCounter = this._element.querySelector('.card__like-counter');
    this._buttonDelete = this._element.querySelector('.card__delete');
     // My id is b3e53b729175e9af99c2d405
     if(this._ownerId !== this._userId) {
      this._buttonDelete.style.display = 'none';
    }
    this._cardImage = this._element.querySelector('.card__image');
    this._cardImage.src = this._image;
    this._likesCounter.textContent = this._likesArray.length;
    this._cardImage.alt = `фото публикации: ${this._text}`;
    this._element.querySelector('.card__title').textContent = this._text;
    this._setInitialLikes();
    this._setEventListeners();
   
    return this._element;
  }
}