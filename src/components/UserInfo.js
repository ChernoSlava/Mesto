export class UserInfo {
  constructor({ selectorName, selectorDesc, selectorAvatar }) {
    this._profileNameElement = document.querySelector(selectorName);
    this._profileDescrElement = document.querySelector(selectorDesc);
    this._profileAvatarElement = document.querySelector(selectorAvatar);
  }

  getUserInfo() {
    return {
      name: this._profileNameElement.textContent,
      desc: this._profileDescrElement.textContent,
    };
  }

  setUserInfo(newProfileInfo) {
    this._profileNameElement.textContent = newProfileInfo.name;
    this._profileDescrElement.textContent = newProfileInfo.desc;
    // this._profileAvatarElement.src = newProfileInfo.avatar;
  }
}
