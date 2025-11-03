import React from 'react';

export default function Navbar() {
  const link = 'px-3 py-2 rounded-full transition-colors hover:bg-black hover:text-white';
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-black/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="text-xl font-semibold tracking-tight">Velodent AI</a>
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
          <a href="#home" className={link}>Home</a>
          <a href="#about" className={link}>About</a>
          <a href="#services" className={link}>Services</a>
          <a href="#cases" className={link}>Case Studies</a>
          <a href="#testimonials" className={link}>Testimonials</a>
          <a href="#book" className={`${link} bg-black text-white hover:bg-black/90`}>Book Now</a>
        </nav>
        <a href="#book" className="md:hidden inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-sm font-semibold">Book</a>
      </div>
    </header>
  );
}
