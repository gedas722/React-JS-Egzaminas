import React from "react";
import { Link } from "react-router-dom";
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
    { title: "Hotels", icon: <HotelIcon />, path: "/hotels" },
    { title: "Cabins", icon: <CabinIcon />, path: "/cabins" },
    { title: "Trending", icon: <WhatshotIcon />, path: "/trending" },
    { title: "Amazing Views", icon: <PanoramaIcon />, path: "/amazing-views" },
    { title: "Outdoors", icon: <TerrainIcon />, path: "/outdoors" },
    { title: "Off-the-grid", icon: <ForestIcon />, path: "/off-the-grid" },
    { title: "Boats", icon: <SailingIcon />, path: "/boats" },
    { title: "City", icon: <LocationCityIcon />, path: "/city" },
    { title: "Private rooms", icon: <BedroomChildIcon />, path: "/private-rooms" },
    { title: "Cottages", icon: <CottageIcon />, path: "/cottages" },
    { title: "Villas", icon: <HolidayVillageIcon />, path: "/villas" },
    { title: "Castles", icon: <CastleIcon />, path: "/castles" },
    { title: "Camping sites", icon: <FestivalIcon />, path: "/camping-sites" },
  ];
  return (
    <div className="filter-container">
      <div className="filtering">
        {filterArr.map((el, i) => (
          <ul className="filtered-items" key={i}>
            <Link className="filter-link" to={el.path}>
              <li>{el.icon}</li>
              <li className="icon-title">{el.title}</li>
            </Link>
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
