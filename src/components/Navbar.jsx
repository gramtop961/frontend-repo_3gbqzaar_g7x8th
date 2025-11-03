import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-extrabold tracking-tight text-xl">Velodent</a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#process" className="hover:underline">Process</a>
          <a href="#case-study" className="hover:underline">Case Study</a>
          <a href="#faq" className="hover:underline">FAQ</a>
        </nav>
        <a
          href="#dashboard"
          className="inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-sm font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black"
        >
          Dashboard
        </a>
      </div>
    </header>
  );
}
