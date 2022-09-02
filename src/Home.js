import React from "react";
 import {useState,useEffect} from "react"
 import "./Nav.css"
const Home =()=>{
  const [data ,setdata] = useState([])

  useEffect(()=>{
  fetch("https://dummyjson.com/products")
  .then(response=>response.json()).then((res)=>setdata(res.products)).catch(()=>{console.log("data not found")})
   
   

  },[])

  {
    console.log(data)
  }
  return (
    <>
  
      <div className="box">
      {
      data.map((data)=>(
        // console.log(data.brand)
      
        <div className="data">
    <h3>  {data.brand}</h3>
     <img src={data.thumbnail} alt="error"/>
     
        </div>
      ))
    }
      </div>
  
    </>
  )
}
export default  Home;