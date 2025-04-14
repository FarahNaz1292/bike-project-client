'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import appointmentAnimation1 from '../../../public/appointmentAnimation1.json'

// Dynamically import Lottie with ssr: false
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

const Appointments = () => {
    // Add a client-side only render check
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <>
            <Image src="https://www.shutterstock.com/image-photo/bicycle-tools-board-bike-mechanic-600nw-510328057.jpg" width={800} height={200} className='w-full h-100' alt='Bicycle tools and maintenance' />
            <section className="w-full bg-gray-100 py-40 px-6 lg:px-20">

                <div className='text-center'>
                    {isClient && (
                        <h2 className="text-2xl md:text-3xl font-extrabold text-blue-600">
                            Make Your Bike Service Appointment Today!
                        </h2>
                    )}
                </div>
                <div className='flex flex-col md:flex-row m-4'>
                    <div className='w-full md:w-1/2'>
                        <div className="flex justify-center mb-8 lg:mb-0">
                            {isClient && (
                                <Lottie
                                    animationData={appointmentAnimation1}
                                    loop
                                    className="w-1/2 sm:w-2/3 md:w-1/2 lg:w-[80%] xl:w-[70%] max-w-lg"
                                />
                            )}
                        </div>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <form>
                            <fieldset className="fieldset w-full bg-base-200 border border-base-300 p-4 rounded-box">
                                <legend className="fieldset-legend text-center">Make an Appointment</legend>

                                <label className="fieldset-label">Riders Name</label>
                                <input type="text" className="input w-full" placeholder="Please enter your Name" />

                                <label className="fieldset-label">Email</label>
                                <input type="email" className="input w-full" placeholder="Please enter your Email" />

                                <label className="fieldset-label text-nowrap">Appointment Date</label>
                                <input type="date" className='input w-full' placeholder='Choose a day' />

                                <button className="btn btn-primary mt-4 w-full">Book</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Appointments