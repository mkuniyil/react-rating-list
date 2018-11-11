const actionTypes = {
  getMovieList: "GET_MOVIE_LIST",
  updateRating: "UPDATE_RATING",
  toggleRandomRating: "TOGGLE_RANDOM_RATING",
  updateMovieList: "UPDATE_MOVIE_LIST"
};

const translation = {
  header: "List of favorite 10 movies",
  button: {
    start: "start",
    stop: "stop"
  },
  randomRatingText: "Rate the movies randomly using this button"
};

export { actionTypes, translation };
