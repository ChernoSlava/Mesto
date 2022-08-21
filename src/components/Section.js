export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerElement = document.querySelector(containerSelector);
  }

  addItemToTop(element) {
    this._containerElement.prepend(element);
  }

  addItem(element) {
    this._containerElement.append(element);
  }

  renderItems() {
    this._items.forEach((item) => {
      const itemElement = this._renderer(item);
      this.addItem(itemElement);
    });
  }
}
