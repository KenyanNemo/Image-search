import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
const API_KEY = process.env.REACT_APP_API_KEY;


export default function Home() {
const[show, setShow] = useState([]);
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


  const display = async ()=>{
    const dis = await fetch (
      `https://api.unsplash.com/photos?page=1&client_id=${API_KEY}&per_page=50`,
      // {
      //   method: 'GET',
      //   headers: { 
      //     'X-RapidAPI-Key':process.env.REACT_APP_API_KEY
      //   }}
        );
        
    const disJ = await dis.json();
    console.log(disJ)
    // const result = disJ.results;
    // console.log(result);
    setShow (disJ);
  };

    useEffect(() =>{
    display();
    }, []);

    

    return (
      <div>
        <div className='mainImageContainer'>
         {/* {show.length> 0 &&
              <img  
              className='mainImage'
              key={show[0].id}
              src={show[0].urls.small} 
              alt="show[0].alt_description"/>
          } */}
          <img className='mainImage' src='https://images.unsplash.com/photo-1685776611502-2c6c05f9c48f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' alt='fullimage'/>
          <div className='secondSearch'>
          <h1>Unspl</h1> <br/>
          <p>The internet’s source for visuals.</p>
          <p>Powered by creators everywhere.</p><br/>
          <form className='wholeSearch2' id='searchForm'>
          <button className='searchButton2' type='Submit' onClick={Submit} ></button>
          <input className='searchBox2' type='text' id='searchForm' placeholder="Search high-resolution images" onChange={handleChange} value={info}></input>
          </form>
          </div>
        </div>
        <div className='imageContainer'>
              {show.map((sm) => (
              <img className='displayImages' key={sm.id} src={sm.urls.small} alt="sm.alt_description"/>
              ))
              }
        </div>
        </div>
    )
}


