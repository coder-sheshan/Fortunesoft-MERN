import React from "react";
import "../../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header className="header">
        <div className="navbar">
          <a href="/" className="logo">
            WOOKIE <span>MOVIES</span>
          </a>
          <select className="category-select">
            <option disabled selected>
              Select a Genres:
            </option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
          </select>
          <div className="search-box">
            <span className="search-icon">&#128270;</span>
            <input type="text" className="search-input" placeholder="Search..." />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
