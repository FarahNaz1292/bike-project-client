'use client'

import Image from 'next/image'
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { CartButton } from './Cart';
import { User } from '@/types/userTypes';



if (typeof window !== 'undefined') {
    require('aos');
}
const Navbar = () => {
    const { id } = useParams()
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
     
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          const userData = JSON.parse(storedUser);
          setUser({
            _id: userData._id,
            name: userData.name || userData.email,
            img: userData.img || 'https://placeholderimage.com/avatar.jpg',
            email: userData.email,
            password: userData.password,
          });
        }
        
}, []);

    React.useEffect(() => {
        const AOS = require('aos');
        AOS.init({
            duration: 1000,
        });
    })
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Shop</a>
                                <ul className="p-2">
                                    <li><a>Cruiser Bikes</a></li>
                                    <li><a>Road Bikes</a></li>
                                    <li><a>Mountain Bikes</a></li>
                                    <li><a>Hybrid Bikes</a></li>
                                    <li><a>Gravel Bikes</a></li>
                                    <li><a>Dirt Bikes</a></li>
                                    <li><a>Scooter</a></li>
                                    <li><a>Adventure Bikes</a></li>
                                    <li><a>Chopper Bikes</a></li>
                                </ul>
                            </li>
                            <li> <a>Services</a>
                                <ul className="p-2 ">
                                    <li><a>Cleaning and Lubrication</a></li>
                                    <li><a>Chain Maintenance</a></li>
                                    <li><a>Tire Inflation and Valve Checks</a></li>
                                    <li><a>Brake Adjustments</a></li>
                                </ul>
                            </li>
                            <li><a className='font-bold text-xl'>Appointments</a></li>
                            <li><a className='font-bold text-xl'>About Us</a></li>
                            <li><a className='font-bold text-xl'>Contact Us</a></li>
                        </ul>
                    </div>
                    <a>
                        <Image src='https://www.shutterstock.com/image-vector/bike-badge-vector-logo-600nw-1142801678.jpg' alt='logo' width={80} height={8} data-aos='zoom-in' />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className='flex justify-between gap-8'>

                        <Link href={`/`} > <li className='font-bold text-xl gap-4'>Home</li></Link>
                        <Link href={`/ourservices`} > <li className='font-bold text-xl gap-4'>Services</li></Link>
                        <Link href={`/appointments`} ><li className="font-bold text-xl gap-4"> Appointments</li></Link>
                        <Link href={`/aboutus`} > <li className='font-bold text-xl gap-4'>About Us</li></Link>
                        <Link href={`/contactus`} > <li className='font-bold text-xl gap-4'>Contact Us</li></Link>
                    </ul>


                </div>
                <div className="navbar-end flex items-center gap-4">
                    <CartButton />
                    {user ? (
  <div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-20 h-10 rounded-full">
        <img
          src={user.img}
          alt="user avatar"
          className="rounded-full object-cover"
        />
      </div>
    </label>
    <ul
      tabIndex={0}
      className="mt-3 z-[50] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
    >
      <li className="font-bold text-lg text-center">{user.name}</li>
      <li>
        <button
          className="text-red-500"
          onClick={() => setUser(null)} // Clear user data on logout
        >
          Logout
        </button>
      </li>
    </ul>
  </div>
) : (
  <Link href="/signin">
    <button className="btn btn-primary">Sign In</button>
  </Link>
)}

                </div>
            </div>
        </>
    )
}

export default Navbar