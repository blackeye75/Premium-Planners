import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.form?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup successfully!");
          navigate(from, { replace: true });
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error:" + err.response.data.message);
        }
      });
  };
  return (
    <>
      <div className="w-full h-screen bg-cyan-950 flex items-center justify-center ">
        <div>
          <div className=" p-4 rounded-md shadow-xl bg-zinc-800">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="">
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>
              <div className="mt-2">
                <span>Name:</span>
                <br />
                <input
                  className="w-80 px-3 py-1 rounded-md outline-none text-black bg-cyan-100 mt-1 "
                  placeholder="Enter Full Name"
                  type="text"
                  name=""
                  id=""
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-700 ">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-2">
                <span>Email:</span>
                <br />
                <input
                  className="w-80 px-3 py-1 rounded-md outline-none text-black bg-cyan-100 mt-1 "
                  placeholder="Enter Email"
                  type="email"
                  name=""
                  id=""
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-700 ">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <span>Password:</span>
                <br />
                <input
                  className="w-80 px-3 py-1 rounded-md outline-none text-black bg-cyan-100 mt-1 "
                  placeholder="Enter Password"
                  type="password"
                  name=""
                  id=""
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-700 ">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex justify-between mt-4">
                <button className="bg-cyan-600 px-3 py-1 rounded-md hover:bg-pink-600 duration-300">
                  Sign Up
                </button>
                <p>
                  Have Account!!{" "}
                  <Link
                    to="/"
                    className="text-blue-500 underline cursor-pointer"
                  >
                    Log In
                  </Link>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
