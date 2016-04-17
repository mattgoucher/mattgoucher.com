import config from '../../config';
import request from 'request';
import BaseModel from './basemodel';

class Strava extends BaseModel {
  constructor() {
    super();
    console.log(this);
  }
  // constructor() {
  //   this.baseurl = 'https://www.strava.com/api/v3';
  //
  //   /**
  //    * Simple memory storage for rider
  //    * @type {Object}
  //    */
  //   this.cache = {};
  // }
  //
  //
  // req(url) {
  //   if (this.cacheIsValid(url)) {
  //     return this.getCached(url);
  //   }
  //
  //   return new Promise((resolve, reject) => {
  //     return request
  //       .get({
  //         url: `${this.baseurl}${url}`,
  //         headers: {
  //           'Authorization': `Bearer ${config.strava_access_token}`
  //         }
  //       }, (error, response, body) => {
  //         let res;
  //
  //         if (error) {
  //           return reject(error);
  //         }
  //
  //         try {
  //           res = JSON.parse(body);
  //         } catch(e) {
  //           return reject(e);
  //         }
  //
  //
  //
  //         return resolve(res);
  //       });
  //   });
  // }
  //
  //
  // /**
  //  * Determine of cache is valid
  //  * @author Matt Goucher <matt@mattgoucher.com>
  //  * @return {Bool} Cache is valid
  //  */
  // cacheIsValid(key) {
  //   if (!this.cache[key].date) {
  //     return false;
  //   }
  //
  //   // 10 Second Cache
  //   return (new Date() - this.cache[key].date) > (1000 * 10);
  // }
  //
  //
  //
  //
  //
  //
  //
  // getGear() {
  //
  // }
  //
  // getAthlete() {
  //   let cacheKey = 'athlete';
  //
  //   return new Promise((resolve, reject) => {
  //     if (this.cacheIsValid(cacheKey)) {
  //       console.log('Strava: Cache hit');
  //       return resolve(this.cache.payload);
  //     }
  //
  //     request.get({
  //       url: this.athlete,
  //       headers: {
  //         'Authorization': `Bearer ${config.strava_access_token}`
  //       }
  //     }, (error, response, body) => {
  //       let res;
  //       try {
  //         res = JSON.parse(body);
  //       } catch(e) {
  //         return reject(e);
  //       }
  //
  //       // Update cached information
  //       this.cache[cacheKey].payload = res;
  //       this.cache[cacheKey].date = new Date();
  //
  //       return resolve(res);
  //     });
  //   });
  // }
}

export default new Strava();
