import React from 'react'
import  './Intropage.css'
import Paper from '@mui/material/Paper';

export default function Intropage() {
  return (
    <>
    <div data-aos="zoom-in-up" data-aos-duration="2000" className='intropage container'>
      <div className='textBox1' >
        <h1 className='head1'>INNOVATE.</h1>
        <p className='para1'>Innovation is the unrelenting drive to break the status quo and develop anew where few have dared to go.</p>
        <button type="button" class="btn btn-outline" style={{marginTop:"5px" , marginLeft:"20px"  , display:"flex" , textAlign:"center" , marginLeft:"0%"}}>Know More...</button>
      </div>
      <img className='image' src='/Images/Image2.png'></img>
    </div>

    <div data-aos="zoom-in-up" data-aos-duration="2000" className='intropage2 container'>
    <img className='image2' src='/Images/Image.png'></img>
      <div className='textBox2' >
        <h1 className='head2'>AUTOMATION.</h1>
        <p className='para1'>Innovation is the unrelenting drive to break the status quo and develop anew where few have dared to go.</p>
        <button type="button" class="btn btn-outline" style={{marginTop:"5px" , marginLeft:"20px"  , display:"flex" , textAlign:"center" , marginLeft:"0%"}}>Know More...</button>
      </div>
    </div>

    <div data-aos="zoom-in-up" data-aos-duration="2000" className='intropage container'>
      <div className='textBox1' >
        <h1 className='head2'>TECHNOLOGY.</h1>
        <p className='para1'>Innovation is the unrelenting drive to break the status quo and develop anew where few have dared to go.</p>
        <button type="button" class="btn btn-outline" style={{marginTop:"5px" , marginLeft:"20px"  , display:"flex" , textAlign:"center" , marginLeft:"0%"}}>Know More...</button>
      </div>
      <img className='image' src='/Images/Image4.png'></img>
    </div>

    <div  data-aos="flip-left" data-aos-duration="2000" class="Introcard">
            <p> " If future generations are to remember us more with gratitude than sorrow, we must achieve more than just the miracles of technology. We must also leave them a glimpse of the world as it was created, not just as it looked when we got through with it. " </p>
    </div>

    </>
  )
}
