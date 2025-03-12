'use client'

import { ServicesType } from '@/types/serviceTypes'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const ShopServices = () => {
    React.useEffect(() => {
        const AOS = require('aos');
        AOS.init({
            duration: 1000,
        });
    })

    const [services, setServices] = useState<ServicesType[]>([])
    useEffect(() => {
        const getServices = async () => {
            try {
                const response = await axios.get("http://localhost:5001/services")
                setServices(response.data.data)
            } catch (error) {
                console.error("Error fetching services:", error)
            }
        }
        getServices()
    }, [])
    return (
        <>
            <div>
                <div className='flex justify-center container mx-auto m-4' data-aos="fade-left">
                    <div>
                        <Image src='https://static.vecteezy.com/system/resources/previews/012/574/823/non_2x/motorcycle-wheel-motorcycle-template-design-for-logo-badge-emblem-and-other-free-vector.jpg' alt='tire Image' width={200} height={40} />
                        <h1 className='text-2xl font-bold'>Tyre Repair's</h1>
                    </div>
                    <div>
                        <div >
                            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSVOIBDgtkFygnvYrP1l6z_D-GK-t9_1ydUw&s' alt='tire Image' width={200} height={40} />
                            <h1 className='text-2xl font-bold'>Chain Repair's</h1>
                        </div>
                    </div>
                    <div>
                        <Image src='https://static.vecteezy.com/system/resources/previews/011/913/499/non_2x/chrome-vintage-motorcycle-engine-logo-with-angel-wings-free-vector.jpg' alt='motor bike engine Image' width={250} height={40} />
                        <h1 className='text-2xl font-bold'>Motor Bike Repair's</h1>
                    </div>
                    <div>
                        <Image src='https://static.vecteezy.com/system/resources/previews/049/641/352/non_2x/black-car-brake-disc-isolated-on-white-eps-illustration-free-vector.jpg' alt='tire Image' width={200} height={40} />
                        <h1 className='text-2xl font-bold'>Brake Repair's</h1>
                    </div>
                </div>
                {
                    services?.map((service) =>
                     <Link href={`/ourservices/${service._id}`} key={service._id}>
                        <div className='flex flex-1 justify-center container mx-auto m-4 items-center card bg-base-200 text-center shadow-md' data-aos="zoom-in">
                            <div className="divider divider-primary"> <h1 className='text-2xl font-bold'>{service.name}</h1></div>
                            <div className='card-body'>

                                <p className='text-xl font-medium'>Price/hr: {service.price}</p>
                                <p className='text-lg font-bold'>{service.description}</p>
                                <p className='text-lg font-medium font-mono'>Estimated Time: {service.estimatedTime}</p>
                            </div>
                            <div className="divider divider-primary"></div>
                        </div>
                     </Link>
                    )
                }
            </div>

            <div className='flex justify-center items-center gap-4 m-4'>
                <div>
                    <Link href={'contactus'}>
                        <button className='btn btn-primary'>Contact us</button>
                    </Link>
                </div>
                <div>
                    <Link href={'/signin'}>
                        <button className='btn btn-primary w-26'>Sign In</button>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default ShopServices