import React from "react";
import { mount } from "enzyme";
import ButtonPanel from "../ButtonPanel";
import { translation } from "../../config";
import * as helper from "../../helpers/randomRatingHelper";

import "../../jest.setup";

const INITIAL_PROPS = {
  isRandomRating: false,
  movieList: {},
  toggleRandomRating: jest.fn(),
  updateMovieList: jest.fn()
};

describe("<ButtonPanel />", () => {
  it("should render the div element & button", () => {
    const wrapper = mount(<ButtonPanel {...INITIAL_PROPS} />);

    expect(wrapper.find("div").hasClass("ratingBtn__container")).toBe(true);
    expect(wrapper.find("button").text()).toEqual(translation.button.start);
  });

  it("should call the 'toggleRandomRating' & 'startRandomRating' on button click", function() {
    const wrapper = mount(<ButtonPanel {...INITIAL_PROPS} />),
      mockFn = jest.spyOn(helper, "startRandomRating");

    wrapper
      .find("button")
      .first()
      .simulate("click");

    expect(INITIAL_PROPS.toggleRandomRating).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalled();
  });

  it(
    "should render button with text 'stop' & call the 'toggleRandomRating' & " +
      "'stopRandomRating' on button click",
    () => {
      const props = {
          ...INITIAL_PROPS,
          isRandomRating: true
        },
        wrapper = mount(<ButtonPanel {...props} />),
        mockFn = jest.spyOn(helper, "stopRandomRating");

      wrapper
        .find("button")
        .first()
        .simulate("click");

      expect(wrapper.find("button").text()).toEqual(translation.button.stop);
      expect(INITIAL_PROPS.toggleRandomRating).toHaveBeenCalled();
      expect(mockFn).toHaveBeenCalled();
    }
  );
});
