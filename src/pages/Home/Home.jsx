import React, { useState, useEffect } from "react";
import "./style.css";

// Components
import Tiles from "../../components/Tiles";
import Tile from "../../components/Tile";

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
    }, 1000);
  }, []);

  return (
    <div className="home-page">
      <Tiles>
        <div className="rental-tile">
          {hotel &&
            hotel.map((el, val) => {
              return <Tile key={val} img={el.imageUrl} name={el.name} price={el.price} currency={el.priceCurrency} />;
            })}
        </div>
      </Tiles>
    </div>
  );
}

export default Home;
