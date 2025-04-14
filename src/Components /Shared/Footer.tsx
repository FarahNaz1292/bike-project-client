'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (

    <div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 ">
      <div className='container mx-auto flex justify-between items-center'>
      <aside>
       <Image src='https://www.shutterstock.com/image-vector/bike-badge-vector-logo-600nw-1142801678.jpg' alt='logo' width={80} height={8} className="rounded-full"/>
        <p className='font-bold'>
          Bike Shop
        
        </p>
        <p> Providing reliable mechical services since 1992</p>
      </aside>

      <nav className='flex flex-col'>
        <h6 className="footer-title">Services</h6>
        <Link href="#"><span className="link link-hover">Branding</span></Link>
        <Link href="#"><span className="link link-hover">Design</span></Link>
        <Link href="#"><span className="link link-hover">Marketing</span></Link>
        <Link href="#"><span className="link link-hover">Advertisement</span></Link>
      </nav>

      <nav className='flex flex-col'>
        <h6 className="footer-title">Company</h6>
        <Link href="#"><span className="link link-hover">About us</span></Link>
        <Link href="#"><span className="link link-hover">Contact</span></Link>
        <Link href="#"><span className="link link-hover">Jobs</span></Link>
        <Link href="#"><span className="link link-hover">Press kit</span></Link>
      </nav>

      {/* <nav className='flex flex-col'>
        <h6 className="footer-title">Legal</h6>
        <Link href="#"><span className="link link-hover">Terms of use</span></Link>
        <Link href="#"><span className="link link-hover">Privacy policy</span></Link>
        <Link href="#"><span className="link link-hover">Cookie policy</span></Link>
      </nav> */}
        <div className="space-y-4">
            <div className='flex  justify-between items-center'>
            <h3 className=" footer-title ">Contact Info</h3>
        
            </div>
            <p className="text-sm text-black">bikeshop@xyz.com</p>
            <p className="text-sm text-black">WhatsApp: +1 585-456-7321</p>
            <div className="flex space-x-4 mt-4">
              {/* Facebook Icon */}
              <Link href="#" aria-label="Facebook" className="text-black hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              {/* Twitter Icon */}
              <Link href="#" aria-label="Twitter" className="text-black hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              {/* Instagram Icon */}
              <Link href="#" aria-label="Instagram" className="text-black hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              {/* LinkedIn Icon */}
              <Link href="#" aria-label="LinkedIn" className="text-black hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </div>
          </div>
       
        </div>

      
        
       
    
    </footer>
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
    <aside>
      <p>Copyright © {new Date().getFullYear()} - All right reserved by Bike shop Ltd</p>
      </aside>
    </footer>
    </div>
  
  )
}


export default Footer
