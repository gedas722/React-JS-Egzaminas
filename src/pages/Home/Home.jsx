import React, { useState, useEffect } from "react";
import "./style.css";

// Components
import Navbar from "../../components/Navbar";
import Filter from "../../components/Filter";
import Tiles from "../../components/Tiles";
import Tile from "../../components/Tile";
import Footer from "../../components/Footer";

// API
import { getData } from "../../utils/api";

function Home() {
  const [hotel, setHotel] = useState(null);
  const getRentalData = async () => {
    let data = await getData();
    if (data instanceof Error) {
    } else {
      setHotel(data);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      getRentalData();
    }, 2000);
  }, []);

  return (
    <div className="home-page">
      <Navbar />
      <Filter />
      <Tiles>
        <div className="rental-tile">
          {hotel &&
            hotel.map((el, val) => {
              return <Tile key={val} img={el.imageUrl} name={el.name} price={el.price} currency={el.priceCurrency} />;
            })}
        </div>
      </Tiles>
      <Footer />
    </div>
  );
}

export default Home;
