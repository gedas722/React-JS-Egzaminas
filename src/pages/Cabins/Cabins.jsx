import React from "react";

//Components
import Navbar from "../../components/Navbar";
import Filter from "../../components/Filter";
import Footer from "../../components/Footer";

function Cabins() {
  return (
    <div>
      <Navbar />
      <Filter />
      <div className="inner-page-text">
        <h1>Cabins</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Cabins;
