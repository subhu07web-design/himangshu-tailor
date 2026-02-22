import { motion } from 'motion/react';

const images = [
  {
    src: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=800&auto=format&fit=crop",
    category: "Men's Suits"
  },
  {
    src: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?q=80&w=800&auto=format&fit=crop",
    category: "Traditional Wear"
  },
  {
    src: "https://images.unsplash.com/photo-1551488852-d8a4a4371dd5?q=80&w=800&auto=format&fit=crop",
    category: "Custom Designs"
  },
  {
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    category: "Business Attire"
  },
  {
    src: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=800&auto=format&fit=crop",
    category: "Alterations"
  },
  {
    src: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=800&auto=format&fit=crop",
    category: "Uniforms"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-black-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-gold-500 uppercase tracking-widest font-medium mb-2">Our Portfolio</h3>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold">
            Recent <span className="italic text-gold-500">Masterpieces</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group overflow-hidden aspect-[3/4] cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.category}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-gold-500 font-serif text-xl italic">{img.category}</p>
                  <div className="w-12 h-[1px] bg-white mx-auto mt-2"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
