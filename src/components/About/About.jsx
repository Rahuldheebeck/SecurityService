import React, { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const About = () => {
  const originalSections = [
    {
      title: 'Who We Are',
      img: 'assests/service1.jpg',
      content:
        "At SecureShield Security Services, we believe that true security is about more than just protocols — it's about trust. Our mission is to safeguard lives, properties, and vital assets with a proactive approach backed by intelligence and professionalism. Every client we serve benefits from our deep-rooted commitment to vigilance, integrity, and customized protection strategies.",
    },
    {
      title: 'What Makes Us Different',
      img: 'assests/service2.avif',
      content:
        'We offer more than just manpower. Our strength lies in a blend of trained security professionals, 24/7 surveillance systems, and rapid-response capabilities. Whether it’s securing a corporate facility, a gated community, or a retail environment, we tailor each security plan to meet the unique demands of your space. Our goal is to prevent incidents before they occur, using both human insight and advanced technology.',
    },
    {
      title: 'Our Promise',
      img: 'assests/service3.avif',
      content:
        "At the core of SecureShield are values that drive everything we do: integrity, responsiveness, professionalism, and a customer-first mindset. Every member of our team undergoes rigorous vetting and preparation to stand as a reliable frontline defense. When you choose SecureShield, you're not just hiring a service — you're gaining a dedicated partner in protection.",
    },
  ]

  // Add fake first and last slides for infinite effect
  const sections = [
    originalSections[originalSections.length - 1], // fake first
    ...originalSections,
    originalSections[0], // fake last
  ]

  const [currentIndex, setCurrentIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const timeoutRef = useRef(null)

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1)
    setIsTransitioning(true)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1)
    setIsTransitioning(true)
  }

  useEffect(() => {
    if (currentIndex === sections.length - 1) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false)
        setCurrentIndex(1)
      }, 500)
    }

    if (currentIndex === 0) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false)
        setCurrentIndex(sections.length - 2)
      }, 500)
    }

    return () => clearTimeout(timeoutRef.current)
  }, [currentIndex, sections.length])

  return (
    <div id="about" className="bg-gradient-to-b from-gray-100 via-white to-gray-100 py-10 px-4">
      <div className="relative max-w-6xl mx-auto overflow-hidden">
        <div
          className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTransitionEnd={() => setIsTransitioning(true)}
        >
          {sections.map((section, index) => (
            <div key={index} className="flex-none w-full px-4">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-center rounded-xl border border-gray-200 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 p-4 gap-5 min-h-64">
                <img
                  src={section.img}
                  alt={section.title}
                  className="w-full md:w-80 rounded-2xl object-cover h-auto max-h-[280px]"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-blue-900 mb-2 pt-7">
                    {section.title}
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-blue-100 transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-blue-100 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}

export default About
