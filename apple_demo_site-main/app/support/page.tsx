import Nav from '@/components/support/Nav';
import SupportHero from '@/components/support/SupportHero';
import SupportPromo from '@/components/support/SupportPromo';
import ServicePrograms from '@/components/support/ServicePrograms';
import SupportFooter from '@/components/support/SupportFooter';

export default function SupportPage() {
  return (
    <>
      <Nav />

      <main style={{ paddingTop: '92px' }}>
        <SupportHero />
        <SupportPromo />
        <ServicePrograms />
      </main>

      <SupportFooter />
    </>
  );
}