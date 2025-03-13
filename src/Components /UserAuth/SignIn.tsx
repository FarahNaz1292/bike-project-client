'use client'


import axios from "axios";
import Lottie from "lottie-react";
import Link from "next/link";
import { toast } from "react-toast";
import login from '../../../public/login.json'


const SignIn = () => {
 
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = {
      email,
      password,
    };
    await axios
      .post("http://localhost:5001/signin", user, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        toast.success("You have logged in successfully");
       
      });
  };

  return (
    <>
      <div className="hero  min-h-screen  bg-gray-100">
  
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className=" w-[50%]">
            <Lottie
              animationData={login}
              loop={true}
              width={500}
              height={500}
            />
          </div>
         
          <div className="card  bg-gray-100 lg:w-[50%]  shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control flex flex-col">
                <label className="label font-bold text-lg m-2">
                Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="please enter your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control flex flex-col">
                <label className="label font-bold text-lg m-2">
                 Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="please enter your password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover font-semibold m-2"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn btn-primary  shadow-black"
                  type="submit"
                >
                  Login
                </button>
              </div>
              <p className="text-center font-bold">
                Dont have an account. Please{" "}
                <Link href="/signup">
                  <span className="underline text-blue-600">SignUp</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
