'use client'

import React from 'react'
import Lottie from 'lottie-react'
import { TypeAnimation } from 'react-type-animation'
import appointmentAnimation1 from '../../../public/appointmentAnimation1.json'
import Image from 'next/image'

const Appointments = () => {
    return (
        <>
            <Image src="https://www.shutterstock.com/image-photo/bicycle-tools-board-bike-mechanic-600nw-510328057.jpg" width={800} height={200} className='w-full h-100' alt={''} />
            <section className="w-full bg-gray-100 py-40 px-6 lg:px-20">


                <div className='text-center'>
                    <TypeAnimation
                        sequence={[
                            'Ride Smooth, Book Now!',
                            1000,
                            "Your Bike Deserves the Best—Schedule a Tune-Up Today!",
                            1000,
                            "Don't Wait, Elevate Your Ride—Make an Appointment Now!",
                            1000,
                        ]}
                        wrapper="h2"
                        speed={50}
                        className="text-2xl md:text-3xl font-extrabold text-blue-600"
                        repeat={Infinity}
                    />
                </div>
                <div className='flex m-4'>
                    <div className='w-[50%]'>



                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
                            <Lottie
                                animationData={appointmentAnimation1}
                                loop
                                className="w-1/2 sm:w-2/3 md:w-1/2 lg:w-[80%] xl:w-[70%] max-w-lg"
                            />
                        </div>
                    </div>
                    <div >
                        <form>
                            <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
                                <legend className="fieldset-legend text-center">Make an Appointment</legend>

                                <label className="fieldset-label">Riders Name</label>
                                <input type="Name" className="input" placeholder="Please enter your Name" />

                                <label className="fieldset-label">Email</label>
                                <input type="email" className="input" placeholder="Please enter your Email" />


                                <label className="fieldset-label text-nowrap">Appointment Date  </label>

                                <input type="date" className='input' placeholder='Choose a day' />

                                <button className="btn btn-primary mt-4">Book</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Appointments