import React from 'react';
import { motion } from 'framer-motion';

const studies = [
  {
    client: 'Urban Smile Dental',
    result: '42% faster call resolution, 18% more booked consults, 35% fewer no-shows',
    img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600&auto=format&fit=crop',
    desc: 'Rolled out AI voice agent with calendar and telephony integration. Introduced smart waitlist and post-visit automations.'
  },
  {
    client: 'Coastal Health Network',
    result: '24/7 intake, 22% shorter response times, higher CSAT',
    img: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1600&auto=format&fit=crop',
    desc: 'Deployed HIPAA-aware routing, role-based access, and analytics dashboards for continuous optimization.'
  }
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Case Studies</h1>
            <p className="mt-2 text-black/70 max-w-prose">Real results with measurable impact across operations and revenue.</p>
          </div>
          <a href="/#book" className="inline-flex items-center rounded-full border border-black px-5 py-2.5 text-sm font-semibold hover:bg-black hover:text-white">Book a Demo</a>
        </div>

        <div className="mt-10 space-y-12">
          {studies.map((s, i) => (
            <Study key={s.client} {...s} reversed={i % 2 === 1} />)
          )}
        </div>

        <div className="mt-16">
          <h2 className="text-xl font-semibold">Short Video Highlights</h2>
          <div className="mt-4 overflow-x-auto [-webkit-overflow-scrolling:touch]">
            <div className="flex gap-4 min-w-max">
              {['Nw478YoO3og','Nw478YoO3og','Nw478YoO3og'].map((id) => (
                <div key={id} className="w-[320px] flex-none rounded-2xl border border-black/10 bg-white overflow-hidden">
                  <div className="relative w-full aspect-[16/9] bg-black">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${id}`}
                      title="Case study video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4 text-sm">
                    <p className="font-semibold">Outcome highlight</p>
                    <p className="mt-1 text-black/70">Conversion lift, wait-time drop, and quality increases.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Study({ client, result, img, desc, reversed }) {
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
        <p className="mt-3 text-black/70 max-w-prose">{desc}</p>
      </div>
    </motion.div>
  );
}
