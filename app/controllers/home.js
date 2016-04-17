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
  Strava
    .get()
    .then(
      (athlete, a, b) => {
        console.log(athlete, a, b);
        return res.render('home/index', {
          athlete: athlete
        });
      }
    );
};
