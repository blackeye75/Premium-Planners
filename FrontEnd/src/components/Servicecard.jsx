import React from 'react'

const Servicecrad = ({item}) => {
  return (
    <div className='service-main' >
       <div className='' >
           <div className="card w-96 h-96 bg-base-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl  duration-300 shadow-xl image-full">
          <figure><img src={item.image} alt="image" /></figure>
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p>{item.title}</p>
            <div className="card-actions justify-end">
              <a href="https://wa.me/7005212531"><button className="btn btn-primary">Enquiry</button></a>
            </div>
          </div>
        </div>
         </div>
    </div>
  )
}

export default Servicecrad
