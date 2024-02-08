import React from 'react'
import Intropage from '../Components/IntroPage/Intropage'
import Aboutpage from '../Components/AboutPage/Aboutpage'
import Servicepage from '../Components/ServicePage/Servicepage'

export default function Landingpage() {
  return (
    <div>
      <Intropage/>
      <Aboutpage/>
      <Servicepage/>
    </div>
  )
}
