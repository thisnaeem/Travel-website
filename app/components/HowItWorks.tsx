'use client';

import { useEffect, useState } from 'react';
import { Search, Ticket, CreditCard, Map } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-6 h-6" />,
    title: 'Find your destination',
    description: 'Embark on a journey to discover your dream destination, where adventure and relaxation await.'
  },
  {
    icon: <Ticket className="w-6 h-6" />,
    title: 'Book a ticket',
    description: 'Ensure a smooth travel experience by booking tickets to your preferred destination via our booking platform.'
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: 'Make payment',
    description: 'We offer a variety of payment options to meet your preferences and ensure a hassle-free transaction process.'
  },
  {
    icon: <Map className="w-6 h-6" />,
    title: 'Explore destination',
    description: "You'll be immersed in a captivating tapestry of sights, sounds and tastes, as you wind your way through the ancient streets."
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling) {
        setIsScrolling(true);
        const section = document.getElementById('how-it-works');
        if (section) {
          const rect = section.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
          if (isVisible) {
            setActiveStep((prev) => (prev + 1) % steps.length);
          }
        }
        setTimeout(() => setIsScrolling(false), 1000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  return (
    <section id="how-it-works" className="px-4 py-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side - Image */}
        <div className="relative rounded-[32px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963"
            alt="Travel"
            className="w-full h-[750px] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
            <p className="text-white text-lg">
              Embark on a journey to find your dream destination, where
              adventure and relaxation await, creating unforgettable memories
              along the way
            </p>
          </div>
        </div>

        {/* Right side - Steps */}
        <div className="space-y-8">
          <div>
            <span className="text-[#bbbecf] ">How it works</span>
            <h2 className="text-6xl text-black font-bold mt-2">
              One click for you
            </h2>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl transition-all duration-500 cursor-pointer 
                  ${
                    activeStep === index
                      ? "bg-white shadow-lg scale-105"
                      : "hover:bg-gray-50"
                  }`}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className="flex text-black items-start gap-4">
                  <div className="p-3  bg-gray-100 rounded-xl">{step.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-500">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 