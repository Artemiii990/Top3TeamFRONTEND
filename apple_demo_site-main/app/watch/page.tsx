import Nav from '@/components/watch/Nav';
import Footer from '@/components/watch/Footer';
import WatchNav from '@/components/watch/WatchNav';
import Hero from '@/components/watch/Hero';
import Lineup from '@/components/watch/Lineup';
import MeetWatch from '@/components/watch/MeetWatch';
import MadeToWorkTogether from '@/components/watch/Madetoworktogether';

export default function WatchPage() {
  return (
    <>
      <Nav />

      <main style={{ paddingTop: '92px' }}>
        <Hero />
        <Lineup />
        <MeetWatch />
        <MadeToWorkTogether />
        <WatchNav />
      </main>

      <Footer />
    </>
  );
}