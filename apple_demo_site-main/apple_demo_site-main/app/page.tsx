import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import FilmSection from '@/components/FilmSection';
import ColorSection from '@/components/ColorSection';
import Specs from '@/components/Specs';
import Buy from '@/components/Buy';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FilmSection />
        <ColorSection />
        <Specs />
        <Buy />
      </main>
      <Footer />
    </>
  );
}
