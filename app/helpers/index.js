export const cache = +new Date();

/**
 * Convert meters to miles
 * @author Matt Goucher <matt@mattgoucher.com>
 * @param  {Number} meters Number of meters to Convert
 * @return {Number}        Converted distance
 */
export function metersToMiles(meters) {
  return upSomeCommas(meters * 0.00062137);
}


/**
 * Convert meters to ft
 * @author Matt Goucher <matt@mattgoucher.com>
 * @param  {Number} meters Number of meters to Convert
 * @return {Number}        Converted distance
 */
export function metersToFeet(meters) {
  return upSomeCommas(Math.floor(meters * 3.28084));
}

/**
 * Add commas to seperate thousands
 * @author Matt Goucher <matt@mattgoucher.com>
 * @param  {Number} num Number to format
 * @return {String}     Number with comma separators
 */
export function upSomeCommas(num) {
    return num
        .toFixed(2)
        .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            .replace(/\.00/, '');
}
