import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative w-full">
      <div className="relative h-[80vh] w-full overflow-hidden bg-white">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/0a8b7c7e-fake-demo/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/70 via-white/60 to-white"></div>
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">Enterprise AI Solutions</h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              We design, deploy, and scale intelligent assistants and automation for your business.
            </p>
            <div className="flex items-center justify-center gap-3">
              <a href="#contact" className="px-5 py-2.5 rounded-md bg-black text-white text-sm font-medium hover:bg-gray-900 transition">Book a Demo</a>
              <a href="#services" className="px-5 py-2.5 rounded-md border border-gray-300 text-sm font-medium hover:bg-gray-50 transition">Our Services</a>
            </div>
          </div>
        </div>
        <div id="dashboard" className="absolute top-4 right-4 z-20 hidden md:block">
          <div className="w-[360px] rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="p-4 border-b border-gray-100">
              <p className="text-sm font-medium">Live Metrics</p>
            </div>
            <div className="p-4 grid grid-cols-3 gap-3">
              {[
                { label: 'Sessions', value: '12.4k' },
                { label: 'CSAT', value: '98%' },
                { label: 'SLA', value: '1.2m' },
              ].map((m) => (
                <div key={m.label} className="rounded-lg bg-gray-50 p-3">
                  <p className="text-[10px] text-gray-500">{m.label}</p>
                  <p className="text-sm font-semibold">{m.value}</p>
                </div>
              ))}
            </div>
            <div className="p-4 pt-0">
              <div className="h-20 w-full rounded-md bg-gradient-to-r from-gray-100 to-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
