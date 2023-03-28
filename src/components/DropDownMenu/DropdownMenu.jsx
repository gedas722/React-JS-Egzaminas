import React from "react";
import "./style.css";

function DropdownMenu() {
  return (
    <div className="drop-down-menu">
      <ul className="drop-down-menu-list">
        <li className="bold-text">Sign up</li>
        <li>Log in</li>
        <div className="div-line"></div>
        <li>Airbnb your home</li>
        <li>Host an experience</li>
        <li>Help</li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
