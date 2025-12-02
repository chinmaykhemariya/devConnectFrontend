import Empty from "./Empty"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { baseUrl } from "../utils/constants"
import { useEffect, useState } from "react"
import { addFeed } from "../utils/feedSlice"
import UserCard from "./userCard"
import Loader from "./Loader"

const Feed = () => {
    const dispatch=useDispatch();
  const feed=useSelector((state)=>state.feed.feed);
  const [isEmpty,setEmpty]=useState(false)
  
    const getFeed=async()=>{
     
      try{
         
      
        let newFeed=await axios.get(baseUrl+"/user/feed",{withCredentials:true});
        newFeed=newFeed.data.feed;
        if(newFeed.length==0){setEmpty(true)}
        dispatch(addFeed(newFeed))
      
      }
      catch(err){
        console.log(err)
      }
    }
    useEffect(()=>{getFeed()},[])
    if(!feed){return(<Loader/>)}
    
  return (<>
    {feed.length>0&&<UserCard user={feed[0]} setEmpty={setEmpty}></UserCard>}
    {isEmpty&&<Empty>Done for the Day .Get Premium</Empty>}
  </>)
}

export default Feed;