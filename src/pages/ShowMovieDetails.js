import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieCardDetails from "../components/MovieCardDetails";
import Spinner from "../components/Spinner";

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

  return <div>{loading ? <Spinner /> : <MovieCardDetails card={movie} />}</div>;
};

export default ShowMovieDetails;
