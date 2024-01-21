import React, { useEffect, useState } from 'react'
import requests from '../Requests';
import axios from 'axios';

export const Main = () => {
    const [movies,setmovies] = useState([]);

    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setmovies(response.data)
        })
    }, [])
    console.log(movies);
    
  return (
    <div>main</div>
  )
}
