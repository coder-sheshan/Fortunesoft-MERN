import React from 'react'
import Navbar from '../Components/NavBar/Navbar';
import '../Styles/MoviePage.css'
import MainCard from '../Components/MainCard/MainCard';
import MovieCard from '../Components/MovieCard/MovieCard';

const MoviePage = () => {
  return (
    <div className='moviepage'>
      <Navbar/>
      <MainCard/>
      <MovieCard/>
    </div>
  )
}

export default MoviePage
