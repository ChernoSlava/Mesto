export class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._containerElement = document.querySelector(containerSelector);
  }

  addItemToTop(element) {
    this._containerElement.prepend(element);
  }

  addItem(element) {
    this._containerElement.append(element);
  }

  renderItems(items) {
    this._items = items;

    this._items.forEach((item) => {
      const itemElement = this._renderer(item);
      this.addItem(itemElement);
    });
  }
}
