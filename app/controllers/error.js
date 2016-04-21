/**
 * 400 Handler
 * @author Matt Goucher <matt@mattgoucher.com>
 * @param  {object}   req   Express Request object
 * @param  {object}   res   Express Response object
 * @param  {Function} next  Express next callback
 * @return {undefined}
 */
exports.fourHundred = (req, res) => {
    return res.status(404).render('error/400', {
        title: 'Page Not Found'
    });
};


/**
 * 500 Handler
 * @author Matt Goucher <matt@mattgoucher.com>
 * @param  {object}   error Thrown exception
 * @param  {object}   req   Express Request object
 * @param  {object}   res   Express Response object
 * @param  {Function} next  Express next callback
 * @return {undefined}
 */
exports.fiveHundred = (error, req, res) => {
    return res.status(500).render('error/500', {
        title: 'Babyfaced',
        stack: error.stack || error.toString()
    });
};
