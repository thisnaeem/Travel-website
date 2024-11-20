"use client";

import { useState } from "react";
import { Calendar, Users, Wallet } from "lucide-react";
import { SearchInput } from "./SearchInput";

const StatsCard = ({ value, label }: { value: string; label: string }) => (
  <div className="bg-white rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-center">
    <div className="text-3xl font-bold text-gray-900">{value}</div>
    <div className="text-sm text-gray-500 mt-1">{label}</div>
  </div>
);

export default function Hero() {
  const [date, setDate] = useState("");
  const [budget, setBudget] = useState("");
  const [guests, setGuests] = useState(1);

  return (
    <div className="relative py-40 px-4 ">
      {/* Hero Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542359649-31e03cd4d909?q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-7xl mx-auto">
          <h1 className="text-white text-5xl md:text-7xl font-semibold mt-2 mb-4">
            Extraordinary natural and <br /> cultural charm
          </h1>
          <p className="text-white/90 text-xl">
            Exploring Indonesia is an unforgettable adventure.
          </p>
        </div>

        {/* Search Section */}
        <div className="mt-12 w-full max-w-2xl">
          <div className="flex flex-col md:flex-row gap-4">
            <SearchInput
              icon={<Calendar className="w-5 h-5" />}
              label="Date"
              value={date}
              onChange={setDate}
              type="date"
            />

            <SearchInput
              icon={<Wallet className="w-5 h-5" />}
              label="Budget"
              value={budget}
              onChange={setBudget}
              options={[
                { value: "0-1000", label: "$0 - $1000" },
                { value: "1000-2000", label: "$1000 - $2000" },
                { value: "2000+", label: "$2000+" },
              ]}
            />

            <SearchInput
              icon={<Users className="w-5 h-5" />}
              label="Guest"
              value={guests}
              onChange={(val) => setGuests(Number(val))}
              type="number"
              min={1}
            />

            <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition-all font-medium">
              Search
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid shadow-[6px_10px_65px_-5px_rgba(154,_180,_214,_0.1)] absolute bottom-[-210px] grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl w-full px-4">
          <StatsCard value="10M+" label="Total Customers" />
          <StatsCard value="09+" label="Years Of Experience" />
          <StatsCard value="12K" label="Total Destinations" />
          <StatsCard value="5.0" label="Average Rating" />
        </div>
      </div>
    </div>
  );
}
