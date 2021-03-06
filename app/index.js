import path from 'path';
import helmet from 'helmet';
import logger from 'morgan';
import express from 'express';
import parser from 'body-parser';
import compression from 'compression';

// Configuration
import routes from './routes';
import config from '../config';
import * as Helpers from './helpers';
import bodyclass from './middleware/bodyclass';

// Initialize expess
const app = express();

// App Configuration
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, '/views'));
app.use(logger('dev'));
app.use(compression());
app.use(parser.json());
app.use(parser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../public')));

// Secruity
app.use(helmet());
app.use(helmet.frameguard('deny'));
app.use(helmet.hsts({maxAge: 7776000000}));
app.use(helmet.csp(config.csp));

// Utility
app.locals.Helpers = Helpers;

// Middlewares
app.use(bodyclass);

// Initialize Router
app.use(routes(express.Router()));

// Do it live.
app.listen(config.port, () => {
  process.stdout.write(`${config.appname} running on port ${config.port}`);
});
