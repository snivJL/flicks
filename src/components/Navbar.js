import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div>
      <div class="page">
        <nav class="page__menu menu">
          <ul class="menu__list r-list">
            <li class="menu__group">
              <Link to="/">
                <a href="#0" class="menu__link r-link text-underlined">
                  Top rated
                </a>
              </Link>
            </li>
            <li class="menu__group">
              <Link to="/movies/upcoming">
                <a href="#0" class="menu__link r-link text-underlined">
                  Upcoming
                </a>
              </Link>
            </li>
            <li class="menu__group">
              <a href="#0" class="menu__link r-link text-underlined">
                Option #3
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
