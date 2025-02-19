"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PopularDestinations() {
  const destinations = [
    {
      image: "/img/mlbr.webp",
      title: "Malioboro Street",
      location: "Central Jogja",
      description: "Experience the vibrant heart of Jogja's culture, where traditional meets modern. Discover local artisans, taste authentic street food, and immerse yourself in the city's bustling atmosphere.",
    },
    {
      image: "/img/borobudur.jpg",
      title: "Borobudur Temple",
      location: "Magelang",
      description: "Step into history at the world's largest Buddhist temple, a UNESCO World Heritage site. Marvel at intricate stone carvings and witness breathtaking sunrise views over ancient stupas.",
    },
    {
      image: "/img/tmnsr.jpg",
      title: "Taman Sari",
      location: "Kraton Area",
      description: "Explore the mysterious water castle, once a royal garden of the Sultanate. Discover hidden pools, underground passages, and architectural marvels from the 18th century.",
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
        <div className="mb-12">
          <Link
            href="/urban-exploration"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Urban Exploration
          </Link>
          <h1 className="text-4xl md:text-5xl font-playfair text-slate-900 mt-6 mb-4">
            Popular Destinations
          </h1>
          <p className="text-slate-600 max-w-2xl">
            Discover Yogyakarta's most beloved landmarks and attractions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-[20px] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-slate-200"
            >
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-20 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
                  <span className="flex items-center gap-2">
                    <i className="fas fa-map-marker-alt"></i>
                    {destination.location}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-playfair text-slate-900 mb-4">
                  {destination.title}
                </h2>
                <p className="text-slate-600 mb-6">
                  {destination.description}
                </p>
                <button className="bg-slate-800 w-full px-6 py-3 rounded-full text-white text-sm hover:bg-slate-700 transition-all duration-300 flex items-center justify-center gap-2">
                  <i className="fas fa-compass"></i>
                  Explore More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}