import './auth.css'
import { Link} from "react-router-dom";
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import {useState,useEffect}from'react'
import axios from'axios'
import {useNavigate} from "react-router-dom";
export default function Login(){
  let history=useNavigate()
  let [username,setUsername]=useState('')
  let [password,setPasswore]=useState('')
  let [load,setLoad]=useState(false)
  let login=async()=>{
let uri='http://10.146.12.71:8080/login'
setLoad(true)
    try {
  let res=await axios.post(uri,{username,password})
  let str=res.data.token.toString()
  localStorage.setItem('token',str)
  history('/')
    } catch (e) {
      alert(e)
      setLoad(false)
    }
  }
  return (
    <>
    {!load?
    <div className='auth'>
    <div>
    <span>Login</span>
    <div>
    <AiOutlineUser size='20px'/>
    <input type='text' placeholder='username'
    onChange={(e)=>setUsername(e.target.value)}/>
    </div>
    <div>
    <RiLockPasswordLine size='20px'/>
    <input type='password' placeholder='password'
    onChange={(e)=>setPasswore(e.target.value)}/>
    </div>
    <button onClick={login}>login</button>
    <Link to='/register' className='bc'>register</Link>
    </div>
    </div>:<div className='load'>
    <div></div>
    <span>Loading...</span>
    </div>}
    </>
    )
}