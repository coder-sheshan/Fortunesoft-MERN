import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/NavBar/Navbar";
import "../Styles/MoviePage.css";
import MainCard from "../Components/MainCard/MainCard";
import MovieCard from "../Components/MovieCard/MovieCard";
import ViewSearch from "../Components/ViewSearch";
import { Axios } from "../Data/Axios";


const MoviePage = ({search, setSearch, searchresult, setSearchResult }) => {
  // const [search, setSearch] = useState("");
  // const [searchresult, setSearchResult] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("signedJWT");
    if (!token) {
      navigate("/");
    }
  }, []);

  // useEffect(() => {
  //   if(search?.length > 2){
  //     const apiCall = async (id) => {
  //       try {
  //         const response = await Axios.get(`/search/${search}`);
  //         setSearchResult(response.data)
  //         console.log(response.data);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  //     apiCall();
  //   }
  // },[search])
  return (
    <div className="moviepage">
      {search?.length == 0 && (
        <>
          <MovieCard />
        </>
      )}
      {
        search?.length !== 0 && <ViewSearch searchresult={searchresult}/>
      }
    </div>

  );
};

export default MoviePage;
