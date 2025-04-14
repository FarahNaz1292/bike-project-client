'use client'

import React, { useState, useEffect, createContext, useContext } from 'react'
import Image from 'next/image'
import { ShoppingCart, Trash, Plus, Minus, X } from 'lucide-react'
import Link from 'next/link'

// Types for cart items
export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

// Cart context type
interface CartContextType {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

// Create a CartContext
export const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  isOpen: false,
  setIsOpen: () => {}
})

// Cart Provider component
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  
  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (error) {
        console.error('Failed to parse cart from localStorage:', error)
      }
    }
  }, [])
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items))
  }, [items])
  
  const addItem = (item: CartItem) => {
    setItems(prev => {
      // Check if item already exists
      const existingItemIndex = prev.findIndex(i => i.id === item.id)
      
      if (existingItemIndex >= 0) {
        // Update quantity of existing item
        const updatedItems = [...prev]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + item.quantity
        }
        return updatedItems
      } else {
        // Add new item
        return [...prev, item]
      }
    })
    
    // Open cart drawer when adding items
    setIsOpen(true)
  }
  
  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id))
  }
  
  const updateQuantity = (id: string, quantity: number) => {
    setItems(prev => 
      prev.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, quantity) } 
          : item
      )
    )
  }
  
  const clearCart = () => {
    setItems([])
  }
  
  return (
    <CartContext.Provider value={{ 
      items, 
      addItem, 
      removeItem, 
      updateQuantity,
      clearCart,
      isOpen,
      setIsOpen
    }}>
      {children}
    </CartContext.Provider>
  )
}

// Custom hook to use cart
export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

// Cart item component
const CartItemComponent: React.FC<{ 
  item: CartItem, 
  onRemove: (id: string) => void,
  onUpdateQuantity: (id: string, quantity: number) => void
}> = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <div className="flex items-center gap-4 py-3 border-b">
      <div className="h-20 w-30 relative rounded-lg overflow-hidden flex-shrink-0">
        <Image 
          src={item.image} 
          alt={item.name} 
          fill
          className="object-cover"
        />
      </div>
      
      <div className="flex-grow">
        <h4 className="font-medium">{item.name}</h4>
        <p className="text-gray-600 text-sm">${item.price}</p>
      </div>
      
      <div className="flex flex-col items-end gap-2">
        <button 
          onClick={() => onRemove(item.id)}
          className="btn btn-ghost btn-xs text-error"
        >
          <Trash size={16} />
        </button>
        
        <div className="join">
          <button 
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="btn btn-xs join-item"
            disabled={item.quantity <= 1}
          >
            <Minus size={14} />
          </button>
          
          <span className="join-item px-2 flex items-center justify-center bg-base-200">
            {item.quantity}
          </span>
          
          <button 
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="btn btn-xs join-item"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}

// Main Cart Drawer component
export const CartDrawer: React.FC = () => {
  const { items, removeItem, updateQuantity, clearCart, isOpen, setIsOpen } = useCart()
  
  const totalItems = items.reduce((total, item) => total + item.quantity, 0)
  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0)

  const drawerClasses = isOpen
    ? "fixed top-0 right-0 h-full w-80 md:w-96 bg-base-100 shadow-xl z-50 transform translate-x-0 transition-transform duration-300 ease-in-out"
    : "fixed top-0 right-0 h-full w-80 md:w-96 bg-base-100 shadow-xl z-50 transform translate-x-full transition-transform duration-300 ease-in-out";
  
  return (
    <>
      {/* Overlay - only render if the cart is open */}
      {isOpen && (
        <div 
          className="fixed inset-0  bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        ></div>
      )}
      
      {/* The actual drawer */}
      <div className={drawerClasses}>
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="font-bold text-lg">Shopping Cart ({totalItems})</h3>
            <button 
              className="btn btn-ghost btn-sm btn-circle"
              onClick={() => setIsOpen(false)}
            >
              <X size={18} />
            </button>
          </div>
          
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center flex-grow p-4">
              <ShoppingCart size={64} className="text-neutral-content mb-4" />
              <h3 className="text-xl font-medium mb-1">Your cart is empty</h3>
              <p className="text-neutral-content mb-6 text-center">
                Add some items to see them here!
              </p>
              <button 
                className="btn btn-primary" 
                onClick={() => setIsOpen(false)}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="flex-grow overflow-y-auto p-4">
                {items.map(item => (
                  <CartItemComponent 
                    key={item.id}
                    item={item}
                    onRemove={removeItem}
                    onUpdateQuantity={updateQuantity}
                  />
                ))}
              </div>
              
              <div className="p-4 border-t">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className=" text-gray-600">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="divider my-2"></div>
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="space-y-2 mt-4">
                <Link href="/checkout" className="w-full">
  <button 
    className="btn btn-primary w-full"
    onClick={() => setIsOpen(false)}
  >
    Checkout
  </button>
</Link>
                  <button 
                    className="btn btn-outline w-full"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

// Cart button for navbar
export const CartButton: React.FC = () => {
  const { items, setIsOpen } = useCart()
  const totalItems = items.reduce((total, item) => total + item.quantity, 0)
  
  return (
    <button 
      className="btn btn-ghost btn-circle indicator"
      onClick={() => setIsOpen(true)}
    >
      <ShoppingCart className="h-6 w-6" />
      {totalItems > 0 && (
        <span className="indicator-item badge badge-sm">
          {totalItems}
        </span>
      )}
    </button>
  )
}