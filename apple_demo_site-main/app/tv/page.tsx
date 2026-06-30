import Nav from '@/components/tv/Nav';
import Footer from '@/components/tv/Footer';
import Hero from '@/components/tv/Hero';
import Showcase from '@/components/tv/Showcase';
 
export default function TvPage() {
  return (
    <>
      <Nav />
 
      <main style={{ paddingTop: '92px' }}>
        <Hero />
        <Showcase />
      </main>
 
      <Footer />
    </>
  );
}