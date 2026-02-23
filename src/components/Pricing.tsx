import { motion } from 'motion/react';
import { MessageCircle, Tag, Star } from 'lucide-react';

const pricingData = [
  {
    name: "Men's Formal Suit",
    price: "3500",
    description: "Premium 2-piece or 3-piece suit stitching with perfect canvas construction.",
    popular: true,
    category: "Men",
    discount: "10% OFF",
  },
  {
    name: "Designer Blouse",
    price: "800",
    description: "Custom patterns, deep necks, and intricate detailing for your special sarees.",
    popular: false,
    category: "Women",
  },
  {
    name: "Shirt & Trouser",
    price: "1200",
    description: "Sharp formal wear with custom collar and cuff options for a professional look.",
    popular: false,
    category: "Men",
  },
  {
    name: "Kurti & Salwar Suit",
    price: "1000",
    description: "Traditional and modern ethnic wear tailored for comfort and style.",
    popular: false,
    category: "Women",
  },
  {
    name: "School Uniform Set",
    price: "600",
    description: "Durable stitching for daily school wear. Available for all local schools.",
    popular: false,
    category: "Uniform",
    discount: "Bulk Discount",
  },
  {
    name: "Premium Alterations",
    price: "150",
    description: "Quick and precise resizing for suits, pants, and ethnic wear.",
    popular: false,
    category: "Service",
  },
];

export default function Pricing() {
  const whatsappNumber = "916900521882";

  return (
    <section id="pricing" className="py-24 bg-black-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-gold-500 uppercase tracking-widest font-medium mb-2 flex items-center justify-center gap-2">
              <Tag size={18} /> Transparent Pricing
            </h3>
            <h2 className="font-serif text-4xl md:text-5xl text-white font-bold">
              Pricing & <span className="italic text-gold-500">Special Offers</span>
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative group bg-black-800 border ${
                item.popular ? 'border-gold-500 shadow-[0_0_25px_rgba(212,175,55,0.15)]' : 'border-white/5'
              } p-8 rounded-sm transition-all duration-500 hover:translate-y-[-8px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)]`}
            >
              {/* Most Popular Badge */}
              {item.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-500 text-black-900 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                  <Star size={12} fill="currentColor" /> Most Popular
                </div>
              )}

              {/* Discount Ribbon */}
              {item.discount && (
                <div className="absolute top-4 right-0 overflow-hidden w-24 h-24 pointer-events-none">
                  <div className="absolute top-4 -right-8 w-32 bg-red-600 text-white text-[10px] font-bold uppercase tracking-tighter py-1 text-center rotate-45 shadow-md">
                    {item.discount}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <span className="text-gold-500/60 text-[10px] uppercase tracking-widest font-semibold">
                  {item.category}
                </span>
                <h3 className="text-xl font-serif font-bold text-white mt-1 group-hover:text-gold-500 transition-colors">
                  {item.name}
                </h3>
              </div>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-gold-500 text-sm font-medium">Starting from</span>
                <span className="text-3xl font-bold text-white">₹{item.price}</span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-8 h-12 overflow-hidden">
                {item.description}
              </p>

              <a
                href={`https://wa.me/${whatsappNumber}?text=Hi Himanshu Tailors, I'm interested in the ${item.name} service.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-sm font-bold uppercase tracking-wider text-xs transition-all duration-300 ${
                  item.popular
                    ? 'bg-gold-500 text-black-900 hover:bg-white'
                    : 'bg-white/5 text-white border border-white/10 hover:bg-gold-500 hover:text-black-900 hover:border-gold-500'
                }`}
              >
                <MessageCircle size={16} /> Book Now
              </a>
            </motion.div>
          ))}
        </div>

        {/* Special Offer Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-gold-600/20 to-black-800 border border-gold-500/30 p-8 md:p-12 rounded-sm text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Tag size={120} className="text-gold-500 rotate-12" />
          </div>
          <h4 className="text-gold-500 uppercase tracking-[0.3em] text-xs font-bold mb-4">Wedding Season Special</h4>
          <h3 className="font-serif text-3xl md:text-4xl text-white font-bold mb-6">
            Get <span className="text-gold-500">20% OFF</span> on Wedding Suit Packages
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 font-light">
            Book your wedding suit stitching today and get a complimentary designer pocket square and custom initials embroidery.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hi, I want to inquire about the Wedding Season Special offer.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gold-500 text-black-900 font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-xl"
          >
            Claim Offer Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
