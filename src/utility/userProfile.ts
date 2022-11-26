import { FixMeLater, ICredential, ISetItem } from "../types/interfaces";

class UserProfileClass {
  user: string | undefined = undefined;
  credential: ICredential | undefined = undefined;
  token: string | undefined = undefined;

  constructor() {
    const _credential = localStorage.getItem("credential");
    if (_credential && _credential !== "null") {
      this.credential = JSON.parse(localStorage.getItem("credential") || "");

      this.token = this.credential?.token;
      this.user = this.credential?.username;
    }
  }

  setCredential(data: FixMeLater) {
    if (data) {
      localStorage.setItem("credential", JSON.stringify(data));
      if (localStorage.getItem("credential")) {
        this.credential = JSON.parse(localStorage.getItem("credential") || "");
        this.token = this.credential?.token;
        this.user = this.credential?.username;
      }
    }
  }

  getCredential() {
    return this.credential;
  }

  logout(User: FixMeLater) {
    User.logout(this.token).then(this.clearData()).catch(this.clearData());
  }

  clearData() {
    localStorage.removeItem("credential");
    this.token = undefined;
    this.user = undefined;
    this.credential = undefined;
  }

  getToken() {
    return this.token;
  }

  getUser() {
    return this.user;
  }
}

export default UserProfileClass;
