import React, { useState } from 'react';

const faqs = [
  {
    q: 'What is an AI receptionist?',
    a: 'A virtual assistant that answers calls, handles FAQs, books or reschedules appointments, and routes urgent cases — 24/7.'
  },
  {
    q: 'Will this replace my staff?',
    a: 'No. It removes repetitive tasks so your team can focus on patients in-chair and high-value conversations.'
  },
  {
    q: 'Is it secure and compliant?',
    a: 'Yes. We implement strong access controls, encrypted data flows, and HIPAA-aware practices.'
  },
  {
    q: 'How quickly can we go live?',
    a: 'Most clinics launch a pilot in 1–2 weeks depending on phone and calendar integrations.'
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Client FAQ</h2>
        <div className="divide-y divide-black/10 border border-black/10 rounded-2xl overflow-hidden">
          {faqs.map((item, idx) => (
            <div key={idx} className="p-6">
              <button
                onClick={() => setOpen(open === idx ? -1 : idx)}
                className="w-full flex items-center justify-between text-left"
                aria-expanded={open === idx}
              >
                <span className="text-lg font-bold">{item.q}</span>
                <span className="ml-4 text-black/60">{open === idx ? '−' : '+'}</span>
              </button>
              {open === idx && (
                <p className="mt-3 text-black/70">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
