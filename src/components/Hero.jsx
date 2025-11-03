import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <span className="inline-block rounded-full bg-black text-white px-3 py-1 text-xs font-semibold">AI for Dental Clinics</span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Velodent: Automate your practice with intelligent assistants
          </h1>
          <p className="text-base md:text-lg text-black/70 max-w-prose">
            We build AI automations tailored for dental clinics — from AI receptionists that answer calls and book appointments to smart follow-ups, reminders, and front-desk workflows.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#services" className="inline-flex items-center rounded-full bg-black text-white px-5 py-3 text-sm font-semibold hover:opacity-90">Explore Services</a>
            <a href="#case-study" className="inline-flex items-center rounded-full border border-black px-5 py-3 text-sm font-semibold hover:bg-black hover:text-white">View Case Study</a>
          </div>
        </div>
        <div className="h-[360px] sm:h-[420px] md:h-[520px] lg:h-[560px] rounded-2xl border border-black/10 overflow-hidden">
          <Spline scene="https://prod.spline.design/M4yE7MTeWshitQbr/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}
