import React from "react";
 import {useState,useEffect} from "react"
 import ReactLoading from 'react-loading';
 import "./Nav.css"
const Home =()=>{
  const [data ,setdata] = useState([])
  const [Loding ,setLoding] = useState(false)

  useEffect(()=>{
  fetch("https://dummyjson.com/products")
  .then(response=>response.json()).then((res)=>setdata(res.products)).catch(()=>{console.log("data not found")})
  setLoding(true);
   
   

  },[])

  {
    console.log(data)
  }
  return (
    <>
  
      <div className="box">
      {
        (!Loding)? <ReactLoading type={"sspinningBubbles"} color={"skyblue"} height={667} width={375} /> :
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