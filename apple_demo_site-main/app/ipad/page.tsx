import Nav from '@/components/ipad/Nav';
import Footer from '@/components/ipad/Footer';
import Hero from '@/components/ipad/Hero';
import Lineup from '@/components/ipad/Lineup';
import MeetIpad from '@/components/ipad/Meetipad';
import Essentials from '@/components/ipad/Essentials';
import FamilyTies from '@/components/ipad/FamilyTies';
import IPadNav from '@/components/ipad/IpadNav';

export default function IpadPage() {
  return (
    <>
      <Nav />

      <main style={{ paddingTop: '92px' }}>
        <Hero />
        <Lineup />
        <MeetIpad />
        <Essentials />
        <FamilyTies />
        <IPadNav />
      </main>

      <Footer />
    </>
  );
}