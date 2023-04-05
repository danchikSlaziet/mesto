export default class UserInfo {
  constructor({nameSelector, jobSelector, avatarSelector}) {
    this._profileName = document.querySelector(`.${nameSelector}`);
    this._profileJob = document.querySelector(`.${jobSelector}`);
    this._profileAvatar = document.querySelector(`.${avatarSelector}`)
  }

  getUserInfo() {
    return {profileName: this._profileName.innerText, profileJob: this._profileJob.innerText};
  }
  setUserInfo(newName, newJob) {
    this._profileName.textContent = newName;
    this._profileJob.textContent = newJob;
  }
  setAvatar(newAvatar) {
    this._profileAvatar.src = newAvatar;
  }
}