"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 glass-effect px-3 py-2 rounded-full flex items-center w-full max-w-[500px] z-50">
      <div className="flex items-center gap-2">
        <Image
          src="/img/logo.png" // Replace with your actual logo path
          alt="Jogja Singgah Logo"
          width={32}
          height={32}
          className="object-contain"
        />
        <div className="text-lg font-medium font-playfair text-white">
          jogjasinggah
          <span className="text-[#9ebecb]">.</span>
        </div>
      </div>
      <div
        className={`nav-links ml-auto ${
          isMenuOpen
            ? "active flex-col absolute top-full left-0 right-0 glass-effect mt-2 p-4 rounded-[20px] transition-all duration-300"
            : "hidden md:flex items-center gap-4"
        }`}
      >
        <Link href="#home" className="text-white text-sm hover:text-[#9ebecb] transition-colors relative group">
          <span>Home</span>
          <span className="absolute bottom-[-5px] left-0 w-0 h-0.5 bg-[#9ebecb] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="#about" className="text-white text-sm hover:text-[#9ebecb] transition-colors relative group">
          <span>About</span>
          <span className="absolute bottom-[-5px] left-0 w-0 h-0.5 bg-[#9ebecb] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="#more" className="text-white text-sm hover:text-[#9ebecb] transition-colors relative group">
          <span>Explore</span>
          <span className="absolute bottom-[-5px] left-0 w-0 h-0.5 bg-[#9ebecb] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        {/* Close button for mobile menu */}
        {isMenuOpen && (
          <button
            className="absolute top-2 right-2 text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            ✖️
          </button>
        )}
      </div>
      <button
        className="md:hidden text-white ml-auto"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>
    </nav>
  );
}