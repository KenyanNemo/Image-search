import {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faUser, faBars } from "@fortawesome/free-solid-svg-icons"
import {NavLink, useNavigate} from "react-router-dom";


export default function Navigation(){
  
  const [info, setInfo] =useState("")
  const navigate = useNavigate()

  const handleChange= (e)=>{
    setInfo(e.target.value)
    };
  
  const Submit =(e) => {
    e.preventDefault();
    navigate('/search', {state:info})
    setInfo('');
  };

return(
<nav className='sticky'>
        <NavLink to='/' className='logohome'><h1> UNSP </h1></NavLink>
        <form className='wholeSearch' id='searchForm'>
          <button className='searchButton' type='Submit' onClick={Submit} ></button>
          <input className='searchBox' type='text' id='searchForm' placeholder="Search high-resolution images" onChange={handleChange} value={info}></input>
          
        </form>
        <NavLink to='advertise'> Advertise</NavLink>
        <NavLink to='blog'> Blog</NavLink>
        <NavLink to='unsplash'> Unsplash+</NavLink>
        <button>Submit a photo</button>
        <i><FontAwesomeIcon icon={faBell} size="lg"/></i>
        <i><FontAwesomeIcon icon={faUser} size="lg"/></i>
        <i className='menuBar'><FontAwesomeIcon icon={faBars} size="lg"/></i>
        <NavLink to='search'></NavLink>
        </nav>
)}