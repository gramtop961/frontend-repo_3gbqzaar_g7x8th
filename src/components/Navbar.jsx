import React from 'react';

export default function Navbar() {
  const link = 'px-3 py-2 rounded-full transition-all hover:bg-black/5 hover:text-black/90';
  return (
    <header className="sticky top-0 z-40 bg-white/40 backdrop-blur-xl border-b border-black/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="text-xl font-semibold tracking-tight hover:opacity-80">Velodent AI</a>
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
          <a href="#home" className={link}>Home</a>
          <a href="#about" className={link}>About</a>
          <a href="#services" className={link}>Services</a>
          <a href="#dashboard" className={link}>Dashboard</a>
          <a href="#cases" className={link}>Case Studies</a>
          <a href="#testimonials" className={link}>Testimonials</a>
          <a href="#book" className={`${link} bg-black text-white hover:shadow-[0_0_0_2px_#000_inset]`}>Book Now</a>
        </nav>
        <a href="#book" className="md:hidden inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-sm font-semibold shadow-sm hover:opacity-90">Book</a>
      </div>
    </header>
  );
}
