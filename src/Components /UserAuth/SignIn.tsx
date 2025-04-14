'use client'

import axios from "axios";
import dynamic from "next/dynamic";
import Link from "next/link";
import login from '../../../public/login.json'
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Separate component for handling the redirect logic with useSearchParams
function RedirectHandler() {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const redirectReason = searchParams.get("redirect");
    if (redirectReason === "loginToAddToCart") {
      toast("Please log in to add items to your cart.", {
        icon: "🛒",
        duration: 5000,
      });
    }
  }, [searchParams]);
  
  return null; // This component doesn't render anything
}

const SignIn = () => {
  const router = useRouter();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.email.value;
    const password = form.password.value;
    const user = {
      email,
      password,
    };
    console.log(user);

    await axios
      .post("https://y-beta-wheat-23.vercel.app/signin", user, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.data);
        localStorage.setItem("user", JSON.stringify(res.data.data));
        toast.success("You have logged in successfully");
        router.push('/')
      });
  };

  return (
    <>
      <div className="hero min-h-screen bg-gray-100">
        {/* Wrap the component using useSearchParams in Suspense */}
        <Suspense fallback={null}>
          <RedirectHandler />
        </Suspense>

        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-[50%]">
            <Lottie
              animationData={login}
              loop={true}
              width={500}
              height={500}
            />
          </div>

          <div className="card bg-gray-100 lg:w-[50%] shrink-0 shadow-2xl">
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
                <button className="btn btn-primary shadow-black" type="submit">
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