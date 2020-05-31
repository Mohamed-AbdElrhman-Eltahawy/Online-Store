import cache from "reactor/cache";

class User {
  constructor() {
    this.userData = cache.get("user");
  }

  /**
   * check if user is logged in
   *
   * @returns {boolean}
   */
  isLoggedIn() {
    return this.userData !== null;
  }

  /**
   * log the user in
   *
   * @param {object} userData
   * @returns {void}
   */
  logIn(userData) {
    this.userData = userData;
    cache.set("user", userData);
  }
}

export default new User();
