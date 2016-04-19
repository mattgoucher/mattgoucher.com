import config from '../../config';
import Strava from '../models/strava';
import * as Helpers from '../helpers';

/**
 * Homepage
 * @author Matt Goucher <matt@mattgoucher.com>
 * @param  {object}   req  Express Request object
 * @param  {object}   res  Express Response object
 * @param  {Function} next Express next callback
 * @return {undefined}
 */
exports.index = (req, res, next) => {

  // Get Athlete Information
  Strava.getAthlete(config.strava_athlete_id, (error, athlete) => {

    // Get Athlete Stats
    Strava.getStats(config.strava_athlete_id, (error, stats) => {

      return res.render('home/index', {
        stats,
        athlete,
        Helpers
      });
    });
  });

};
