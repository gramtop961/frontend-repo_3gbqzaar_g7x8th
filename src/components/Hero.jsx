import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Spline background aura */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[1200px] max-w-none aspect-square opacity-80">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
      {/* Subtle gradient overlay to improve contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-semibold tracking-tight"
        >
          Enterprise AI, designed for trust and performance
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
          className="mt-4 text-base md:text-lg text-black/70 max-w-2xl mx-auto"
        >
          We architect secure AI voice and automation systems that integrate with your stack, streamline operations, and elevate customer experience.
        </motion.p>

        {/* Founder video */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
          className="mt-10 rounded-2xl border border-black/10 shadow-sm overflow-hidden bg-white/60 backdrop-blur"
        >
          <video
            className="w-full h-auto"
            controls
            playsInline
            poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
          >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6, ease: 'easeOut' }}
          className="mt-8 text-lg md:text-xl font-medium"
        >
          We build private, compliant AI copilots that automate calls, scheduling, and follow-ups — without sacrificing brand voice.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6, ease: 'easeOut' }}
          className="mt-6 flex items-center justify-center gap-3"
        >
          <a href="#book" className="inline-flex items-center rounded-full bg-black text-white px-6 py-3 text-sm font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black">Book a Demo</a>
          <a href="#services" className="inline-flex items-center rounded-full border border-black px-6 py-3 text-sm font-semibold hover:bg-black hover:text-white">Explore Services</a>
        </motion.div>
      </div>
    </section>
  );
}
