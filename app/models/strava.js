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
    this.requestWithPromise({
      url: `${this.baseurl}/athletes/${id}`,
      headers: this.headers
    })
      .then(
        (athlete) => callback(null, athlete),
        (error) => callback(error, {})
      );
  }

  /**
   * Convert meters to miles
   * @author Matt Goucher <matt@mattgoucher.com>
   * @param  {Number} meters Number of meters to Convert
   * @return {Number}        Converted distance
   */
  metersToMiles(meters) {
    return meters * 0.00062137;
  }
}

export default new Strava();
