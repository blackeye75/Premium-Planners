import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Aboutc from '../components/Aboutc'

const About = () => {
  return (
   <>
  <div className='w-full ' >
  <Navbar/>
  <div className=''>
   <Aboutc/>
  </div>
   <Footer/>
  </div>
   </>
  )
}

export default About
