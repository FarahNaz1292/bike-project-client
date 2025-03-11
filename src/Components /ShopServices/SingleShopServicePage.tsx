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
      <div className='flex justify-center items-center gap-10'>
        <div>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkmrxf9thIaEZqkR_mk3mmYgE0jYJvaM7tCg&s" alt="workshop Image" width={600} height={250} />
        </div>
        <div>
          {singleService ? (
            <div className=''>
              <h1>{singleService.name}</h1>
              <p>Price/hr: {singleService.price}</p>
              <p>Estimated Time: {singleService.estimatedTime}</p>
              <h2>About the service </h2>
              <p>{singleService.description}</p>
            </div>
          ) : (<div>
            <p>Loading services .....</p>
          </div>) }
        </div>
       
      </div>
      <div>
      <h1>Our Policies</h1>
      </div>
    </>
  )
}

export default SingleShopServicePage