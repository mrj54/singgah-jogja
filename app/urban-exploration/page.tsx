"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function UrbanExploration() {
  const categories = [
    {
      icon: "/img/running.png",
      title: "Sport Center",
      description: "Discover world-class sporting facilities and activities",
      link: "#",
    },
    {
      icon: "/img/notebook.png",
      title: "Edu Wisata",
      description: "Learn while exploring cultural heritage sites",
      link: "#",
    },
    {
      icon: "/img/night.png",
      title: "Night Life",
      description: "Experience the vibrant nightlife of Jogja",
      link: "#",
    },
    {
      icon: "/img/subscriber.png",
      title: "Popular",
      description: "Must-visit destinations in Yogyakarta",
      link: "/urban-exploration/popular",
    },
    {
      icon: "/img/gem.png",
      title: "Hidden Gems",
      description: "Discover Jogja's best-kept secrets",
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent z-10" />
        <img
          src="/img/hero.png"
          alt="Jogja Urban Landscape"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6 text-white drop-shadow-lg">
              Urban Exploration
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto leading-relaxed font-light">
              Discover the perfect blend of tradition and modernity in Yogyakarta
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.link}
              className="group bg-white/80 backdrop-blur-lg p-8 rounded-3xl transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border border-gray-100 block"
            >
              <div className="w-16 h-16 mb-6 rounded-2xl overflow-hidden bg-blue-50 p-3 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={category.icon}
                  alt={category.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-playfair text-gray-900 mb-4 font-semibold">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {category.description}
              </p>
              <div className="bg-slate-800 hover:bg-orange-700 px-6 py-3 rounded-full text-white text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center gap-2">
                Explore More
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}