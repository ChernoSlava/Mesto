import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({popupSelector, formSabmHandler}) {
        super({popupSelector});

        this._formSabmitHandler = formSabmHandler;
        this._form = this._popupSelector.querySelector('.cardForm');
    }

    open() {
        super.open();
    }

    

    _getInputValues () {

    }

    setEventListeners() {
        super.setEventListeners();
        
    }

    close() {
        super.close();
        this._form.reset();
    }
}