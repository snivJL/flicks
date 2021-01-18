import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShareAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import ShowReviews from "./ShowReviews";
import Genre from "./Genres";
import { Link } from "react-router-dom";

const API_KEY = process.env.REACT_APP_BACKEND_API_KEY;

const MovieCardDetails = ({ card }) => {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  const toggleClassName = (e) => {
    e.target.parentNode.style.cssText.includes("red")
      ? (e.target.parentNode.style.cssText = "font-size: 1.5rem;")
      : (e.target.parentNode.style.cssText = "font-size: 1.5rem; color: red");
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${card.id}/reviews?api_key=${API_KEY}`
        );
        const data = await res.json();
        console.log(data);

        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRecommendations = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${card.id}/recommendations?api_key=${API_KEY}`
        );
        const data = await res.json();
        console.log("RECOMMENDATION", data);

        setRecommendations(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
    fetchRecommendations();
  }, []);
  console.log(card);
  return (
    <div>
      <>
        <div className="movie_card_large" id="tomb">
          <div className="info_section">
            <div className="movie_header">
              <img
                className="locandina"
                src={`https://image.tmdb.org/t/p/w500/${card.poster_path}`}
                alt="poster"
              />

              <h1>{card.title}</h1>
              <h4>{card.release_date.slice(0, 4)}</h4>
              <span className="rating">
                <FontAwesomeIcon
                  style={{ fontSize: "2rem", color: "yellow" }}
                  icon={faStar}
                />
                <div className="ratings-stat">
                  <div>
                    <span className="average-rating">{card.vote_average}</span>
                    /10
                  </div>
                  <div>{card.vote_count} votes</div>
                </div>
              </span>
            </div>
            <Genre card={card} />
            <div className="movie_desc">
              <p className="text">{card.overview}</p>
              <div className="similar-movies">
                <h3>You will also like</h3>
                <div className="slideshow">
                  {recommendations.slice(0, 4).map((reco) => (
                    <Link to={`/movie/${reco.id}`}>
                      <div className="slideshow-card">
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${reco.poster_path}`}
                          alt="poster"
                        />
                        <p className="slideshow-title">{reco.title}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="movie_social">
              <ul>
                <li onClick={toggleClassName}>
                  <FontAwesomeIcon
                    style={{ fontSize: "1.5rem" }}
                    icon={faHeart}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    style={{ color: "white", fontSize: "1.5rem" }}
                    icon={faShareAlt}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div
            className="blur_back tomb_back"
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/original/${card.backdrop_path}")`,
            }}
          ></div>
        </div>
        {loading ? (
          <h3>Loading</h3>
        ) : (
          <ul>
            <ShowReviews reviews={reviews} />
          </ul>
        )}
      </>
    </div>
  );
};

export default MovieCardDetails;
