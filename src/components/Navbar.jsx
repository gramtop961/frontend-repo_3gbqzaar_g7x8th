import React from 'react';

const NavItem = ({ href, label }) => (
  <a
    href={href}
    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-100 rounded-md transition"
  >
    {label}
  </a>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight">AI Studio</a>
        <nav className="flex items-center gap-1">
          <NavItem href="#dashboard" label="Dashboard" />
          <NavItem href="#services" label="Services" />
          <NavItem href="#process" label="Process" />
          <NavItem href="#faq" label="FAQ" />
          <NavItem href="#philosophy" label="Philosophy" />
          <NavItem href="#cases" label="Case Studies" />
          <NavItem href="#testimonials" label="Testimonials" />
          <NavItem href="#contact" label="Book Now" />
        </nav>
      </div>
    </header>
  );
}
