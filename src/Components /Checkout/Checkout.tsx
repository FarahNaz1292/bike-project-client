'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCart } from '../Shared/Cart'
import {
    CreditCard,
    CheckCircle,
    ChevronRight,
    User,
    Mail,
    MapPin,
    Phone,
    Truck,
    Home as HomeIcon
} from 'lucide-react'

// Types
interface CartItem {
    id: string | number
    name: string
    price: number
    quantity: number
}

interface ShippingInfo {
    firstName: string
    lastName: string
    email: string
    phone: string
    address: string
    city: string
    state: string
    zipCode: string
    country: string
}

interface PaymentInfo {
    cardNumber: string
    cardName: string
    expiryDate: string
    cvv: string
}

// Main Checkout Component
export const Checkout: React.FC = () => {
    const router = useRouter()
    const { items, clearCart } = useCart()
    const [currentStep, setCurrentStep] = useState<'shipping' | 'payment' | 'review'>('shipping')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [orderNumber, setOrderNumber] = useState('')

    // Form states
    const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'United States',
    })

    const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: '',
    })

    // Calculate cart totals
    const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0)
    const tax = subtotal * 0.085 // 8.5% tax
    const shipping = subtotal > 100 ? 0 : 10 // Free shipping over $100
    const total = subtotal + tax + shipping

    // Handle form changes
    const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setShippingInfo(prev => ({ ...prev, [name]: value }))
    }

    const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.target

        // Format card number
        if (name === 'cardNumber') {
            value = value.replace(/\D/g, '')
            if (value.length > 16) value = value.slice(0, 16)
            // Add spaces for readability but don't store them
            e.target.value = value.replace(/(\d{4})(?=\d)/g, '$1 ').trim()
        }

        // Format expiry date
        if (name === 'expiryDate') {
            value = value.replace(/\D/g, '')
            if (value.length > 4) value = value.slice(0, 4)
            if (value.length > 2) {
                e.target.value = `${value.slice(0, 2)}/${value.slice(2)}`
            }
        }

        // Format CVV
        if (name === 'cvv') {
            value = value.replace(/\D/g, '')
            if (value.length > 3) value = value.slice(0, 3)
        }

        setPaymentInfo(prev => ({ ...prev, [name]: value }))
    }

    // Handle step navigation
    const goToNextStep = () => {
        if (currentStep === 'shipping') setCurrentStep('payment')
        else if (currentStep === 'payment') setCurrentStep('review')
    }

    const goToPreviousStep = () => {
        if (currentStep === 'payment') setCurrentStep('shipping')
        else if (currentStep === 'review') setCurrentStep('payment')
    }

    // Handle order submission
    const handleSubmitOrder = async () => {
        setIsSubmitting(true)

        try {
           
            await new Promise(resolve => setTimeout(resolve, 2000))

            // Generate random order number
            const randomOrderNum = Math.floor(100000 + Math.random() * 900000).toString()
            setOrderNumber(randomOrderNum)

            // Clear cart and show success modal
            clearCart()
            setShowSuccessModal(true)
        } catch (error) {
            console.error('Error processing order:', error)
            alert('There was an error processing your order. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    // Navigate to home page
    const goToHomePage = () => {
        router.push('/')
    }

    // Render shipping form
    const renderShippingForm = () => (
        <div className="space-y-6 min-h-screen mt-32">
            <h2 className="text-2xl font-bold">Shipping Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">First Name</span>
                    </label>
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800" size={16} />
                        <input
                            type="text"
                            name="firstName"
                            value={shippingInfo.firstName}
                            onChange={handleShippingChange}
                            className="input input-bordered w-full pl-10 shadow-lg"
                            required
                        />
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Last Name</span>
                    </label>
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800" size={16} />
                        <input
                            type="text"
                            name="lastName"
                            value={shippingInfo.lastName}
                            onChange={handleShippingChange}
                            className="input input-bordered shadow-lg w-full pl-10"
                            required
                        />
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800" size={16} />
                        <input
                            type="email"
                            name="email"
                            value={shippingInfo.email}
                            onChange={handleShippingChange}
                            className="input input-bordered shadow-lg w-full pl-10"
                            required
                        />
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800" size={16} />
                        <input
                            type="tel"
                            name="phone"
                            value={shippingInfo.phone}
                            onChange={handleShippingChange}
                            className="input input-bordered w-full shadow-lg pl-10"
                            required
                        />
                    </div>
                </div>
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Address</span>
                </label>
                <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800" size={16} />
                    <input
                        type="text"
                        name="address"
                        value={shippingInfo.address}
                        onChange={handleShippingChange}
                        className="input input-bordered w-full pl-10"
                        required
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">City</span>
                    </label>
                    <input
                        type="text"
                        name="city"
                        value={shippingInfo.city}
                        onChange={handleShippingChange}
                        className="input input-bordered w-full shadow-lg"
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">State</span>
                    </label>
                    <input
                        type="text"
                        name="state"
                        value={shippingInfo.state}
                        onChange={handleShippingChange}
                        className="input input-bordered shadow-lg w-full"
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">ZIP Code</span>
                    </label>
                    <input
                        type="text"
                        name="zipCode"
                        value={shippingInfo.zipCode}
                        onChange={handleShippingChange}
                        className="input input-bordered w-full shadow-lg"
                        required
                    />
                </div>
            </div>

        
            <div className="flex justify-end mt-6">
                <button
                    onClick={goToNextStep}
                    className="btn btn-primary"
                    disabled={!shippingInfo.firstName || !shippingInfo.lastName || !shippingInfo.email || !shippingInfo.address || !shippingInfo.city || !shippingInfo.zipCode}
                >
                    Continue to Payment <ChevronRight size={16} />
                </button>
            </div>
        </div>
    )

    // Render payment form
    const renderPaymentForm = () => (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Payment Information</h2>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Card Number</span>
                </label>
                <div className="relative">
                    <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800" size={16} />
                    <input
                        type="text"
                        name="cardNumber"
                        value={paymentInfo.cardNumber}
                        onChange={handlePaymentChange}
                        placeholder="0000 0000 0000 0000"
                        className="input input-bordered w-full pl-10 shadow-lg"
                        required
                    />
                </div>
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Cardholder Name</span>
                </label>
                <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800" size={16} />
                    <input
                        type="text"
                        name="cardName"
                        value={paymentInfo.cardName}
                        onChange={handlePaymentChange}
                        className="input input-bordered w-full pl-10 shadow-lg"
                        required
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Expiry Date (MM/YY)</span>
                    </label>
                    <input
                        type="text"
                        name="expiryDate"
                        value={paymentInfo.expiryDate}
                        onChange={handlePaymentChange}
                        placeholder="MM/YY"
                        className="input input-bordered w-full shadow-lg"
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">CVV</span>
                    </label>
                    <input
                        type="text"
                        name="cvv"
                        value={paymentInfo.cvv}
                        onChange={handlePaymentChange}
                        placeholder="123"
                        className="input input-bordered w-full shadow-lg"
                        required
                    />
                </div>
            </div>

            <div className="flex justify-between mt-6">
                <button onClick={goToPreviousStep} className="btn btn-ghost">
                    Back
                </button>
                <button
                    onClick={goToNextStep}
                    className="btn btn-primary"
                    disabled={!paymentInfo.cardNumber || !paymentInfo.cardName || !paymentInfo.expiryDate || !paymentInfo.cvv}
                >
                    Review Order <ChevronRight size={16} />
                </button>
            </div>
        </div>
    )

    // Render order review
    const renderOrderReview = () => (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Order Review</h2>

            <div className="bg-base-200 rounded-lg p-4">
                <h3 className="font-medium flex items-center mb-2">
                    <User size={18} className="mr-2" />
                    Customer Details
                </h3>
                <div className="pl-6 mb-4">
                    <p>{shippingInfo.firstName} {shippingInfo.lastName}</p>
                    <p>{shippingInfo.email}</p>
                    <p>{shippingInfo.phone}</p>
                </div>

                <h3 className="font-medium flex items-center mb-2">
                    <Truck size={18} className="mr-2" />
                    Shipping Address
                </h3>
                <div className="pl-6 mb-4">
                    <p>{shippingInfo.address}</p>
                    <p>{shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}</p>
                    <p>{shippingInfo.country}</p>
                </div>

                <h3 className="font-medium flex items-center mb-2">
                    <CreditCard size={18} className="mr-2" />
                    Payment Method
                </h3>
                <div className="pl-6 mb-4">
                    <p>Card ending in {paymentInfo.cardNumber.replace(/\s/g, '').slice(-4)}</p>
                    <p>{paymentInfo.cardName}</p>
                </div>
            </div>

            <div className="border rounded-lg overflow-hidden shadow-lg">
                <h3 className="p-4 bg-base-200 font-medium">Order Summary</h3>
                <div className="p-4">
                    {items.map((item) => (
                        <div key={item.id} className="flex justify-between items-center py-2 border-b">
                            <div className="flex items-center">
                                <span className="badge mr-2">{item.quantity}</span>
                                <span>{item.name}</span>
                            </div>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))}

                    <div className="mt-4 space-y-2">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Tax (8.5%)</span>
                            <span>${tax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping</span>
                            <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                        </div>
                        <div className="flex justify-between font-bold pt-2 border-t">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between mt-6">
                <button onClick={goToPreviousStep} className="btn btn-ghost">
                    Back
                </button>
                <button
                    onClick={handleSubmitOrder}
                    className="btn btn-primary"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <span className="loading loading-spinner loading-sm"></span>
                            Processing...
                        </>
                    ) : (
                        'Place Order'
                    )}
                </button>
            </div>
        </div>
    )

    // Success Modal
    const renderSuccessModal = () => (
        <div className={`modal ${showSuccessModal ? 'modal-open' : ''}`}>
            <div className="modal-box text-center">
                <div className="flex justify-center mb-4">
                    <CheckCircle size={64} className="text-success" />
                </div>
                <h3 className="font-bold text-2xl mb-2">Order Confirmed!</h3>
                <p className="text-lg mb-2">Thank you for shopping with us!</p>
                <p className="mb-6">Your order number is: <strong>#{orderNumber}</strong></p>
                <p className="text-sm text-gray-600 mb-8">
                    A confirmation email has been sent to {shippingInfo.email}
                </p>
                <div className="modal-action justify-center">
                    <button
                        onClick={goToHomePage}
                        className="btn btn-primary"
                    >
                        <HomeIcon size={16} className="mr-2" />
                        Return to Home
                    </button>
                </div>
            </div>
        </div>
    )

    // Main render method
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Step indicators */}
            <div className="flex justify-center mb-8">
                <ul className="steps steps-horizontal w-full md:w-2/3 lg:w-1/2">
                    <li className={`step ${currentStep === 'shipping' || currentStep === 'payment' || currentStep === 'review' ? 'step-primary' : ''}`}>
                        Shipping
                    </li>
                    <li className={`step ${currentStep === 'payment' || currentStep === 'review' ? 'step-primary' : ''}`}>
                        Payment
                    </li>
                    <li className={`step ${currentStep === 'review' ? 'step-primary' : ''}`}>
                        Review
                    </li>
                </ul>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    {currentStep === 'shipping' && renderShippingForm()}
                    {currentStep === 'payment' && renderPaymentForm()}
                    {currentStep === 'review' && renderOrderReview()}
                </div>

                {/* Order summary */}
                <div className="lg:col-span-1">
                    <div className="bg-base-200 p-6 rounded-lg sticky top-4">
                        <h3 className="font-bold text-xl mb-4">Order Summary</h3>

                        <div className="space-y-4 mb-6">
                            {items.map((item) => (
                                <div key={item.id} className="flex justify-between items-center">
                                    <div>
                                        <span className="badge mr-2">{item.quantity}</span>
                                        <span className="font-medium">{item.name}</span>
                                    </div>
                                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-2 pt-4 border-t">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Tax</span>
                                <span>${tax.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                            </div>
                            <div className="flex justify-between font-bold pt-2 border-t">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            {renderSuccessModal()}
        </div>
    )
}

export default Checkout