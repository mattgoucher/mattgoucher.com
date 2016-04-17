import config from '../../config';
import Strava from '../models/strava';

/**
 * Homepage
 * @author Matt Goucher <matt@mattgoucher.com>
 * @param  {object}   req  Express Request object
 * @param  {object}   res  Express Response object
 * @param  {Function} next Express next callback
 * @return {undefined}
 */
exports.index = (req, res, next) => {
  Strava.getAthlete(config.strava_athlete_id, (error, athlete) => {
    let distance = athlete.bikes.reduce((distance, bike) => {
      return distance + bike.distance;
    }, 0);

    return res.render('home/index', {
      athlete,
      distance
    });
  });
};
