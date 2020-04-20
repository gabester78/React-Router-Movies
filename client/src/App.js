import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = (movie) => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div className="container">
      <SavedList list={savedList} />
      <div>
        <Route exact path="/">
          <MovieList />
        </Route>

        <Route path="/movie/:id">
          <Movie />
        </Route>
      </div>
    </div>
  );
};

export default App;
