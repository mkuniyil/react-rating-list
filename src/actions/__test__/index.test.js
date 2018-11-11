import { actionTypes } from "../../config";
import {
  getMovieList,
  updateRating,
  toggleRandomRating,
  updateMovieList
} from "../index";

describe("actions", () => {
  it("should return an object with type 'GET_MOVIE_LIST'", () => {
    expect(getMovieList()).toEqual({
      type: actionTypes.getMovieList
    });
  });

  it("should return an object with type 'UPDATE_RATING' and passed value & name", () => {
    const value = 10,
      name = "oldboy";

    expect(updateRating(value, name)).toEqual({
      type: actionTypes.updateRating,
      value,
      name
    });
  });

  it("should return an object with type 'TOGGLE_RANDOM_RATING'", () => {
    expect(toggleRandomRating()).toEqual({
      type: actionTypes.toggleRandomRating
    });
  });

  it("should return an object with type 'UPDATE_MOVIE_LIST' and passed list", () => {
    const list = { "Old Boy": { rating: 10 } };

    expect(updateMovieList(list)).toEqual({
      type: actionTypes.updateMovieList,
      list
    });
  });
});
