import React from "react";
import { mount } from "enzyme";
import MovieList from "../MovieList";
import { data } from "../../json/movieList.json";

import "../../jest.setup";

const INITIAL_PROPS = {
  movieList: {},
  getMovieList: jest.fn(),
  updateRating: jest.fn()
};

describe("<MovieList />", () => {
  it("should render the div element & no lists", () => {
    const wrapper = mount(<MovieList {...INITIAL_PROPS} />);

    expect(INITIAL_PROPS.getMovieList).toHaveBeenCalled();
    expect(wrapper.find("div").hasClass("movie__list")).toBe(true);
    expect(wrapper.find("ul").length).toBe(0);
  });

  it("should render the lists, if 'movieList' is in props", () => {
    const props = {
        ...INITIAL_PROPS,
        movieList: data
      },
      wrapper = mount(<MovieList {...props} />);

    expect(wrapper.find("ul").length).toBe(Object.keys(data).length);
  });

  it("should call 'updateRating' if star is clicked", () => {
    const props = {
        ...INITIAL_PROPS,
        movieList: data
      },
      wrapper = mount(<MovieList {...props} />);

    wrapper
      .find("ul")
      .at(0)
      .find("li")
      .at(0)
      .find("i")
      .at(7)
      .simulate("click");

    expect(INITIAL_PROPS.updateRating).toHaveBeenCalled();
  });
});
