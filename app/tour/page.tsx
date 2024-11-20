export default function TourPage() {
  return (
    <main>
      <div className="pt-32 px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h1 className="text-6xl font-bold">Our Tours</h1>
            <p className="text-[#bbbecf] mt-4 max-w-xl">
              Discover our carefully curated selection of tours across Indonesia&apose;s most beautiful destinations.
            </p>
          </div>
          <div className="flex gap-4">
            <select className="px-4 py-2 rounded-full border border-gray-200">
              <option>Sort by Price</option>
              <option>Low to High</option>
              <option>High to Low</option>
            </select>
            <select className="px-4 py-2 rounded-full border border-gray-200">
              <option>Filter by Duration</option>
              <option>1-3 Days</option>
              <option>4-7 Days</option>
              <option>7+ Days</option>
            </select>
          </div>
        </div>
        
        {/* Reuse your TourPackages component here */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tour cards will go here - similar to your TourPackages component */}
        </div>
      </div>
    </main>
  );
} 