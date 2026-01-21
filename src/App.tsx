import './index.css';
import i18n from './i18n/config';
import { Suspense, useState } from 'react';
import { Header, Hero, Shows, Booking, Footer, FloatingParticles } from './components';

function App() {
  const [_language, setLanguage] = useState('en');

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <Suspense fallback={<div className="bg-neon-dark min-h-screen flex items-center justify-center text-neon-blue">Loading...</div>}>
      <div className="bg-neon-dark min-h-screen text-white overflow-hidden">
        <FloatingParticles />
        <Header onLanguageChange={handleLanguageChange} />
        <Hero />
        <Shows />
        <Booking />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
