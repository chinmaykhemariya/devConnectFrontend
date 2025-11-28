

const UserCard = ({user}) => {
  return (
    <div className='flex justify-center  mt-5'>
  <div className="card  shadow w-96 bg-base-200 shadow-2xl">
  <div className="hover-3d w-full">
  {/* content */}
  <figure className="max-w-96 w-full rounded-2xl h-64 ">
    <img src={user?.photoUrl}className="object-cover max-h-64 w-full max-w-96 h-64" alt="3D card" />
  </figure>
  {/* 8 empty divs needed for the 3D effect */}
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
  <div className="card-body ">
    <h2 className="card-title">{user?.firstName+" "+user?.lastName}</h2>
    <p>{user?.about}</p><p>{user?.about}</p>
    <div className="card-actions justify-end">
          <button className="btn btn-info btn-soft">Vibe</button>
      <button className="btn btn-warning btn-soft ">Pass</button>
    </div>
  </div>
   
</div>
</div>
  )
}

export default UserCard