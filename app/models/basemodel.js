import request from 'request';

const hourInMs = (1000 * 60 * 60);

export default class BaseModel {
  constructor() {

    /**
     * Simple memory storage for rider
     * @type {Object}
     */
     this.cache = {};
  }

  /**
   * Request and receive a Promise
   * @author Matt Goucher <matt@mattgoucher.com>
   * @param  {Object}   config Options to pass to request
   * @return {function}        Promise of request
   */
  get(config) {
    return new Promise((resolve, reject) => {
      if (this.cacheIsValid(config.url)) {
        return resolve(this.cacheGet(config.url));
      }

      request(config, (error, response, body) => {
        if (error) {
          return reject(error);
        }

        // Persist to cachemoney
        this.cacheSet(config.url, body);

        return resolve(body);
      });
    });
  }

  /**
   * Add a new cache item
   * @author Matt Goucher <matt@mattgoucher.com>
   * @param  {string} key   Cache identifier
   * @param  {*}      value The value to cache
   * @return {*}            Cached value
   */
  cacheSet(key, value) {
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
  cacheGet(key) {
    return this.cache[key].payload;
  }

  /**
   * Determine if cache entry is valid
   * @author Matt Goucher <matt@mattgoucher.com>
   * @param  {string}  key The cache key to fetch
   * @return {Boolean}     Cache is valid
   */
  cacheIsValid(key) {
    if (!this.cache[key] || !this.cache[key].date) {
      return false;
    }

    // Cache is less than 1 hour old
    return (new Date() - this.cache[key].date) < (hourInMs);
  }
}
