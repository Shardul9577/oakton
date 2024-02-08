import React from 'react'
import './Servicepage.css'
import { Paper } from '@mui/material'

export default function Servicepage() {
  return (
    <div data-aos="zoom-in-up" data-aos-duration="2000" className='servicepage'>
      <div className='title1'>
        <h5 className='subhead1'>WHAT WE DO</h5>
        <h1 className='heads1'>Explore Our</h1>
        <h1 className='heads2'>Suite of Services</h1>
        <h1 className='heads1'>Offered</h1>
      </div>
      <div className='servicebox'>
        <div className='servicebox1 container'>
            <Paper elevation={5} style={{backgroundColor:"rgb(224, 122, 95)"}} data-aos="flip-up" data-aos-duration="2000" data-aos-delay="1000"  className='box1'>
                <h2 className='hovercolor' style={{textAlign:"left"}}>01</h2>
                <hr className='hovercolor line'/>
                <p>
                    <h3 style={{textAlign:"left"}}>WEB DEVELOPMENT</h3> 
                    <p style={{textAlign:"left"}}>Our web application development team crafts web apps specifically tailored to unique business requirements.</p>
                </p>
            </Paper>
            <Paper elevation={5} style={{backgroundColor:"rgb(129, 178, 154)"}} data-aos="flip-up" data-aos-duration="2000" data-aos-delay="1000"  className='box1 boxdown'>
                <h2 className='hovercolor' style={{textAlign:"left"}}>02</h2>
                <hr className='hovercolor line'/>
                <p>
                    <h3 style={{textAlign:"left"}}>UX/UI DESIGN SERVICES</h3> 
                    <p style={{textAlign:"left"}}>We possess the expertise to construct polished and impeccable UI/UX designs, enhancing user experience through the integration of efficient collaboration.</p>
                </p>
            </Paper>
            <Paper elevation={5} style={{backgroundColor:"rgb(152, 193, 217)"}} data-aos="flip-up" data-aos-duration="2000" data-aos-delay="1000"  className='box1 boxdown'>
                <h2 className='hovercolor' style={{textAlign:"left"}}>03</h2>
                <hr className='hovercolor line'/>
                <p>
                    <h3 style={{textAlign:"left"}}>MOBILE APP DEVELOPMENT</h3> 
                    <p style={{textAlign:"left"}}>Enabling the creation of intelligent applications, our collaborative team of iOS, Android, and web developers collaborates to fashion meticulously operational and adaptable mobile apps.</p>
                </p>
            </Paper>

        </div>
        <div className='servicebox2 container'>
            <Paper elevation={5} style={{backgroundColor:"rgb(242, 204, 143)"}} data-aos="flip-up" data-aos-duration="2000" data-aos-delay="1000"  className='box2'>
                    <h2 className='hovercolor' style={{textAlign:"left"}}>04</h2>
                    <hr className='hovercolor line'/>
                    <p>
                        <h3 style={{textAlign:"left"}}>SOFTWARE DEVELOPMENT</h3> 
                        <p style={{textAlign:"left"}}>We offer a comprehensive end to end software product development service, ranging from conceptualizing the software product to managing it.</p>
                    </p>
            </Paper>
            <Paper elevation={5} style={{backgroundColor:"rgb(244, 241, 222)"}} data-aos="flip-up" data-aos-duration="2000" data-aos-delay="1000"  className='box2 boxdown'>
                    <h2 className='hovercolor' style={{textAlign:"left"}}>05</h2>
                    <hr className='hovercolor line'/>
                    <p>
                        <h3 style={{textAlign:"left"}}>MANAGED CLOUD SERVICES</h3> 
                        <p style={{textAlign:"left"}}>Cloud computing services cover building cloud-native infrastructure, getting expert guidance on best practices, , and assisting with cloud migrations.</p>
                    </p>
            </Paper>
            <Paper elevation={5} style={{backgroundColor:"rgb(255 242 179)"}} data-aos="flip-up" data-aos-duration="2000" data-aos-delay="1000"  className='box2 boxdown'>
                    <h2 className='hovercolor' style={{textAlign:"left"}}>06</h2>
                    <hr className='hovercolor line'/>
                    <p>
                        <h3 style={{textAlign:"left"}}>AI/ML SERVICES</h3> 
                        <p style={{textAlign:"left"}}>Our AI developers utilize operating systems, statistical algorithms, and machine learning tools to develop business intelligence solutions.</p>
                    </p>
            </Paper>
        </div>
      </div>
    </div>
  )
}
