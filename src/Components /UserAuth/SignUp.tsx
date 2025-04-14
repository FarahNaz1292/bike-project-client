'use client'

import React, { useState, useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import Link from "next/link";
import login from '../../../public/login.json';

// Dynamically import Lottie with ssr: false
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const SignUp = () => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;
    const img = (form.elements.namedItem('img') as HTMLInputElement).value;

    const newUser = {
      name,
      email,
      password,
      img,
    };
    console.log(newUser);

    try {
      const res = await axios.post("https://y-beta-wheat-23.vercel.app/signup", newUser);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="hero bg-gray-100 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-full lg:w-1/2">
            {isClient && (
              <Lottie
                animationData={login}
                loop={true}
                width={500}
                height={500}
              />
            )}
          </div>

          <div className="card bg-gray-100 w-full lg:w-1/2 shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control flex flex-col m-2">
                <label className="label text-xl font-bold">
                  Name
                </label>
                <input
                  type="text"
                  name="name" // Fixed: Changed from "user" to "name" to match the form processing
                  placeholder="Please enter your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control flex flex-col m-2">
                <label className="label text-xl font-bold">
                  Email
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
                <label className="label text-xl font-bold">
                  Profile Photo
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
                  className="input input-bordered"
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