export default {
  storage: localStorage,

  /**
   * Set the storage engine
   *
   * @param  {string} key
   * @param  {value} value
   *
   */
  set(key, value) {
    this.storage.setItem(
      key,
      JSON.stringify({
        data: value,
      })
    );
  },

  /**
   * Get value from storage engine
   *
   * @param    {string} key
   * @returns  {any}
   *
   */
  get(key) {
    let value = this.storage.getItem(key);
    return value ? JSON.parse(value).data : null;
  },

  /**
   * Remove key from storage
   *
   * @param  {string}  key
   *
   */
  remove(key) {
    this.storage.removeItem(key);
  },
};
