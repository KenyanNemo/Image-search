import React from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
 } from "react-router-dom"

import Home from "./pages/Home"
import Advertise from "./pages/Advertise"
import Blog from "./pages/Blog"
import Unsplash from "./pages/Unsplash"
import Genlayout from './Layout/Genlayout'


 const router  = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Genlayout/>}>
            <Route path='Home' element={<Home />} />
            <Route path='advertise' element={<Advertise/>} />
            <Route path='blog' element={<Blog />} />
            <Route path='unsplash' element={<Unsplash />} />
        </Route>
    )
 )

 function App(){
  return (
    <RouterProvider router={router}/>
  )
}

export default App
