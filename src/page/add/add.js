import './add.css'
import { Link} from "react-router-dom";
import { AiOutlineUser } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { RiLockPasswordLine } from 'react-icons/ri';
import {useState,useEffect}from'react'
import axios from'axios'
import {useNavigate} from "react-router-dom";
export default function Add(){
  let history=useNavigate()
  let [name,setName]=useState('')
  let [phone,setPhone]=useState()
  let [age,setAge]=useState()
  let [load,setLoad]=useState(false)
  let login=async()=>{
let uri='http://10.146.12.71:8080/cendident'
setLoad(true)
    try {
      let token=localStorage.getItem('token')
  let res=await axios.post(uri,{name,phone,age,token})
  setLoad(false)
    } catch (e) {
      alert('try again data not store')
      setLoad(false)
    }
  }
  let go=()=>{
    history(-1)
  }
  return (
    <>
    {!load?
    <div className='auth'>
    <main className='back'>
    <BiArrowBack size='35px' onClick={go}/>
    </main>
    <div>
    <span>Candident</span>
    <div>
    <AiOutlineUser size='20px'/>
    <input type='text' placeholder='full name'
    onChange={(e)=>setName(e.target.value)}/>
    </div>
    <div>
    <RiLockPasswordLine size='20px'/>
    <input type='number' placeholder='phone number'
    onChange={(e)=>setPhone(e.target.value)}/>
    </div>  
    <div>
    <RiLockPasswordLine size='20px'/>
    <input type='number' placeholder='age'
    onChange={(e)=>setAge(e.target.value)}/>
    </div>
    <button onClick={login}>Add</button>
    </div>
    </div>:<div className='load'>
    <div></div>
    <span>Loading...</span>
    </div>}
    </>
    )
}