
import { Outlet, useNavigate } from 'react-router-dom'
import NavBar from "./NavBar"
import Footer from './Footer'
import axios from 'axios'
import { baseUrl } from '../utils/constants'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'


const Body = () => {
  const user=useSelector((state)=>state.user.user)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  let fetchUser=async()=>{
    try{
      if(user){return;}
   //   console.log("api")
      let result=await axios.get(baseUrl+"/profile/view",{withCredentials:true});
      let newUser=result.data.user
      if(newUser){
        dispatch(addUser(newUser))
      }
    }
    catch(err){
      if(err.status==401){
        console.log(err.response.data)
       return navigate("/login")
      }
     console.log(err.message)
    }
  }
  useEffect(()=>{
    
    fetchUser()
  },[]);
  return (
    
    <>
    {user&&
    <div className='flex flex-col min-h-screen'>  
    <NavBar />
        <div className='flex-1'>
            <Outlet/>
        </div>
      <Footer />
    </div>}
    </>

  )
}

export default Body
