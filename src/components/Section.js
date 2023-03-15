export default class Section {
  constructor({items, renderer}, containerSelector ) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(`.${containerSelector}`);
  }

  setItem() {
    this.renderedCards = this._items.map((item) => {
      return this._renderer(item.name, item.link, 'cardTemplate');
    });
  }
  addItem(elem) {
     this._container.prepend(elem);
  }
};