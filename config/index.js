/**
 * Require a configuration file based on the NODE_ENV
 * @author Matt Goucher <matt@mattgoucher.com>
 * @param  {string} env The current node environment
 * @return {object}     The configuration file
 */
module.exports = (function _config() {
  let config;
  let {port = 3000, env = 'development'} = process.env;

  // Try loading the config..
  try {
    config = require(`./${env}`);
    config.env = env;
    config.port = config.port || port;
  } catch (e) {
    console.log(`Unable to load '${env}' configuration.`);
    return process.exit(0);
  }

  console.log(`Configuration '${env}' loaded.`);
  return config;
})();
