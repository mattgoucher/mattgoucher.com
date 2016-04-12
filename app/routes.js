module.exports = function(app) {

    // Homepage
    app.get('/', require('./controllers/home').index);

    // Errors
    app.use(require('./controllers/error').fourHundred);
    app.use(require('./controllers/error').fiveHundred);

    return app;
};
