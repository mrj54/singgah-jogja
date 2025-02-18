export default function Information() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#efefef] to-[#e6f0f2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gradient font-playfair mb-6">
            Discover Yogyakarta
          </h2>
          <p className="text-[#9ebecb] max-w-2xl mx-auto">
            Immerse yourself in the rich tapestry of Yogyakarta's culture, from ancient temples to vibrant art scenes
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8 px-8">
          <div className="info-card group relative h-[500px] rounded-[20px] overflow-hidden transition-all duration-500 shadow-lg max-w-[350px] w-full card-hover">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            <img
              src="/img/borobudur.jpg"
              alt="Destinasi wisata"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-8 left-8 right-8 z-20 transform transition-transform duration-300 group-hover:-translate-y-4">
              <h3 className="text-white text-3xl font-playfair mb-4">Cultural Heritage</h3>
              <p className="text-gray-200 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explore ancient temples and historical landmarks that tell stories of Java's rich past
              </p>
              <button className="glass-effect px-6 py-3 rounded-full text-white text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30">
                Discover More →
              </button>
            </div>
          </div>
          
          <div className="info-card group relative h-[500px] rounded-[20px] overflow-hidden transition-all duration-500 shadow-lg max-w-[350px] w-full card-hover">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            <img
              src="/img/frstival.jpeg"
              alt="Festival budaya"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-8 left-8 right-8 z-20 transform transition-transform duration-300 group-hover:-translate-y-4">
              <h3 className="text-white text-3xl font-playfair mb-4">Cultural Events</h3>
              <p className="text-gray-200 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Experience traditional ceremonies and modern cultural festivals throughout the year
              </p>
              <button className="glass-effect px-6 py-3 rounded-full text-white text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30">
                View Events →
              </button>
            </div>
          </div>
          
          <div className="info-card group relative h-[500px] rounded-[20px] overflow-hidden transition-all duration-500 shadow-lg max-w-[350px] w-full card-hover">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            <img
              src="/img/music.jpeg"
              alt="Event musik"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-8 left-8 right-8 z-20 transform transition-transform duration-300 group-hover:-translate-y-4">
              <h3 className="text-white text-3xl font-playfair mb-4">event & Music</h3>
              <p className="text-gray-200 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Dive into contemporary art exhibitions and musical performances
              </p>
              <button className="glass-effect px-6 py-3 rounded-full text-white text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30">
                Explore Arts →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}