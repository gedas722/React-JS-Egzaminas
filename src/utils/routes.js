import React from "react";
import Hotel from "../pages/Hotel";
import { Link } from "react-router-dom";

function linkRoutes() {
  const routesArr = [
    { path: "/hotels", component: <Hotel /> },
    { path: "/cabins", component: <Hotel /> },
    { path: "/trending", component: <Hotel /> },
    { path: "/amazing-views", component: <Hotel /> },
    { path: "/outdoors", component: <Hotel /> },
    { path: "/off-the-grid", component: <Hotel /> },
    { path: "/boats", component: <Hotel /> },
    { path: "/city", component: <Hotel /> },
    { path: "/private-rooms", component: <Hotel /> },
    { path: "/cottages", component: <Hotel /> },
    { path: "/villas", component: <Hotel /> },
    { path: "/castles", component: <Hotel /> },
    { path: "/camping-sites", component: <Hotel /> },
  ];
  return (
    <div>
      {routesArr.map((route, key) => {
        return <Link path={route.path} key={key} />;
      })}
    </div>
  );
  // koreguoti ir eksportuoti i Filter.jsx <Link to={route.path}/>
}

export default linkRoutes;
