import React from "react";
import "../../Styles/MovieCard.css";

const MainCard = () => {
  const backgroundImageUrl =
    "https://w0.peakpx.com/wallpaper/923/790/HD-wallpaper-money-heist-netflix-la-casa-de-papel-money-heist-tv-shows.jpg";

  const mainBanner = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center center",
    color: "white",
    objectFit: "contain",
    height: "450px",
    overflowX: "hidden", 
    overflowY:"hidden",
  };
  return (
    <div className="card-banner" style={mainBanner}>
      <div className="card-banner_contents">
        <h1 className="card-banner_title">Money Heist</h1>
        <div className="card-banner_buttons">
          <button className="card-banner_button">Play</button>
        </div>
        <div className="card-banner_description">
          Batman raises the stakes in his war on crime. With the help of Lt. Jim
          Gordon and District Attorney Harvey Dent, Batman sets out to dismantle
          the remaining criminal organizations that plague the streets. The
          partnership proves to be effective, but they soon find themselves prey
          to a reign of chaos unleashed by a rising criminal mastermind known to
          the terrified citizens of Gotham as the Joker.
        </div>
      </div>
      <div className="card-banner_fadeBottom"></div>
    </div>
  );
};

export default MainCard;
