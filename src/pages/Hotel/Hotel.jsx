import React from "react";
import "./style.css";

// Components
import Navbar from "../../components/Navbar";
import Filter from "../../components/Filter";
import Footer from "../../components/Footer";

const Hotel = () => {
  return (
    <div>
      <Navbar />
      <Filter />
      <div className="hotel-container">Hotel</div>
      <Footer />
    </div>
  );
};

export default Hotel;
