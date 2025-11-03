import React, { useEffect, useRef } from 'react';

export default function Contact() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Ensure any iframe within remains responsive
    const node = containerRef.current;
    if (!node) return;
    const iframes = node.querySelectorAll('iframe');
    iframes.forEach((f) => {
      f.setAttribute('loading', 'lazy');
      f.setAttribute('referrerPolicy', 'no-referrer-when-downgrade');
      f.style.width = '100%';
    });
  }, []);

  return (
    <section id="contact" className="w-full py-16 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black">Contact / Book Now</h2>
            <p className="mt-2 text-gray-600">Pick a time that works for you or send us a note.</p>
          </div>
          <a href="#home" className="text-sm text-gray-600 hover:text-black">Back to top ↑</a>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="aspect-video rounded-md overflow-hidden bg-gray-50">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Intro Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <p className="mt-3 text-sm text-gray-600">A quick overview of how we work and what to expect.</p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="h-[600px] w-full rounded-md overflow-hidden bg-gray-50">
              <iframe
                src="https://cal.com/embed?s=1&username=flames&layout=month_view"
                title="Book a time"
                className="w-full h-full"
              />
            </div>
            <p className="mt-3 text-sm text-gray-600">Prefer email? Reach us at <a href="mailto:hello@example.com" className="underline hover:no-underline">hello@example.com</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
