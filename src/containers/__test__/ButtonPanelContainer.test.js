import React from "react";
import { shallow } from "enzyme";
import ButtonPanel from "../../components/ButtonPanel";
import ButtonPanelContainer from "../ButtonPanelContainer";
import configureStore from "redux-mock-store";
import "../../jest.setup";

const mockStore = configureStore();

describe("ButtonPanelContainer", () => {
  let wrapper, store;

  const state = {
    movieList: {},
    isRandomRating: false
  };

  beforeEach(() => {
    store = mockStore(state);
    store.dispatch = jest.fn();
    wrapper = shallow(<ButtonPanelContainer store={store} />);
  });

  it("should render ButtonPanel conponent", () => {
    expect(wrapper.find(ButtonPanel).length).toEqual(1);
  });

  it("should attach respective props to the component", () => {
    expect(wrapper.find(ButtonPanel).props().movieList).toEqual(
      state.movieList
    );

    expect(wrapper.find(ButtonPanel).props().isRandomRating).toEqual(
      state.isRandomRating
    );
  });
});
