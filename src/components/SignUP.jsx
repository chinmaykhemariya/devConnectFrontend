import { useState } from "react";
import { baseUrl } from "../utils/constants";
import {  useNavigate } from 'react-router-dom'
import axios from "axios"
const SignUP = () => {
    const navigate=useNavigate()
    const [user,editUser]=useState({firstName:"",lastName:"",age:"",gender:"",about:"",skills:"",emailId:"",password:""});
     const[error,setError]=useState(false)
     function handleEdit(event){
        let fieldName=event.currentTarget.name;
        let fieldValue=event.currentTarget.value;
      //  console.log(event.target.name+" "+fieldName+" "+fieldValue+" "+event.target.value)
        editUser((prev)=>{
            return {...prev,[fieldName]:fieldValue}
        })
    }
    async function signUpTheUser(){
        try{
            const result=await axios.post(baseUrl+"/user/signup",user,{withCredentials:true})
            navigate("/login")
        }
        catch(err){
            if(err.status==400){
                setError(true)
            }
        }
    }
  return (
    <>
    
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col md:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6 ">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
         <label className="label">FirstName</label>
          <input type="text" className="input" placeholder="FirstName" name="firstName" value={user.firstName} onChange={handleEdit} />
     <label className="label">LastName</label>
          <input type="text" className="input" placeholder="LastName" name="lastName" value={user.lastName} onChange={handleEdit} />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name="emailId" value={user.emailId} onChange={handleEdit} />
            <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" name="password" value={user.password} onChange={handleEdit} />

          <label className="label">About</label>
          <input type="text" className="input" placeholder="About" name="about" value={user.about} onChange={handleEdit}/>
        <label className="label">Skills</label>
          <input type="text" className="input" placeholder="Skills" name="skills" value={user.skills} onChange={handleEdit} />
           <div className="flex w-full ">
             <div className="card bg-base-100 rounded-box grid h-20 grow place-items-center ">
                
            <label className="label">Age</label>
          <input type="number" className="input " placeholder="Age" name="age" value={user.age} onChange={handleEdit} />
          </div>
          <div className="divider divider-horizontal"></div>
           <div className="card bg-base-100 rounded-box grid h-20 grow place-items-center">
           <label className="label">Gender</label>
            <select value={user.gender} className="select appearance-none" name="gender" onChange={handleEdit}>
            <option disabled value={""} >Choose an option</option>
            <option  >men</option>
           <option >women</option>
            <option value="others" >others</option>
            </select>
            </div>
            </div>
           
        {error&&<p>Incorrect handling of edit details</p>}
          <button className="btn btn-neutral mt-4" onClick={signUpTheUser} >signUp</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
    </>
    
  )
}

export default SignUP