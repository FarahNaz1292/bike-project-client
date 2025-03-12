'use client'


import { ServicesType } from '@/types/serviceTypes'
import axios from 'axios'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const SingleShopServicePage = () => {
  const { id } = useParams()

  const [singleService, setSingleService] = useState<ServicesType | null>(null)

  useEffect(() => {
    const getSingleProduct = async () => {
      if (!id) return // Ensure ID exists before making the request

      try {
        const response = await axios.get(`http://localhost:5001/services/${id}`)
        console.log("Product ID from useParams:", id);

        console.log("Fetched product:", response.data) // Debugging log

        setSingleService(response.data.data)
      } catch (error) {
        console.error("Error fetching product:", error)
      }
    }

    getSingleProduct()
  }, [id])
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-4 md:p-8 lg:p-12 w-full pb-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkmrxf9thIaEZqkR_mk3mmYgE0jYJvaM7tCg&s" alt="workshop Image" width={1400} height={250} 
         />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          {singleService ? (
            <div className='space-y-4'>
              <h1 className='font-extrabold text-2xl'>{singleService.name}</h1>
              <p className='font-bold text-xl'>Price/hr: {singleService.price}</p>
              <p className='font-semibold text-lg'>Estimated Time: {singleService.estimatedTime}</p>
              <h2 className='font-semibold text-lg'>About the service </h2>
              <p className=''>{singleService.description}. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, alias officia! Vel culpa eveniet ipsa aliquam, similique ab mollitia hic. Illo quaerat exercitationem <br/>vitae similique at est corporis, architecto illum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate <br/>impedit mollitia ratione nisi blanditiis vitae accusantium esse dicta libero dolor cum natus, aperiam ut unde asperiores quia consequatur nobis quod.
              Mollitia dicta ad atque enim nobis repudiandae<br/> asperiores consequuntur sequi saepe molestias sed omnis, laudantium quae voluptatem dolorum quia sunt id, voluptatibus nisi officia voluptate rerum! Ut nesciunt esse labore!</p>
            </div>
          ) : (<div>
            <p>Loading services .....</p>
          </div>)}
        </div>

      </div>
      <div>

      </div>
    </>
  )
}

export default SingleShopServicePage