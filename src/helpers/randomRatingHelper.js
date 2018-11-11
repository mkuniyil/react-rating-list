/**
 * Variable which holds the interval value
 */
let ratingTimer = null;
/**
 * Constants
 */
const DELAY_MIN = 1000,
  DELAY_MAX = 5000;

/**
 * Method for generating a random number between the range
 *
 * @param {number} max
 * @param {number} min
 * @returns {number}
 */

const randomIndex = (max, min) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
/**
 * Generates the random interval delay
 *
 * @returns {number}
 */
const randomDelay = () => randomIndex(DELAY_MIN, DELAY_MAX);
/**
 * Method which performas the random rating on passed list object
 *
 * @param {Object} list
 * @returns {Object}
 */
const randomRating = list => {
  let listArr = Object.keys(list),
    len = listArr.length,
    rating = randomIndex(10, 1),
    index = randomIndex(len, 1),
    key = listArr[index - 1];

  list[key].rating = rating;

  return list;
};

/*****************************************************
 *                  Public Methods
 ****************************************************/

/**
 * Method which trigger the timer
 *
 * @param {Object} list
 * @param {Function} callback
 */
const startRandomRating = (list, callback) => {
  ratingTimer = setInterval(() => callback(randomRating(list)), randomDelay());
};
/**
 * Method which clear the timer
 */
const stopRandomRating = () => {
  clearInterval(ratingTimer);
};

export { startRandomRating, stopRandomRating };
