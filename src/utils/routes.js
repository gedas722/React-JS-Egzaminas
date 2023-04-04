import React from "react";
import { useParams } from "react-router-dom";

// Pages
import Hotel from "../pages/Hotel";
import Cabins from "../pages/Cabins";
import NotFound from "../pages/NotFound";

// Routing function for filter items
function ChooseComponent() {
  const { id } = useParams();

  if (id === "hotels") {
    return <Hotel />;
  } else if (id === "cabins") {
    return <Cabins />;
  } else {
    return <NotFound />;
  }
}

export default ChooseComponent;
