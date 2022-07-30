import './home.css'
import { IoIosColorPalette } from 'react-icons/io';
import { AiOutlinePlus } from 'react-icons/ai';
import axios from'axios'
import {useState,useEffect}from'react'
import { useNavigate} from "react-router-dom";
export default function Home(){
  let history=useNavigate()
  let [can,setCan]=useState([])
  let [load,setLoad]=useState()
  useEffect(()=>{
   async function call() {
     let uri='https://art-two.vercel.app/get/all'
setLoad(true)
    try {
      let token=localStorage.getItem('token')
  let res=await axios.post(uri,{token})
  setCan(res.data)
  setLoad(false)
    } catch (e) {
      alert('something is wrong')
      setLoad(false)
    }
   };call() 
  },[])
  let go=()=>{
    history('/add')
  }
  return (
    <>{!load?
    <div className='home'>
    <div>
    <div>
    <span>Junior and senior art contest</span>
    <IoIosColorPalette size='30px'/>
    </div>
    <span>15 August special</span>
    </div>
    {/*candident start*/}
    <div className='main'>
    {
 can.map((e)=>(
    <div className='can' key={e._id}>
    <div>
   <span>{e.name}</span>
   <span>Age {e.age}</span>
   </div>
   <span>{e.phone}</span>
    </div>
 ))
    }
    </div>
    <div className='float'>
    <AiOutlinePlus size='40px' onClick={go}/>
    </div>
    </div>:<div className='load'>
    <div></div>
    <span>Loading...</span>
    </div>}
    </>
    )
}