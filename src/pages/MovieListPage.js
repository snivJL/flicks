import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import MovieCard from "../components/MovieCard";
import Sidebar from "../components/Sidebar";
import Spinner from "../components/Spinner";
import "rc-slider/assets/index.css";

const API_KEY = process.env.REACT_APP_BACKEND_API_KEY;
const API_URL = process.env.REACT_APP_URL_API;
const MovieListPage = ({ type }) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [sortedMovies, setSortedMovies] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterTerm, setFilterTerm] = useState("");
  const [sliderMarks, setSliderMarks] = useState([0, 10]);
  const [sliderYearMarks, setSliderYearMarks] = useState([1900, 2021]);
  const [optionChanged, setOptionChanged] = useState(false);
  const handleChangeSort = (e) => {
    switch (e.target.value) {
      case "ratingsAsc":
        sortList("vote_average", ">");
        break;
      case "ratingsDesc":
        sortList("vote_average", "<");
        break;
      case "popularityAsc":
        sortList("popularity", ">");
        break;
      case "popularityDesc":
        sortList("popularity", "<");
        break;
      default:
        console.log(e.target.value);
    }
  };
  const sortList = (criteria, type) => {
    let arr = [];
    criteria === "vote_average"
      ? type === ">"
        ? (arr = filteredMovies.sort((a, b) =>
            b.vote_average < a.vote_average ? 1 : -1
          ))
        : (arr = filteredMovies.sort((a, b) =>
            b.vote_average > a.vote_average ? 1 : -1
          ))
      : console.log(arr);
    setSortedMovies(arr);
    setOptionChanged(true);
  };
  //GET GENRE
  useEffect(() => {
    const getGenre = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=430811050a45e411c3025a7085596f92&language=en-US`
        );
        const data = await res.json();
        setMovieGenres(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getGenre();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      // const endpoint = type !== undefined ? type : "top_rated";
      console.log("TYPE", type);
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/movie/${type}?api_key=${API_KEY}`);
        console.log(`${API_URL}/movie/${type}?api_key=${API_KEY}`);
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
  }, [sliderMarks, sliderYearMarks, filterTerm, optionChanged]);

  const handleSlider = (e) => {
    setSliderMarks(e);
  };
  const handleSliderYear = (e) => {
    setSliderYearMarks(e);
  };
  return (
    <>
      <div className="sidebar">
        <Sidebar
          handleSlider={handleSlider}
          sliderMarks={sliderMarks}
          handleSliderYear={handleSliderYear}
          sliderYearMarks={sliderYearMarks}
          handleChangeSort={handleChangeSort}
        />
      </div>
      <div>
        {/* <SearchForm onChange={handleChange} /> */}

        <div>
          {loading ? (
            <Spinner />
          ) : sortedMovies.length === 0 ? (
            filteredMovies.map((movie) => (
              <li key={movie.id}>
                <MovieCard movieGenres={movieGenres} card={movie} />
              </li>
            ))
          ) : (
            sortedMovies.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  <MovieCard movieGenres={movieGenres} card={movie} />
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
