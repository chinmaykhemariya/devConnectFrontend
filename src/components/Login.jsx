
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { baseUrl } from '../utils/constants'
const Login = () => {
  const [isWrong,setWrong]=useState(false);
    const dispatch=useDispatch()
    const navigate=useNavigate()
const[user,setLoginDetails]=useState({emailId:"",password:""})
function handleLoginDetails(event){
let fieldName=event.currentTarget.name;
let fieldValue=event.currentTarget.value;
setLoginDetails((prev)=>{
    return{...prev,[fieldName]:fieldValue}
})
}
async function  Login(){
    try{
let result =await axios.post(baseUrl+"/user/login",{
    emailId:user.emailId,
    password:user.password
},{withCredentials:true})

    dispatch(addUser(result.data.user))
   // setWrong(false)
  navigate("/feed")
}
catch(err){
  if(err.status==401){
    setWrong(true);
    
  }
}
}

  return (
   <>
 <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
       "Log in to jump back into your developer hangout—chat with creators, exchange ideas, and team up on projects. Your next big idea might start with one message!"
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
   
      <div className="card-body">
       
        <fieldset className="fieldset">
            
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name="emailId" value={user.emailId} onChange={handleLoginDetails} />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" name='password' value={user.password} onChange={handleLoginDetails} />
         {isWrong&&<p >Incorrect Credentials</p>}
         
          <button className="btn btn-neutral mt-4" onClick={Login}>Login</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
   </>
  )
}

export default Login