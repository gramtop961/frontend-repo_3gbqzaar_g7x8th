import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Experience from './components/Experience.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black font-inter">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Experience />
      </main>
      <footer className="border-t border-black/10 py-10 text-center text-sm">
        <p className="opacity-70">© {new Date().getFullYear()} Velodent — Enterprise AI Solutions</p>
      </footer>
    </div>
  );
}
