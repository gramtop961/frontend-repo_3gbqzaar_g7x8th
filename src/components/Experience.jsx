import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <div>
      <CaseStudies />
      <Testimonials />
      <BookNow />
    </div>
  );
}

function CaseStudies() {
  return (
    <section id="cases" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Case Studies</h2>
        <p className="mt-2 text-black/70 max-w-prose">Real results with measurable impact across operations and revenue.</p>

        <div className="mt-10 space-y-10">
          <Study
            client="Urban Smile Dental"
            result="42% faster call resolution, 18% more booked consults, 35% fewer no-shows"
            img="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600&auto=format&fit=crop"
          >
            Rolled out AI voice agent with calendar and telephony integration. Introduced smart waitlist and post-visit automations.
          </Study>
          <Study
            client="Coastal Health Network"
            result="24/7 intake, 22% shorter response times, higher CSAT"
            img="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1600&auto=format&fit=crop"
            reversed
          >
            Deployed HIPAA-aware routing, role-based access, and analytics dashboards for continuous optimization.
          </Study>
        </div>
      </div>
    </section>
  );
}

function Study({ client, result, img, children, reversed }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${reversed ? 'lg:[&>div:first-child]:order-2' : ''}`}
    >
      <div className="rounded-2xl overflow-hidden border border-black/10">
        <img src={img} alt={client} className="w-full h-full object-cover" />
      </div>
      <div>
        <p className="text-sm uppercase tracking-widest text-black/60">{client}</p>
        <h3 className="mt-2 text-2xl font-semibold">{result}</h3>
        <p className="mt-3 text-black/70 max-w-prose">{children}</p>
      </div>
    </motion.div>
  );
}

function Testimonials() {
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

  return (
    <section id="testimonials" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Testimonials</h2>
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
      </div>
    </section>
  );
}

function BookNow() {
  return (
    <section id="book" className="bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Private Demo / Strategy Call</h2>
        <p className="mt-2 text-black/70">Choose a time that works — or email us and we’ll coordinate a private session.</p>

        <div className="mt-8 rounded-2xl border border-black/10 overflow-hidden bg-white">
          <iframe
            title="Book a demo"
            src="https://calendly.com/your-company/demo"
            className="w-full h-[720px]"
          />
        </div>

        <div className="mt-6 flex items-center justify-center gap-4 text-sm">
          <a href="mailto:hello@velodent.ai" className="underline">hello@velodent.ai</a>
          <span className="text-black/30">•</span>
          <a href="#" className="underline">Live chat</a>
        </div>
      </div>
    </section>
  );
}
