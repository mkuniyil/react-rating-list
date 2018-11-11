import { connect } from "react-redux";
import ButtonPanel from "../components/ButtonPanel";
import { toggleRandomRating, updateMovieList } from "../actions";

/**
 * Transfer a state to component's props
 *
 * @param {Object} state
 * @return {Object}
 */
const mapStateToProps = state => {
  return {
    movieList: state.movieList,
    isRandomRating: state.isRandomRating
  };
};

/**
 * Defines callbacks to change a state of store
 *
 * @property {Function} toggleRandomRating
 * @property {Function} updateMovieList
 */
const mapDispatchToProps = {
  toggleRandomRating,
  updateMovieList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonPanel);
