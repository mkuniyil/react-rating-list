import React, { Component } from "react";
import Rating from "react-star-rating-component";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { getSortedList } from "../helpers/listHelper";
import "./MovieList.css";

class MovieList extends Component {
  componentDidMount() {
    this.props.getMovieList();
  }

  /**
   * Eevnt handler for star icon click
   *
   * @param {number} nextValue
   * @param {number} prevValue
   * @param {string} name
   */
  onStarClick(nextValue, prevValue, name) {
    this.props.updateRating(nextValue, name);
  }

  render() {
    const movieList = this.props.movieList,
      sortAttribute = "rating";

    return (
      <div className="movie__list">
        {Object.keys(movieList)
          .sort(getSortedList(movieList, sortAttribute))
          .map(entry => {
            return (
              <List key={entry}>
                <ListItem>
                  <div className="movie__name">{entry}</div>
                  <Rating
                    name={entry}
                    starCount={10}
                    value={movieList[entry].rating}
                    onStarClick={this.onStarClick.bind(this)}
                  />
                </ListItem>
              </List>
            );
          })}
      </div>
    );
  }
}

export default MovieList;
