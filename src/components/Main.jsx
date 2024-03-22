import React, { useEffect, useState } from 'react'
import requests from '../Requests';
import axios from 'axios';

export const Main = () => {
    const [movies,setmovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setmovies(response.data.results)
        })
    }, [])
    console.log(movie);
    
  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full'>
        <img className='w-full h-full object-fit' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
      </div>
    </div>
  )
}
