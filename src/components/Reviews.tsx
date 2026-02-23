import { motion } from 'motion/react';
import { Star, Quote, Users } from 'lucide-react';

const reviews = [
  {
    name: "Rajesh Kumar",
    role: "Business Professional",
    text: "The fit of the suit is impeccable. I've never had a better experience with a local tailor. Highly recommended for formal wear.",
    rating: 5,
  },
  {
    name: "Priya Das",
    role: "Fashion Enthusiast",
    text: "Got my wedding blouse stitched here. The detailing and the finish were exactly what I wanted. Truly premium work!",
    rating: 5,
  },
  {
    name: "Amit Sharma",
    role: "Regular Customer",
    text: "Consistent quality and timely delivery. They really understand the 'perfect fit' concept. Best in North Lakhimpur.",
    rating: 4,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-black-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h3 className="text-gold-500 uppercase tracking-widest font-medium mb-2">Testimonials</h3>
            <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4">
              What Our <span className="italic text-gold-500">Clients Say</span>
            </h2>
            <p className="text-gray-400 max-w-xl">
              Real stories from our valued customers who trust us with their style and comfort.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black-900 p-8 border border-gold-500/20 rounded-sm flex flex-col items-center text-center shadow-2xl"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-4xl font-bold text-white">4.8</span>
              <div className="flex text-gold-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill={i < 4 ? "currentColor" : "none"} />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm uppercase tracking-widest font-semibold">
              <Users size={16} className="text-gold-500" />
              <span>1,200+ Happy Clients</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black-900 p-8 border border-white/5 relative group hover:border-gold-500/30 transition-all duration-500"
            >
              <Quote className="absolute top-6 right-6 text-gold-500/10 group-hover:text-gold-500/20 transition-colors" size={48} />
              
              <div className="flex text-gold-500 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-300 italic mb-8 leading-relaxed relative z-10">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gold-500/10 rounded-full flex items-center justify-center text-gold-500 font-bold border border-gold-500/20">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{review.name}</h4>
                  <p className="text-gold-500/60 text-[10px] uppercase tracking-widest font-semibold">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
