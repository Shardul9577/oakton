import React from 'react'
import  './Aboutpage.css'
import Paper from '@mui/material/Paper';

export default function Aboutpage() {
  return (
    <div  data-aos="zoom-in" data-aos-duration="2000" className='Aboutpage container'>
      <img className='sideImg' src='https://png.pngtree.com/png-vector/20220716/ourmid/pngtree-tired-woman-computer-home-character-png-image_5991398.png'/>
      <div className='Writtenpage'>
        <h1 className='heading1'>About Oakton Technologies</h1>
        <p className='paras1'>Headquartered in Aberdeen, United Kingdom.Oakton Technologies is a software development company that designs and delivers tailor-made digital solutions to enterprises and startups worldwide. Our team of full-stack developers, designers, and innovators has created digital solutions for almost all sectors.</p>
        <button type="button" class="btn buton btn-outline">Know More...</button>
      </div>
    </div>
  )
}
