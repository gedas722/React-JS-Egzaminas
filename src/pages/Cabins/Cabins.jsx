import React, { useState, useEffect } from "react";
import Tile from "../../components/Tile";
import { getData } from "../../utils/api";

const Cabins = () => {
  const [cabins, setCabins] = useState([]);
  const [filterQuery, setFilterQuery] = useState("");

  useEffect(() => {
    fetch(getData)
      .then((response) => response.json())
      .then((data) => setCabins(data))
      .catch((error) => console.error(error));
  }, []);

  const handleFilterChange = (event) => {
    setFilterQuery(event.target.value);
  };

  const filteredFlats = cabins.filter((cabins) => cabins.name.toLowerCase().includes(filterQuery.toLowerCase()));

  return (
    <div>
      <input type="text" value={filterQuery} onChange={handleFilterChange} />
      <Tile cabins={filteredFlats} />
    </div>
  );
};

export default Cabins;
