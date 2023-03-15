export default class UserInfo {
  constructor({nameSelector, jobSelector}) {
    this._profileName = document.querySelector(`.${nameSelector}`);
    this._profileJob = document.querySelector(`.${jobSelector}`);
  }

  getUserInfo() {
    return {profileName: this._profileName.innerText, profileJob: this._profileJob.innerText};
  }
  setUserInfo(newName, newJob) {
    this._profileName.textContent = newName;
    this._profileJob.textContent = newJob;
  }
}