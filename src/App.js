import React from 'react'
import {
    createHashRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
 } from "react-router-dom"

import Home from "./pages/Home"
import Advertise from "./pages/Advertise"
import Blog from "./pages/Blog"
import Unsplash from "./pages/Unsplash"
import Genlayout from './Layout/Genlayout'
import Search from './pages/Search'


 const router  = createHashRouter(
    createRoutesFromElements(
        <Route path="/" element={<Genlayout/>}>
            <Route path='/' element={<Home />} />
            <Route path='advertise' element={<Advertise/>} />
            <Route path='blog' element={<Blog />} />
            <Route path='unsplash' element={<Unsplash />} />
            <Route path='search' element={<Search />}/>
        </Route>
    )
 )

 function App(){
  return (
    <RouterProvider router={router}/>
  )
}

export default App
