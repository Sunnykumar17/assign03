import React from 'react'
import "./Comp3.css";
const Comp3 = () => {
  return (
    <div className='card'>
      <img src="https://i.pinimg.com/474x/2c/eb/3f/2ceb3f537efe1b84807dd02af019c066.jpg" alt="img" style={{ width: "150px", height: "150px" }} className='img' />
      <br />
      <h2>Alexandra Caulea</h2>
      <p>I enjoy drinking a cup of coffee every day</p>
      <div className='card-list'>
        <h2>172</h2>
        <h2>47</h2>
        <h2>20</h2>
      </div>
      <div className='card-follow'>
      <p>POST</p>
      <p>FOLLOWING</p>
      <p>FOLLOWERS</p>
      </div>
      <div className='btn'>
        <button>FOLLOW</button>&nbsp;&nbsp;
        <br />
        <button>MESSAGE</button>
      </div>
      </div>
  )
}

export default Comp3