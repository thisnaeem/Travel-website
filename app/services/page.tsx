export default function ServicesPage() {
  const services = [
    {
      title: "Custom Tour Packages",
      description: "Personalized itineraries tailored to your preferences and interests."
    },
    {
      title: "Local Guides",
      description: "Expert local guides who bring destinations to life with their knowledge."
    },
    {
      title: "Accommodation",
      description: "Carefully selected hotels and resorts for comfortable stays."
    },
    {
      title: "Transportation",
      description: "Reliable and comfortable transportation throughout your journey."
    }
  ];

  return (
    <main>
      <div className="pt-32 px-4 max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 rounded-3xl bg-[#f8f8fa] hover:shadow-lg transition-all">
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-[#bbbecf]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 