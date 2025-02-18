export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#2b2842] to-[#2a2a2a] pt-24 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="px-4">
            <h3 className="text-white font-playfair text-2xl mb-6">About Us</h3>
            <p className="text-gray-400">
              Jogja Singgah is your premium guide to exploring the beauty and culture of Yogyakarta,
              offering curated experiences that blend tradition with modern luxury.
            </p>
          </div>
          <div className="px-4">
            <h3 className="text-white font-playfair text-2xl mb-6">Quick Links</h3>
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                Home
              </a>
              <a href="#destinations" className="text-gray-400 hover:text-white transition-colors">
                Destinations
              </a>
              <a href="#events" className="text-gray-400 hover:text-white transition-colors">
                Events
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="px-4">
            <h3 className="text-white font-playfair text-2xl mb-6">Contact</h3>
            <div className="flex flex-col gap-4 text-gray-400">
              <p>Email: hello@jogjasinggah.com</p>
              <p>Phone: +62 274 123456</p>
              <p>Address: Jl. Malioboro No. 1, Yogyakarta</p>
            </div>
          </div>
          <div className="px-4">
            <h3 className="text-white font-playfair text-2xl mb-6">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 glass-effect rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                FB
              </a>
              <a
                href="#"
                className="w-10 h-10 glass-effect rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                IG
              </a>
              <a
                href="#"
                className="w-10 h-10 glass-effect rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                TW
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-[#456875]  text-center text-gray-500">
          <p>&copy; 2025 Jogja Singgah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}