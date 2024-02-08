import React from 'react'
import './Servicecomponent.css'
import { Paper } from '@mui/material'

export default function Servicecomponent() {
  return (
    <div className='service-component'>

      <div className='service-1'>
        <h1 className='head-service'>Services</h1>
      </div>

      <div className='service-2 container'>
        <h1 className='head-service-2'>WHAT WE <span style={{color:"#EE9B00"}} > OFFER ?</span></h1>
        <h3 className='head2-service-2'>Think beyond expectation.</h3>
        <p className='para-service-2'>Welcome to Astream, where we offer a comprehensive range of online web services to elevate your digital presence and drive your success in the virtual realm. Our team of skilled experts is dedicated to providing cutting-edge solutions tailored to your unique needs. We pride ourselves on a customer-centric approach, focusing on delivering top-quality services that exceed expectations. Partner with us to unlock your digital potential and embark on a journey of growth and success in the ever-evolving digital landscape.</p>
        <div className='counts-service-2'>
          <div className='container-2'>
            <h1 style={{fontSize:"5vw"}}>500+</h1>
            <p>Happy clients</p>
          </div>
          <div className='container-2'>
          <h1 style={{fontSize:"5vw"}}>12+</h1>
          <p>Years of Experience</p>
          </div>
          <div className='container-2'>
            <h1 style={{fontSize:"5vw"}}>500+</h1>
            <p>Happy clients</p>
          </div>
        </div>
      </div>

      <div className='service-3'>

            <Paper elevation={5} style={{backgroundColor:"rgb(224, 122, 95)"}} className='box-3 service-box-1'>
                      <h2 style={{textAlign:"left"}}>01</h2>
                      <hr className='hovercolor line'/>
                      <p>
                          <h3 className='innerText-Head' style={{textAlign:"left"}}>WEB DEVELOPMENT</h3> 
                          <p style={{textAlign:"left"}}>Our web application development team crafts web apps specifically tailored to unique business requirements.</p>
                      </p>
            </Paper>

            <Paper elevation={5} style={{backgroundColor:"rgb(129, 178, 154)"}} className='box-3 service-box-2'>
                      <h2 style={{textAlign:"left"}}>02</h2>
                      <hr className='hovercolor line'/>
                      <p>
                          <h3 className='innerText-Head' style={{textAlign:"left"}}>UX/UI DESIGN SERVICES</h3> 
                          <p style={{textAlign:"left"}}>We possess the expertise to construct polished and impeccable UI/UX designs, enhancing user experience through the integration of efficient collaboration.</p>
                      </p>
            </Paper>

            <Paper elevation={5} style={{backgroundColor:"rgb(152, 193, 217)"}} className='box-3 service-box-3'>
                      <h2 style={{textAlign:"left"}}>03</h2>
                      <hr className='hovercolor line'/>
                      <p>
                          <h3 className='innerText-Head' style={{textAlign:"left"}}>MOBILE APP DEVELOPMENT</h3> 
                          <p style={{textAlign:"left"}}>Enabling the creation of intelligent applications, our collaborative team of iOS, Android, and web developers collaborates to fashion meticulously operational and adaptable mobile apps.</p>
                      </p>
            </Paper>

            <Paper elevation={5} style={{backgroundColor:"rgb(242, 204, 143)"}} className='box-3 service-box-4'>
                          <h2 style={{textAlign:"left"}}>04</h2>
                          <hr className='hovercolor line'/>
                          <p>
                              <h3 className='innerText-Head' style={{textAlign:"left"}}>SOFTWARE DEVELOPMENT</h3> 
                              <p style={{textAlign:"left"}}>We offer a comprehensive end to end software product development service, ranging from conceptualizing the software product to managing it.</p>
                          </p>
            </Paper>

            <Paper elevation={5} style={{backgroundColor:"rgb(244, 241, 222)"}} className='box-3 service-box-5'>
                          <h2   style={{textAlign:"left"}}>05</h2>
                          <hr className='hovercolor line'/>
                          <p>
                              <h3 className='innerText-Head' style={{textAlign:"left"}}>MANAGED CLOUD SERVICES</h3> 
                              <p style={{textAlign:"left"}}>Cloud computing services cover building cloud-native infrastructure, getting expert guidance on best practices, , and assisting with cloud migrations.</p>
                          </p>
            </Paper>

            <Paper elevation={5} style={{backgroundColor:"rgb(255 242 179)"}} className='box-3 service-box-6'>
                          <h2 style={{textAlign:"left"}}>06</h2>
                          <hr className='hovercolor line'/>
                          <p>
                              <h3 className='innerText-Head' style={{textAlign:"left"}}>AI/ML SERVICES</h3> 
                              <p style={{textAlign:"left"}}>Our AI developers utilize operating systems, statistical algorithms, and machine learning tools to develop business intelligence solutions.</p>
                          </p>
            </Paper>

      </div>

    </div>
  )
}
