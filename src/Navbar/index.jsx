import React, { useState } from "react";
import './style.css';
// import {Navigate, useNavigate} from "react-router-dom";
import {searchMovies} from "../utilis/utilities";

const Navbar =() => {
  const [searchInput, setSearchInput] = useState("");
  const [searchMovie, setSearchMovie] = useState([]);
  // const navigate=useNavigate();

  const handleInput = (event) => {
    setSearchInput(event.target.value);
  };
  const handleSearch = async () => {
    const results = await searchMovies(searchInput);
    setSearchMovie(results.results);
    // navigate("search-results")
  };
  return (
    <div className="Navigation">
      <nav className="nav">
        <div>
          <h1 className="movie-heading">
            Movies
          </h1>
        </div>
        <div className="input_button">
          <input
            value={searchInput}
            onChange={handleInput}
            type="text"
            placeholder="Enter Movies or Series name"
          />
          <button onClick={handleSearch} className="search-button">Search</button>
        </div>
        <div className="link-home">
        <a href="components  ">Home</a>
        </div>
        <div>
        <h4 className="list">My list</h4>
        </div>
        <button className="sign-in-button"> Sign In</button>
      </nav>
        {searchMovie.length > 0 && (
        <div className="search-results">
          {searchMovie.map((movie) => (
            <div key={movie.id} className="search-result">
              <img
                src={ `https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              {/* <p>{movie.overview}</p> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Navbar;