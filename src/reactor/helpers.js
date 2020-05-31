/**
 *map the given object to an array
 
 * @param   {object} object
 * @param   {callback} callback
 * @returns {Array}
 */

export function mapObject(object, callback) {
  return Object.keys(object).map((key) => {
    return callback(key, object[key]);
  });
}
