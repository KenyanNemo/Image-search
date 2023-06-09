import {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
const API_KEY = process.env.REACT_APP_API_KEY;

export default function Search() {
  const [res, setRes] =useState([])
  const {state} = useLocation();
  
  const fetchResults = async ()=>{
    const data = await fetch (
      `https://api.unsplash.com/search/photos?page=1&query=${state}&client_id=${API_KEY}&per_page=50`,
      {
        method: 'GET',
        headers: { 
          'X-RapidAPI-Key':process.env.REACT_APP_API_KEY
        }}
        );
        // console.log('Search:', search);
    const dataJ = await data.json();
    console.log(dataJ)
    const result = dataJ.results;
    // console.log(result);
    setRes(result);
  };

  useEffect(() =>{
      fetchResults();
    }, [state]);

  return (
  <div className='imageContainer'>
        <div >
        {res.map((sm) => {
        return (<>
        <img className='displayImages' key={sm.id} src={sm.urls.small} alt="sm.alt_description"/>
        </>)
        })}
       </div>
       </div>
    
  )
}

