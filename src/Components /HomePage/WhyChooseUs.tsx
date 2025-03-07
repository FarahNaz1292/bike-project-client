'use client'

import Image from "next/image"
import { useEffect, useState } from "react"
import CountUp from 'react-countup'

const WhyChooseUs = () => {
  const [isInView, setIsInView] = useState(false)
  const [progressValues, setProgressValues] = useState({
    bestMotorSellers: 0,
    experiencedStaff: 0,
    qualityService: 0,
  })

  const checkInView = () => {
    const element = document.getElementById("progress-container")
    if (element) { // Check if the element exists before calling getBoundingClientRect()
      const rect = element.getBoundingClientRect()
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsInView(true)
      } else {
        setIsInView(false)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', checkInView)
    checkInView() 

    return () => {
      window.removeEventListener('scroll', checkInView)
    }
  }, [])

  useEffect(() => {
    if (isInView) {

      setProgressValues({
        bestMotorSellers: 70,
        experiencedStaff: 100,
        qualityService: 90,
      })
    }
  }, [isInView])

  return (
    <div className="container mx-auto flex gap-3 m-4">
      <div className="w-full sm:w-1/2 p-2">
        <Image
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU52Vh-97VI-6ExRP8Fz9xpgssRR6iWWgdTQ&s'
          alt='Service guys'
          width={500}
          height={200}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="w-full sm:w-1/2 p-2 text-center mt-5">
        <h1 className="text-2xl font-bold m-2">Why Choose Us</h1>
        <p className="text-xl font-bold">Our commitment to you is to provide the latest, honest, friendly, and on-time products and services. Visit a locally owned and operated business that has been selling and serving the community since 1992.</p>
        <div id="progress-container" className="mt-4">
          <div className="flex items-center justify-center mb-4 gap-3">
            <p className="Text-xl font-bold">Best Motor sellers</p>
            <progress className="progress w-56" value={progressValues.bestMotorSellers} max="100"></progress>
            <span className="ml-2 text-lg font-bold">
              {isInView && <CountUp start={0} end={progressValues.bestMotorSellers} duration={2} suffix="%" />}
            </span>
          </div>
          <div className="flex items-center justify-center mb-4 gap-3">
          <p className="Text-xl font-bold">Experienced Staff</p>
            <progress className="progress w-56" value={progressValues.experiencedStaff} max="100"></progress>
            <span className="ml-2 text-lg font-bold">
              {isInView && <CountUp start={0} end={progressValues.experiencedStaff} duration={2} suffix="%" />}
            </span>
          </div>
          <div className="flex items-center justify-center mb-4 gap-3">
          <p className="Text-xl font-bold">Quality Service</p>
            <progress className="progress w-56" value={progressValues.qualityService} max="100"></progress>
            <span className="ml-2 text-lg font-bold">
              {isInView && <CountUp start={0} end={progressValues.qualityService} duration={2} suffix="%" />}
            </span>
          </div>
        </div>
      <div className="mt-4">
      <button className="btn btn-primary">Book you service now </button>
      </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
