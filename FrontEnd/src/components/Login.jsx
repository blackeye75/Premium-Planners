import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit =async (data) =>{
    const userInfo={
      email:data.email,
      password:data.password,
    }
    await axios.post("http://localhost:4001/user/login",userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success('Login successfully!');
        document.getElementById("my_modal_3").close()
        setTimeout(() => {
          window.location.reload();
      localStorage.setItem("Users",JSON.stringify(res.data.user));
        }, 1000);
      }
    }).catch((err)=>{
      if(err.response){
        console.log(err);
      toast.error("Error:"+ err.response.data.message);
      setTimeout(() => {}, 2000);
      }
    })
  }
  return (
    <div data-theme="light">
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={()=>document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
       
          <h3 className="font-bold text-lg">Login</h3>
          <div className="mt-2">
            <span>Email:</span>
            <br />
            <input
              className="w-80 px-3 py-1 rounded-md outline-none mt-1 "
              placeholder="Enter Email"
              type="email"
              name=""
              id=""
              {...register("email", { required: true })}
            />
            <br />
             {errors.email && <span className="text-sm text-red-700 " >This field is required</span>}
          </div>
          <div>
            <span>Password:</span>
            <br />
            <input
              className="w-80 px-3 py-1 rounded-md outline-none mt-1 "
              placeholder="Enter Password"
              type="password"
              name=""
              id=""
              {...register("password", { required: true })}
            />
            <br />
             {errors.password && <span className="text-sm text-red-700 " >This field is required</span>}
          </div>
          <div className="flex justify-between mt-4">
            <button className="bg-cyan-600 px-3 py-1 rounded-md hover:bg-pink-600 duration-300">
              Login
            </button>
            <p>
              Not Registered yet!{" "}
              <Link to="/signup" className="text-blue-500 underline cursor-pointer">
                Sign up
              </Link>{" "}
            </p>
          </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
