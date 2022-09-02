import React from "react";
 import {useState,useEffect} from "react"

 import "./Nav.css"
 import Loading from "./Loading"
 import Login from "./Login"
const Home =()=>{
  const [data ,setdata] = useState([])
  const [Loding ,setLoding] = useState(false)
  const [Search , setSearch]=useState("")

  useEffect(()=>{
    setTimeout(()=>{
      fetch("https://dummyjson.com/products")
      .then(response=>response.json()).then((res)=>setdata(res.products)).catch(()=>{console.log("data not found")})
      setLoding(true);
       
       
    },2000)


  },[])

  {
    console.log(data)
  }
  return (
    <>
       <input type="text" placeholder="Search.." value={Search} onChange={(e)=>setSearch(e.target.value)}/>
      <div className="box">
      {
       
        (!Loding)? <Loading/> :
      data.filter((item)=>{
        if(Search==""){
          return item;
        }else if(
          item.brand.toLowerCase().includes(Search.toLowerCase())){
          return item;
        }
      }).map((data)=>(
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