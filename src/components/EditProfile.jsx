import { useState } from "react"
import { baseUrl } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import axios from "axios";
const EditProfile = ({data}) => {
  const[preview,setPreview]=useState(data.photoUrl)
    let {firstName,lastName,age,gender,about,skills}=data;
    
    const dispatch=useDispatch()
    const [user,editUser]=useState({firstName,lastName,age,photoUrl:null,gender,about,skills});
    const[isEdited,setEdited]=useState(false)
    const[error,setError]=useState(false)
    function handleEdit(event){
        let fieldName=event.currentTarget.name;
        let fieldValue=event.currentTarget.value;
      //  console.log(event.target.name+" "+fieldName+" "+fieldValue+" "+event.target.value)
        editUser((prev)=>{
            return {...prev,[fieldName]:fieldValue}
        })
    }
    async function Edit(){

        try{
          const formData=new FormData();
          formData.append("firstName",user.firstName)
          formData.append("lastName",user.lastName)
          formData.append("age",user.age)
          formData.append("gender",user.gender)
          formData.append("skills",user.skills)
          if(user.photoUrl){ formData.append("photoUrl",user.photoUrl)}
         
          formData.append("about",user.about)
            let result=await axios.patch(baseUrl+"/profile/edit",formData,{withCredentials:true})
            
          /*  let {firstName,lastName,age,gender,photoUrl,skills,about}=result;*/
            setError(false)
            dispatch(addUser(result.data.user))
            setEdited(true);
            setTimeout(()=>{
                
                setEdited(false)},2000)
        }
        catch(err){console.log(err)
            if(err.status==400){
                setError(true)
            }
            
        }
    }
  return (
 <>

<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col sm:flex-row-reverse">
   
    <div className="avatar">
        <img
      src={preview}
      className="w-sm  object-cover h-64 object-center rounded-lg shadow-2xl"
    />
    </div>
   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          
           <label className="label">FirstName</label>
          <input type="text" className="input" placeholder="FirstName" name="firstName" value={user.firstName} onChange={handleEdit} />
            <label className="label">LastName</label>
          <input type="text" className="input" placeholder="LastName" name="lastName" value={user.lastName} onChange={handleEdit} />
           <label className="label">Update Profile Photo</label>
           <input type="file" className="file-input " name="photoUrl"  onChange={(event)=>{
            
              let photoUrl=event.currentTarget.files[0];
              let view =URL.createObjectURL(photoUrl)
              setPreview(view)
              editUser((prev)=>{
                return {...prev,photoUrl}
              })
           }} />
          
            <label className="label">Age</label>
          <input type="number" className="input " placeholder="Age" name="age" value={user.age} onChange={handleEdit} />
           <label className="label">Gender</label>
            <select value={user.gender} className="select appearance-none" name="gender" onChange={handleEdit}>
            <option value={data.gender} disabled={true}>{data.gender}</option>
            <option  >men</option>
           <option >women</option>
            <option value="others" >others</option>
            </select>
           <label className="label">About</label>
          <input type="text" className="input" placeholder="About" name="about" value={user.about} onChange={handleEdit}/>
        <label className="label">Skills</label>
          <input type="text" className="input" placeholder="Skills" name="skills" value={user.skills} onChange={handleEdit} />
          {error&&<p>Incorrect handling of edit details</p>}
        
          <button className="btn btn-neutral mt-4" onClick={Edit}>Edit</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>

  {isEdited&&<div className="toast toast-top toast-center">
 
  <div className="alert alert-success">
    <span>Profile edited successfully.</span>
  </div>
</div>}
 </>
  )
}

export default EditProfile