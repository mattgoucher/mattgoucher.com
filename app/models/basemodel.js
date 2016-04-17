import request from 'request';

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
   * @param  {Object} opts Options to pass to request
   * @return {Object}      JSON parsed object
   */
  requestWithPromise(opts) {
    return new Promise((resolve, reject) => {
      if (this.cacheIsValid(opts.url)) {
        return resolve(this.cacheGet(opts.url));
      }

      request
        .get(opts, (error, res, body) => {
          let data;

          if (error) {
            return reject(error);
          }

          try {
            data = JSON.parse(body);
          } catch(e) {
            return reject(e);
          }

          // Update cached entry
          this.cacheSet(opts.url, data);

          return resolve(data);
        });
    });
  }

  /**
   * Add a new cache item
   * @author Matt Goucher <matt@mattgoucher.com>
   * @param  {string} key   Cache identifier
   * @param  {any}    value The value to cache
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

    // Cache is less than 10 seconds old
    return (new Date() - this.cache[key].date) < (1000 * 10);
  }
}
