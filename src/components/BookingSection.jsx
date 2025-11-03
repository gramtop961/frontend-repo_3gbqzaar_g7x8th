import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BookingSection() {
  useEffect(() => {
    // Load Cal embed script once
    if (!window.Cal) {
      const script = document.createElement('script');
      script.src = 'https://app.cal.com/embed/embed.js';
      script.async = true;
      script.onload = () => initCal();
      document.head.appendChild(script);
    } else {
      initCal();
    }

    function initCal() {
      // Initialize Cal namespace and inline embed
      // eslint-disable-next-line no-undef
      Cal('init', '20min', { origin: 'https://app.cal.com' });
      // eslint-disable-next-line no-undef
      Cal.ns['20min']('inline', {
        elementOrSelector: '#my-cal-inline-20min',
        config: { layout: 'month_view' },
        calLink: 'velodent-ogbkfv/20min',
      });
      // eslint-disable-next-line no-undef
      Cal.ns['20min']('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    }
  }, []);

  return (
    <section id="book" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Book a Call</h2>
          <p className="mt-2 text-black/70">Pick a time that works for you — well send a calendar invite and confirmation instantly.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-3xl border border-black/10 bg-white/60 backdrop-blur-xl shadow-sm overflow-hidden"
        >
          <div className="relative">
            <div id="my-cal-inline-20min" style={{ width: '100%', height: '800px', overflow: 'auto' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
