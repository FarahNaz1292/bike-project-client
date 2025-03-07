'use client'

import { BikeInfo } from '@/types/productTypes'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import StarRatings from 'react-star-ratings'


const Products = () => {
  const [products, setProducts] = useState<BikeInfo[]>([])
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5001/products')
        const data = await response.json()
        console.log(data);
        if (response.ok) {
          setProducts(data.data);
        } else {
          console.error('Failed to fetch products:', data.message);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts()
  }, [])

  const handleShowAllClick = () => {
    setShowAll(!showAll) // Toggle the state to show all products or limited products
  }

  const displayedProducts = showAll ? products : products.slice(0, 9) // Display all or only first 10 products

  return (
    <>
      <div className='flex flex-col items-center justify-center m-4'>
        <h1 className='text-3xl font-extrabold mt-2'>Our Product Cataloge</h1>
        <h3 className='texl-2xl font-bold mt-2'>Explore the Bikes you might like</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {displayedProducts.map((product) => (
          <div className="card bg-base-100 w-96 shadow-sm" key={product.id}>
            <figure className="px-10 pt-10">
              <img
                src={product.imageURL}
                alt="Bike images"
                className="rounded-xl w-[300] h-[250]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{product.title}</h2>
              <div className='flex gap-4'>
                <p className='text-gray-800 font-bold'>${product.price}</p>
                <p className='text-gray-800 font-bold'>{product.category}</p>
              </div>

              <StarRatings
                rating={product.rating}
                starRatedColor="#fbbf24"
                numberOfStars={5}
                name='rating'
                starDimension="20px"
                starSpacing="2px"
              />
             <Link href={'product/id'}>
             <div className="card-actions">
                <button className="btn btn-primary">More Details</button>
              </div>
             </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handleShowAllClick}
          className="btn btn-primary"
        >
          {showAll ? 'Show Less' : 'Show All'}
        </button>
      </div>
    </>
  )
}

export default Products
