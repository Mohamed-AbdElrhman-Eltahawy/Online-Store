import endpoint from "./endpoint";

export default class RestfulEndpoint {
  route = "";

  /**
   * Fetch records from endpoint api
   *
   * @param {object} params
   * @returns {promise}
   */
  list(params) {}

  /**
   * Fetch one record from endpoint api
   *
   * @param {number} id
   * @param {object} params
   * @returns {promise}
   */
  get(id, params) {}

  /**
   * Create new record
   *
   * @param {number} id
   * @param {object|FormData} data
   * @returns {promise}
   */
  post(id, data) {}

  /**
   * Delete new record
   *
   * @param {number} id
   * @returns {promise}
   */
  delete(id) {}

  /**
   * Update existing record
   *
   * @param {object|FormData} data
   * @returns {promise}
   */
  put(data) {}
}
