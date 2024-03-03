import Navbar from '@/app/component/Navbar'
import Hero from './component/Hero';
import Analytics from './component/Analytics';
import Newsletter from './component/Newsletter';
import Cards from './component/Cards';
import Footer from './component/Footer';

export default function Home() {
  return (
    <>
  <Navbar />
  <Hero />
  <Analytics />
  <Newsletter />
  <Cards />
  <Footer />
    </>

  );
}
