import React from "react";
import "./style.css";

const Tile = ({ img, name, price, currency }) => {
  return (
    <div className="tile-container">
      <div className="grid-container">
        <img className="tile-img" src={img} alt="" />
        <h4 className="tile-header">{name}</h4>
        <p>
          <span>
            {currency} {price}
          </span>
          <p className="per-night">per night</p>
        </p>
      </div>
    </div>
  );
};

export default Tile;
