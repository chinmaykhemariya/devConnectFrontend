import { useSelector ,useDispatch} from "react-redux"
import{Link}from"react-router-dom"
import axios from "axios"
import { baseUrl } from "../utils/constants"
import { removeUser } from "../utils/userSlice"
import appStore from "../utils/appStore"
import { removeFeed } from "../utils/feedSlice"
import { destroyConnections } from "../utils/connectionsSlice"
import { destroyRequests } from "../utils/requestSlice"

const NavBar = () => {
  
  const dispatch=useDispatch()
  const user=useSelector((state=>state.user.user))
  const logOut=async(event)=>{
    try{
    //  console.log(appStore.getState())
    dispatch(removeUser())
    dispatch(removeFeed())
    dispatch(destroyConnections())
    dispatch(destroyRequests())
    // console.log(appStore.getState())
    await axios.post(baseUrl+"/user/logout",{},{withCredentials:true})
    
      
  }
    catch(err){
      console.log(err.message)
    }
  }
  return (
   <>
   {user&&<div className="navbar bg-base-content shadow-sm">
  <div className="flex-1">
    <Link to="/spark/feed" className="btn btn-ghost bg-base-content shadow text-error-content text-xl ">devConnect</Link>
  </div>
  <div className="flex gap-2">
    
    <div className="dropdown dropdown-end me-3 ">
      
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full ">
          <img
            alt="Tailwind CSS Navbar component"
            src={user?.photoUrl} />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/spark/profile" className="justify-between">
            Profile
            <span className="badge">Edit</span>
          </Link>
        </li>
        <li><Link to="/spark/connections" >LinkZone</Link></li>
        <li><Link to="/spark/requests" >Knocks</Link></li>
        <li><a>Settings</a></li>
        <li><Link to="/" onClick={logOut}>Logout</Link></li>
      </ul>
    </div>
  </div>
</div>
}
   </>
  )
}

export default NavBar