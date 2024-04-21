import React from "react";
import cake from "../assets/cake.png";
import Marquee from "react-fast-marquee";
// import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
// {user}
const Banner = () => {
  const [authUser, setauthUser] = useAuth();
  // console.log(authUser);
  // console.log(user);
  // 
  return (
    <>
      <div className="max-w-screen-2xl  container mx-auto md:px-20 flex  px-4 flex-col  md:flex-row">
        <div className="w-full order-2 md:order-1 md:w-1/2 md:mt-24 ">
          <div className="space-y-8 md:mt-24">
            <h1 className="text-4xl  tracking-tight leading-1 font-bold">
              Hello! {authUser ? authUser.fullname : ""}  
              <br /> Unlock Unforgettable Moments: Your Ultimate Event{" "}
              <span className="text-cyan-600">Planning Destination!</span>
            </h1>
            <p className="text-l">
              Welcome to our Ultimate Event Planning Destination! Whether it's a
              wedding, birthday bash, or corporate gala, we're here to make your
              event extraordinary. Let's craft unforgettable moments together!
            </p>
            <h1 className="text-2xl uppercase">Tell Us About  your Event!!</h1>
            <label className="input input-bordered border-2 border-gray-300 md:w-1/2 outline-none bg-white flex items-center gap-2">
              <svg
            
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70 dark:text-black"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow " placeholder="Email" />
            </label>
          </div>
          <button className=" py-2 bg-cyan-500 px-5 rounded-lg mt-4 ">Send</button>
        </div>
        <div className="w-full order-1 md:w-1/2">
          <div className="md:h-[42vw] md:w-[42vw] mt-10 md:ml-6 object-cover">
            <img
              className="h-full w-full  bg-cover bg-center"
              src={cake}
              alt=""
            />
          </div>
        </div>
      </div>
      <Marquee className="marquee  md:h-24 h-16 mt-5 mb-12 md:mb-16  bg-gradient-to-l from-indigo-900">
        <h1 className=" md:px-9 px-5     font-semibold uppercase text-4xl  ">Exciting</h1> <h1 className=" md:px-9 px-5     font-semibold uppercase text-4xl ">Thrilling</h1> <h1 className=" md:px-9 px-5     font-semibold uppercase text-4xl ">Spectacular</h1>{" "}
        <h1 className=" md:px-9 px-5     font-semibold uppercase text-4xl ">Unforgettable</h1> <h1 className=" md:px-9    font-semibold uppercase text-4xl ">Dynamic</h1> <h1 className=" md:px-9 px-5     font-semibold uppercase text-4xl ">Electrifying</h1>
        <h1 className=" md:px-9 px-5     font-semibold uppercase text-4xl "> Vibrant</h1> <h1 className=" md:px-9 px-5     font-semibold uppercase text-4xl ">Dazzling</h1> <h1 className=" md:px-9 px-5     font-semibold uppercase text-4xl ">Mesmerizing</h1>{" "}
        <h1 className=" md:px-9 px-5     font-semibold uppercase text-4xl ">Enchanting </h1> <h1 className=" md:px-9 px-5     font-semibold uppercase text-4xl ">Captivating</h1> <h1 className=" md:px-9 px-5     font-semibold uppercase text-4xl ">Exhilarating</h1>{" "}
        <h1 className=" md:px-9 px-5     font-semibold uppercase text-4xl ">Radiant</h1>
        <h1 className=" md:px-9 px-5     font-semibold uppercase text-4xl ">Splendid</h1> <h1 className=" md:px-9 px-4   font-semibold uppercase text-4xl ">Glorious</h1>
      </Marquee>
    </>
  );
};

export default Banner;
