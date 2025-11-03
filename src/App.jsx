import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Sections from './components/Sections.jsx';
import FAQ from './components/FAQ.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main>
        <Hero />
        <Sections />
        <FAQ />
      </main>
      <footer className="border-t border-black/10 py-8 text-center text-sm">
        <p>© {new Date().getFullYear()} Velodent — AI Automation for Dental Clinics</p>
      </footer>
    </div>
  );
}
