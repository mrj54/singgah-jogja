"use client";

import { useState } from "react";

export default function Festivals() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardWidth = 382;

  const handlePrevClick = () => {
    setScrollPosition(Math.max(scrollPosition - cardWidth, 0));
  };

  const handleNextClick = () => {
    const maxScroll = (5 - 3) * cardWidth;
    setScrollPosition(Math.min(scrollPosition + cardWidth, maxScroll));
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#f8fafc] to-[#efefef] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gradient font-playfair mb-6">
            Upcoming Events
          </h2>
          <p className="text-[#9ebecb] max-w-2xl mx-auto">
            Don't miss out on Yogyakarta's most anticipated cultural events and festivals
          </p>
        </div>
        <div className="relative px-8">
          <button
            className="absolute top-1/2 -translate-y-1/2 left-2.5 glass-effect text-white w-[50px] h-[50px] rounded-full flex items-center justify-center text-2xl transition-all duration-300 hover:bg-white/30 z-10"
            onClick={handlePrevClick}
          >
            ←
          </button>
          <button
            className="absolute top-1/2 -translate-y-1/2 right-2.5 glass-effect text-white w-[50px] h-[50px] rounded-full flex items-center justify-center text-2xl transition-all duration-300 hover:bg-white/30 z-10"
            onClick={handleNextClick}
          >
            →
          </button>
          <div
            className="flex gap-8 transition-transform duration-500 py-4"
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {[1, 2, 3, 4, 5].map((index) => (
              <div
                key={index}
                className="festival-card flex-none w-[350px] h-[500px] relative rounded-[20px] overflow-hidden transition-all duration-500 group card-hover"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                <img
                  src="/img/frstival.jpeg"
                  alt={`Festival ${index}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-8 left-8 right-8 z-20 transform transition-transform duration-300 group-hover:-translate-y-4">
                  <h3 className="text-white text-2xl font-playfair mb-4">Cultural Festival {index}</h3>
                  <p className="text-gray-200 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Experience the magic of traditional Javanese culture through music, dance, and art.
                  </p>
                  <button className="glass-effect px-6 py-3 rounded-full text-white text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}