import Nav from '@/components/iphone/Nav';
import Hero from '@/components/iphone/Hero';
import Footer from '@/components/iphone/Footer';

export default function IphonePage() {
  return (
    <>
      <Nav />

      <main style={{ paddingTop: '92px' }}>
        <Hero />
      </main>

      <Footer />
    </>
  );
}