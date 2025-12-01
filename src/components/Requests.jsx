import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { baseUrl } from "../utils/constants";
import { addRequests } from "../utils/requestSlice";
import { useEffect } from "react";
import { addConnections } from "../utils/connectionsSlice";
const Requests = () => {

  const requests=useSelector((state)=>state.requests.requests);
  const dispatch=useDispatch();
  const getRequests=async()=>{try{
    if(requests){return;}
    let result=await axios.get(baseUrl+"/user/requests/recieved",{withCredentials:true});
    result=result.data.data;
    dispatch(addRequests(result))}
    catch(err){
      console.log(err.message)
    }
  }
  useEffect(()=>{getRequests()},[]);
  if(!requests){return }
  if(requests.length==0){return <h1>no requests</h1>}

  return (<>{
   requests.length>0&&
   <div className="flex justify-center" >
  <div className="carousel mt-5 space-x-4 ">
    {requests.map((request)=>{
        return(
  <div key={request._id} className="carousel-item ">
    <div className="card bg-base-300 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={request.fromUserId.photoUrl}
      alt="request image" className="w-86 h-66 rounded-xl object-cover object-center " />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{request.fromUserId.firstName+" "+request.fromUserId.lastName+" ,"+request.fromUserId.age}</h2>
    <p>{request.fromUserId.about>40?request.fromUserId.about.slice(0,40)+"...":request.fromUserId.about}</p>
     <p>I like {request.fromUserId.skills>40?request.fromUserId.about.slice(0,40)+"...":request.fromUserId.skills}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-success btn-soft" onClick={async()=>{
        try{
          await axios.patch(baseUrl+`/request/review/accepted/${request._id}`,{},{withCredentials:true})
           let result=await axios.get(baseUrl+"/user/requests/recieved",{withCredentials:true});
           result=result.data.data;
           dispatch(addRequests(result))
           let connections=await axios.get(baseUrl+"/user/connections",{withCredentials:true})
            connections=connections.data.data
            dispatch(addConnections(connections))
        }
        catch(err){console.log(err.message)}
      }}>Let’s Go</button>
      <button className="btn btn-error btn-soft"
      onClick={async()=>{try{console.log("rejected")
         await axios.patch(baseUrl+`/request/review/rejected/${request._id}`,{},{withCredentials:true})
          let result=await axios.get(baseUrl+"/user/requests/recieved",{withCredentials:true});
          result=result.data.data;
           dispatch(addRequests(result))}
           catch(err){console.log(err.message)}
      }}
      >I’ll Pass</button>
    </div>
  </div>
</div>
  </div>)
})
}
</div>
</div>

  }
    </>
  )
}

export default Requests