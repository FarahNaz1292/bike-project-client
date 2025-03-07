'use client'


import React, { useEffect, useState } from 'react'
import ProductVideoSection from '../Video/ProductVideoSection'
import { BikeInfo } from '@/types/productTypes'
import { useParams } from 'next/navigation'


const SingleProductPage = () => {
    const {id}=useParams()
    const [singleProduct, setSingleProduct]=useState<BikeInfo[]>([])

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch(`http://localhost:5001/products/${id}`);
          const data = await response.json()
          console.log(data);
          if (response.ok) {
            setSingleProduct(data.data);
          } else {
            console.error('Failed to fetch products:', data.message);
          }
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      }
      fetchProducts()
    }, [id])

  return (
  <>
   <ProductVideoSection/>
  <div className='text-center m-4'>
    <h1 className='text-2xl font-extrabold'>Shop our Products</h1>
    <p className='text-xl font-bold'>Fuel your passion, embrace the ride—your dream bike awaits!</p>
     </div>
     <div>
        <div></div>
        <div></div>
     </div>
  </>
  )
}

export default SingleProductPage