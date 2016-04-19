import config from '../../config';

export default function https(req, res, next) {
  if (config.env !== 'production') {
    return next();
  }

  if (req.protocol !== 'https') {
    return res.redirect(302, 'https://' + req.header('host') + req.url);
  }

  return next();
}
