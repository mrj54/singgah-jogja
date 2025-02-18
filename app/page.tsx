"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import Information from "@/components/Information";
import Features from "@/components/Features";
import Festivals from "@/components/Festivals";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".info-card, .feature-item, .festival-card")
      .forEach((el) => {
        observer.observe(el);
      });

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Hero />
      <Information />
      <Features />
      <Festivals />
      <Footer />
      <ScrollToTop />
    </main>
  );
}