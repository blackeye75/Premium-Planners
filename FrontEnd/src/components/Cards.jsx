import React from "react";


function Cards({item}) {
  // console.log(item);
  return (
    <>
      <div className="mt-8 mb-10 px-7" >
        <div className="card md:w-[24rem] dark:bg-zinc-700 p-1 h-96 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl  duration-300 shadow-xl">
          <figure>
            <img
              src={item.image}
              alt="Image"
            />
          </figure>
          <div className="card-body">
            <h2 className="">
             {item.name}
              <div className="badge badge-info ml-2 ">NEW</div>
            </h2>
            <p className="text-sm  tracking-tighter leading-none">{item.title}</p>
            <div className="card-actions mt-1 justify-between">
              <div className="cursor-pointer dark:bg-gray-800 px-2 py-1 bg-zinc-200 rounded-md hover:bg-cyan-500 duration-200">Price {item.price}</div>
              <div className="cursor-pointer dark:bg-gray-800 px-2 py-1 bg-zinc-200 rounded-md hover:bg-cyan-500 duration-200 ">{item.category}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
