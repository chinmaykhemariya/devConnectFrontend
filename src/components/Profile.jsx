import { useSelector } from "react-redux"
import EditProfile from "./EditProfile"


const Profile = () => {
    let user=useSelector((state)=>state.user.user)
  return (
   <EditProfile data={user}/>
  )
}

export default Profile