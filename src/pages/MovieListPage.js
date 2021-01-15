import React from "react";
import { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm";
import MovieCard from "../components/MovieCard";
const API_KEY = process.env.REACT_APP_BACKEND_API_KEY;
const API_URL = process.env.REACT_APP_URL_API;
const MovieListPage = ({ type }) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [loading, setLoading] = useState(true);
  const [filterTerm, setFilterTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = type !== undefined ? type : "top_rated";
      try {
        setLoading(true);
        const res = await fetch(
          `${API_URL}/movie/${endpoint}?api_key=${API_KEY}`
        );
        const data = await res.json();
        console.log(data);
        setMovies(data.results);
        setFilteredMovies(data.results);
        setLoading(false);
        console.log("TYPE", type);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [type]);

  useEffect(() => {
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().startsWith(filterTerm.toLowerCase())
    );

    setFilteredMovies(filteredMovies);
  }, [filterTerm]);
  return (
    <>
      <SearchForm onChange={(e) => setFilterTerm(e.target.value)} />
      <div>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          filteredMovies.map((movie) => (
            <li key={movie.id}>
              <MovieCard card={movie} />
            </li>
          ))
        )}
      </div>
    </>
  );
};

export default MovieListPage;
