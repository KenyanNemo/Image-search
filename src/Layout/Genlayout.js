// import {useState, useEffect} from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faBell, faUser, faBars } from "@fortawesome/free-solid-svg-icons"
// const API_KEY = process.env.REACT_APP_API_KEY;
import {Outlet, useLocation} from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";


export default function Layout() {
  const location = useLocation();
  
  return (
    <div>
       <header>
        <Navigation/>
      </header>
       
    <main>
    <Outlet/>
    </main>

    <footer>
      {location.pathname!=='/'
      && location.pathname!=='/search'?
      <Footer/>: null}
    </footer>

    </div>

  )
}
