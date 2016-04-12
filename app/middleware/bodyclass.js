/**
 * Bodyclass Middlware
 * @author Matt Goucher <matt@mattgoucher.com>
 * @param  {object}   req   Express Request object
 * @param  {object}   res   Express Response object
 * @param  {Function} next  Express next callback
 * @return {undefined}
 */
module.exports = (req, res, next) => {
    var path = req.path.split('/');

    // Remove first slash
    path.shift();

    // Compute page class string
    res.locals.bodyclass = path.map((part, i) => {
        return `${i === 0 ? 'page' : 'subpage'}-${part || 'home'}`;
    });

    return next();
};
