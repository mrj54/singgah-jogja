export default function Features() {
  const features = [
    {
      icon: "/img/vacation.png",
      title: "Urban Exploration",
      description: "Discover hidden gems and modern attractions in the heart of Yogyakarta",
    },
    {
      icon: "/img/mountain.png",
      title: "Nature Escapes",
      description: "Experience breathtaking landscapes and natural wonders",
    },
    {
      icon: "/img/sunbed.png",
      title: "Coastal Beauty",
      description: "Explore pristine beaches and coastal attractions",
    },
    {
      icon: "/img/kingdom-center.png",
      title: "Heritage Sites",
      description: "Journey through time at historical landmarks and museums",
    },
    {
      icon: "/img/tent.png",
      title: "Culinary Journey",
      description: "Savor authentic Javanese cuisine and modern gastronomy",
    },
    {
      icon: "/img/family.png",
      title: "Family Adventures",
      description: "Create lasting memories with family-friendly activities",
    },
  ];

  return (
    <section className="py-2 bg-gradient-to-b from-[#e6f0f2] to-[#f8fafc]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gradient font-playfair mb-6">
            Curated Experiences
          </h2>
          <p className="text-[#456875] max-w-2xl mx-auto">
            Choose from our carefully selected range of experiences designed to showcase the best of Yogyakarta
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 md:px-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-item glass-effect p-6 md:p-10 rounded-[16px] md:rounded-[20px] text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 p-3 md:p-4 rounded-full bg-white/10 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-blue-500 mb-2 md:mb-4 text-lg md:text-2xl font-playfair">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-xs md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}