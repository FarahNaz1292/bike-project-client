'use client'


import { BikeInfo } from '@/types/productTypes'
import React, { useEffect, useState } from 'react'
import SearchBar from '../Shared/SearchBar'

const Products = () => {
  const [products, setProducts] = useState<BikeInfo[]>([])
  useEffect(() => {
    const fetchProducts = async () => {

      try {
        const response = await fetch('http://localhost:5001/products')
        const data = await response.json()
        console.log(data);
        if (response.ok) {
          setProducts(data.data); // Accessing 'data' from your API response
        } else {
          console.error('Failed to fetch products:', data.message);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }

    }
    fetchProducts()

  }, [])

  return (
    <>
      <div className='flex flex-col items-center justify-center m-4'>
        <h1 className='text-2xl font-extrabold'>Our Product Cataloge</h1>
        <h3 className='texl-xl font-bold'>Explore the Bikes you might like</h3>
      </div>
      <SearchBar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {products.map((product) =>
        (
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src={product.imageURL}
                alt="Bike images"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{product.title}</h2>
              <p>{product.price}</p>
              <p>{product.category}</p>
              <p>{product.rating}</p>
              <p>{product.description}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        )
        )}
      </div>
    </>
  )
}

export default Products