import React from 'react'
import{useState} from "react"
const Test = () => {
    const [data,setData]=useState({firstName:"",image:""})
    function setForm(event){
        let fieldName=event.currentTarget.name;
        let fieldValue=event.currentTarget.value;
        console.log(fieldName+"  "+fieldValue)
        setData((prve)=>{
            return{... prev,[fieldName]:fieldValue}
        })
    }

  return (<>
    <input type="file" className="file-input file-input-ghost" name="image" value={data.image} onChange={setForm}/>
      <input type="text" className="input" placeholder="My awesome page" name="firstName" value={data.firstName} onChange={setForm}/>
      </>
  )
}

export default Test