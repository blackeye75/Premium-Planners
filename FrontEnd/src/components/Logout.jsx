import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

const Logout = () => {
  const [authUser, setauthUser] = useAuth();
  const handelLogout = () => {
    try {
      setauthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout Successfully");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("Error:" + error.message);
      setTimeout(() => {}, 2000);
    }
  };

return (
  <div>
    <button
      onClick={handelLogout}
      className="px-3 py-2 bg-red-900 hover:bg-cyan-600 hover:scale-110 duration-300 text-white rounded-md cursor-pointer"
    >
      Logout
    </button>
  </div>
);
};

export default Logout;
