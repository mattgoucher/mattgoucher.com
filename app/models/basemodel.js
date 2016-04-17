class BaseModel {
  constructor() {

    /**
     * Simple memory storage for rider
     * @type {Object}
     */
    this.cache = {hi: 1};
  }

  /**
   * Add a new cache item
   * @author Matt Goucher <matt@mattgoucher.com>
   * @param  {string} key   Cache identifier
   * @param  {any}    value The value to cache
   */
  set(key, value) {
    this.cache[key] = {
      payload: value,
      date: new Date()
    };

    return this.cache[key];
  }

  /**
   * Get a cache item
   * @author Matt Goucher <matt@mattgoucher.com>
   * @param  {string} key Cache key to fetch
   * @return {any}        Cache payload
   */
  get(key) {
    return this.cache[key].payload;
  }

  /**
   * Determine if cache entry is valid
   * @author Matt Goucher <matt@mattgoucher.com>
   * @param  {string}  key The cache key to fetch
   * @return {Boolean}     Cache is valid
   */
  isValid(key) {
    if (!this.cache[key] || !this.cache[key].date) {
      return false;
    }

    // Cache is less than 10 seconds old
    return (new Date() - this.cache[key].date) < (1000 * 10);
  }
}

export default new BaseModel();
