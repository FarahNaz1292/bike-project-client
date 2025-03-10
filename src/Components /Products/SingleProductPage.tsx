'use client'

import React, { useEffect, useState } from 'react'
import ProductVideoSection from '../Video/ProductVideoSection'
import { BikeInfo } from '@/types/productTypes'
import { useParams } from 'next/navigation'
import axios from 'axios'
import StarRatings from 'react-star-ratings'
import Image from "next/image";
import { motion } from "framer-motion";
import Link from 'next/link'

const SingleProductPage = () => {
  const { id } = useParams()

  const [singleProduct, setSingleProduct] = useState<BikeInfo | null>(null) // Use a single object

  useEffect(() => {
    const getSingleProduct = async () => {
      if (!id) return // Ensure ID exists before making the request

      try {
        const response = await axios.get(`http://localhost:5001/products/${id}`)
        console.log("Product ID from useParams:", id);

        console.log("Fetched product:", response.data) // Debugging log

        setSingleProduct(response.data.data)
      } catch (error) {
        console.error("Error fetching product:", error)
      }
    }

    getSingleProduct()
  }, [id])

  return (
    <>
      <ProductVideoSection />
      <div className='text-center m-4'>
        <h1 className='text-2xl font-extrabold'>Shop our Products</h1>
        <p className='text-xl font-bold'>Fuel your passion, embrace the ride—your dream bike awaits!</p>
      </div>

      {singleProduct ? (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
        <div >
           <Image src={singleProduct.imageURL} alt={singleProduct.title} width={500} height={64} className="object-cover" />
          </div>
          <div>
            <h1 className="text-5xl font-bold">{singleProduct.title}</h1>
            <p className="text-3xl font-bold">Price ${singleProduct.price}</p>
            <StarRatings
              rating={singleProduct.rating}
              starRatedColor="#fbbf24"
              numberOfStars={5}
              name='rating'
              starDimension="20px"
              starSpacing="2px"
            />
            <p className="py-6">
           {singleProduct.description}
            </p>
         <Link href={''}>
         <button className="btn btn-primary"> Click Here To Buy</button>
         </Link>
          </div>
        </div>
      </div>
      ) : (
        <p className="text-center text-gray-500">Loading product details...</p>
      )}
 
      

    </>
  )
}

export default SingleProductPage
