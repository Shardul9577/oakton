import React from 'react'
import './Aboutcomponent.css'
import { Paper } from '@mui/material'

export default function Aboutcomponent() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <>
      <div className='about-1'>
        <h1 className='head-about-1'>About Us</h1>
      </div>

      <div className='about-2'>
        <img className='about-img-2' src='/Images/AboutSection.png'/>
        <div className='about-detail-2 container'>
            <h1 className='head-about-2'>Where Ideas Take Flight - Elevate Your Online Experience with Our Web Services!</h1>
            <p className='para-about-2'>Welcome to Astream, a dynamic online platform brought to you by ThinkWebHub Pvt. Ltd., your premier destination for Superb online web services. We are a passionate team of tech enthusiasts and creative minds, dedicated to providing innovative solutions that cater to your unique needs. With a track record of excellence and a commitment to customer satisfaction, we are your trusted partner in shaping your online success.</p>
            <div className='para-about-icons'>
                <div style={{display:"flex" , alignItems:"center"}}>
                  <div className='about-icon-2'>
                    <i class="fa-regular fa-thumbs-up"></i>
                  </div>
                  <p className="about-text-2">400+ five star rating!</p>
                </div>
                <div style={{display:"flex", alignItems:"center"}}>
                  <div className='about-icon-2'>
                    <i class="fa-solid fa-people-group"></i>
                  </div>
                  <p className="about-text-2">98% client retention!</p>
                </div>
            </div>
        </div>
      </div>

      <Paper elevation={5} className='about-3 container'>
        <h1 className='about-head-3 container'>About Us</h1>
        <hr className='container'/>
        <div className='about-detail-3 container'>
          <p className='about-para-3'>
          Astream is your go-to destination for exceptional online web services. We are a team of passionate experts, dedicated to crafting cutting-edge solutions that empower businesses and individuals to succeed in the digital world.
          From web design and development to digital marketing and cloud hosting, we have the expertise and experience to make a meaningful impact on your online success. Let's collaborate and bring your digital version to life.
          </p>
        </div>
      </Paper>

      <div className='about-4'>
         <img src='/Images/discussAbout.jpg' className='about-img-4 container'/> 
         <div className='about-detail-4'>
            <Paper className='container about-detail-card-4' elevation={5}>
              <i class="fa-solid fa-paper-plane about-icon-4"></i>
              <hr/>
              <h2 className='about-head-4'>Our Mission</h2>
              <p className='about-para-4'>At Astream Our mission is clear - to be your trusted partner in the digital realm, guiding you through the complexities of the online landscape with innovative solutions and unwavering support. We believe that every business, no matter its size, deserves access to top-notch web services that can make a significant impact on its growth and success.</p>
            </Paper>
            <Paper className='container about-detail-card-4' elevation={5}>
              <i class="fa-solid fa-eye about-icon-4"></i>
              <hr/>
              <h2 className='about-head-4'>Our Vision</h2>
              <p className='about-para-4'>At Astream, our vision is to be a catalyst for your digital success. We aspire to empower businesses and individuals with innovative online web services that transcend boundaries and drive exceptional growth. Through cutting-edge technologies, creative thinking, and a customer-first approach, we aim to unlock the full potential of the digital world for you, making your dreams a reality in the ever
evolving digital landscape.</p>
            </Paper>
         </div>
      </div>

      <div className='about-5 container'>
        <h1 className='about-head-5'>Portfolio</h1>
        <p className='about-para-5'>Here we are storing some of our precious contributions for our customers.Have a look before choosing us.</p>
        <h2 className='about-head2-5'>OUR <span style={{color:"rgb(238, 155, 0)"}}>WORK HISTORY</span></h2>
        <Paper className='about-clients-5 container'>
            <div className='about-clients-title-5'>
              <h1 className='about-clients-head-5'>40+</h1>
              <p className='about-clients-para-5'>Years of Service</p>
            </div>

            <div className='about-clients-title-5'>
              <h1 className='about-clients-head-5'>US$ 18.55 Bn</h1>
              <p className='about-clients-para-5'>Total Revenue (LTM)</p>
            </div>

            <div className='about-clients-title-5'>
              <h1 className='about-clients-head-5'>56+</h1>
              <p className='about-clients-para-5'>Countries We Are Present In</p>
            </div>

            <div className='about-clients-title-5'>
              <h1 className='about-clients-head-5'>322K+</h1>
              <p className='about-clients-para-5'>Employees</p>
            </div>

            <div className='about-clients-title-5'>
              <h1 className='about-clients-head-5'>1,872</h1>
              <p className='about-clients-para-5'>Trusting Clients</p>
            </div>
        </Paper>
      </div>
    </>
  )
}
