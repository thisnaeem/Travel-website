'use client';

import { useEffect } from 'react';
import { ArrowLeft, RefreshCcw } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="bg-red-100 p-4 rounded-full inline-block mb-8">
          <svg 
            className="w-12 h-12 text-red-500"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
            />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-black mb-4">Something went wrong!</h1>
        <p className="text-[#bbbecf] max-w-md mx-auto mb-8">
          We apologize for the inconvenience. Please try again later or return to the homepage.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all"
          >
            <RefreshCcw className="w-4 h-4" />
            Try again
          </button>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-white text-black border border-black px-6 py-3 rounded-full hover:bg-gray-50 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
} 