import { motion } from 'motion/react';
import { ChevronRight, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1598030304671-5aa1e6f04351?q=80&w=2000&auto=format&fit=crop"
          alt="Tailoring Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black-900/80 via-black-900/70 to-black-900"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-gold-500 uppercase tracking-[0.2em] text-sm md:text-base mb-4 font-medium">
            Est. 2022 • North Lakhimpur
          </h2>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Perfect Stitching. <br />
            <span className="text-gold-500 italic">Perfect Fit.</span> <br />
            Premium Craftsmanship.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            Professional tailoring services delivering elegance and precision for every occasion.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-gold-500 text-black-900 font-bold uppercase tracking-wider hover:bg-white transition-colors duration-300 rounded-sm"
            >
              Book Appointment
            </a>
            <a
              href="tel:6001416291"
              className="px-8 py-4 border border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black-900 transition-colors duration-300 rounded-sm flex items-center justify-center gap-2"
            >
              <Phone size={18} /> Call Now
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold-500 to-transparent"></div>
      </motion.div>
    </section>
  );
}
