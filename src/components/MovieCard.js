import React, { useState, useEffect } from "react";
import "./moviecard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { faHeart, faShareAlt, faStar } from "@fortawesome/free-solid-svg-icons";

// https://api.themoviedb.org/3/genre/movie/list?api_key=430811050a45e411c3025a7085596f92&language=en-US

// URL TO FETCH GENRE

const MovieCard = ({ movieGenres, card }) => {
  // const [genres, setGenres] = useState([]);
  const [movieGenre, setMovieGenre] = useState([]);
  useEffect(() => {
    setMovieGenre(
      movieGenres.genres.reduce((acc, genre) => {
        if (card.genre_ids.includes(genre.id)) acc.push(genre.name);
        return acc;
      }, [])
    );
  }, []);
  const toggleClassName = (e) => {
    e.target.parentNode.style.cssText.includes("red")
      ? (e.target.parentNode.style.cssText = "font-size: 1.5rem;")
      : (e.target.parentNode.style.cssText = "font-size: 1.5rem; color: red");
  };
  return (
    <>
      <div className="movie_card" id="tomb">
        <div className="info_section">
          <div className="movie_header">
            <img
              className="locandina"
              src={`https://image.tmdb.org/t/p/w500/${card.poster_path}`}
              alt="poster"
            />
            <h1>
              {card.title.length > 30
                ? `${card.title.slice(0, 30)}...`
                : card.title}
            </h1>
            <h4>{card.release_date.slice(0, 4)}</h4>
            <span className="rating">
              <FontAwesomeIcon
                style={{ fontSize: "2rem", color: "yellow" }}
                icon={faStar}
              />
              <div className="ratings-stat">
                <div>
                  <span className="average-rating">{card.vote_average}</span>/10
                </div>
                <div>{card.vote_count} votes</div>
              </div>
            </span>
            {
              <>
                {movieGenre.map((gen) => (
                  <p key={gen} className="minutes">
                    {gen}
                  </p>
                ))}
              </>
            }
          </div>
          <div className="movie_desc">
            <p className="text">
              {card.overview.length > 250
                ? `${card.overview.slice(0, 250)}...`
                : card.overview}
            </p>
            <div className="button-see-more">
              <Link to={`/movie/${card.id}`}>
                See More
                <span className="shift">›</span>
              </Link>
              <div className="mask"></div>
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
    </>
  );
};

export default MovieCard;
