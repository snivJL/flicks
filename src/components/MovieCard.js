import React from "react";
import "./moviecard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShareAlt } from "@fortawesome/free-solid-svg-icons";

const MovieCard = ({ card }) => {
  const url =
    "https://fsmedia.imgix.net/cd/c9/5e/ba/4817/4d9a/93f0/c776ec32ecbc/lara-crofts-neck-looks-unnatural-in-the-new-poster-for-tomb-raider.png";
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
            <h1>{card.title}</h1>
            <h4>{card.release_date}</h4>
            <span className="minutes">{`${card.vote_average} (${card.vote_count} votes)`}</span>
            <p className="type">Action, Fantasy</p>
          </div>
          <div className="movie_desc">
            <p className="text">
              {card.overview.length > 200
                ? `${card.overview.slice(0, 200)}...`
                : card.overview}
            </p>
          </div>
          <div className="movie_social">
            <ul>
              <li>
                <FontAwesomeIcon
                  style={{ fontSize: "1.5rem", color: "red" }}
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
