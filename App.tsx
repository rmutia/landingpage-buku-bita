import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { BookPreview } from './components/BookPreview';
import { Benefits } from './components/Benefits';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <BookPreview />
        <Benefits />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;