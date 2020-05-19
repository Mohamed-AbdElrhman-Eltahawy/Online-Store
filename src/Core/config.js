import {Obj} from 'reinforcements';

let configurationList = {};

const config = {
  /**
   * set the gaiven key/value in our configuration list
   *
   * @param {string} key
   * @param {any} value
   * @returns void
   *
   */
  set(key, value) {
    //one argument only is passed and is object
    if (arguments.length === 1) {
      let data = key;
      configurationList = Object.assign(configurationList, data);
    } else {
      configurationList[key] = value;
    }
  },

  /**
   * Get the value for the gaiven key, otherwise return the gaiven default value
   *
   * @param {string} key
   * @param {any} default
   * @returns any
   *
   */
  get(key, defaultvalue = null) {
      return Obj.get(configurationList, key, defaultvalue);
  },
};

export default config;
