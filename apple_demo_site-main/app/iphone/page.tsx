import Nav from '@/components/iphone/Nav';
import Hero from '@/components/iphone/Hero';
import Footer from '@/components/iphone/Footer';
import Lineup from '@/components/iphone/Lineup';
import MeetIphone from '@/components/iphone/MeetIphone';

export default function IphonePage() {
  return (
    <>
      <Nav />

      <main style={{ paddingTop: '92px' }}>
        <Hero />
        <Lineup />
        <MeetIphone />
      </main>

      <Footer />
    </>
  );
}