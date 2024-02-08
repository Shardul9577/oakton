import React from 'react'
import './Footerpage.css'

export default function Footerpage() {
  return (
    <div className='mainFooter'>
        <div className='footer'>
        <div className='foottag container'>

        <h1 className='tagline'>Nothing great ever <br/> came that easy !</h1>
        <p className='smalltag'>GET IN TOUCH</p>
        <p className='smalltag'>info@ecosleek.in</p>
        <p className='smalltag'>+91- 630 - 173 - 3800</p>

        <div>
                <h5 className='smalltagline'>Explore</h5>
                <div className='smalltagservices'>
                    <h5 className='smalltagservices-text'>Services</h5>
                    <h5 className='smalltagservices-text'>Web Dev</h5>
                    <h5 className='smalltagservices-text'>UX/UI</h5>
                    <h5 className='smalltagservices-text'>Mobile App</h5>
                    <h5 className='smalltagservices-text'>Software Dev</h5>
                </div>
        </div>

        <div className='footicon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        </div>

        </div>
        <iframe className='footmap container' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8011.238711985404!2d-2.10783668174943!3d57.147482864306596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48840e3dac9b67b7%3A0xc5b3eb453abed40b!2sMarischal%20Square%2C%20Aberdeen!5e0!3m2!1sen!2sin!4v1706720823476!5m2!1sen!2sin" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <p style={{color:"white" , marginBottom:"0%" , marginTop:"4%"}}>©2024 Oakton Technologies Private Limited. All Rights Reserved.</p>
    </div>
  )
}
