'use client'

import Image from 'next/image'
import 'aos/dist/aos.css';
import React from 'react';
import Link from 'next/link';


if (typeof window !== 'undefined') {
    require('aos');
}
const Navbar = () => {
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
                          <Link href={'/'}>  <li>Home</li></Link>
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
                    <ul className="menu menu-horizontal px-1">
                        <li><a className='font-bold text-xl'>Home</a></li>
                        <li>
                            <details className="relative z-20">
                                <summary className='font-bold text-xl '>Shop</summary>
                                <ul className="p-2">
                                    <li><a className='text-nowrap'>Cruiser Bikes</a></li>
                                    <li><a className='text-nowrap'>Road Bikes</a></li>
                                    <li><a className='text-nowrap'>Mountain Bikes</a></li>
                                    <li><a className='text-nowrap'>Hybrid Bikes</a></li>
                                    <li><a className='text-nowrap'>Gravel Bikes</a></li>
                                    <li><a className='text-nowrap'>Dirt Bikes</a></li>
                                    <li><a className='text-nowrap'>Scooter</a></li>
                                    <li><a className='text-nowrap'>Adventure Bikes</a></li>
                                    <li><a className='text-nowrap'>Chopper Bikes</a></li>
                                </ul>

                            </details>
                        </li>
                        <li>
                            <details className="relative z-20">
                                <summary className='font-bold text-xl'>Services</summary>
                                <ul className="p-2 ">
                                    <li><a className='text-nowrap'>Cleaning and Lubrication</a></li>
                                    <li><a className='text-nowrap'>Chain Maintenance</a></li>
                                    <li><a className='text-nowrap'>Tire Inflation and Valve Checks</a></li>
                                    <li><a className='text-nowrap'>Brake Adjustments</a></li>
                                </ul>

                            </details>
                        </li>
                        <li><a className='font-bold text-xl'>Appointments</a></li>
                        <li><a className='font-bold text-xl'>About Us</a></li>
                        <li><a className='font-bold text-xl'>Contact Us</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Sign Up</a>
                </div>
            </div>
        </>
    )
}

export default Navbar