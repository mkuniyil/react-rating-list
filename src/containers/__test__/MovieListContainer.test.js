import React from "react";
import { shallow } from "enzyme";
import MovieList from "../../components/MovieList";
import MovieListContainer from "../MovieListContainer";
import configureStore from "redux-mock-store";
import "../../jest.setup";

const mockStore = configureStore();

describe("ButtonPanelContainer", () => {
  let wrapper, store;

  const state = {
    movieList: {}
  };

  beforeEach(() => {
    store = mockStore(state);
    store.dispatch = jest.fn();
    wrapper = shallow(<MovieListContainer store={store} />);
  });

  it("should render MovieList conponent", () => {
    expect(wrapper.find(MovieList).length).toEqual(1);
  });

  it("should attach respective props to the component", () => {
    expect(wrapper.find(MovieList).props().movieList).toEqual(state.movieList);
  });
});
