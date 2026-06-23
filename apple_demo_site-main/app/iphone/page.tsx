import Nav from '@/components/Nav';
import Footer from '@/components/iphone/Footer';

export default function IphonePage() {
  return (
    <>
      <Nav />

      <main
        style={{
          minHeight: '100vh',
          paddingTop: '120px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>iPhone Page</h1>
      </main>

      <Footer />
    </>
  );
}