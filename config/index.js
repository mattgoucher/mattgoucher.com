/**
 * Require a configuration file based on the NODE_ENV
 * @author Matt Goucher <matt@mattgoucher.com>
 * @param  {string} env The current node environment
 * @return {object}     The configuration file
 */
module.exports = (function _config() {
  let config;
  let {port = 3000, NODE_ENV = 'development'} = process.env;

  // Try loading the config..
  try {
    config = require(`./${NODE_ENV}`);
    config.env = NODE_ENV;
    config.port = config.port || port;
  } catch (e) {
    console.log(`Unable to load '${NODE_ENV}' configuration.`);
    return process.exit(0);
  }

  console.log(`Configuration '${NODE_ENV}' loaded.`);
  return config;
})();
