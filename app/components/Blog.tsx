"use client";

const blogPosts = [
  {
    date: "Nov 14, 2022",
    title: "2023 Travel Trends – what you need to know",
    description:
      "2023 taught us valuable life lessons. Plans don't always work out, flexibility in life is key, a...",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    date: "Nov 18, 2022",
    title: "Jeep Adventure is a new attraction for tourists visiting Garut",
    description:
      "Jeep Adventure is one of the tourist attractions that has been popular recently. The sensation...",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf",
  },
];

export default function Blog() {
  return (
    <section className="px-4 py-10 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-[#bbbecf] text-lg">Our Blog</span>
        <h2 className="text-6xl font-bold text-black mt-2">Our travel memories</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="group cursor-pointer"
          >
            {/* Image Container */}
            <div className="rounded-3xl overflow-hidden mb-6">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="space-y-3">
              <p className="text-[#bbbecf]">{post.date}</p>
              <h3 className="text-2xl text-black font-semibold group-hover:text-gray-700 transition-colors">
                {post.title}
              </h3>
              <p className="text-[#bbbecf] line-clamp-2">
                {post.description}
              </p>
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