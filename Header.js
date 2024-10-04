import React from 'react';
import './App.css';
import { Link, NavLink } from "react-router-dom";

function Header(prop) {

  function RenderButton(){
    if(prop.isLogedIn==false){
return <button 
onClick={()=>{prop.setIsLogedIn(true)}}
type="button" class="btn btn-outline-success">Login</button>
    }else{
     return  <button 
     onClick={()=>{prop.setIsLogedIn(false)}}
     type="button" class="btn btn-outline-success">Logout</button>
    }
  }
  return (
    <>
    <div id='header'>
    <NavLink to ="./" activeClassName="active">Home</NavLink>
    {prop.isLogedIn==true? <NavLink to ="./products" activeClassName="active" >Products</NavLink>:""}
    <NavLink to ="./Contact"  activeClassName="active">Contact</NavLink>
    <RenderButton/>

    </div>
    </>
  );
}

export default Header;
