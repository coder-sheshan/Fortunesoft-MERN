import React, {useEffect, useState} from "react";
import "../../Styles/MovieCard.css";
import { useLocation } from "react-router-dom";
import { Axios } from "../../Data/Axios";

const MainCard = () => {
  const [movieresult, setMovieResult] = useState({});

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const paramValue = queryParams.get('id');

  console.log(paramValue);

useEffect(() => {
  const apiCall = async (id) => {
    try {
      const response = await Axios.get(`/movie/${paramValue}`);
      setMovieResult(response?.data?.data)
      console.log(response.data);
      // console.log(genere.emtArr.map((e) => e.map((f) => f)))
    } catch (err) {
      console.log(err);
    }
  };
  apiCall();
},[])

  const backgroundImageUrl =movieresult?.backdrop || "";

  const mainBanner = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center center",
    color: "white",
    objectFit: "contain",
    height: "100vh",
    overflowX: "hidden", 
    overflowY:"hidden",
  };
  return (
    <div className="card-banner" style={mainBanner}>
      <div className="card-banner_contents">
        <h1 className="card-banner_title">{movieresult?.title}</h1>
        <div className="card-banner_buttons">
          <button className="card-banner_button">Play</button>
        </div>
        <div className="card-banner_description">{movieresult?.overview}</div>
      </div>
      <div className="card-banner_fadeBottom"></div>
    </div>
  );
};

export default MainCard;
