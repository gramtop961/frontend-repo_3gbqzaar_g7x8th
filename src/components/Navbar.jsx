import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const link = 'px-3 py-2 rounded-full transition-all hover:bg-black/5 hover:text-black/90';
  const active = ({ isActive }) => isActive ? `${link} text-black bg-black/5` : link;
  return (
    <header className="sticky top-0 z-40 bg-white/40 backdrop-blur-xl border-b border-black/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <NavLink to="/" className="text-xl font-semibold tracking-tight hover:opacity-80">Velodent AI</NavLink>
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
          <NavLink to="/" className={active}>Home</NavLink>
          <a href="/#about" className={link}>About</a>
          <NavLink to="/services" className={active}>Services</NavLink>
          <a href="/#dashboard" className={link}>Dashboard</a>
          <NavLink to="/cases" className={active}>Case Studies</NavLink>
          <NavLink to="/testimonials" className={active}>Testimonials</NavLink>
          <a href="/#book" className={`${link} bg-black text-white hover:shadow-[0_0_0_2px_#000_inset]`}>Book Now</a>
        </nav>
        <a href="/#book" className="md:hidden inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-sm font-semibold shadow-sm hover:opacity-90">Book</a>
      </div>
    </header>
  );
}
