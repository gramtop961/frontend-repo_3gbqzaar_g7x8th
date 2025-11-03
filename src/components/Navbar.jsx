import React from 'react';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const links = [
    { href: '#dashboard', label: 'Dashboard' },
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Process' },
    { href: '#faq', label: 'FAQ' },
    { href: '#philosophy', label: 'Philosophy' },
    { href: '#cases', label: 'Case Studies' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#dashboard" className="font-semibold tracking-tight">Flames Studio</a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-neutral-700 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-neutral-200"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu size={18} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-neutral-200">
          <div className="mx-auto max-w-6xl px-4 py-3 grid grid-cols-2 gap-3 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
