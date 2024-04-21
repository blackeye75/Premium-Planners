import React from 'react'
import deco from '../assets/deco.png'

const Aboutc = () => {
  return (
    <div className='w-full h-[100vh]' >
      <div id='bsdk' className='md:pt-28 pt-16 px-4 flex  ' >
       <div className='left  w-full md:w-1/2 md:order-2 order-1' >
       <h1 className='md:text-4xl mt-5  text-3xl px-2 md:px-8 ' >Welcome to <span className='text-cyan-600 text-4xl ' >Premium Planners!</span></h1>
        <p className='md:mt-6  text-l p-2  md:p-8' > As a dynamic startup, we are driven by passion and precision. At Premium Planners, we pride ourselves on delivering exactly what we promise on our website. With a commitment to excellence and attention to detail, we strive to exceed expectations in every aspect of our services.
Founded on the principles of innovation and integrity, our team is dedicated to providing top-notch solutions tailored to your needs. Whether it's event planning, catering, photography, or entertainment, we approach every project with enthusiasm and expertise.
Trust in our startup spirit and unwavering dedication to delivering exceptional results. Join us on this exciting journey as we bring your visions to life.
Welcome to the Premium Planners experience.</p>
       </div>
       <div className="right w-full md:order-1 order-2 md:w-1/2">
        <div className='md:h-[29vw] h-[30vh] w-full overflow-hidden' >
            <img  className=' h-full w-full bg-cover object-cover overflow-hidden' src={deco} alt="" />
        </div>
       </div>
      </div>

        {/* //ceo and cto details */}
      {/* <div className='w-full flex justify-between mb-10  ' >
         <div className='left w-1/2 ' > <img className='w-44 h-44 rounded-full m-auto bg-red-600' src="" alt="" /> </div>
         <div className='right w-1/2 ' ><img className='w-44 h-44 rounded-full m-auto bg-red-600' src="" alt="" /> </div>
      </div> */}
    </div>
  )
}

export default Aboutc
