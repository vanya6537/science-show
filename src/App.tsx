import './index.css';
import { Suspense } from 'react';
import { Header, Hero, Shows, About, Booking, Footer, FloatingParticles } from './components';

function App() {
  const handleLanguageChange = (_lang: string) => {
    // i18n change handled inside Header; this is kept for API compatibility
  };

  return (
    <Suspense fallback={<div className="bg-neon-darker min-h-screen flex items-center justify-center text-white/70">Loading…</div>}>
      <div className="min-h-screen text-white overflow-hidden bg-neon-darker">
        <FloatingParticles />
        <Header onLanguageChange={handleLanguageChange} />
        <main>
          <Hero />
          <Shows />
          <About />
          <Booking />
        </main>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
