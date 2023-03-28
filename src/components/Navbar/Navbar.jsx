import React, { useState } from "react";
import "./style.css";
import logo from "../../logo/airbnb-logo.png";

// MUI icons
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import DropdownMenu from "../DropDownMenu/DropdownMenu";

function Navbar() {
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="search-label">
        <div className="bold-text">Anywhere</div>
        <div className="grey-text">|</div>
        <div className="bold-text">Any week</div>
        <div className="grey-text">|</div>
        <div className="grey-text">Add quests</div>
        <div className="search-icon-container">
          <SearchIcon className="search-icon" />
        </div>
      </div>
      <div className="profile-label">
        <div className="airbnb-home">Airbnb your home</div>
        <div className="globe-div">
          <LanguageIcon className="globe-icon" />
        </div>
        <div className="dropdown-menu" onClick={() => setOpenProfile((prev) => !prev)}>
          <div className="burger-icon"></div>
          <div className="profile-icon">
            <MenuIcon className="menu-icon" />
            <PersonIcon className="person-icon" />
          </div>
        </div>
      </div>
      {openProfile && <DropdownMenu />}
    </div>
  );
}

export default Navbar;
