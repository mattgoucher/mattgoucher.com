import path from 'path';
import csrf from 'csurf';
import helemt from 'helmet';
import logger from 'morgan';
import express from 'express';
import parser from 'body-parser';
import cookies from 'cookie-parser';
import compression from 'compression';

// Configuration
import routes from './routes';
import config from '../config';

// Initialize expess
const app = express();

// App Configuration
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, '/views'));
app.use(logger('dev'));
app.use(compression());
app.use(parser.json());
app.use(parser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '/public')));

// Initialize Router
app.use(routes(express.Router()));

// Do it live.
app.listen(config.port, error => {
  console.log(`${config.appname} running on port ${config.port}`);
});
