import React from "react";
import "./style.css";
import Nav from "./Navbar"
import Home from "./Home"
import About from  "./About"
import Login from "./Login"
import Signup from "./Signup"
import Pagenot from "./Pagenot"
 
import {Routes ,Route}  from "react-router-dom"
export default function App() {
  return (
    <div>
    <Nav/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="singup" element={<Signup/>}></Route>
    <Route path="about" element={<About/>}></Route>
    <Route path="login" element={<Login/>}></Route>
    <Route path="*" element={<Pagenot/>}></Route>
      
      </Routes>
    </div>
  );
}
