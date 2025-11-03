import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DashboardPortal from './components/DashboardPortal';
import BookingSection from './components/BookingSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Global subtle animated background layers */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 size-[40rem] rounded-full bg-gradient-to-br from-indigo-300/30 via-purple-300/20 to-pink-300/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 size-[40rem] rounded-full bg-gradient-to-tr from-sky-300/30 via-emerald-300/20 to-yellow-300/20 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <DashboardPortal />
        <BookingSection />
      </main>

      <footer className="relative border-t border-black/10 mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-black/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Velodent AI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-black">Services</a>
            <a href="#cases" className="hover:text-black">Case Studies</a>
            <a href="#testimonials" className="hover:text-black">Testimonials</a>
            <a href="#book" className="hover:text-black">Book</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
