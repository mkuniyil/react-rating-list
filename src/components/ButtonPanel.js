import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { translation } from "../config";
import {
  startRandomRating,
  stopRandomRating
} from "../helpers/randomRatingHelper";
import "./ButtonPanel.css";

class ButtonPanel extends Component {
  /**
   * Method which returns the button text
   *
   * @returns {string}
   */
  getButtontext() {
    return this.props.isRandomRating
      ? translation.button.stop
      : translation.button.start;
  }

  /**
   * Event handler for button click
   */
  clickHandler() {
    const {
      isRandomRating,
      movieList,
      toggleRandomRating,
      updateMovieList
    } = this.props;

    isRandomRating
      ? stopRandomRating()
      : startRandomRating(movieList, updateMovieList);
    toggleRandomRating();
  }

  render() {
    return (
      <div className="ratingBtn__container">
        <span>{translation.randomRatingText}</span>
        <Button variant="contained" onClick={() => this.clickHandler()}>
          {this.getButtontext()}
        </Button>
      </div>
    );
  }
}

export default ButtonPanel;
