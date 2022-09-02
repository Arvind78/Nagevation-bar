import React,{useState} from "react";
import "./Nav.css"
import {NavLink} from "react-router-dom"

const Nav =()=>{
 
  return (
  <>
  <header className="header">
  <NavLink to ="/">Home</NavLink>
  <NavLink to ="/about">About</NavLink>
  <NavLink to ="/login">Login</NavLink>
  <NavLink to ="/singup">Signup</NavLink>



 
   
</header>
    </>
  )
}
export default Nav;