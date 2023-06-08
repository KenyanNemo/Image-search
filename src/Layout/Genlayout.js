// import {useState, useEffect} from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faBell, faUser, faBars } from "@fortawesome/free-solid-svg-icons"
// const API_KEY = process.env.REACT_APP_API_KEY;
import {Outlet} from "react-router-dom";
import Navigation from "./Navigation";


export default function Layout() {
  // const [search, setSearch] =useState("")
  // const [res, setRes] =useState([])

  // const handleChange= (e)=>{
  //   setSearch(e.target.value)
  //   };
  
  // const fetchResults = async ()=>{
  //   const data = await fetch (
  //     `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${API_KEY}&per_page=50`,
  //     {
  //       method: 'GET',
  //       headers: { 
  //         'X-RapidAPI-Key':process.env.REACT_APP_API_KEY
  //       }}
  //       );
  //       console.log('Search:', search);
  //   const dataJ = await data.json();
  //   console.log(dataJ)
  //   const result = dataJ.results;
  //   // console.log(result);
  //   setRes(result);
  // };
   
  // // useEffect(() =>{
  // //   fetchResults();
  // // }, []);

  // const Submit =(e) => {
  //   e.preventDefault();
  //   fetchResults();
  //   setSearch('');
  // };

  return (
    <div>
       <header>
        <Navigation/>
      </header>
       
    <main>
    <Outlet/>
    </main>
    </div>

  )
}
// export default 