import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

// CSS Imports
import "./Navbar.css";

// Context Import
import ThemeContext from "../../context/ThemeContext";

// Component Import
import useMovieList from "../../hooks/useMovieList";
import useDebounce from "../../hooks/useDebounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  // const resultListRef = useRef(null); // Using useRef for autocomplete input Bar
  const [isAutoCompleteVisible, setIsAutoCompleteVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { movieList } = useMovieList(searchTerm);
  const navigator = useNavigate();
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);
  function handleAutoCompleteClick(e, movieImdbId) {
    navigator(`/movie/${movieImdbId}`);
  }
  function updateTheme() {
    if (theme == "dark") {
      setTheme("light");
      localStorage.setItem("app-theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("app-theme", "dark");
    }
  }
  return (
    <div className="navbar-wrapper">
      <div className="movie-base-title">
        <Link to="/">Movie Base</Link>
      </div>
      <div className="search-bar">
        <input
          id="movie-search-input"
          type="text"
          placeholder="What movie you want to search for ...."
          // onFocus={() => {
          //   resultListRef.current.style.display = "block";
          // }}
          // onBlur={() => {
          //   resultListRef.current.style.display = "none";
          // }}
          onFocus={() => {
            setIsAutoCompleteVisible(true);
          }}
          onBlur={() => {
            setIsAutoCompleteVisible(false);
          }}
          onChange={useDebounce((e) => {
            setSearchTerm(e.target.value);
          })}
        />
        {/* <div id="result-list" ref={resultListRef}> */}
        <div
          id="result-list"
          style={{ display: isAutoCompleteVisible ? "block" : "none" }}
        >
          <div className="autocomplete-result">Result for {searchTerm}</div>
          {movieList.length > 0 &&
            movieList.map((movie) => (
              <div
                onMouseDown={(e) => handleAutoCompleteClick(e, movie.imdbID)}
                key={movie.imdbID}
                className="autocomplete-result"
              >
                {movie.Title}
              </div>
            ))}
        </div>
      </div>
      <div onClick={updateTheme}>
        <FontAwesomeIcon
          className="theme-icon"
          icon={theme == "dark" ? faSun : faMoon}
        />
      </div>
    </div>
  );
}

export default Navbar;
