import { motion } from 'motion/react';
import { Scissors, Ruler, PenTool, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-black-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 border-2 border-gold-500/30 p-4">
              <img
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop"
                alt="Master Tailor at Work"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-500/10 z-0 hidden md:block"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 border border-gold-500/20 z-0 hidden md:block"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-gold-500 uppercase tracking-widest font-medium mb-2">About Us</h3>
            <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-6">
              The Art of <span className="text-gold-500 italic">Perfect Fit</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              At <span className="text-white font-semibold">Himanshu Tailors</span>, we believe that clothing is an extension of your personality. Led by Kajal Das, our establishment in North Lakhimpur has been synonymous with precision, elegance, and quality craftsmanship.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              We specialize in bespoke tailoring that combines traditional techniques with modern aesthetics. Whether it's a sharp suit for a wedding, a perfectly fitted blouse, or a custom uniform, we ensure every stitch tells a story of perfection. Our commitment to customer satisfaction is unwavering, and we take pride in delivering garments that fit you like a second skin.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Scissors, text: "Expert Tailoring" },
                { icon: Ruler, text: "Perfect Fitting" },
                { icon: PenTool, text: "Custom Designs" },
                { icon: CheckCircle, text: "Quality Assured" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-2 bg-gold-500/10 rounded-full text-gold-500">
                    <item.icon size={20} />
                  </div>
                  <span className="text-white font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
