import reducer from "../appReducer";
import { actionTypes } from "../../config";
import { data } from "../../json/movieList.json";

describe("reducers", () => {
  let action,
    initialState = {
      movieList: {},
      isRandomRating: false
    };

  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle 'getMovieList' request", () => {
    action = {
      type: actionTypes.getMovieList
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      movieList: data
    });
  });

  it("should handle 'updateRating' request", () => {
    const state = {
      ...initialState,
      movieList: {
        movie1: { rating: 5 }
      }
    };

    action = {
      type: actionTypes.updateRating,
      name: "movie1",
      value: 8
    };

    expect(reducer(state, action)).toEqual({
      ...initialState,
      movieList: { movie1: { rating: 8 } }
    });
  });

  it("should handle 'toggleRandomRating' request", () => {
    action = {
      type: actionTypes.toggleRandomRating
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isRandomRating: true
    });
  });

  it("should handle 'updateMovieList' request", () => {
    const list = { testMovie: { rating: 5 } };

    action = {
      type: actionTypes.updateMovieList,
      list
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      movieList: list
    });
  });
});
