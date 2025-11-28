
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { baseUrl } from "../utils/constants"
import { useEffect } from "react"
import { addFeed } from "../utils/feedSlice"
import UserCard from "./userCard"

const Feed = () => {
    const dispatch=useDispatch();
  const feed=useSelector((state)=>state.feed.feed);
  
    const getFeed=async()=>{
     
      try{
         if(feed.length>0){return;}
      console.log("feed")
        let newFeed=await axios.get(baseUrl+"/user/feed",{withCredentials:true});
        dispatch(addFeed(newFeed.data.feed))
        console.log(newFeed.data.feed)
      }
      catch(err){
        console.log(err)
      }
    }
    useEffect(()=>{getFeed()},[])
  return (<>
    {feed.length>0&&<UserCard user={feed[0]}></UserCard>}
  </>)
}

export default Feed;