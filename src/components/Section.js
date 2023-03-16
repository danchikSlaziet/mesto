export default class Section {
  constructor({items, renderer}, containerSelector ) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(`.${containerSelector}`);
    this._renderedCards = [];
  }
  
  renderItems() {
    this._renderedCards = this._items.map((item) => {
      return this._renderer(item.name, item.link);
    });
    this._renderedCards.forEach((elem) => {this.addItem(elem)});
  }
  addItem(elem) {
     this._container.prepend(elem);
  }
};