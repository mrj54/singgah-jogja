"use client";

import { useState, useRef, TouchEvent } from "react";

export default function Festivals() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const touchStartRef = useRef(0);
  const cardWidth = 280;
  const totalCards = 5;
  // Menghapus visibleCards karena membatasi sliding
  const maxScroll = (totalCards - 1) * cardWidth; // Mengubah perhitungan maxScroll
  
  const currentPage = Math.round(scrollPosition / cardWidth);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    const touchDiff = touchStartRef.current - e.touches[0].clientX;
    const newPosition = scrollPosition + touchDiff;

    if (newPosition >= 0 && newPosition <= maxScroll) {
      setScrollPosition(newPosition);
    }
  };

  const handleTouchEnd = () => {
    const nearestCard = Math.round(scrollPosition / cardWidth) * cardWidth;
    setScrollPosition(Math.min(Math.max(0, nearestCard), maxScroll));
  };

  const handleDotClick = (index: number) => {
    setScrollPosition(index * cardWidth);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#f8fafc] to-[#efefef] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-gradient font-playfair mb-4">
            Upcoming Events
          </h2>
          <p className="text-[#9ebecb] max-w-2xl mx-auto">
            Don't miss out on Yogyakarta's most anticipated cultural events and festivals
          </p>
        </div>
        <div className="relative">
          <div 
            className="relative px-4 overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex gap-6 transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
              {[1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className="festival-card flex-none w-[280px] h-[360px] relative rounded-[24px] overflow-hidden transition-all duration-300 group card-hover"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  <img
                    src="/img/frstival.jpeg"
                    alt={`Festival ${index}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute bottom-6 left-6 right-6 z-20 transform transition-transform duration-300 group-hover:-translate-y-2">
                    <h3 className="text-white text-xl font-playfair mb-3">Cultural Festival {index}</h3>
                    <p className="text-gray-200 text-xs mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Experience the magic of traditional Javanese culture through music, dance, and art.
                    </p>
                    <button className="glass-effect px-4 py-2 rounded-full text-white text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30">
                      Learn More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {Array.from({ length: totalCards }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentPage === index 
                    ? 'bg-[#9ebecb] w-6' 
                    : 'bg-[#9ebecb]/40 hover:bg-[#9ebecb]/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}