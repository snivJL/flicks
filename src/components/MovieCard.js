import React from "react";
import "./moviecard.scss";

const MovieCard = ({ card }) => {
  return (
    <>
      <div class="movie_card" id="tomb">
        <div class="info_section">
          <div class="movie_header">
            <img
              class="locandina"
              src="https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg"
            />
            <h1>Tomb Raider</h1>
            <h4>2018, Roar Uthaug</h4>
            <span class="minutes">125 min</span>
            <p class="type">Action, Fantasy</p>
          </div>
          <div class="movie_desc">
            <p class="text">
              Lara Croft, the fiercely independent daughter of a missing
              adventurer, must push herself beyond her limits when she finds
              herself on the island where her father disappeared.
            </p>
          </div>
          <div class="movie_social">
            <ul>
              <li>
                <i class="material-icons">share</i>
              </li>
              <li>
                <i class="material-icons"></i>
              </li>
              <li>
                <i class="material-icons">chat_bubble</i>
              </li>
            </ul>
          </div>
        </div>
        <div class="blur_back tomb_back"></div>
      </div>
    </>
  );
};

export default MovieCard;
