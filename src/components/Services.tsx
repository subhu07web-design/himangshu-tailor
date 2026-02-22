import { motion } from 'motion/react';
import { Shirt, Scissors, GraduationCap, Ruler, PenTool } from 'lucide-react';

const services = [
  {
    title: "Men's Suits Stitching",
    description: "Bespoke suits tailored to perfection for weddings, corporate events, and special occasions.",
    icon: Shirt,
  },
  {
    title: "Blouse Stitching",
    description: "Elegant and trendy blouse designs with perfect fitting for sarees and lehengas.",
    icon: Scissors,
  },
  {
    title: "School & College Uniforms",
    description: "Durable and comfortable uniforms stitched with precision for students of all ages.",
    icon: GraduationCap,
  },
  {
    title: "Pant Alterations",
    description: "Expert alteration services to give your existing trousers the perfect length and fit.",
    icon: Ruler,
  },
  {
    title: "Custom Designs",
    description: "Bring your unique fashion ideas to life with our custom design and stitching services.",
    icon: PenTool,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-gold-500 uppercase tracking-widest font-medium mb-2">Our Expertise</h3>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold">
            Premium <span className="italic text-gold-500">Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-black-900 p-8 border border-white/5 hover:border-gold-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gold-500/5 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:bg-gold-500/10"></div>
              
              <div className="w-14 h-14 bg-black-800 border border-gold-500/30 rounded-full flex items-center justify-center text-gold-500 mb-6 group-hover:bg-gold-500 group-hover:text-black-900 transition-colors duration-300">
                <service.icon size={28} />
              </div>
              
              <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-gold-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
