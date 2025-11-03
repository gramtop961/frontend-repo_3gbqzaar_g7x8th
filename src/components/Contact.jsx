import React from 'react';

export default function Contact() {
  React.useEffect(() => {
    // Inject Cal.com inline script
    const s = document.createElement('script');
    s.src = 'https://app.cal.com/embed/embed.js';
    s.async = true;
    s.onload = () => {
      // Initialize if available
      // @ts-ignore
      if (window.Cal) {
        // @ts-ignore
        window.Cal('ui', {
          theme: 'light',
          cssVarsPerTheme: { light: { 'cal-brand': '#000000' } },
        });
      }
    };
    document.body.appendChild(s);
    return () => {
      document.body.removeChild(s);
    };
  }, []);

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">Book a call</h3>
            <p className="mt-2 text-neutral-600">
              Pick a time that works. If the scheduler doesn’t load, use the email below.
            </p>

            <div
              id="my-cal-inline-20min"
              data-cal-link="flames/intro"
              data-cal-namespace="inline-cal"
              data-cal-config='{"layout":"month_view","theme":"light"}'
              className="mt-6 rounded-lg border border-neutral-200 p-2"
            />

            <div className="mt-4 text-sm">
              Or email us at{' '}
              <a className="underline" href="mailto:hello@flames.studio">hello@flames.studio</a>
            </div>
          </div>

          <div>
            <div className="rounded-lg overflow-hidden border border-neutral-200 aspect-video bg-neutral-50">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Intro Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
