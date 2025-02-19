import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <section id="home" className="relative h-[90vh] my-5 rounded-[30px] overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] shadow-2xl">
        <Navbar />
        <div className="relative w-full h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-transparent z-10" />
          <img
            src="/img/hro.png"
            alt="Jogja collection"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
          />
          <div className="relative z-20 p-10 text-white mt-[100px] max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-4 animate-fadeInUp bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              JOGJA SINGGAH
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#5d7b86] to-[#9ebecb] mx-auto mb-8 animate-fadeInUp delay-200" />
            <h2 className="text-3xl md:text-4xl font-playfair mb-8 animate-fadeInUp delay-200 text-gray-200">
              Discover the Soul of Java
            </h2>
            <p className="text-base tracking-wide mb-8 text-gray-300 animate-fadeInUp delay-400 max-w-2xl mx-auto">
              Experience the perfect blend of tradition and modernity in Yogyakarta.
              Let us guide you through cultural festivals, hidden gems, and unforgettable adventures.
            </p>
            <button className="glass-effect px-8 py-4 rounded-full text-white font-medium animate-fadeInUp delay-400 hover:bg-white/30 transition-all duration-300 group">
              Start Exploring
              <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform duration-200">→</span>
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent z-90" />
      </section>
    </div>
  );
}