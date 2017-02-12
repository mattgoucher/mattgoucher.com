/**
 * Homepage
 * @author Matt Goucher <matt@mattgoucher.com>
 * @param  {object}   req  Express Request object
 * @param  {object}   res  Express Response object
 * @param  {Function} next Express next callback
 * @return {undefined}
 */
exports.index = (req, res) => {
  return res.render('home/index');
};
