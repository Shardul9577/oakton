import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar';
import Footerpage from './Components/FooterPage/Footerpage';
import Preloader from './Components/Preloader/Preloader';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Landingpage from './allComponents/Landingpage';
import DetailService from './allComponents/DetailService';
import DetailAbout from './allComponents/DetailAbout';
import DetailCarrer from './allComponents/DetailCarrer';



function App() {

  const [isLoading , setIsLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },2000)
  },)

  return (
    <div className="App">
      { isLoading && <Preloader/> }
        
      { !isLoading &&
      <Router>
          <Navbar/> 

          <Routes>
              <Route path='/' element={<Landingpage/>}/>
          </Routes>

          <Routes>
              <Route path='/services' element={<DetailService/>} />
          </Routes>

          <Routes>
              <Route path='/aboutus' element={<DetailAbout/>} />
          </Routes>

          <Routes>
              <Route path='/carrers' element={<DetailCarrer/>} />
          </Routes>

          <Footerpage/>
      </Router>
      }

    </div>
  );

}

export default App;
