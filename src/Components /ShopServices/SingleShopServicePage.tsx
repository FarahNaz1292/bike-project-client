'use client'

import { ServicesType } from '@/types/serviceTypes'
import { User } from '@/types/userTypes'
import { getUser } from '@/utils/useAuth'
import axios from 'axios'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { ShoppingCart, Check } from 'lucide-react'
import { useCart } from '../Shared/Cart' // We'll create this context next

const SingleShopServicePage = () => {
  const { id } = useParams()
  const router = useRouter()
  const [singleService, setSingleService] = useState<ServicesType | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [addedToCart, setAddedToCart] = useState(false)
  
  // Get cart methods from our context
  const { addItem, items } = useCart()

  useEffect(() => {
    // Check authentication first
    const user = getUser()
    
    if (!user) {
      // No authenticated user found, redirect to signin
      router.push('/signin')
      return
    }

    const getSingleProduct = async () => {
      if (!id) return // Ensure ID exists before making the request

      try {
        setLoading(true)
        const response = await axios.get(`http://localhost:5001/services/${id}`)
        console.log("Product ID from useParams:", id)
        console.log("Fetched product:", response.data) // Debugging log
        setSingleService(response.data.data)
        
        // Check if this service is already in the cart
        const serviceInCart = items.find(item => item.id === response.data.data._id)
        if (serviceInCart) {
          setAddedToCart(true)
        }
      } catch (error) {
        console.error("Error fetching product:", error)
      } finally {
        setLoading(false)
      }
    }

    getSingleProduct()
  }, [id, router, items])

  const handleAddToCart = () => {
    if (singleService) {
      // Add the service to cart
      addItem({
        id: singleService._id || String(id),
        name: singleService.name,
        price: parseFloat(singleService.price),
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkmrxf9thIaEZqkR_mk3mmYgE0jYJvaM7tCg&s",
        quantity: 1,
        
        // estimatedTime: singleService.estimatedTime
      })
      
      // Show feedback
      setAddedToCart(true)
      
      // Reset the feedback after 2 seconds
      setTimeout(() => {
        setAddedToCart(false)
      }, 2000)
    }
  }

  const handleGoToCart = () => {
    router.push('/cart')
  }

  // If we're still checking authentication or loading data, show a loading indicator
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl font-semibold">Loading service details...</p>
      </div>
    )
  }

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-4 md:p-8 lg:p-12 w-full pb-10 min-h-screen">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkmrxf9thIaEZqkR_mk3mmYgE0jYJvaM7tCg&s" 
            alt="workshop Image" 
            width={1400} 
            height={250} 
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          {singleService ? (
            <div className='space-y-4'>
              <h1 className='font-extrabold text-2xl'>{singleService.name}</h1>
              <p className='font-bold text-xl'>Price/hr: $ {singleService.price}</p>
              <p className='font-semibold text-lg'>Estimated Time: {singleService.estimatedTime}</p>
              
              {/* Add to Cart Button */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={handleAddToCart}
                  className={`btn ${addedToCart ? 'btn-success' : 'btn-primary'} flex items-center gap-2`}
                >
                  {addedToCart ? (
                    <>
                      <Check size={20} />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={20} />
                      Add to Cart
                    </>
                  )}
                </button>
                
              
              </div>
              
              <h2 className='font-semibold text-lg mt-6'>About the service</h2>
              <p className=''>
                {singleService.description}. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, alias officia! Vel culpa eveniet ipsa aliquam, similique ab mollitia hic. Illo quaerat exercitationem <br/>vitae similique at est corporis, architecto illum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate <br/>impedit mollitia ratione nisi blanditiis vitae accusantium esse dicta libero dolor cum natus, aperiam ut unde asperiores quia consequatur nobis quod.
                Mollitia dicta ad atque enim nobis repudiandae<br/> asperiores consequuntur sequi saepe molestias sed omnis, laudantium quae voluptatem dolorum quia sunt id, voluptatibus nisi officia voluptate rerum! Ut nesciunt esse labore!
              </p>
            </div>
          ) : (
            <div>
              <p>Service not found or could not be loaded.</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default SingleShopServicePage