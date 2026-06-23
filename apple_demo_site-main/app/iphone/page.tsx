import Nav from '@/components/iphone/Nav';
import Hero from '@/components/iphone/Hero';
import Footer from '@/components/iphone/Footer';
import Lineup from '@/components/iphone/Lineup';

export default function IphonePage() {
  return (
    <>
      <Nav />

      <main style={{ paddingTop: '92px' }}>
        <Hero />
        <Lineup />
      </main>

      <Footer />
    </>
  );
}