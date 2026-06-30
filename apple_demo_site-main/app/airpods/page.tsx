import Nav from '@/components/airpods/Nav';
import Footer from '@/components/airpods/Footer';
import AirPodsHero from '@/components/airpods/AirpodsHero';
import ProductShowcase from '@/components/airpods/Productshowcase';
import CompareModels from '@/components/airpods/CompareModels';
import MeetAirPods from '@/components/airpods/MeetAirpods';

export default function AirPodsPage() {
  return (
    <>
      <Nav />

      <main style={{ paddingTop: '92px' }}>
        <AirPodsHero />
        <ProductShowcase />
        <CompareModels />
        <MeetAirPods />
      </main>

      <Footer />
    </>
  );
}