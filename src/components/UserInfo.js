export default class UserInfo {
  constructor({ selectorName, selectorInfo }) {
    this._profileName = document.querySelector(selectorName);
    this._profileDescr = document.querySelector(selectorInfo);
  }

  getUserInfo() {
    this._profileInfo = {
      name: this._profileName.textContent,
      info: this._profileDescr.textContent,
    };

    return this._profileInfo;
  }

  setUserInfo(newProfileInfo) {
    this._profileName.textContent = newProfileInfo.name;
    this._profileInfo.textContent = newProfileInfo.description;
  }
}
