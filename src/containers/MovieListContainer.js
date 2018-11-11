import { connect } from "react-redux";
import MovieList from "../components/MovieList";
import { getMovieList, updateRating } from "../actions";

/**
 * Transfer a state to component's props
 *
 * @param {Object} state
 * @return {Object}
 */
const mapStateToProps = state => {
  return {
    movieList: state.movieList
  };
};

/**
 * Defines callbacks to change a state of store
 *
 * @property {Function} getMovieList
 * @property {Function} updateRating
 */
const mapDispatchToProps = {
  getMovieList,
  updateRating
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
