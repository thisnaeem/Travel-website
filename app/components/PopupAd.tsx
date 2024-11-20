'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function PopupAd() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasBeenShown) {
        const scrollPosition = window.scrollY;
        const pageHeight = document.documentElement.scrollHeight;
        const oneThirdHeight = pageHeight / 3;

        if (scrollPosition > oneThirdHeight) {
          setIsVisible(true);
          setHasBeenShown(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasBeenShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-md relative animate-fade-in">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-2xl text-black font-bold mb-4">
          Need a Custom Professional Website?
        </h3>
        <p className="text-gray-600 mb-6">
          Hi! I&apos;m Naeem Anjum, a web developer specializing in creating
          beautiful, high-converting websites & SaaS products. If you&apos;re
          impressed with this demo, let&apos;s collaborate on your next project!
        </p>

        <div className="space-y-4">
          <a
            href="https://naeemanjum.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-black text-white text-center py-3 rounded-full hover:bg-opacity-90 transition-all"
          >
            Visit My Portfolio
          </a>
          <a
            href="mailto:me@naeemanjum.com"
            className="block w-full bg-gray-100 text-black text-center py-3 rounded-full hover:bg-gray-200 transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
} 