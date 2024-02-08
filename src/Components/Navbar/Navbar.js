import React from 'react'
import './Navbar.css'
import Formpage from '../FormPage/Formpage'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-$indigo-700 border-bottom border-body">¯

        <div class="container-fluid">    
            <Link to="/"><img src="/Images/Logo.png" alt="Logo" class="d-inline-block align-text-top logo"/></Link>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" style={{color:"white"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </button>

            <div class="collapse navbar-collapse links" id="navbarText">
                <ul class="navbar-nav links-gap">
                    <li class="nav-item">
                    <Link class="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/aboutus">About Us</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/services">Services</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/carrers">Carrers</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li class="nav-item">
                     <button type="button" class="btn btn-outline" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{marginTop:"5px" , marginLeft:"20px"}}>Talk to Us</button>
                    </li>
                </ul>
            </div>
        </div>

      </nav>

      <Formpage/>
    </div>
  )
}
