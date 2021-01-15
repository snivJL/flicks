import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="page">
        <nav className="page__menu menu">
          <ul className="menu__list r-list">
            <li className="menu__group">
              <div className="menu__link r-link text-underlined">
                <Link to="/"> Top rated</Link>
              </div>
            </li>
            <li className="menu__group">
              <div className="menu__link r-link text-underlined">
                <Link to="/movies/upcoming"> Upcoming</Link>
              </div>
            </li>
            <li className="menu__group">
              <a href="#0" className="menu__link r-link text-underlined">
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
