import config from '../../config';
import request from 'request';
import BaseModel from './basemodel';

class Strava extends BaseModel {
  constructor() {
    super();

    this.baseurl = 'https://www.strava.com/api/v3';
    this.headers = {
      'Authorization': `Bearer ${config.strava_access_token}`
    };
  }

  /**
   * Get a strava athelete
   * @author Matt Goucher <matt@mattgoucher.com>
   * @param  {string}   id       Strava athelete to get
   * @param  {Function} callback Called with resulting (error, athlete)
   * @return {undefined}
   */
  getAthlete(id, callback) {
    return this.requestWithPromise({
      url: `${this.baseurl}/athletes/${id}`,
      headers: this.headers
    }, callback);
  }

  /**
   * Get Strava athlete stats
   * @author Matt Goucher <matt@mattgoucher.com>
   * @param  {string}   id       Strava athelete to get
   * @param  {Function} callback Called with resulting (error, stats)
   * @return {undefined}
   */
  getStats(id, callback) {
    return this.requestWithPromise({
      url: `${this.baseurl}/athletes/${id}/stats`,
      headers: this.headers
    }, callback);
  }
}

export default new Strava();
