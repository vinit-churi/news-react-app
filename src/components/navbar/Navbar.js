import React from "react";
import "./Navbar.scss";
const Navbar = ({ handleSearch, handleChange }) => {
  return (
    <>
      <nav className="navbar">
        <h1 className="navbar_title">TIMES SQUARE TRIBUNE</h1>
        <div className="nav-menu">
          <ul>
            <li className="nav-list_first">
              <a href="#">GENERAL</a>
            </li>
            <li>
              <a href="#">HEALTH</a>
            </li>
            <li>
              <a href="#">SCIENCE</a>
            </li>
            <li>
              <a href="#">SPORTS</a>
            </li>
            <li>
              <a href="#">TECHNOLOGY</a>
            </li>
            <li>
              <a href="#">SPORTS</a>
            </li>
            <li>
              <a href="#">ENTERTAINMENT</a>
            </li>
          </ul>
          <form action="">
            <input
              className="form-text-input"
              onChange={(e) => handleChange(e)}
              type="text"
            />
            <button onClick={handleSearch}>search</button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
