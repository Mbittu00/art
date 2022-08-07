import "./info.css";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import axios from'axios'
import {useState,useEffect}from'react'
export default function Info() {
  let history = useNavigate();
    let go = () => {
    history(-1);
  };
  let [data,setData]=useState({})
  let [load,setLoad]=useState(false)
  useEffect(()=>{
    let call=async()=>{
  let uri='https://art-two.vercel.app/cat'
      try {
    let res=await axios.get(uri)
    setData(res.data)
    setLoad(true)
  //  console.log(res.data)
      } catch (e) {
        alert('something is wrong')
        setLoad(false)
      }
    };call()
  },[])
  return (
  <>
  {load?
    <div className="info">
      <span>Candident info</span>
        <main className="back">
            <BiArrowBack size="30px" onClick={go} />
          </main>
      <div className="mainCard">
        <div className="card">
          <div>
            <span>4></span>
            <span>{data.a}</span>
          </div>
          <div>
            <span>4-8</span>
            <span>{data.b}</span>
          </div>
           </div>
           <div className='card'>
          <div>
            <span>8-11</span>
            <span>{data.c}</span>
          </div>
          <div>
            <span>11-above</span>
            <span>{data.d}</span>
          </div>
        </div>
      </div>
    </div>:<div className='load'>
    <div></div>
    <span>Loading...</span>
    </div>}
    </>
  );
}
