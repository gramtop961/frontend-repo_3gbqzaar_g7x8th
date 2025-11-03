import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    quote: 'Their AI receptionist feels like part of our team. Patients love the experience.',
    name: 'Dr. Patel',
    title: 'Practice Owner',
    logo: 'https://dummyimage.com/120x40/000/fff&text=LOGO'
  },
  {
    quote: 'Automation freed our staff from repetitive tasks and improved our response times.',
    name: 'COO',
    title: 'Healthcare Network',
    logo: 'https://dummyimage.com/120x40/000/fff&text=LOGO'
  },
  {
    quote: 'Security and compliance are table stakes — they nailed both and more.',
    name: 'CISO',
    title: 'Enterprise Client',
    logo: 'https://dummyimage.com/120x40/000/fff&text=LOGO'
  }
];

export default function TestimonialsPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Testimonials</h1>
            <p className="mt-2 text-black/70 max-w-prose">What clients say about our partnership, outcomes, and support.</p>
          </div>
          <a href="/#book" className="inline-flex items-center rounded-full border border-black px-5 py-2.5 text-sm font-semibold hover:bg-black hover:text-white">Book a Demo</a>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-black/10 p-6 bg-white"
            >
              <img src={t.logo} alt="Client logo" className="h-6 mb-4 opacity-70" />
              <blockquote className="text-black/80">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-black/60">{t.name} — {t.title}</figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-xl font-semibold">Video Testimonials</h2>
          <ol className="mt-6 space-y-4 list-decimal list-inside">
            {['Nw478YoO3og', 'Nw478YoO3og'].map((id, i) => (
              <li key={id} className="rounded-2xl border border-black/10 bg-white overflow-hidden">
                <div className="relative w-full aspect-video">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${id}`}
                    title={`Testimonial ${i+1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 text-sm">
                  <p className="font-semibold">Client testimonial</p>
                  <p className="mt-1 text-black/70">Onboarding, outcomes, and partnership quality.</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
