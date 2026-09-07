import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/WhatsAppFab';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full overflow-hidden">
        <Hero />
        <Pricing />
        <Benefits />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
} 
