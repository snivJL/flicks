import React, { useEffect, useState } from "react";

const Genres = ({ card }) => {
  const [movieGenres, setMovieGenres] = useState([]);
  const [movieGenre, setMovieGenre] = useState([]);
  const [loading, setLoading] = useState(true);

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
    console.log("HERE", movieGenres, card);
    // setMovieGenre(
    //   movieGenres.genres.reduce((acc, genre) => {
    //     console.log("IN ACC", acc);
    //     if (card.genre_ids.includes(genre.id)) acc.push(genre.name);
    //     return acc;
    //   }, [])
    // );
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <h1>
          {movieGenre.map((gen) => (
            <p key={gen.id} className="minutes">
              {gen}
            </p>
          ))}
        </h1>
      )}
    </div>
  );
};

export default Genres;
