import React from 'react';

export default function Sections() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <Services />
      <Process />
      <FAQ />
      <Philosophy />
      <CaseStudies />
      <Testimonials />
    </div>
  );
}

function SectionHeader({ title, subtitle, id }) {
  return (
    <div id={id} className="pt-20">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-neutral-600 max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}

function Card({ children }) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white shadow-sm p-5">
      {children}
    </div>
  );
}

function Services() {
  const items = [
    {
      title: 'Product Strategy',
      desc: 'Define goals, audiences, and success metrics to focus your roadmap.',
    },
    {
      title: 'UX/UI Design',
      desc: 'Design systems and interfaces that are beautiful and usable.',
    },
    {
      title: 'Prototyping',
      desc: 'Validate ideas quickly with interactive prototypes and testing.',
    },
    {
      title: 'Frontend Engineering',
      desc: 'Ship fast with modern, performant web technologies.',
    },
  ];
  return (
    <section aria-label="Services">
      <SectionHeader
        id="services"
        title="Services"
        subtitle="Full-stack product design and development to accelerate your roadmap."
      />
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <Card key={it.title}>
            <div className="font-semibold">{it.title}</div>
            <p className="mt-2 text-sm text-neutral-600">{it.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: 1, t: 'Discover', d: 'Audit, research, and align on goals.' },
    { n: 2, t: 'Define', d: 'Scope, success metrics, and roadmap.' },
    { n: 3, t: 'Design', d: 'Wireframes, visual design, and prototypes.' },
    { n: 4, t: 'Deliver', d: 'Implementation, QA, and iteration.' },
  ];
  return (
    <section aria-label="Process">
      <SectionHeader id="process" title="Our Process" />
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {steps.map((s) => (
          <Card key={s.n}>
            <div className="text-sm text-neutral-500">Step {s.n}</div>
            <div className="mt-1 font-semibold">{s.t}</div>
            <p className="mt-2 text-sm text-neutral-600">{s.d}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = React.useState(0);
  const qs = [
    {
      q: 'How fast can we start?',
      a: 'We usually kick off within 1–2 weeks after alignment.',
    },
    {
      q: 'Do you work with startups or enterprises?',
      a: 'Both. We adapt process and artifacts to your team size and needs.',
    },
    { q: 'What does success look like?', a: 'Clear metrics, shipped work, and happier users.' },
  ];
  return (
    <section aria-label="FAQ">
      <SectionHeader id="faq" title="Client FAQ" />
      <div className="mt-6 space-y-3">
        {qs.map((item, idx) => (
          <div key={idx} className="rounded-lg border border-neutral-200 bg-white">
            <button
              type="button"
              className="w-full text-left p-4 flex items-center justify-between"
              onClick={() => setOpen(open === idx ? -1 : idx)}
            >
              <span className="font-medium">{item.q}</span>
              <span className="text-neutral-500">{open === idx ? '−' : '+'}</span>
            </button>
            {open === idx && (
              <div className="px-4 pb-4 text-sm text-neutral-600">{item.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Philosophy() {
  const items = [
    { t: 'User-first', d: 'Empathy and evidence drive our decisions.' },
    { t: 'Clarity', d: 'Simple beats clever. Communicate, don’t decorate.' },
    { t: 'Momentum', d: 'Ship, learn, iterate. Results compound over time.' },
  ];
  return (
    <section aria-label="Philosophy">
      <SectionHeader id="philosophy" title="Our Philosophy" />
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {items.map((it) => (
          <Card key={it.t}>
            <div className="font-semibold">{it.t}</div>
            <p className="mt-2 text-sm text-neutral-600">{it.d}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

function CaseStudies() {
  const cases = [
    { t: 'SaaS Onboarding', d: 'Cut time-to-value by 42% with a guided checklist.' },
    { t: 'E‑commerce Checkout', d: 'Boosted conversion 18% by simplifying steps.' },
    { t: 'B2B Dashboard', d: 'Surfaced insights and reduced churn by 9%.' },
  ];
  return (
    <section aria-label="Case Studies">
      <SectionHeader id="cases" title="Case Studies" />
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {cases.map((c) => (
          <Card key={c.t}>
            <div className="font-semibold">{c.t}</div>
            <p className="mt-2 text-sm text-neutral-600">{c.d}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const ts = [
    { n: 'Ava R.', q: 'They delivered faster than any team we’ve worked with.' },
    { n: 'Noah S.', q: 'Elegant design with measurable impact on our KPIs.' },
    { n: 'Mia K.', q: 'Thoughtful partners who really listened to users.' },
  ];
  return (
    <section aria-label="Testimonials">
      <SectionHeader id="testimonials" title="Testimonials" />
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {ts.map((t) => (
          <div key={t.n} className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
            <p className="text-neutral-800">“{t.q}”</p>
            <div className="mt-3 text-sm text-neutral-600">— {t.n}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
