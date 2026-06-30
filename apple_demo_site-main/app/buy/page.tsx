import Nav from '@/components/buy/Nav';
import Footer from '@/components/buy/Footer';
import BuyPage from '@/components/buy/Buypage';

export default function WhereToBuyPage() {
  return (
    <>
      <Nav />

      <main style={{ paddingTop: '92px' }}>
        <BuyPage />
      </main>

      <Footer />
    </>
  );
}