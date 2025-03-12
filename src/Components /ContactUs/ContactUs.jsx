'use client';

import Lottie from "lottie-react";
import ContactUsAnimation from "../../../public/contactUsAnimation.json";
import React from 'react';
import { TypeAnimation } from "react-type-animation";

const ContactUs = () => {
    return (
        <section className="container mx-auto px-6 py-12">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
                {/* Lottie Animation */}
                <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
                    <Lottie animationData={ContactUsAnimation} loop className="max-w-sm sm:max-w-md lg:max-w-lg" />
                </div>


                <div className="w-full lg:w-1/2 text-center lg:text-left">


                    <TypeAnimation
                        sequence={[
                            "Contact Us via Email",
                            1000,
                            "Call Us Toll-Free",
                            1000,
                            "Visit Us Personally",
                            1000,
                        ]}
                        wrapper="h2"
                        speed={50}
                        className="text-2xl md:text-3xl font-extrabold text-blue-600"
                        repeat={Infinity}
                    />


                    <div className="mt-6 space-y-4">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Reach Out to Us</h1>
                        <p className="text-lg md:text-xl text-gray-600"><strong>Email:</strong> bikeshop@work.com</p>
                        <p className="text-lg md:text-xl text-gray-600"><strong>Toll-Free Number:</strong> 111-111-1111</p>
                        <p className="text-lg md:text-xl text-gray-600">
                            <strong>Address:</strong> Roosevelt Ave, 1st Street, <br className="hidden sm:block" /> New York, NY 00000
                        </p>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default ContactUs;
