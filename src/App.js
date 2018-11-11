import React, { Component } from "react";
import "./App.css";
import MovieListContainer from "./containers/MovieListContainer";
import ButtonPanelContainer from "./containers/ButtonPanelContainer";
import { translation } from "./config";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>{translation.header}</h2>
        <MovieListContainer />
        <ButtonPanelContainer />
      </div>
    );
  }
}

export default App;
