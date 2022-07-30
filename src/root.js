import {Routes,Route,useNavigate} from "react-router-dom";
import Home from'./page/home/home'
import Add from'./page/add/add'
import Auth from'./page/auth/auth'
import {useState,useEffect}from'react'
export default function Popup(){
  let history=useNavigate()
  useEffect(()=>{
    if (!localStorage.getItem('token')) {
    history('/auth')
  }else{

  }
  },[])
  return (
<Routes>
<Route path="/" element={<Home />}/>
<Route path="/add" element={<Add />}/>
<Route path="/auth" element={<Auth />}/>
</Routes>
    )
}