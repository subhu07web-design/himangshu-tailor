import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-black-900 text-white font-sans selection:bg-gold-500 selection:text-black-900">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Reviews />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
