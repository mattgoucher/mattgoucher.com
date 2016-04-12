/**
 * Require a configuration file based on the NODE_ENV
 * @author Matt Goucher <matt@mattgoucher.com>
 * @param  {string} env The current node environment
 * @return {object}     The configuration file
 */
module.exports = (function() {
    var env = process.env.NODE_ENV || 'development',
        config;

    try {
        config = require('./' + env);
        config.env = env;
        config.port = config.port || process.env.PORT || 3000;
    } catch(e) {
        console.log(`Unable to load '${env}' configuration.`);
        return process.exit();
    }

    console.log(`Configuration '${env}' loaded`);
    return config;
}());
