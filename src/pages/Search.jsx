import axios from "axios";
import React, { useState } from "react";
import Card from "../component/Card";

const URL = import.meta.env.VITE_CYCLIC_URL;
const USERNAME = import.meta.env.VITE_CYCLIC_USERNAME;
const PASSWORD = import.meta.env.VITE_CYCLIC_PASSWORD;

const config = {
  auth: {
    username: USERNAME,
    password: PASSWORD,
  },
};

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  const Change = (e) => {
    setKeyword(e.target.value);
  };

  const EnterSearch = async (event) => {
    if (event.key === "Enter") {
      try {
        const res = await axios.get(`${URL}/Food`, config);
        const filter = res.data.filter((restaurant) =>
          restaurant.name.toLowerCase().includes(keyword.toLowerCase())
        );
        setRestaurants(filter);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        placeholder="Search"
        value={keyword}
        onChange={Change}
        onKeyPress={EnterSearch}
      />

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {restaurants.map((restaurant) => (
          <Card restaurant={restaurant} key={restaurant.id} />
        ))}
      </div>
    </div>
  );
};

export default Search;
