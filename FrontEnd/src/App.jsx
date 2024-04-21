import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Jobs from "./pages/Jobs";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { useAuth } from "./context/AuthProvider";

// authUser? <Home user={authUser} />:

const App = () => {
  const [authUser, setauthUser] = useAuth();
 
  // console.log(authUser);
  return (
    <>
      <div className="dark:bg-zinc-800 dark:text-white">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route
            path="/services"
            element={authUser ? <Services /> : <Navigate to="/signup" />}
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/jobs" element={<Jobs />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
        <Toaster />
      </div>
    </>
  );
};

export default App;
