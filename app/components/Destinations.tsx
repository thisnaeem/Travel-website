"use client";

const destinations = [
  {
    title: "Bromo Tengger Tour",
    location: "Bromo, East Java",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
  },
  {
    title: "Bali Beach Tourism",
    location: "Denpasar, Bali",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
  },
  {
    title: "Sumatra Tourism",
    location: "Lampung, South Sumatra",
    image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd",
  },
  {
    title: "Borobudur Temple Tour",
    location: "Jogjakarta, Central Java",
    image: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa",
  },
];

export default function Destinations() {
  return (
    <section className="px-4 py-20 mt-16 max-w-7xl mx-auto bg-[#f8f8fa]">
      <div className="flex justify-between  items-center mb-12">
        <div>
          <span className="text-[#bbbecf] ">Best location</span>
          <h2 className="text-6xl text-black font-bold mt-1">
            Indonesian tourism
          </h2>
        </div>
        <p className="text-[#bbbecf] max-w-md text-left">
          Extraordinary natural beauty, enjoy the rich culture, and experience
          the friendliness of the local people.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[800px]">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-[32px] group cursor-pointer   ${
              index === 0 || index == 3 ? "col-span-2 " : ""
            }`}
          >
            <img
              src={destination.image}
              alt={destination.title}
              className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />

            <div className="absolute bottom-0 left-0 p-8 text-white">
              <p className="text-sm mb-2 opacity-90">{destination.location}</p>
              <h3 className="text-xl font-semibold">{destination.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
