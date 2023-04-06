export default class Section {
  constructor({items, renderer}, apiForInitialCards, containerSelector ) {
    this._renderer = renderer;
    this._items = items;
    this._apiForInitialCards = apiForInitialCards;
    this._container = document.querySelector(`.${containerSelector}`);
    this._renderedCards = [];
  }
  
  renderItems() {
    this._renderedCards = this._items.map((item) => {
      return this._renderer(item.name, item.link, item.owner._id, item._id, item.likes);
    });
    this._renderedCards.forEach((elem) => {this.addItem(elem)});
  }
  addItem(elem) {
     this._container.append(elem);
  }
};