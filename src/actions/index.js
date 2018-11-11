import { actionTypes } from "../config";

/**
 * Action method for returning the default movie list
 *
 * @returns {Object}
 */
const getMovieList = () => {
  return {
    type: actionTypes.getMovieList
  };
};

/**
 * Action method for updating the rating value
 *
 * @param {number} value
 * @param {string} name
 * @returns {Object}
 */
const updateRating = (value, name) => {
  return {
    type: actionTypes.updateRating,
    value,
    name
  };
};

/**
 * Action method for toggling the random rating
 *
 * @returns {Object}
 */
const toggleRandomRating = () => {
  return {
    type: actionTypes.toggleRandomRating
  };
};

/**
 * Action method for updating the movie list
 *
 * @param {Object} list
 * @returns {Object}
 */
const updateMovieList = list => {
  return {
    type: actionTypes.updateMovieList,
    list
  };
};

export { getMovieList, updateRating, toggleRandomRating, updateMovieList };
