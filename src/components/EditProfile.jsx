import { useState } from "react"
const EditProfile = ({data}) => {
    const [user,editUser]=useState(data)
    function handleEdit(event){
        let fieldName=event.currentTarget.name;
        let fieldValue=event.currentTarget.value;
        editUser((prev)=>{
            return {...prev,[fieldName]:fieldValue}
        })
    }
  return (
 <>
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col sm:flex-row-reverse">
   
    <div className="avatar">
        <img
      src={user.photoUrl}
      className="w-sm  object-cover h-64  rounded-lg shadow-2xl"
    />
    </div>
   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name="emailId" value={user.emailId} onChange={handleEdit} />
           <label className="label">FirstName</label>
          <input type="text" className="input" placeholder="FirstName" name="firstName" value={user.firstName} onChange={handleEdit} />
            <label className="label">LastName</label>
          <input type="text" className="input" placeholder="LastName" name="lastName" value={user.lastName} onChange={handleEdit} />
            <label className="label">Age</label>
          <input type="number" className="input " placeholder="Age" name="age" value={user.age} onChange={handleEdit} />
           <label className="label">Gender</label>
          <input type="text" className="input " placeholder="Gender" name="gender" value={user.gender} onChange={handleEdit} />
           <label className="label">About</label>
          <input type="text" className="input" placeholder="About" name="about" value={user.about} onChange={handleEdit}/>
        <label className="label">Skills</label>
          <input type="text" className="input" placeholder="Skills" />
        
          <button className="btn btn-neutral mt-4">Edit</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
 </>
  )
}

export default EditProfile