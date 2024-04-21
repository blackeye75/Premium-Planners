import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Packages from '../components/Packages'
import Services from '../components/Service'
import Footer from '../components/Footer'

const Home = () => {


  return (
   <>
   <div className='h-fit' >
   <Navbar/>
   <Banner />            
   <Packages/>
   <Footer/>
   </div>
   </>
  )
}

export default Home
