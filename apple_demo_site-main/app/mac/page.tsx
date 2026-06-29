import Nav from '@/components/mac/Nav';
import Hero from '@/components/mac/Hero';
import Footer from '@/components/mac/Footer';
import Lineup from '@/components/mac/Lineup';
import MeetMac from '@/components/mac/MeetMac';
import Essentials from '@/components/mac/Essentials';
import FamilyTies from '@/components/mac/FamilyTies';
import MacNav from '@/components/mac/MacNav';

export default function MacPage() {
  return (
    <>
      <Nav /> 

      <main style={{ paddingTop: '92px' }}>
        <Hero />
        <Lineup />
        <MeetMac />
        <Essentials />
        <FamilyTies />
        <MacNav />
      </main>

      <Footer />
    </>
  );
}