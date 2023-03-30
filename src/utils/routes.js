import React from "react";
import Hotel from "../pages/Hotel";

function routes() {
  const routes = [
    { path: "/hotels", component: <Hotel /> },
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
      {routes.map((route, index) => (
        <div className="routes" key={index}>
          {route.path}
        </div>
      ))}
      ;
    </div>
  );
  // koreguoti ir eksprotuoti i Filter.jsx <Link to={route.path}
}

export default routes;
