import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__photo-img');
    this._popupText = this._popup.querySelector('.popup__photo-text');
  }
  open({imageLink, imageText}) {
    this._popupImage.src = imageLink;
    this._popupImage.alt = `фото публикации: ${imageText}`;
    this._popupText.textContent = imageText;
    super.open();
  }
}