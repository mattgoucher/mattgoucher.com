import config from '../../config';
import BaseModel from './basemodel';

class Strava extends BaseModel {
  constructor() {
    super();

    this.baseurl = 'https://www.strava.com/api/v3';
    this.config = {
      json: true,
      headers: {
        'Authorization': `Bearer ${config.strava_access_token}`
      }
    };
  }

  /**
   * Get a strava athelete
   * @author Matt Goucher <matt@mattgoucher.com>
   * @param  {string} id Strava athelete to get
   * @return {undefined}
   */
  getAthlete(id) {
    return this.get({
      ...this.config,
      url: `${this.baseurl}/athletes/${id}`
    });
  }

  /**
   * Get Strava athlete stats
   * @author Matt Goucher <matt@mattgoucher.com>
   * @param  {string} id Strava athelete to get
   * @return {undefined}
   */
  getStats(id) {
    return this.get({
      ...this.config,
      url: `${this.baseurl}/athletes/${id}/stats`
    });
  }
}

export default new Strava();
