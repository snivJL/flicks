import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <Link to="/">Home / Top rated</Link>
      <Link to="/movies/upcoming">Upcoming</Link>
    </div>
  );
};

export default Navbar;
