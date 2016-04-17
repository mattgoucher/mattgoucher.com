export default class BaseModel {
  constructor() {

    /**
     * Simple memory storage for rider
     * @type {Object}
     */
    this.cache = {hi: 1};
  }

  cacheIsValid(key) {
    if (!this.cache[key] || !this.cache[key].date) {
      return false;
    }

    // Cache is less than 10 seconds old
    return (new Date() - this.cache[key].date) < (1000 * 10);
  }
}
