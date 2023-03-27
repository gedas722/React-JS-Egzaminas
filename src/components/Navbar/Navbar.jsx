import React from "react";
import "./style.css";
import logo from "../../logo/airbnb-logo.png";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="search-label">
        <div className="search-label-text">Anywhere</div>
        <div className="search-label-text-grey">|</div>
        <div className="search-label-text">Any week</div>
        <div className="search-label-text-grey">|</div>
        <div className="search-label-text-grey">Add quests</div>
        <div className="search-icon-container">
          <SearchIcon className="search-icon" />
        </div>
      </div>
      <div className="profile-label"></div>
    </div>
  );
}

export default Navbar;
