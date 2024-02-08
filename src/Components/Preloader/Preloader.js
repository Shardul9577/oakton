import React from 'react'
import  './Preloader.css'

export default function Preloader() {
  return (
    <div data-aos="fade-in" data-aos-duration="2000" className='preloader' style={{backgroundColor:"#222222"}}>
      <h1 className='loadingtext'>Loading.....</h1>
      <img style={{height:"100vh" , width:"100vw", scale:"0.8"}} src='https://cdn.dribbble.com/userupload/6677887/file/original-f047c669811c263070f8b5daefbff202.gif'/>
    </div>
  )
}
