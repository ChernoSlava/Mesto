import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor( {popupSelector, popupImage, popupTitle}) {
        super ({popupSelector});
        this._popupFigure = {popupImage};
        this._popupFigureTitle = {popupTitle};
    }

    open(src, title) {
        this._popupFigure.src = src;
        this._popupFigureTitle.textContent = title;
        this._popupFigure.alt = title;

        super.open();

    }
}