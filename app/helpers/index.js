export const cache = +new Date();

/**
 * Convert meters to miles
 * @author Matt Goucher <matt@mattgoucher.com>
 * @param  {Number} meters Number of meters to Convert
 * @return {Number}        Converted distance
 */
export function metersToMiles(meters) {
  return String((meters * 0.00062137).toFixed(2)).replace(/\.00/, '');
}


/**
 * Convert meters to ft
 * @author Matt Goucher <matt@mattgoucher.com>
 * @param  {Number} meters Number of meters to Convert
 * @return {Number}        Converted distance
 */
export function metersToFeet(meters) {
  return Math.floor(meters * 3.28084);
}
