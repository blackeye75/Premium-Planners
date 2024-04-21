import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from "axios"


const Packages = () => {
  const [packages, setpackages] = useState([])
  useEffect(() => {
    const getPackages= async ()=>{
      try {
       const res =await axios.get("http://localhost:4001/package")
      //  console.log(res.data);
       setpackages(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getPackages();
  }, [])
  
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    const data=packages.map((item)=>{
        return item;
    })
    
  return (
   <>
   <div className='max-w-screen-2xl  container mx-auto md:px-20  px-4 '>
   <div>
   <h1 className='font-semibold text-3xl ' >Discover Our Event Planning Showcase!</h1>
    <p className='text-sm text-red-600 tracking-tighter leading-none' >Kindly be informed that while we strive for accuracy, event details are subject to variation. Please consult individual descriptions for comprehensive information on specific arrangements.</p>
   </div>
   
   <div>
   <Slider {...settings}>
    {
        data.map((item)=>(
         <Cards item={item} key={item.id} />
        ))
    }
      </Slider>
   </div>
   </div>
   </>
  )
}

export default Packages
