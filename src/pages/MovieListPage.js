import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import MovieCard from "../components/MovieCard";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

const API_KEY = process.env.REACT_APP_BACKEND_API_KEY;
const API_URL = process.env.REACT_APP_URL_API;
const MovieListPage = ({ type }) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterTerm, setFilterTerm] = useState("");
  const [sliderMarks, setSliderMarks] = useState([0, 10]);
  const [sliderYearMarks, setSliderYearMarks] = useState([1900, 2021]);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = type !== undefined ? type : "top_rated";
      try {
        setLoading(true);
        const res = await fetch(
          `${API_URL}/movie/${endpoint}?api_key=${API_KEY}`
        );
        console.log(`${API_URL}/movie/${endpoint}?api_key=${API_KEY}`);
        const data = await res.json();
        console.log(data);
        setMovies(data.results);
        setFilteredMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [type]);

  useEffect(() => {
    const filterMovies = movies
      .filter(
        (movie) =>
          movie.vote_average >= sliderMarks[0] &&
          movie.vote_average <= sliderMarks[1]
      )
      .filter(
        (date) =>
          parseInt(date.release_date.slice(0.4)) >= sliderYearMarks[0] &&
          parseInt(date.release_date.slice(0.4)) <= sliderYearMarks[1]
      )
      .filter((movie) =>
        movie.title.toLowerCase().includes(filterTerm.toLowerCase())
      );
    console.log("FILTER MOVIE :", filterMovies);
    setFilteredMovies(filterMovies);
  }, [sliderMarks, sliderYearMarks, filterTerm]);

  const handleSlider = (e) => {
    setSliderMarks(e);
  };
  const handleSliderYear = (e) => {
    setSliderYearMarks(e);
  };
  return (
    <>
      <div className="sidebar">
        <h3 style={{ textAlign: "center" }}>Ratings</h3>
        <Range
          max={10}
          step={0.01}
          marks={{ 0: sliderMarks[0], 10: sliderMarks[1] }}
          onChange={handleSlider}
        />
        <h3 style={{ textAlign: "center" }}>Year</h3>
        <Range
          min={1900}
          max={2021}
          step={1}
          marks={{ 0: sliderYearMarks[0], 2021: sliderYearMarks[1] }}
          onChange={handleSliderYear}
        />
      </div>
      <div>
        <SearchForm onChange={(e) => setFilterTerm(e.target.value)} />

        <div>
          {loading ? (
            <h1>Loading</h1>
          ) : (
            filteredMovies.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  <MovieCard card={movie} />
                </Link>
              </li>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default MovieListPage;
