"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [language, setLanguage] = useState("en");

  return (
    <nav className="absolute w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-white text-2xl font-bold">
          Travel Indonesia
        </Link>

        <div className="flex  items-center gap-8">
          {/* Center Menu with Blur Effect */}
          <div className="hidden md:flex items-center bg-white/10 backdrop-blur-md rounded-full px-8 py-2">
            <Link
              href="/about"
              className="text-white px-4 py-2 hover:text-white/80 transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-white px-4 py-2 hover:text-white/80 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/tour"
              className="text-white px-4 py-2 hover:text-white/80 transition-colors"
            >
              Tour
            </Link>
            <Link
              href="/contact"
              className="text-white px-4 py-2 hover:text-white/80 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Custom Language Switch */}
          <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full p-1">
            <button
              onClick={() => setLanguage("en")}
              className={`px-4 py-1 rounded-full text-sm transition-all ${
                language === "en"
                  ? "bg-white text-black"
                  : "text-white hover:text-white/80"
              }`}
            >
              En
            </button>
            <button
              onClick={() => setLanguage("fr")}
              className={`px-4 py-1 rounded-full text-sm transition-all ${
                language === "fr"
                  ? "bg-white text-black"
                  : "text-white hover:text-white/80"
              }`}
            >
              Fr
            </button>
          </div>

          <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-opacity-90 transition">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
