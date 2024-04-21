import React, { useEffect, useState } from 'react'
import axios from 'axios'
import vdo from "../assets/services.mp4"
import Servicecrad from './Servicecard'


const Services = () => {

  const [services, setservices] = useState([]);
  useEffect(() => {
    const getServices=async ()=>{
      try {
       const res= await axios.get("http://localhost:4001/services");
       console.log(res.data);
       setservices(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  
  getServices();
    
  }, [])
  

  return (
    <>
    <div className=' w-screen  md:h-[100vh]' >
   <video className='w-full h-full border border-black' autoPlay muted loop src={vdo}></video>
    </div>
    <div className='heading text-center mt-8 text-xl md:text-3xl font-semibold' >We are delighted to have you <span className='text-cyan-600' >Here! :)</span></div>
    <div className='service mt-10 p-3 flex flex-wrap items-center justify-center gap-16' >
    {
      services.map((item)=>(
       <Servicecrad item={item} key={item.id} />
      ))
    }
    </div>
    <a className='text-center block mt-7 mb-6' href="/"><button className='px-3 py-2 bg-cyan-600 rounded-lg' >BACK</button></a>
    </>
  )
}

export default Services
