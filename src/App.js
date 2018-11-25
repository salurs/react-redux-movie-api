import React, { Component } from "react";
import "./App.css";
import { Link, Route } from "react-router-dom";
//local
import MoviesPage from "./components/pages/MoviesPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="movies">Movies</Link>
          <Route path="/movies" component={MoviesPage} />
        </header>
      </div>
    );
  }
}

export default App;
