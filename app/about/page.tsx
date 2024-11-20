

export default function AboutPage() {
  return (
    
    <main>
      
      <div className="pt-32 px-4 max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold mb-8">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-[#bbbecf] text-lg mb-6">
              Welcome to Indotravi, your premier gateway to exploring the diverse wonders of Indonesia. 
              We specialize in crafting unforgettable travel experiences that showcase the rich cultural 
              heritage and natural beauty of this remarkable archipelago.
            </p>
            <p className="text-[#bbbecf] text-lg">
              Our team of experienced travel experts is dedicated to providing personalized service 
              and insider knowledge to ensure your journey through Indonesia is nothing short of extraordinary.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1537996194471-e657df975ab4" 
              alt="About Indotravi"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
} 