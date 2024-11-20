'use client';

import { Star } from 'lucide-react';

const tours = [
  {
    title: "Bali Tour Package",
    price: 285,
    rating: 4.9,
    days: 7,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    date: "23 AUGUST - 27 AUGUST",
  },
  {
    title: "Java Tour Package",
    price: 218,
    rating: 4.9,
    days: 5,
    image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18",
    date: "23 AUGUST - 27 AUGUST",
  },
  {
    title: "Solo Tour Package",
    price: 163,
    rating: 4.9,
    days: 3,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    date: "23 AUGUST - 29 AUGUST",
  },
];

export default function TourPackages() {
  return (
    <section className="px-4 py-20 max-w-7xl mx-auto">
      <div className="flex justify-between items-start mb-12">
        <div>
          <span className="text-[#bbbecf]">Tour packages</span>
          <h2 className="text-6xl text-black font-bold mt-1">
            Our tourist destination
          </h2>
        </div>
        <p className="text-[#bbbecf] max-w-md">
          Our tourist destinations offer an unrivaled blend of natural beauty and cultural richness
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tours.map((tour, index) => (
          <div
            key={index}
            className="group rounded-3xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <div className="relative h-[400px]">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 flex gap-3">
                <span className="bg-white/90 text-black backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  {tour.days} Days
                </span>
                <span className="bg-white/90 text-black backdrop-blur-sm px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {tour.rating}
                </span>
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">{tour.date}</p>
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-black">{tour.title}</h3>
                <p className="text-xl font-bold text-black">${tour.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all">
          View more
        </button>
      </div>
    </section>
  );
} 