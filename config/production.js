/* eslint-disable */
module.exports = {
  port: process.env.PORT,

  /**
   * App Name
   */
  appname: 'Matt Goucher',

  /**
   * Strava Configuration
   */
  strava_id: process.env.STRAVA_ID,
  strava_secret: process.env.STRAVA_SECRET,
  strava_athlete_id: process.env.STRAVA_ATHLETE_ID,
  strava_access_token: process.env.STRAVA_ACCESS_TOKEN,

  /**
   * Content Security Policy
   * @type {Object}
   */
  csp: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", 'https://*.google-analytics.com'],
      styleSrc: ["'self'", 'https://fonts.googleapis.com'],
      fontSrc: ['https://fonts.gstatic.com'],
      imgSrc: ["'self'", 'https://*.cdninstagram.com', 'https://*.google-analytics.com']
    }
  }
};
