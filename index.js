var path        = require('path'),
    express     = require('express'),
    csrf        = require('csurf'),
    helmet      = require('helmet'),
    logger      = require('morgan'),
    parser      = require('body-parser'),
    express     = require('express'),
    cookies     = require('cookie-parser'),
    compression = require('compression'),

    // Configuration
    config = require('./config'),
    routes = require('./app/routes'),

    // Initialze App
    app = module.exports = express();

// Application Configuration
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'app/views'));
app.use(logger('dev'));
app.use(compression());
app.use(parser.json());
app.use(parser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,  '/public')));

// Middlware
app.use(require('./app/middleware/bodyclass'));

// Routing
app.use(routes(express.Router()));

// Start app
app.listen(config.port, () => {
    console.log(`Fuckbeards running on port ${config.port}.`);
});
