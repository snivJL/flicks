import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const API_KEY = process.env.REACT_APP_BACKEND_API_KEY;
const API_URL = process.env.REACT_APP_URL_API;

const ShowMovieDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
        const data = await res.json();
        setMovie(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return <div>{loading ? <h1>Loading</h1> : <MovieCard card={movie} />}</div>;
};

export default ShowMovieDetails;
