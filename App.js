import React from "react";

import { useState,useEffect } from "react";
import Home from './Home';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Products from './Products';
import Contact from './Contact';
import Header from './Header'
import PageNotFound from './PageNotFound';

function App(){
    const [isLogedIn, setIsLogedIn]=useState(false)


    return(
    <>
    
  <BrowserRouter>
 <Header
 isLogedIn={isLogedIn}
 setIsLogedIn={setIsLogedIn}
 />
  <Routes>
  <Route path='/' element={<Home isLogedIn={isLogedIn} />} />
  <Route path='Products' element={isLogedIn==true? <Products/>:<Navigate to="/"/>} />
  <Route path='contact' element={<Contact/>} />
  <Route path='*' element={<PageNotFound/>} />
  </Routes>
  </BrowserRouter>
    </>)
}
export default App;