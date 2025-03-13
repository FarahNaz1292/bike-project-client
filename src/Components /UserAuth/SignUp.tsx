
'use client'


import axios from "axios";
import Lottie, { LottiePlayer } from "lottie-react";
import login from '../../../public/login.json'
import { useRouter } from "next/navigation"; // ✅ Correct

import Link from "next/link";
import toast from "react-toast"

const SignUp = () => {
const router= useRouter
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const img = form.img.value;
    const newUser = {
      name,
      email,
      password,
      img,
    };
    console.log(newUser);
   
    try {
      const res = await axios.post("http://localhost:5001/signup", newUser);
      console.log(res);

    

   

    } catch (error) {
      console.error(error);
  
    }
    

  };

  return (
    <>
      <div className="hero  bg-gray-100 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className=" w-[50%]">
            <Lottie
              animationData={login}
              loop={true}
              width={500}
              height={500}
            />
          </div>

          <div className="card  bg-gray-100 lg:w-[50%] shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control flex flex-col m-2">
                <label className="label text-xl font-bold">
              Name
                </label>
                <input
                  type="text"
                  name="user"
                  placeholder=" Please enter your Name"
                  className="input input-bordered "
                  required
                />
              </div>
              <div className="form-control flex flex-col m-2">
              <label className="label text-xl font-bold">Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Please enter your email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control flex flex-col m-2">
              <label className="label text-xl font-bold">Profile Photo
                </label>
                <input
                  type="file"
                  name="img"
                  className="input input-bordered p-2"
                  required
                />
              </div>
              <div className="form-control flex flex-col m-2">
              <label className="label text-xl font-bold">
               Password
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Please enter your password"
                  className="input input-bordered "
             
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button
                  className="btn btn-primary shadow-black"
                  type="submit"
                >
                  SignUp
                </button>
              </div>
              <p className="text-center">
                Already have an account? Please{" "}
                <Link href="/signin">
                  <span className="underline text-blue-800">SignIn</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
