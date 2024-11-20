'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const footerLinks = [
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Blog', 'Pricing']
  },
  {
    title: 'Support',
    links: ['Contact Us', 'FAQ', 'Terms', 'Privacy']
  },
  {
    title: 'Social Media',
    links: ['Twitter', 'Instagram', 'Facebook', 'LinkedIn']
  }
];

export default function Footer() {
  return (
    <footer className="bg-[#f8f8fa] pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 pb-16 border-b">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-black">
              INDOTRAVI
            </Link>
            <p className="mt-4 text-[#bbbecf] max-w-sm">
              Discover the beauty of Indonesia with our curated travel experiences. 
              Your journey begins here.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-black">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link href="#" className="text-[#bbbecf] hover:text-black transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-black mb-4">Newsletter</h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5 flex-1"
              />
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all">
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <p className="text-[#bbbecf] text-sm">
            © 2024 Indotravi. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-[#bbbecf] hover:text-black transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-[#bbbecf] hover:text-black transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-[#bbbecf] hover:text-black transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 