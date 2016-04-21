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
exports.index = (req, res) => {
  let render = (params) => res.render('home/index', params);

  Promise
    .all([
      Strava.getAthlete(config.strava_athlete_id),
      Strava.getStats(config.strava_athlete_id)
    ])
    .then(
      (result) => {
        let [athlete, stats] = result;
        return render({
          stats,
          athlete
        });
      },
      () => {
        return render();
      }
    );
};
