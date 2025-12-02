import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate()
  return (
 <><div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold ">Hello there</h1>
      <p className="mb-5   ">
        “Ever wished you could meet people who not only share your interests but also understand your work life, your struggles, and your ambitions? Now you can. Connect with like-minded professionals who match your energy and make conversations feel meaningful, easy, and fun.”
      </p>
      <button className="btn btn-primary" onClick={()=>{navigate("/login")}}>Get Started</button>
    </div>
  </div>
</div>
 </>
  )
}

export default Home