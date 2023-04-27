import React from "react";
import { Link } from "react-router-dom";

import "../constants/Home.css";
import BannerImage from "../constants/bg1-transformed.jpeg"

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
      <h1>EDIWEB</h1>
      <br></br>
        <p> A community based approach to culinary connoisseurs looking for a safe space to present their original recipes, interests or even just explore!</p>
        <Link to="/menu">
        <br></br>
          <button> EXPLORE </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
