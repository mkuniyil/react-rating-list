import { actionTypes } from "../config";
import { data } from "../json/movieList.json";

/**
 * Reducer method for whole app
 *
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
 */
const reducer = (
  state = {
    movieList: {},
    isRandomRating: false
  },
  action
) => {
  switch (action.type) {
    case actionTypes.getMovieList:
      return {
        ...state,
        movieList: data
      };
    case actionTypes.updateRating:
      let newMovieList = { ...state.movieList },
        newMovieData = newMovieList[action.name];

      newMovieData.rating = action.value;
      newMovieList[action.name] = newMovieData;

      return {
        ...state,
        movieList: newMovieList
      };
    case actionTypes.toggleRandomRating:
      let newIsRandomRating = state.isRandomRating;

      return {
        ...state,
        isRandomRating: !newIsRandomRating
      };
    case actionTypes.updateMovieList:
      return {
        ...state,
        movieList: { ...action.list }
      };
    default:
      return state;
  }
};

export default reducer;
