import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="page">
        <nav className="page__menu menu">
          <ul className="menu__list r-list">
            <div className="logo">FLICKS</div>

            <li className="menu__group">
              <Link
                className="menu__link  text-underlined"
                id="trending"
                to="/movie/popular"
              >
                Trending
              </Link>
            </li>
            <li className="menu__group">
              <Link id="topRated" className="menu__link text-underlined" to="/">
                Top rated
              </Link>
            </li>
            <li className="menu__group">
              <Link
                className="menu__link  text-underlined"
                id="upcoming"
                to="/movie/upcoming"
              >
                Upcoming
              </Link>
            </li>
            <li className="menu__group">
              <Link
                className="menu__link  text-underlined"
                id="nowShowing"
                to="/movie/nowshowing"
              >
                Now Showing
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
