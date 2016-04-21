/**
 * Route Configuration
 * @author Matt Goucher <matt@mattgoucher.com>
 * @param  {function} router Express router instance
 * @return {function}        Routes
 */
module.exports = function(router) {

    // Homepage
    router.get('/', require('./controllers/home').index);

    // Errors
    router.use(require('./controllers/error').fourHundred);
    router.use(require('./controllers/error').fiveHundred);

    return router;
};
