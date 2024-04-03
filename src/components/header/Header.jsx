// import React from 'react'

import "./Header.scss";
import logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="nav--items__left">
            <a href="#" className="logo">
              <img src={logo} alt="" />
            </a>
            <div className="nav__items">
              <a href="#" className="nav__links">
                Phone
              </a>
              <a href="#" className="nav__links">
                Smart Home
              </a>
              <a href="#" className="nav__links">
                Life Style
              </a>
            </div>
          </div>
          <div className="nav--items__right">
            <div className="nav__items">
              <a href="#" className="nav__links">
                Discover
              </a>
              <a href="#supprot" className="nav__links">
                Support
              </a>
            </div>
            <div className="nav__btns">
              <button className="btn-search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000"
                  // stroke-width="2"
                  // stroke-linecap="round"
                  // stroke-linejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
              <button className="btn-user">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000"
                  // stroke-width="2"
                  // stroke-linecap="round"
                  // stroke-linejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
