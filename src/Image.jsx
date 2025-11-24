import React from 'react'

const Image = () => {
  return (
    <div className='flex justify-center mt-5'>
  <div className="card  shadow w-96 shadow-sm">
  <div className="hover-3d w-full">
  {/* content */}
  <figure className="max-w-96 w-full rounded-2xl max-h-64">
    <img src="https://hips.hearstapps.com/hmg-prod/images/single-women-happier-than-men-675ac891b545d.jpg?crop=0.670xw:1.00xh;0.247xw,0&resize=640:*"className="object-cover w-full max-w-96" alt="3D card" />
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
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions space-between">
          <button className="btn btn-primary">Buy Now</button>
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
   
</div>
</div>
  )
}

export default Image