import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Spline 3D background (no negative z-index) */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for contrast, never blocking 3D interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-semibold tracking-tight"
        >
          Premium AI Systems — private, secure, and beautifully integrated
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
          className="mt-10 rounded-2xl border border-black/10 shadow-sm overflow-hidden bg-white/70 backdrop-blur"
        >
          <div className="relative w-full aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/Nw478YoO3og?si=0Pcoc1145T6JDndl"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
          className="mt-8 text-lg md:text-xl font-medium max-w-3xl mx-auto text-black/80"
        >
          We deploy enterprise-grade AI voice agents, automation, and analytics — meticulously crafted to your workflows, security posture, and brand.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
          className="mt-6 flex items-center justify-center gap-3"
        >
          <a
            href="https://cal.com/velodent-ogbkfv/20min"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-black text-white px-6 py-3 text-sm font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black"
          >
            Schedule a Call
          </a>
          <a href="#services" className="inline-flex items-center rounded-full border border-black px-6 py-3 text-sm font-semibold hover:bg-black hover:text-white">Explore Services</a>
        </motion.div>

        {/* Inline Services teaser for anchor and context */}
        <section id="services" className="mt-16 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {["AI Voice Agent", "Automation", "Analytics"].map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl border border-black/10 p-5 bg-white/70 backdrop-blur"
              >
                <h3 className="text-base font-semibold">{t}</h3>
                <p className="mt-1 text-sm text-black/70">Designed to integrate with your tools and deliver measurable outcomes.</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
