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
import { useCart, CartItem } from '../Shared/Cart'
import { ShoppingCart, Check } from 'lucide-react'
import { useRouter } from 'next/navigation' 
import { getUser } from '@/utils/useAuth';
import toast from 'react-hot-toast'

const SingleProductPage = () => {
  const router = useRouter();
  const { id } = useParams()
  const [singleProduct, setSingleProduct] = useState<BikeInfo | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [isAddedToCart, setIsAddedToCart] = useState(false)
  
  // Get cart functions from context
  const { addItem, items } = useCart()

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

  // Check if product is already in cart
  useEffect(() => {
    if (singleProduct && items.some((item: CartItem) => item.id === singleProduct._id)) {
      setIsAddedToCart(true)
    } else {
      setIsAddedToCart(false)
    }
  }, [items, singleProduct])
  const handleAddToCart = () => {
    const user = getUser();
  
    if (!user) {
      toast.error("You need to sign in to add products to cart.");
      router.push("/signin?redirect=addToCart");
      return;
    }
  
    if (!singleProduct) return;
  
    const cartItem: CartItem = {
      id: singleProduct._id,
      name: singleProduct.title,
      price: singleProduct.price,
      quantity: quantity,
      image: singleProduct.imageURL,
    };
  
    addItem(cartItem);
    setIsAddedToCart(true);
    toast.success(`${singleProduct.title} added to cart`);
  
    setTimeout(() => {
      setIsAddedToCart(false);
    }, 2000);
  };
  // Handle quantity change  

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    if (!isNaN(value) && value > 0) {
      setQuantity(value)
    }
  }

  const incrementQuantity = () => setQuantity(prev => prev + 1)
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1)

  return (
    <>
      <ProductVideoSection />
      <div>
        <div className='text-center m-4'>
          <h1 className='text-2xl font-extrabold'>Shop our Products</h1>
          <p className='text-xl font-bold'>Fuel your passion, embrace the ride—your dream bike awaits!</p>
        </div>

        {singleProduct ? (
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
              <div>
                <Image src={singleProduct.imageURL} alt={singleProduct.title} width={500} height={64} className="object-cover rounded-lg shadow-lg" />
              </div>
              <div className="lg:ml-8">
                <h1 className="text-5xl font-bold">{singleProduct.title}</h1>
                <div className="flex items-center gap-2 my-2">
                  <p className="text-3xl font-bold">${singleProduct.price}</p>
                  {singleProduct.price && (
                    <p className="text-xl line-through text-gray-500">${singleProduct.price}</p>
                  )}
                </div>
                
                <div className="flex items-center gap-2 my-2">
                  <StarRatings
                    rating={singleProduct.rating}
                    starRatedColor="#fbbf24"
                    numberOfStars={5}
                    name='rating'
                    starDimension="20px"
                    starSpacing="2px"
                  />
                  <span className="text-sm">({singleProduct.rating || 0} ratings)</span>
                </div>
                
                <p className="py-6">{singleProduct.description}</p>
                
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center my-4">
                  <div className="join border rounded-md">
                    <button 
                      className="join-item btn btn-ghost" 
                      onClick={decrementQuantity}
                    >-</button>
                    <input 
                      type="number" 
                      className="join-item w-16 text-center" 
                      value={quantity} 
                      onChange={handleQuantityChange}
                      min="1"
                    />
                    <button 
                      className="join-item btn btn-ghost" 
                      onClick={incrementQuantity}
                    >+</button>
                  </div>
                  
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    className={`btn ${isAddedToCart ? 'btn-success' : 'btn-primary'} flex items-center gap-2`}
                    onClick={handleAddToCart}
                  >
                    {isAddedToCart ? (
                      <>
                        <Check size={18} />
                        Added to Cart
                      </>
                    ) : (
                      <>
                        <ShoppingCart size={18} />
                        Add to Cart
                      </>
                    )}
                  </motion.button>
                  
                  <Link href="/checkout">
                    <button className="btn btn-outline">Buy Now</button>
                  </Link>
                </div>
                
                {/* Product details/specifications */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-2">Specifications</h3>
                  <div className="overflow-x-auto">
                    <table className="table table-zebra">
                      <tbody>
                        {singleProduct.title && (
                          <tr>
                            <td className="font-medium">Type</td>
                            <td>{singleProduct.title}</td>
                          </tr>
                        )}
                        {singleProduct.price && (
                          <tr>
                            <td className="font-medium">Price</td>
                            <td>$ {singleProduct.price}</td>
                          </tr>
                        )}
                        {singleProduct.rating&& (
                          <tr>
                            <td className="font-medium">Ratings</td>
                            <td>{singleProduct.rating}</td>
                          </tr>
                        )}
                       
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-[40vh]">
            <span className="loading loading-spinner loading-lg"></span>
            <p className="ml-2 text-gray-500">Loading product details...</p>
          </div>
        )}
      </div>
    </>
  )
}

export default SingleProductPage