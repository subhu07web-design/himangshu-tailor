import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="font-serif text-2xl font-bold text-gold-500 tracking-wider block mb-6">
              HIMANSHU<span className="text-white">TAILORS</span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Premium tailoring services in North Lakhimpur. We craft garments that define your personality with elegance and precision.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-500 hover:text-gold-500 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {['Men\'s Suits', 'Blouse Stitching', 'Uniforms', 'Alterations', 'Custom Designs'].map((item) => (
                <li key={item} className="text-gray-500 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>NH15, NT Road, Near Biswa Talkies</li>
              <li>North Lakhimpur, Assam</li>
              <li className="pt-2">
                <a href="tel:6001416291" className="hover:text-gold-500 transition-colors">
                  +91 6001416291
                </a>
              </li>
              <li>
                <a href="mailto:suryadas0408@gmail.com" className="hover:text-gold-500 transition-colors">
                  suryadas0408@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 Himanshu Tailors. All Rights Reserved.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-1">
            Designed with <span className="text-gold-500">♥</span> for Luxury
          </p>
        </div>
      </div>
    </footer>
  );
}
