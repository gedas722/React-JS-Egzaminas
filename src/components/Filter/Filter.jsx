import React from "react";
import "./style.css";

//MUI Icons
import HotelIcon from "@mui/icons-material/Hotel";
import CabinIcon from "@mui/icons-material/Cabin";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import PanoramaIcon from "@mui/icons-material/Panorama";
import TerrainIcon from "@mui/icons-material/Terrain";
import ForestIcon from "@mui/icons-material/Forest";
import SailingIcon from "@mui/icons-material/Sailing";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import BedroomChildIcon from "@mui/icons-material/BedroomChild";
import CottageIcon from "@mui/icons-material/Cottage";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import CastleIcon from "@mui/icons-material/Castle";
import FestivalIcon from "@mui/icons-material/Festival";
import TuneIcon from "@mui/icons-material/Tune";

function Filter() {
  const filterArr = [
    { title: "Hotels", icon: <HotelIcon /> },
    { title: "Cabins", icon: <CabinIcon /> },
    { title: "Trending", icon: <WhatshotIcon /> },
    { title: "Amazing Views", icon: <PanoramaIcon /> },
    { title: "Outdoors", icon: <TerrainIcon /> },
    { title: "Off-the-grid", icon: <ForestIcon /> },
    { title: "Boats", icon: <SailingIcon /> },
    { title: "City", icon: <LocationCityIcon /> },
    { title: "Private rooms", icon: <BedroomChildIcon /> },
    { title: "Cottages", icon: <CottageIcon /> },
    { title: "Villas", icon: <HolidayVillageIcon /> },
    { title: "Castles", icon: <CastleIcon /> },
    { title: "Camping sites", icon: <FestivalIcon /> },
  ];
  return (
    <div className="filter-container">
      <div className="filtering">
        {filterArr.map((el, key) => (
          <ul className="filtered-items" key={key}>
            <li>{el.icon}</li>
            <li className="icon-title">{el.title}</li>
          </ul>
        ))}
      </div>
      <div className="filter-btn">
        <div className="filter-btn-icon">
          <TuneIcon />
        </div>
        <div className="filter-btn-txt">Filters</div>
      </div>
    </div>
  );
}

export default Filter;
