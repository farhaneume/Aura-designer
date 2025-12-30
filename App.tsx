
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <AIAssistant />
      </main>
      <Footer />
    </div>
  );
};

export default App;
