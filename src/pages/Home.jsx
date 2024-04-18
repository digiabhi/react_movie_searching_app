import { useEffect, useState } from "react";
import { searchMovie } from "../apis/omdb";

// Components import
import MovieCard from "../components/MovieCard/MovieCard";

// CSS imports
import "./Home.css";
import useMovieList from "../hooks/useMovieList";

function Home() {
  const { movieList } = useMovieList("harry", "avengers", "batman");

  return (
    <>
      {/* Navbar */}
      {/* Movie List */}
      {/* Pagination Buttons */}
      <div className="movie-card-wrapper">
        {movieList.length > 0 &&
          movieList.map((movie) => (
            <MovieCard key={movie.imdbID} id={movie.imdbID} {...movie} />
          ))}
      </div>
    </>
  );
}

export default Home;
