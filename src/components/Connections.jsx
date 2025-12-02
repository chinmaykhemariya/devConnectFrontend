import axios from "axios"
import { baseUrl } from "../utils/constants"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addConnections } from "../utils/connectionsSlice"
import Empty from "./Empty"
import Loader from "./Loader"


const Connections = () => {
    const userConnections=useSelector((state)=>state.connections.connections);
    const dispatch=useDispatch()
    const[isEmpty,setEmpty]=useState(false)
    async function getConnections(){
        try{
            let connections=await axios.get(baseUrl+"/user/connections",{withCredentials:true})
            connections=connections.data.data
            if(connections.length==0){setEmpty(true)}
            dispatch(addConnections(connections))
        }
        catch(err){
          console.log(err.message)  
        }
    }
    useEffect(()=>{getConnections()},[])
     if(!userConnections){return (<Loader/>)}
    
   
  return (
<>{
   userConnections.length>0&&<div className="flex justify-center" >
  <div className="carousel mt-5 max-w-sm rounded-box space-x-4">
    {userConnections.map((connection)=>{
        return(
  <div key={connection.connectionId} className="carousel-item ">
    <div className="card bg-base-300 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={connection.connectedTo.photoUrl}
      alt="connection image" className="w-86 h-66 rounded-xl object-cover object-center " />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{connection.connectedTo.firstName+" "+connection.connectedTo.lastName}</h2>
    <p>{connection.connectedTo.about.length>40?connection.connectedTo.about.slice(0,40)+"...":connection.connectedTo.about}</p>
     <p>{connection.connectedTo.skills.length>40?connection.connectedTo.about.slice(0,40)+"...":connection.connectedTo.skills}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-success btn-soft">Shoot a Text</button>
    </div>
  </div>
</div>
  </div>)
})
}



</div>
</div>

}
{isEmpty&&<Empty>You don't have any connections</Empty>}
</>
  )
}


export default Connections