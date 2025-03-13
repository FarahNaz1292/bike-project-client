'use client';

import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="w-full bg-gray-100 py-16 px-6 lg:px-20">
  
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        <p className="text-lg text-gray-600 mt-3">
          Your trusted destination for premium bikes and expert servicing.
        </p>
      </div>

    
      <div className="flex flex-col lg:flex-row items-center gap-10">

        <div className="lg:w-1/2">
          <Image
            src="https://www.nevisrange.co.uk/wp-content/uploads/2024/08/IMG_4373-scaled.jpg"
            alt="Bike Workshop"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-4">
            Established in 2010, we have been providing top-quality bicycles and professional repair
            services. Our team of expert mechanics ensures that your bike is in the best shape for
            any adventure.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h3>
          <p className="text-gray-700">
            We aim to offer high-quality bikes and exceptional service to keep your rides smooth and safe.
            Whether you need a new bike or a tune-up, we are here to help!
          </p>
        </div>
      </div>


      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-bold text-gray-800">Bike Sales</h3>
            <p className="text-gray-600 mt-2">
              A wide selection of top brands, from mountain bikes to road bikes.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-bold text-gray-800">Repairs & Maintenance</h3>
            <p className="text-gray-600 mt-2">
              Expert servicing, tune-ups, and custom modifications.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-bold text-gray-800">Accessories & Gear</h3>
            <p className="text-gray-600 mt-2">
              High-quality helmets, lights, locks, and biking apparel.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold text-gray-800">Visit Our Workshop Today!</h2>
        <p className="text-gray-600 mt-2">Let’s get your bike road-ready!</p>
        <a href="/contact" className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700">
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default AboutUs;
