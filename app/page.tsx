import Navigation from './components/Navigation';
import Destinations from './components/Destinations';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import TourPackages from './components/TourPackages';
import Footer from './components/Footer';
import Blog from './components/Blog';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Destinations />
      <HowItWorks />
      <TourPackages />
      <Blog />
      <Footer />
    </main>
  );
}
